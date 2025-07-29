import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid, Box } from "@mui/material";
import ChatList from "../../specific/ChatList";
import { sampleChats } from "../../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../../specific/Profile";

const AppLayout = (WrappedComponent) => {
  return (props) => {

    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    }
    return (
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Title />
        <Header />
        {/* Main content area - takes remaining space between header and footer */}
        <Box
          flex="1 1 auto"
          display="flex"
          sx={{
            minHeight: 0,
            height: "calc(100vh - 8rem)", // Subtract header and footer heights
          }}
        >
          <Grid
            container
            sx={{
              flexGrow: 1,
              width: "100%",
              height: "100%",
            }}
            spacing={0}
          >
            <Grid
              size={4}
              sx={{
                borderRight: "1px solid #ddd",
                bgcolor: "#f5f5f5",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 0,
              }}
            >
              <ChatList
                chats={sampleChats}
                chatId={chatId}
                handleDeleteChat={handleDeleteChat}
              />
            </Grid>

            {/* WrappedComponent (Home) Grid Item */}
            <Grid
              size={4}
              sx={{
                bgcolor: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 0,
              }}
            >
              <WrappedComponent {...props} />
            </Grid>

            {/* Third Grid Item */}
            <Grid
              size={4}
              sx={{
                borderLeft: "1px solid #ddd",
                bgcolor: "#000000", // Black color for third grid
                color: "#ffffff", // White text for visibility
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 0,
              }}
            >
              <Profile />
            </Grid>
          </Grid>
        </Box>
        <Box
          component="footer"
          height="4rem"
          bgcolor="#eee"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Footer
        </Box>
      </Box>
    );
  };
};

export default AppLayout;
