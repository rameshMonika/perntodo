
import { Fragment } from 'react';
import './App.css';

import InputTodo from './components/InputoDo';

import ListTodos from './components/ListTodos'




function App() {
  return (
    <Fragment>
     <div className='container'>
     <InputTodo/>
     <ListTodos/>


     </div>

    
    </Fragment>
  );
}

export default App;
