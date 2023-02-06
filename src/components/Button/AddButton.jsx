import Button from '@mui/joy/Button';
import AddIcon from '@mui/icons-material/Add';

function AddButton (props) {
    return (
        <Button
            {...props}
            startDecorator={<AddIcon />}
        />
    );
}

export {
    AddButton
}