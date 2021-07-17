import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import TodoItem from './Item';

const TodoList = props => {

    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, { value: '', id: nanoid() }])
    }

    const removeTodo = (i) => () => {
        setTodos(todos.filter((item, index) => i !== index))
    }

    const changeTodo = (i) => (e) => {
        let findIndex = todos.findIndex((item, index) => i === index);
        let newTodos = [...todos];
        newTodos[findIndex] = { ...newTodos[findIndex], value: e.target.value }
        setTodos(newTodos);
    }

    console.log('RENDER PARRENT ====>')
    return (
        <>
            <h1 className='centerX'>Optimazed Todo List</h1>
            <Divider />
            {todos.map((item, index) => {
                return (
                    <TodoItem
                        key={item.id}
                        value={item.value}
                        onRemove={removeTodo(index)}
                        onChange={changeTodo(index)}
                    />
                )
            })}
            <Button
                style={{ margin: '24px 8px 8px 0' }}
                variant='contained'
                onClick={addTodo}
            >
                Add todo
            </Button>
        </>
    )
}

export default TodoList
