import { Grid } from "@material-ui/core";
import { AspectRatio } from "@mui/joy";
import { Box } from "@mui/material";
import NoRecord from "src/static/images/no_record.png";

export default function NoRecordFound() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={5}>
        <AspectRatio
          objectFit="contain"
          sx={{
            borderRadius: "sm",
            overflow: "auto",
          }}
        >
          <img src={NoRecord} style={{
            backgroundColor : 'white'
          }} alt="No Record Found" />
        </AspectRatio>
      </Grid>
    </Grid>
  );
}
