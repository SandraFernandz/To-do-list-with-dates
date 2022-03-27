import React from 'react';
import { ITask } from '../interfaces';

interface Props {
  task: ITask;
}

function TodoTask({ task }: Props) {
  return (
    <>
      <div className="task">
        <div className="content">
          <span>{task.taskName}</span>
          <span> {task.deadline}</span>
        </div>
        <button className="subButton">x</button>
      </div>
    </>
  );
}

export default TodoTask;
