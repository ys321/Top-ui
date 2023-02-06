import * as React from "react";

import CategoryPngIcon from "src/static/images/category.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, Typography, Box, AspectRatio, IconButton, Card, Tooltip } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";

function CategoyCard({ name, deleteHandler,link }) {

  return (
    <>
      <Box sx={{ minHeight: 250 }} justifyContent='center'>
        <Card
          variant="outlined"
          sx={(theme) => ({
            width: 275,
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
              href={link}
              underline={"none"}
            >
              <img
                src={name.image ? name.image : CategoryPngIcon}
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
              <Avatar variant="soft" color="neutral" size="lg">
                <Typography level="display1" sx={{ fontSize: "25px" }}>
                  {name.identifier}
                </Typography>
              </Avatar>
              <div>
                <Typography level="display1" sx={{ fontSize: "20px" }}>
                  <Tooltip title={`View More about ${name.name}`} variant="soft">
                  <Link
                    href={link}
                    underline={"none"}
                    sx={{ color: "black" }}
                  >
                    {name.name}
                  </Link>
                    </Tooltip>
                </Typography>
                <Typography fontWeight="lg" level="body2">
                  {name.description}
                </Typography>
              </div>
              <Tooltip title={`Delete ${name.name} Record`} variant="soft">
              <IconButton
                size="md"
                variant="soft"
                color="danger"
                sx={{ ml: "auto", alignSelf: "flex-start" }}
                onClick={() => {
                  deleteHandler();
                }}
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
                href={link}
                underline={"none"}
              >
                <img
                  alt=""
                  src={name.image ? name.image : CategoryPngIcon}
                />
              </Link>
            </AspectRatio>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default CategoyCard;
