import React from 'react'
import './TodoStyle.css';
import TodoTask from './TodoTask';

const TodoList = props => {

    if (props.todos.length === 0) {
        return (
          <div>
              <h2>Create a new task!</h2>
          </div>
        );
      }

  return (
    <div>
        {props.todos.map(task => {
            return(
            <TodoTask 
            key={task.id}
            id={task.id}
            text={task.text}
            start={task.start}
            end={task.end}
            priority={task.priority}
            />
            );
        })}
    </div>
  );
};

export default TodoList;