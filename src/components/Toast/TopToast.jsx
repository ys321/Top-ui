import { useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

function TopToast({ alert_props, message, show }) {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        setOpen(show);
    }, [show])

    return (
        <Snackbar autoHideDuration={6000} onClose={handleClose} open={open}>
            <Alert onClose={handleClose} sx={{ width: '100%' }} {...alert_props}>
                {message}
            </Alert>
        </Snackbar>
    )

}

export default TopToast;