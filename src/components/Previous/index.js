import React, { useRef, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const PreviousBlock = props => {
    const [count, setCount] = useState(0);

    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    });

    return (
        <>
            <h1 className='centerX'>Display current | previous values</h1>
            <Divider />
            <h2>Current value: {count}</h2>
            <h2>Previous value: {prevCountRef.current}</h2>
            <Button
                style={{ marginRight: '8px' }}
                color='primary'
                variant='contained'
                onClick={() => setCount(count + 1)}
            >
                Increase
            </Button>
            <Button
                color='secondary'
                variant='contained'
                onClick={() => setCount(count - 1)}
            >
                Decrease
            </Button>
        </>
    )
}

export default PreviousBlock
