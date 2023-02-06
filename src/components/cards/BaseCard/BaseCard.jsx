import Card from '@mui/joy/Card';

function BaseCard (props) {
    return (
        <Card
            {...props}
            sx={{
                '&:hover': {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                    cursor: "pointer",
                }
            }}
        >
            {props.children}
        </Card>);
}

export {
    BaseCard
}
