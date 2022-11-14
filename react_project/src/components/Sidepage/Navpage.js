import React from 'react'
import {Routes, Route} from "react-router-dom"
import Calendar from './Calendar';
import TaskList from './TaskList';
import Timer from './Timer';
import Home from './Home';
import TodoComponent from './todo/TodoComponent';
import { TodosContextProvider } from './Todo-Context/todo-context.js'
import TimerFeature from './Components/TimerFeature/TimerFeature';




{/*This route take you to the content of the side bar menu
  if you click home, it take you to home content
*/}
function Navpage() {
  return (
    <React.Fragment>
        <section>
            <Routes>
              <Route path="/home" element={<TodoComponent />} />
              <Route path="/tasklist" element={<TimerFeature />} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/timer" element={<Timer/>} />
            </Routes>
        </section>
    </React.Fragment>
  );
}

export default Navpage