import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

import { toggleAlert } from "src/store/slices/alert.slice"; 
import { useEffect } from "react";

export function TOPAlert() {
    const dispatch = useDispatch();
    const alert = useSelector((state) => state).alert;

    const { visible, message, title, type, position } = alert;

    const [show, setShow] = useState(visible);
    const [severity, setServerity] = useState('success');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShow(false);

        dispatch(toggleAlert({
            visible: false
        }));
    };

    useEffect(() => {
        if (type) {
            setServerity(type);
        }
    }, [type])

    useEffect(() => {
        if (visible) {
            setShow(true);
        }
    }, [visible]);    

    if (!alert) {
        return <></>;
    }

    return (
        <>
            <Snackbar open={show} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert
                    severity={severity}
                    sx={{ width: '100%' }}
                    variant={'filled'}
                    style={{ color: 'white' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}