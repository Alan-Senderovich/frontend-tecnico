import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export async function getTodos() {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export async function createTodo(todo) {
  const { data, error } = await supabase.from("todos").insert([todo]);
  if (error) {
    console.error(error);
    return null;
  }
  // @ts-ignore
  return data[0];
}

export async function updateTodo(todo) {
  const { data, error } = await supabase
    .from("todos")
    .update(todo)
    .match({ id: todo.id });
  if (error) {
    console.error(error);
    return null;
  }
  // @ts-ignore
  return data[0];
}

export async function deleteTodo(id) {
  const { error } = await supabase.from("todos").delete().match({ id });
  if (error) {
    console.error(error);
    return false;
  }
  return true;
}
