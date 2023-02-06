import React from "react";
import {  Paper, Link } from "@mui/material";
import { Button } from "@mui/joy";

function TopButton({
    text,
    onClick,
    variant,
    link,
    size,
    disabled
}) {

    const backgroundColors = {
        warning: '#d5c959',
        success: '#3caea3',
        danger: '#ed553b',
        info: '#3d97d4'
    }

    return (
        <>
            <Paper style={{
                borderRadius: '15px'
            }} elevation={3}>
                {link ? (<>
                    <Link underline="none" href={link} color={'white'}>
                        <Button
                            variant="solid"
                            // style={{
                            //     backgroundColor: backgroundColors[variant],
                            //     color: 'white',
                            //     padding: '7px',
                            //     borderRadius: '15px'
                            // }}
                            fullWidth
                        >
                            {text}
                        </Button>
                    </Link>
                </>) : (
                    <>
                        <Button
                            onClick={onClick}
                            variant='solid'
                            // style={{
                            //     backgroundColor: backgroundColors[variant],
                            //     color: 'white',
                            //     padding: '5px',
                            //     borderRadius: '15px'
                            // }}
                            fullWidth
                            disabled={disabled}
                        >
                            {text}
                        </Button>
                    </>)}
            </Paper>
        </>
    )
}

export default TopButton;