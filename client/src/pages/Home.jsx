import React from "react";
import AppLayout from "../components/styles/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"gray"} height="100%" width="100%" display="flex" alignItems="center" justifyContent="center">
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to Chat
      </Typography>
    </Box>
  );
};

export default AppLayout(Home);
