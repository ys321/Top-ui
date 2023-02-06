import Button from "@mui/joy/Button";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
export default function UpdateButton({ startDecorator, onClick }) {
  return (
    <Button
      variant="solid"
      color="warning"
      type="submit"
      startDecorator={startDecorator ? startDecorator : <PublishedWithChangesIcon />}
      onClick={onClick}
    >
      Update
    </Button>
  );
}
