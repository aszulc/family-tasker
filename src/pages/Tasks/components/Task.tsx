import { Dispatch } from 'react';

import { Action, DeleteOrEditAction } from '../reducers/tasksReducer';
import { Task as TaskType } from '../types';

type Props = {
  data: TaskType;
  dispatch: Dispatch<DeleteOrEditAction>;
};

export default function Task({ data, dispatch }: Props) {
  return (
    <div>
      <span style={{ color: data.completed ? '#03461b' : '#7a0707' }}>{data.description}</span>
      <button onClick={() => dispatch({ type: Action.TOGGLE_TASK, payload: { id: data.id } })}>
        TOGGLE
      </button>
      <button onClick={() => dispatch({ type: Action.DELETE_TASK, payload: { id: data.id } })}>
        DELETE
      </button>
    </div>
  );
}
