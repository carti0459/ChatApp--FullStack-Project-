import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AdminLayout from "../../components/styles/layout/AdminLayout";
import { AdminPanelSettings as AdminPanelSettingsIcon, Notifications as NotificationsIcon } from "@mui/icons-material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/StylesComponents";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1rem",
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="Search...." />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0, 0, 0, 0.87)"}
          textAlign={"center"}
        >
          {moment().format("MMMM Do YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = <>jndfjn</>;
  
  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}

        <Stack>Chart Area </Stack>

        {
          Widgets
        }
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
