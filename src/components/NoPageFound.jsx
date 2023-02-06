import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NoPage from "src/static/images/no_page.png";

export default function NoPageFound() {
  const navigate = useNavigate();
  function redirectDashboard() {
    navigate(`/`);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="outlined" onClick={redirectDashboard}>
              Return to Dashboard
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" marginTop={2}>
          <Grid item>
            <img
              src={NoPage}
              style={{ maxWidth: "100%" }}
              alt="No Page Found"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
