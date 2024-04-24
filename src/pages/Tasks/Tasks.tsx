import { useCallback, useReducer, useState } from 'react';

import { initialTasks } from '@/data/initialTasks';

import Task from './components/Task';
import tasksReducer, { Action } from './reducers/tasksReducer';

function Tasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(
    function () {
      dispatch({ type: Action.ADD_TASK, payload: { description } });
    },
    [description],
  );

  return (
    <>
      <div>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleSubmit}>ADD</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} data={task} dispatch={dispatch} />
      ))}
    </>
  );
}

export default Tasks;
