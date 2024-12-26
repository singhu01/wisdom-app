import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import alreadyReg from "./assets/alreadyReg.png";

export class EmailExists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Modal
          open={true}
          onClose={this.handleClose}
          aria-labelledby="modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "85%", sm: "70%", md: "50%" },
                    maxWidth: "500px",
              height: "auto",
              maxHeight: { xs: "90%", sm: "90%", md: "70%" },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: {  xs: "16px", sm: "24px", md: "30px" },
             
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ overflowY: "auto", textAlign: "center" }}>
              <Box
                component="img"
                src={alreadyReg}
                alt="alreadyReg"
                sx={{
                  width: "100%",
                  maxWidth: "110px",
                  height: "auto",
                  objectFit: "contain",
                  mt: { xs: "10px", sm: "15px", md: "15px" },
                  mb: { xs: "10px", sm: "15px", md: "15px" },
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "28px", md: "32px"},
                    fontWeight: 800,
                    color: "#1A202C",
                  }}
                >
                  Currently Registered
                </Typography>

                <Typography
                  sx={{
                    fontSize: {  xs: "16px", sm: "18px", md: "20px"  },
                    fontWeight: 400,
                    color: "#363738",
                    lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                  }}
                >
                  Thank you again for your interest in the WIsDoM study. Someone
                  has already registered with the email address you provided. If
                  you have questions, please reach out to the study team via
                  email (
                  <a
                    style={{ color: "black" }}
                    href="mailto:wisdom@mssm.edu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    wisdom@mssm.edu
                  </a>
                  ) or phone (212-824-7786). Please click{" "}
                  <span style={{ fontWeight: "bold" }}>Next</span> to exit.
                </Typography>
              </Box>
            </Box>

            <Button
              sx={{
                fontWeight: { xs: 500, sm: 700, md: 700 },
                fontSize: "18px",
                marginTop:"15px",
                lineHeight: "20px",
                letterSpacing: "0.5px",
                color: "#FFFFFF",
                backgroundColor: "#D80C8C",
                padding: "12px 24px",
                
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#D80C8C",
                },
              }}
              onClick={() => {
                this.props.onClickGoToPage("Landing");
                window.location.reload();
              }}
            >
              Next
            </Button>
          </Box>
        </Modal>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
