import React, { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import TodoItem from './Item';

const TodoList = props => {

    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, { value: '', id: nanoid() }])
    }

    const removeTodo = useCallback((ID) => {
        setTodos((prevTodoList) => {
            const todoListNext = prevTodoList.filter((item) => ID !== item.id);
            return todoListNext;
        });
    }, [])

    const changeTodo = useCallback((ID, e) => {
        setTodos((prevTodoList) => {
            let findIndex = prevTodoList.findIndex((item) => ID === item.id);
            let newTodos = [...prevTodoList];
            newTodos[findIndex] = { ...newTodos[findIndex], value: e.target.value }
            return newTodos;
        });
    }, [])

    console.log('RENDER PARRENT ====>')
    return (
        <>
            <h1 className='centerX'>Optimazed Todo List</h1>
            <Divider />
            {todos.map((item, index) => {
                let { id, value } = item;
                return (
                    <TodoItem
                        key={id}
                        id={id}
                        value={value}
                        onRemove={removeTodo}
                        onChange={changeTodo}
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
