import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const TodoList = props => {
    return (
        <>
            <h1 className='center'>Optimazed Todo List</h1>
            <Divider />
            <Button
                style={{ margin: '8px' }}
                variant='contained'
            >
                Add todo
            </Button>
        </>
    )
}

export default TodoList
