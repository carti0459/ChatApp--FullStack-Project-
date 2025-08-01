import React, { useRef } from "react";
import AppLayout from "../components/styles/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StylesComponents";

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        width="100%"
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Messages Render */}
      </Stack>
      <form
        style={{
          height: "10%",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          height="100%"
          padding="1rem"
          alignItems="center"
           // add spacing between items
        >
          <IconButton
            sx={{
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message Here...." style={{ flex: 1 }} />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout(Chat);
