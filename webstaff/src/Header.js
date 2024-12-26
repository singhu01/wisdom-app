import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as GraphIcon } from "./assets/graph.svg";
import { ReactComponent as BoxIcon } from "./assets/box.svg";
import { ReactComponent as VectorIcon } from "./assets/Vector.svg";
import { ReactComponent as NotfiIcon } from "./assets/notfi.svg";
import { ReactComponent as ProfileIcon } from "./assets/ProfilePic.svg";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import wisdomImage from "./assets/wisdom.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import DrawerComponent from "./Drawer";
import logoNew from "./assets/icahn.jpg";
import minnesotaLogo from "./assets/minnesota_logo.jpg";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import AdminPanel from "./userList";
import { Home } from "./Home";
import RoleBasedAccess from "./RoleBasedAccess";
import { useHistory } from 'react-router-dom';

const Header = ({ onLogout, roleId, registrySiteId }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentComponent, setCurrentComponent] = useState('null');
  const history = useHistory(); 

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  let logoSrc;
  if (registrySiteId === '1') {
    logoSrc = logoNew;  
  } else {
    logoSrc = minnesotaLogo; 
  }
  const handleMenuItemClick = (path, component) => {
    setCurrentComponent(component);
    handleClose();
    if (path === 'home') {
      history.push('/');
    } else {
    history.push(`/${path}`);
    }
  };

  // const renderComponent = () => {
  //   switch (currentComponent) {
  //     case 'home':
  //       return <Home />;
  //     case 'user':
  //       return <AdminPanel />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "10px",
        // paddingRight: {md: "60px", sm:"10px", xs:"10px"}
      }}
    >
      <div
        style={{
          // width: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <img
          alt="Wisdom"
          src={logoSrc}
          style={{
            width: "158px", height: "auto", paddingLeft: "15px",
          }}
        />
      </div>
      <AppBar
        position="static"
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          width: "90%",
          background:
            "linear-gradient(90deg, #FDD6EE 0%, #FBF6FF 50.77%, #DCE6FB 100%)",
          height: "72px",
          borderRadius: "20px",
          marginTop: "28px",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            width: "96%",
            padding: "0 2%",
            display: "flex",
            gap: "30px",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
                  sx={{
                    color: "rgba(68, 71, 80, 1)",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  onClick={() => handleMenuItemClick('home')}
                  startIcon={<HomeOutlinedIcon />}
                >
                  Home
                </Button>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              overflowX: "auto",
              gap: "35px",
            }}
          >
            <Box sx={{ display: "flex", gap: "30px" }}>
              <div style={{ gap: "10px" }}>
                  {roleId !== '2' && (  
                <Button
                  sx={{
                    color: "rgba(68, 71, 80, 1)",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  onClick={handleClick}
                  startIcon={<SettingsOutlined />}
                >
                  Setting
                </Button>
                  )}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                    <MenuItem onClick={() => handleMenuItemClick('admin')}>Add/Edit users</MenuItem>
                 <MenuItem onClick={() => handleMenuItemClick('role-access')}>Role based access</MenuItem>
                </Menu>
              </div>
                {/* <Button
                sx={{
                  color: "rgba(68, 71, 80, 1)",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
                startIcon={<VectorIcon />}
              >
                FAQ
                </Button> */}
              <div style={{ gap: "10px" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(34, 31, 115, 1)",
                    color: "white",
                    textTransform: "none",
                    height: "30px",
                    width: "104px",
                    fontWeight: 500,
                    fontSize: "14px",
                    "&:hover": {
                      backgroundColor: "rgba(34, 31, 115, 1)",
                    },
                  }}
                  onClick={onLogout}
                >
                  Log out
                </Button>
              </div>
            </Box>
            {/* <Box style={{ display: "flex", gap: "10px" }}>
              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<NotfiIcon />}
              ></Button>

              <Button
                sx={{ color: "rgba(68, 71, 80, 1)" }}
                startIcon={<ProfileIcon />}
              ></Button>
            </Box> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
          alignItems: "center",
          width: "90%",
          height: "72px",
          borderRadius: "20px",
          marginTop: "28px",
          boxShadow: "none",
        }}
      >
        <IconButton
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "flex", md: "none" },
            height: "24px",
            width: "24px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {/* <DrawerComponent open={drawerOpen} toggleDrawer={toggleDrawer} /> */}
    </Box>
    <div style={{ marginTop: '20px' }}>
        {currentComponent === 'home' && <Home />}
        {currentComponent === 'admin' && <AdminPanel />}
        {currentComponent === 'role-access' && <RoleBasedAccess />}
      </div>
    </div>
  );
};

export default Header;
