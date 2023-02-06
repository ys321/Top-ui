import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AppBar, Button, Dialog, DialogContent, DialogTitle, Toolbar, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


function ModelView(props, ref) {
    useImperativeHandle(ref, () => ({ open, close }));
    const [visible, setVisible] = useState(false);
    const { children, title } = props;

    const open = () => setVisible(true);
    const close = () => setVisible(false);

    return (
        <Dialog {...props} open={visible} TransitionComponent={Transition}>

            {props?.fullScreen ? (
                <>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={close}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                {title}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </>
            ) :
                (
                    <>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                    </>
                )
            }
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

const Model = forwardRef(ModelView);

export { Model };