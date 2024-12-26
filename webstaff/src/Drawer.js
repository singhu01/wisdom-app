import React from "react";
import { Box, List, ListItem, ListItemButton, Button } from "@mui/material";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as GraphIcon } from "./assets/graph.svg";
import { ReactComponent as BoxIcon } from "./assets/box.svg";
import { ReactComponent as VectorIcon } from "./assets/Vector.svg";
import { ReactComponent as NotfiIcon } from "./assets/notfi.svg";
// import Drawer from "@mui/material/Drawer";
import PersonIcon from '@mui/icons-material/Person';

const DrawerComponent = ({ open, toggleDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<HomeIcon />}
              >
                Home
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<GraphIcon />}
              >
                About
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<BoxIcon />}
              >
                Features
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<VectorIcon />}
              >
                FAQ
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<NotfiIcon />}
              >
                Notifications
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<PersonIcon />}
              >
                Profile
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(34, 31, 115, 1)",
                  color: "white",
                  textTransform: "none",
                  height: "30px",
                  width: "104px",
                  "&:hover": {
                    backgroundColor: "rgba(34, 31, 115, 1)",
                  },
                }}
              >
                Login
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
