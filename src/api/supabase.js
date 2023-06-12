import { createClient } from "@supabase/supabase-js";

// Create the Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

/**
 * Get all todos
 * @returns {Promise<Array>}
 */
export async function getTodos() {
  try {
    const { data, error } = await supabase.from("todos").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

/**
 * Create a new todo
 * @param {Object} todo - The todo to create
 * @returns {Promise<Object|null>}
 */
export async function createTodo(todo) {
  try {
    const { data, error } = await supabase.from("todos").insert([todo]);
    if (error) {
      throw new Error(error.message);
    }
    return data ? data[0] : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Update an existing todo
 * @param {Object} todo - The todo to update
 * @returns {Promise<Object|null>}
 */
export async function updateTodo(todo) {
  try {
    const { data, error } = await supabase
      .from("todos")
      .update(todo)
      .match({ id: todo.id });
    if (error) {
      throw new Error(error.message);
    }
    return data ? data[0] : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Delete a todo by its ID
 * @param {string} id - The ID of the todo to delete
 * @returns {Promise<boolean>}
 */
export async function deleteTodo(id) {
  try {
    const { error } = await supabase.from("todos").delete().match({ id });
    if (error) {
      throw new Error(error.message);
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
