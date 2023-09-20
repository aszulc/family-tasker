import { Dispatch } from 'react';

import { Action, DeleteOrEditAction } from '../reducers/todosReducer';
import { Todo as TodoType } from '../types';

type Props = {
  data: TodoType;
  dispatch: Dispatch<DeleteOrEditAction>;
};

export default function Todo({ data, dispatch }: Props) {
  return (
    <div>
      <span style={{ color: data.completed ? '#03461b' : '#7a0707' }}>{data.description}</span>
      <button onClick={() => dispatch({ type: Action.TOGGLE_TODO, payload: { id: data.id } })}>
        TOGGLE
      </button>
      <button onClick={() => dispatch({ type: Action.DELETE_TODO, payload: { id: data.id } })}>
        DELETE
      </button>
    </div>
  );
}
