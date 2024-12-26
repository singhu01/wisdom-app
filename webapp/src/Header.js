import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import oldLogo from "./assets/oldLogo.png";

const Header = () => {

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        paddingRight: { md: "60px", sm: "10px", xs: "10px" },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <img
          alt="Wisdom"
          src={oldLogo}
          style={{ width: "158px", height: "auto", paddingLeft: "15px" }}
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
      </AppBar>
    </Box>
  );
};

export default Header;
