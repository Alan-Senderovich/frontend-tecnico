<script>
  import { onMount } from "svelte";

  // Importing required database methods
  import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  } from "../../api/supabase";

  // Importing required constants
  import {
    COMPLETED,
    PENDING,
    INPUT_PLACEHOLDER,
    FAILED_TO_FETCH_QUOTE,
    REMOVE,
  } from "../../constants/index.js";

  // Importing required components and icons
  import TodoButton from "./TodoButton.svelte";
  import TodoContent from "./TodoContent.svelte";

  let todos = [];
  let todosQuantity;
  let completedTodosQuantity = 0;
  let newTodo = "";
  let quote = "";
  let author = "";

  // Fetch the list of todos on component mount
  async function fetchTodos() {
    todos = await getTodos();
    todos.sort((a, b) =>
      (a.id?.toString() ?? "").localeCompare(b.id?.toString() ?? "")
    );
    todosQuantity = todos.length;
    completedTodosQuantity = todos.filter(
      (todo) => todo.status === COMPLETED
    ).length;
  }

  // Add a new todo
  async function addTodo() {
    if (newTodo.trim() !== "") {
      const todo = { title: newTodo };
      await createTodo(todo);
      await fetchTodos();
      newTodo = "";
    }
  }

  /**
   * Toggle the completion status of a todo
   * @param {string | number} index - The index of the todo in the array
   */
  async function toggleComplete(index) {
    const todo = todos[index];
    todo.status = COMPLETED;
    await updateTodo(todo);
    todos = [...todos];
    completedTodosQuantity = todos.filter(
      (todo) => todo.status === COMPLETED
    ).length;
  }

  /**
   * Remove a todo
   * @param {string | number} index - The index of the todo in the array
   */
  async function removeTodo(index) {
    const { id } = todos[index];
    await deleteTodo(id);
    await fetchTodos();
  }

  // Fetch a random quote on component mount
  async function fetchQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (response.ok) {
        const { content, author: newAuthor } = await response.json();
        quote = content;
        author = newAuthor;
      } else {
        quote = FAILED_TO_FETCH_QUOTE;
      }
    } catch (error) {
      quote = FAILED_TO_FETCH_QUOTE;
      console.error("Error fetching quote:", error);
    }
  }

  // Execute the fetchTodos and fetchQuote functions on component mount
  onMount(fetchQuote);
  onMount(fetchTodos);
</script>

<div class="task-container">
  <h2 class="task-title">TaskMaster</h2>
  <div class="input-wrapper">
    <input
      type="text"
      bind:value={newTodo}
      placeholder={INPUT_PLACEHOLDER}
      class="task-input"
    />
    <button on:click={addTodo} class="add-button">Add</button>
  </div>

  <ul class="task-list">
    {#each todos as todo, index (todo.id)}
      <li class="task-item">
        <TodoContent status={todo.status} title={todo.title} />
        <div>
          {#if todo.status === PENDING}
            <TodoButton
              type="check"
              status={todo.status}
              {index}
              {toggleComplete}
              {removeTodo}
            />
          {/if}

          <TodoButton
            type={REMOVE}
            status={todo.status}
            {index}
            {removeTodo}
            {toggleComplete}
          />
        </div>
      </li>
    {/each}
  </ul>

  <div class="task-quantities">
    <p>
      <span class="task-quantity">{` Total Todos: ${todosQuantity}`}</span>
      <span class="task-quantity"
        >{` | Completed Todos:  ${completedTodosQuantity}`}</span
      >
    </p>
  </div>
  <p>
    <span class="quote">"{quote}"</span>
    <span class="quote-author">- {author}</span>
  </p>
</div>

<style>
  .task-container {
    background-color: #1f2937;
    border-radius: 2%;
    padding: 1.5rem;
  }

  .task-title {
    margin: 0 0 1.5rem;
    text-align: start;
  }

  .input-wrapper {
    display: flex;
    margin-bottom: 1.3rem;
    width: 100%;
  }

  .task-input {
    background-color: #374151;
    border: 2px solid #9ca3af;
    border-radius: 5px 0 0 5px;
    color: white;
    flex: 1;
    font-size: 0.95rem;
    padding: 0.7rem;
  }

  .task-input:focus-visible {
    outline: none;
  }

  .task-input::placeholder {
    color: #adb5bd;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .add-button {
    background-color: #3b82f6;
    border-radius: 0 8px 8px 0;
    padding: 0 1.5rem;
  }

  .add-button:hover {
    background-color: #2563eb;
  }

  .task-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .task-item {
    align-items: center;
    background-color: #374151;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 1rem 1rem;
  }

  .task-quantities {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 1rem;
  }

  .quote {
    font-style: italic;
  }
</style>
