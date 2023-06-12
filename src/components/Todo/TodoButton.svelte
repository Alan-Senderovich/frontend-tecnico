<script>
  // Exported props
  export let type;
  export let index;
  export let toggleComplete;
  export let removeTodo;
  export let status;

  // Importing required constants
  import { COMPLETED, CHECK } from "../../constants/index.js";
</script>

{#if type === CHECK && typeof toggleComplete === "function"}
  <!-- Check button for marking a todo as complete -->
  <button on:click={() => toggleComplete(index)} class="btn check">
    <span>✓</span>
  </button>
{:else}
  <!-- Delete button for removing a todo -->
  <button on:click={() => removeTodo(index)} class="btn delete">
    {#if status === COMPLETED}
      <!-- Strike-through the delete button if todo is completed -->
      <del>X</del>
    {:else}
      X
    {/if}
  </button>
{/if}

<style>
  /* Common button styles */
  .btn {
    background: transparent;
    border: none;
  }

  /* Remove focus outline */
  .btn:focus {
    outline: none;
  }

  /* Check button styles */
  .check {
    color: #23bf57;
  }

  .check:hover {
    color: #1a8c40;
  }

  /* Delete button styles */
  .delete {
    color: #e3424f;
    padding-left: 5px;
  }

  .delete:hover {
    color: #b63540;
  }
</style>
