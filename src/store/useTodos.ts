import { computed, reactive } from "vue";
import { type Todo, TodoStatus } from "@/types/todo-types";

interface TodoStore {
  [TodoStatus.Pending]: Array<Todo>;
  [TodoStatus.InProgress]: Array<Todo>;
  [TodoStatus.Completed]: Array<Todo>;
}
const state: TodoStore = {
  [TodoStatus.Pending]: [{
    id: 1,
    title: 'Finish Typescript Todo List',
    description: 'Create a Kanban style board',
    status: TodoStatus.Pending
  }],
  [TodoStatus.InProgress]: [],
  [TodoStatus.Completed]: [],
}

const todoStore = reactive<TodoStore>(state)

export default () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => computed(() => todoStore[todoStatus]);
  const addNewTodo = (todo: Todo) => todoStore[todo.status].push(todo);
  const deleteTodo = (todoDelete: Todo) => todoStore[todoDelete.status] = todoStore[todoDelete.status].filter((todo: Todo): boolean => todo.id !== todoDelete.id);
  const updateTodo = (todo: Todo, newStatus: TodoStatus) => todo.status = newStatus;

  return {
    getTodosByStatus,
    addNewTodo,
    deleteTodo,
    updateTodo
  }
}
