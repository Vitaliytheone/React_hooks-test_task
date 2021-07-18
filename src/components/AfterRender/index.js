import React, { useRef, useLayoutEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const fields = (ref) => {
    return [
        {
            label: 'First input',
            variant: 'outlined',
            margin: 'dense',
            inputRef: ref
        },
        {
            label: 'Second input',
            margin: 'dense',
            variant: 'outlined',
        },
        {
            label: 'Third input',
            margin: 'dense',
            variant: 'outlined',
        }
    ]
}

const AfterRender = props => {

    const refColor = useRef(null);
    const refFocus = useRef(null);

    useLayoutEffect(() => {
        refColor.current.style.color = 'red';
        refFocus.current.focus();
    })

    return (
        <>
            <h1 className='centerX'>Changes in DOM without blinking</h1>
            <Divider />
            <h3 ref={refColor}>
                This div must be a red color after render
            </h3>
            <div style={{ display: 'flex' }}>
                {fields(refFocus).map((item, index) => {
                    return (
                        <Box mr='8px' key={index}>
                            <TextField {...item} />
                        </Box>
                    )
                })}
            </div>
        </>
    )
}

export default AfterRender
