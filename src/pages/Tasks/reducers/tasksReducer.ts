import { Task } from '@/pages/Tasks/types';

export enum Action {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
}

export type AddAction = {
  type: Action.ADD_TASK;
  payload: { description: string };
};

export type DeleteOrEditAction = {
  type: Action.TOGGLE_TASK | Action.DELETE_TASK;
  payload: { id: number };
};

export type TasksAction = AddAction | DeleteOrEditAction;

function tasksReducer(tasks: Task[], action: TasksAction) {
  switch (action.type) {
    case Action.ADD_TASK:
      return [
        ...tasks,
        { id: Date.now(), description: action.payload.description, completed: false },
      ];
    case Action.TOGGLE_TASK:
      return tasks.map((task) => {
        if (task.id === action.payload.id) return { ...task, completed: !task.completed };
        return task;
      });
    case Action.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.payload.id);
    default:
      return tasks;
  }
}

export default tasksReducer;
