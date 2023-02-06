import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.primary"
      sx={{ textAlign: "center" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#" underline="none">
        TOP INDIA ELEVATOR PVT.LTD
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "60vh",
      }}
    >
      <CssBaseline />
      <Box
        component="Footer"
        sx={{
          py: 4,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
