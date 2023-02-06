import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Link,
  Tooltip,
  IconButton,
} from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Paper } from "@mui/material";

function FloorCard({
  refetch,
  location,
  name,
  link,
  editActionHandler,
  deleteActionHandler,
}) {
  const [currentFloor, setCurrentFloor] = useState({});
  useEffect(() => {
    setCurrentFloor(name);
    setTimeout(() => {
      refetch();
    }, 500);
  }, [name]);

  // const floorDetailUrl = `${location_routes_keys.floor.details
  //   .replace(":location_id", location.id)
  //   .replace(":floor_id", floor.id)}`;

  return (
    <>
      <Paper style={{ borderRadius: 15 }}>
        <Card variant="outlined">
          <Box
            flexDirection={"row-reverse"}
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
              <Tooltip title={`Update ${name.name} Record`} variant="soft">
                <Button
                  variant="soft"
                  color="info"
                  size="sm"
                  aria-label="Explore Bahamas Islands"
                  sx={{ fontWeight: 600 }}
                  onClick={() => {
                    editActionHandler(name);
                  }}
                >
                  <EditIcon />
                </Button>
              </Tooltip>

              <Tooltip title={`Delele ${name.name}`} variant="soft">
                <IconButton
                  size="md"
                  variant="soft"
                  color="danger"
                  sx={{ ml: "auto", alignSelf: "flex-start" }}
                  onClick={() => {
                    deleteActionHandler(name);
                  }}
                >
                  <DeleteIcon color="danger" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Link href={link} underline={"none"}>
            <Typography level="h3" fontWeight="lg">
              {name.name}
            </Typography>
          </Link>
        </Card>
      </Paper>
    </>
  );
}

export default FloorCard;
