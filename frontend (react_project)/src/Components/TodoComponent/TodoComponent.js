import React from 'react'
import { useContext, useState, useEffect } from 'react'
import TodoHeader from './TodoItem/TodoHeader';
import TodoList from './TodoList/TodoList';
import BackDrop from './modals/BackDrop';
import TodosContext from './Todo-Context/todo-context'
import AddModal from './modals/AddModal'
import todoPic from './Style/todo-pic.png'

const TodoComponent = () => {
    
    const todoList = useContext(TodosContext);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        todoList.getTodo();
    }, []);

    function todoListHandler(props) {
        setModalOpen(true);
    }

    const confirmAdd = props => { 
        todoList.addTodo(props);
        setModalOpen(false);
        console.log(props);
    }

    const closeModal = props => {
        setModalOpen(false);
    }

    return (
            <div>
                <TodoHeader />
                <div className='grid-container-tasks-button'>
                    <button className='add-button' type='submit' onClick={todoListHandler}>Add task</button>
                </div>
                { modalOpen && <AddModal onCancel={closeModal} onConfirm={confirmAdd}/>}
                { modalOpen && <BackDrop onCancel={closeModal}/> }
                <TodoList todos={todoList.todos}/>
                <img src={todoPic} alt='clipboard' width="240px" height="260px"></img>
            </div>
    );
}

export default TodoComponent;