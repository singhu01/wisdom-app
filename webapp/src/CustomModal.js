import React, { Component } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      expanded: false,
    };
  }

  toggleShowMore = (e) => {
    this.setState({
      ...this.state,
      showMore: e?.target?.checked,
    });
  };

  handleAccordionChange = (event, isExpanded) => {
    this.setState({
      expanded: isExpanded,
    });
  };
  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  handleNext = () => {
    if (this.props.onNext) {
      this.setState({
        ...this.state,
        showMore: false,
      });
      this.props.onNext();
    }
  };

  handleBack = () => {
    if (this.props.onBack) {
      this.setState({
        ...this.state,
        showMore: false,
      });
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
      readMoreRequired = false,
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
          <Box sx={{ overflowY: "auto", textAlign: "center" }}>
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
            <Box
              sx={{
                width: "100%",
              }}
            >
              {title && (
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                    fontWeight: 800,
                    color: "#1A202C",
                    textAlign: "center",
                    paddingBottom: { md: "10px", sm: "10px", xs: "10px" },
                    lineHeight: { xs: "20px", sm: "24px", md: "38px" },
                  }}
                >
                  {title}
                </Typography>
              )}

              {message && (
                <>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      fontWeight: 400,
                      color: "#363738",
                      lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                      textAlign: "left",
                      // paddingBottom: "10px",
                    }}
                  >
                    {!readMoreRequired ? message : message?.initialText}
                  </Typography>

                  {readMoreRequired ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.showMore}
                          onChange={this.toggleShowMore}
                          color="primary"
                        />
                      }
                      label={`Click here to learn more about ${title}`}
                      sx={{
                        fontSize: "18px !important",
                        fontWeight: 500,
                        marginTop: "10px",
                        marginRight: "0px",
                        width: "100%",
                        textAlign: "left",
                      }}
                    />
                  ) : null}

                  {this.state.showMore && (
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        fontWeight: 400,
                        color: "#363738",
                        lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                        textAlign: "left",
                        paddingBottom: "5px",
                      }}
                    >
                      {message?.readMoreText}
                    </Typography>
                  )}
                </>
              )}
            </Box>
          </Box>
          {buttonText && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: { xs: "80%", sm: "60%", md: "50%" },
                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{
                    fontWeight: { xs: 500, sm: 600, md: 600 },
                    fontSize: "16px",
                    lineHeight: "20px",
                    mt: "15px",
                    letterSpacing: "0.5px",
                    color: "#D80C8C",
                    backgroundColor: "#FFFFFF",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "1.5px solid #D80C8C",
                    "&:hover": {
                      backgroundColor: "#FFFFFF",
                    },
                  }}
                  onClick={this.handleBack}
                >
                  BACK
                </Button>

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
            </Box>
          )}
        </Box>
      </Modal>
    );
  }
}

export default CustomModal;
