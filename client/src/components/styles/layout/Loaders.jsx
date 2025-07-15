import React from "react";
import { Grid, Skeleton } from "@mui/material";

export const LayoutLoader = () => {
  return (
    <Grid container sx={{ flex: 1, height: "100%" }} columns={12}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          borderRight: { md: "1px solid #ccc" },
          bgcolor: "#f5f5f5",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Skeleton variant="rectangular" />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          bgcolor: "#fff",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Skeleton variant="rectangular" />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          borderLeft: { md: "1px solid #ccc" },
          bgcolor: "rgba(0,0,0,0.05)",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Skeleton variant="rectangular" />
      </Grid>
    </Grid>
  );
};
