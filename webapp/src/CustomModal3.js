import React, { Component } from "react";
import { Modal, Box, IconButton, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

class CustomModal extends Component {
  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  handleNext = () => {
    if (this.props.onNext) {
      this.props.onNext();
    }
  };

  handleBack = () => {
    if (this.props.onBack) {
      this.props.onBack();
    }
  };

  render() {
    const {
      open,
      title,
      message,
      imageSrc,
      buttonText,
      imageAlt = "Modal Image",
    } = this.props;

    return (
      <Modal
        open={open}
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
            width: { xs: "80%", sm: "70%", md: "50%" },
            maxWidth: "500px",
            maxHeight: "80vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: { xs: "16px", sm: "24px", md: "30px" },
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "0 8px",
              boxSizing: "border-box",
            }}
          >
            {imageSrc && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  mt: 2,
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={imageSrc}
                  alt={imageAlt}
                  sx={{
                    width: "80%",
                    maxWidth: "70px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}

            {title && (
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  fontWeight: 700,
                  color: "#1A202C",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                {title}
              </Typography>
            )}

            {message && (
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  fontWeight: 400,
                  color: "#363738",
                  lineHeight: 1.5,
                  textAlign: "center",
                  mb: 2,
                  maxHeight: `${
                    this.props.messageHeight
                      ? this.props.messageHeight
                      : "250px"
                  }`,
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: "4px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888",
                    borderRadius: "2px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
                {message}
              </Typography>
            )}

            {buttonText && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  mt: 2,
                }}
              >        

                  <Button
                    sx={{
                      fontWeight: { xs: 500, sm: 600, md: 600 },
                      fontSize: "16px",
                      lineHeight: "20px",
                      mt: "15px",
                      letterSpacing: "0.5px",
                      color: "#FFFFFF",
                      backgroundColor: "#D80C8C",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "#C00C7A",
                      },
                    }}
                    onClick={this.handleNext}
                  >
                    {buttonText}
                  </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    );
  }
}

export default CustomModal;
