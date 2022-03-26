import React from 'react';
import { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
   <header className='header'>
     <div className='inputContainer'>
     <input type="text" placeholder='task...' />
     <input type="number" placeholder='deadline (in days)' />
     </div>
     <button>Add Task</button>
   </header>
   <div className='todoList'></div>
    </div>
  );
}

export default App;
