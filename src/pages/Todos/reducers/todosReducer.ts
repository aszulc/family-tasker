import { Todo } from '@/pages/Todos/types';

export enum Action {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
}

export type AddAction = {
  type: Action.ADD_TODO;
  payload: { description: string };
};

export type DeleteOrEditAction = {
  type: Action.TOGGLE_TODO | Action.DELETE_TODO;
  payload: { id: number };
};

export type TodosAction = AddAction | DeleteOrEditAction;

function todosReducer(todos: Todo[], action: TodosAction) {
  switch (action.type) {
    case Action.ADD_TODO:
      return [
        ...todos,
        { id: Date.now(), description: action.payload.description, completed: false },
      ];
    case Action.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) return { ...todo, completed: !todo.completed };
        return todo;
      });
    case Action.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

export default todosReducer;
