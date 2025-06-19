import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid, Box } from "@mui/material";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Title />
        <Header />
        {/* Main content area */}
        <Box flex="1 1 auto" minHeight={0} display="flex">
          <Grid
            container
            sx={{ flex: 1, height: "100%" }}
            columns={12}
          >
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
              First
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
              <WrappedComponent {...props} />
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
              Third
            </Grid>
          </Grid>
        </Box>
        <Box component="footer" height="4rem" bgcolor="#eee" display="flex" alignItems="center" justifyContent="center">
          Footer
        </Box>
      </Box>
    );
  };
};

export default AppLayout;
