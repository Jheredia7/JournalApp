import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "87vh",
        backgroundColor: "white",
        borderRadius: 6,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "#262254" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="#262254" variant="h5">
          Selecciona una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
