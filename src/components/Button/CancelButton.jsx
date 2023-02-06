import Button from "@mui/joy/Button";
import CancelIcon from "@mui/icons-material/Cancel";

export default function CancelButton({
  startDecorator,
  size,
  onClick,
}) {
  return (
    <Button
      variant="solid"
      color="danger"
      startDecorator={startDecorator ? startDecorator : <CancelIcon />}
      onClick={onClick}
      size={size}
    >
      Cancel
    </Button>
  );
}
