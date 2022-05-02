import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navigation() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Button component={NavLink} to="" color="inherit">
            Home
          </Button>
          <Button component={NavLink} to="users/" color="inherit">
            Users
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
