import React, { ChangeEvent, useState } from 'react';
import { FC } from 'react';
import './App.css';
import { ITask } from './interfaces';
import TodoTask from './Components/TodoList';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [list, setList] = useState<ITask[]>([]);

  const handleTask = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const handleList = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    //we are with spread operator collecting the array list and adding a new element(newTask) to that array
    setList([...list, newTask]);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setList(
      list.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <span className="title">My to do list</span>
      <header className="header">
        <div className="inputContainer">
          <input
            className="input"
            type="text"
            placeholder="task..."
            name="task"
            onChange={handleTask}
            value={task}
          />
          <input
            type="number"
            placeholder="deadline (in days)"
            name="days"
            onChange={handleTask}
            value={deadline}
          />
        </div>
        <button className="button" onClick={handleList}>
          add
        </button>
      </header>

      <div className="todoList">
        {list.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
