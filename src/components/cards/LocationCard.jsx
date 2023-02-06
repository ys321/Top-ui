import React  from "react";

import locationPngIcon from "src/static/images/business_location_default.webp";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link, Typography, Box, AspectRatio, IconButton, Card, Tooltip } from "@mui/joy";

function LocationCard({ location, deleteHandler }) {

  return (
    <Box sx={{ minHeight: 200 }} justifyContent='center'>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: "span 2",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "hidden",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        })}
      >
        {/* <AspectRatio
          variant="soft"
          sx={{
            flexGrow: 1,
            display: "contents",
            "--AspectRatio-paddingBottom":
              "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
          }}
        >
          <Link
            href={`/business-location/:location_id`.replace(
              ":location_id",
              location.id
            )}
            underline={"none"}
          >
            <img
              src={location.image ? location.image : locationPngIcon}
              loading="lazy"
              alt=""
            />
          </Link>
        </AspectRatio> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
            <div>
              <Typography level="display1" sx={{ fontSize: "22px" }}>
                <Link
                  href={`/business-location/:location_id`.replace(
                    ":location_id",
                    location.id
                  )}
                  underline={"none"}
                  sx={{ color: "black" }}
                >
                  {location.name}
                </Link>
              </Typography>
            </div>
            <Tooltip title={`Delele ${location.name}`} variant="soft">
            <IconButton
              size="md"
              variant="soft"
              color="danger"
              sx={{ ml: "auto", alignSelf: "flex-start" }}
              onClick={deleteHandler}
            >
              <DeleteIcon color="danger" />
            </IconButton>
            </Tooltip>
          </Box>

          <AspectRatio
           objectFit="contain"
           sx={{
            borderRadius: "sm",
            overflow: "auto",
          }}
          >
            <Link
              href={`/business-location/:location_id`.replace(
                ":location_id",
                location.id
              )}
              underline={"none"}
            >
              <img
                alt=""
                src={location.image ? location.image : locationPngIcon}
              />
            </Link>
          </AspectRatio>
        </Box>
      </Card>
    </Box>
  );
}

export default LocationCard;
