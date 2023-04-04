export enum TodoStatus {
  Pending = 'pending',
  InProgress = 'inProgress',
  Completed = 'completed'
}
export type TestStatus = keyof typeof TodoStatus;
export type TodoStatusType = 'Pending' | 'In Progress' | 'Completed';
export type GroupLabelRecord = Record<TodoStatus, TodoStatusType>;
export interface Todo {
  id: number,
  title: string,
  description: string,
  status: TodoStatus
}
export type NewTodoCreateType = Omit<Todo, 'id'>;
