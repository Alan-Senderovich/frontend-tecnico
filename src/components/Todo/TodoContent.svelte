<script>
  // Input props
  export let status; // Status of the todo ("completed" or "pending")
  export let title; // Title of the todo
  
  // Importing required constants
  import { COMPLETED } from "../../constants/index.js";
</script>

<div>
  {#if status === COMPLETED}
    <!-- Render a completed todo -->
    <p class="todo-completed">
      <del>{title}</del>
    </p>
  {:else}
    <!-- Render a pending todo -->
    {title}
  {/if}
</div>

<style>
  /* Styling for completed todos */
  .todo-completed {
    color: gray;
    margin: 0;
  }
</style>
