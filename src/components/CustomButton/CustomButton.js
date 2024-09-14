// CustomButton.js
import React from 'react';
import { Button } from '@mui/material';

const CustomButton = (props) => {
    return (
        <Button
            style={{
                backgroundColor: '#000',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#333',
                },
                borderRadius: '8px',
                padding: '8px 16px',
            }}
            {...props}
        />
    );
};

export default CustomButton;




