import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TodoItem = ({ onRemove, onChange, value = '', id }) => {
    console.log('RENDER CHILD')
    return (
        <Box mt='16px'>
            <TextField
                value={value}
                onChange={(e) => onChange(id, e)}
            />
            <Button
                style={{ marginLeft: '16px' }}
                color='secondary'
                variant='contained'
                onClick={() => onRemove(id)}
            >
                х
            </Button>
        </Box>
    )
}

TodoItem.propTypes = {
    onRemove: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default memo(TodoItem)
