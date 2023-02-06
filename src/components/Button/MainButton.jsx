import Button from "@mui/joy/Button";
import AddIcon from "@mui/icons-material/Add";

export default function MainButton({ onClick, name, disabled,size }) {
  return (
    <Button
      variant="solid"
      startDecorator={<AddIcon />}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {name}
    </Button>
  );
}
