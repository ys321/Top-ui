import Button from "@mui/joy/Button";
import SaveIcon from "@mui/icons-material/Save";

export default function SaveButton({
  startDecorator,
  onClick,
  disabled
}) {
  return (
    <Button
      variant="solid"
      color="success"
      type="submit"
      startDecorator={startDecorator ? startDecorator : <SaveIcon />}
      onClick={onClick}
      disabled={disabled}
    >
      Save
    </Button>
  );
}
