import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Link,
  Typography,
} from "@mui/joy";

export default function BusinessSettingsCard({ link, name, image, title }) {
  return (
    <>
      <Card
        row
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          bgcolor: "background.body",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
          },
        })}
      >
        <CardOverflow >
          <AspectRatio ratio="1" sx={{ width: 90 }} >
            <img src={image} style={{ 'backgroundColor' : 'white','padding' : 10 }} srcSet={image} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ px: 2 }}>
          <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
            <Link
              href={link}
              overlay
              underline="none"
              sx={{
                color: "text.primary",
                "&.Mui-focusVisible:after": { outlineOffset: "-4px" },
              }}
            >
              {name}
            </Link>
          </Typography>
          <Typography level="body3">{title}</Typography>
        </CardContent>
      </Card>

    
    </>
  );
}
