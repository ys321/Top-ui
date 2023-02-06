import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, ModalDialog, ModalClose, Typography } from '@mui/joy';

function ModelView(props, ref) {
    useImperativeHandle(ref, () => ({ open, close }));
    const [visible, setVisible] = useState(false);
    const { children, title, size } = props;

    const open = () => setVisible(true);
    const close = () => setVisible(false);

    return (
        <Modal {...props} open={visible}>
            <ModalDialog size={size}>
                <ModalClose onClick={close} />
                <Typography
                    id="title"
                    component="h2"
                    level="inherit"
                    fontSize="1.25em"
                    mb="0.25em"
                >
                    {title}
                </Typography>
                {children}
            </ModalDialog>
        </Modal>
    )
}

const Dialog = forwardRef(ModelView);

export { Dialog };