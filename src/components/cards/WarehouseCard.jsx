import { Box, Button, Card, Grid, Link, Stack, Typography } from "@mui/joy";
import { CardHeader, Paper } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { useState } from "react";

import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import AspectRatio from "@mui/joy/AspectRatio";

export default function WarehouseCard({
  editActionHandler,
  deleteActionHandler,
  link,
  floor,
  refetch,
  navigateToMore
}) {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={2}
      >
        <Card variant="outlined" sx={{ width: 250 }}>
          <Typography fontSize="lg" fontWeight="lg">
            {floor.name}
          </Typography>

          <Box sx={{ display: "flex" }} marginTop={1}>
            <Button
              variant="soft"
              color="info"
              size="sm"
              aria-label="Explore Bahamas Islands"
              sx={{ fontWeight: 600 }}
              onClick={() => {
                editActionHandler(floor);
              }}
            >
              <EditIcon />
            </Button>
            <Button
              aria-label="remove"
              variant="soft"
              color="danger"
              size="sm"
              sx={{ ml: "auto", fontWeight: 600 }}
              onClick={() => {
                deleteActionHandler(floor);
              }}
            >
              <DeleteIcon />
            </Button>
              <Button
                aria-label="views more"
                variant="soft"
                color="info"
                size="sm"
                sx={{ ml: "auto", fontWeight: 600 }}
                onClick={() => {
                  navigateToMore(floor);
                }}
                >
                {/* <Link
                  href={link}
                  //   href={`:location_id/floor/:floor_id`
                  //     .replace(":location_id", location.id)
                  //     .replace(":floor_id", floor.id)}
                  underline={"none"}
                > */}
                <AddLocationAltIcon />
            {/* </Link> */}
              </Button>
          </Box>
        </Card>
      </Stack>
    </>

    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container flexDirection={"column"}>
    //     <Grid item style={{ marginTop: "20px" }}>
    //       <Grid
    //         container
    //         spacing={{ xs: 2, md: 3 }}
    //         columns={{ xs: 8, sm: 8, md: 8 }}
    //       >
    //             <Grid item xs={4} sm={4} md={2}>
    //               <Paper style={{ borderRadius: 15 }} elevation={5}>
    //                 <Card>
    //                   <CardHeader
    //                     style={{ display: "flex", alignItems: "center" }}
    //                     action={
    //                       <>
    //                         <Stack
    //                           direction={"row"}
    //                           alignItems={"center"}
    //                           justifyContent={"space-between"}
    //                           mb={2}
    //                         >
    //                           <Stack direction={"row"} spacing={1}>
    //                             <Button
    //                               aria-label="remove"
    //                               variant="soft"
    //                               color="info"
    //                               size="sm"
    //                               onClick={() => {
    //                                 editActionHandler(floor);
    //                               }}
    //                             >
    //                               <EditIcon />
    //                             </Button>
    //                             <Button
    //                               aria-label="remove"
    //                               variant="soft"
    //                               color="danger"
    //                               size="sm"
    //                               onClick={() => {
    //                                 deleteActionHandler(floor);
    //                               }}
    //                             >
    //                               <DeleteIcon />
    //                             </Button>
    //                             <Link
    //                               href={link}
    //                               //   href={`:location_id/floor/:floor_id`
    //                               //     .replace(":location_id", location.id)
    //                               //     .replace(":floor_id", floor.id)}
    //                               underline={"none"}
    //                             >
    //                               <Button
    //                                 aria-label="remove"
    //                                 variant="soft"
    //                                 color="danger"
    //                                 size="sm"
    //                                 onClick={() => {}}
    //                               >
    //                                 <AddLocationAltIcon />
    //                               </Button>
    //                             </Link>
    //                           </Stack>
    //                         </Stack>
    //                       </>
    //                     }
    //                     title={
    //                       <>
    //                         <Typography
    //                           style={{
    //                             display: "flex",
    //                             width: "fit-content",
    //                             alignItems: "center",
    //                           }}
    //                           gutterBottom
    //                           variant="h5"
    //                           component="div"
    //                         >
    //                           {floor?.name}
    //                         </Typography>
    //                       </>
    //                     }
    //                   />
    //                 </Card>
    //               </Paper>
    //             </Grid>

    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}
