import React from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      open: true,
      showMoreInfo: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      showMoreInfo: !prevState.showMoreInfo,
    }));
  };

  render() {
    const { showMoreInfo } = this.state;
    const currentStep = 1;
    if (this.state.isLoaded) {
      return (
        <Modal
          open={this.state.open}
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
              p: { xs: "16px", sm: "24px", md: "30px" },

              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ overflowY: "auto", textAlign: "center" }}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
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
                  Privacy
                </Typography>

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
                  To protect your privacy, we use a unique code instead of your
                  name on your study data.
                </Typography>
                <FormControlLabel
                control={
                  <Checkbox
                    checked={showMoreInfo}
                    onChange={this.handleCheckboxChange}
                    color="primary"
                  />
                }
                label="Click here to learn more about privacy"
                sx={{
                  fontSize: "18px !important",
                  fontWeight: 500,
                  marginTop: "10px",
                  marginRight: "0px",
                  width: "100%",
                  textAlign: "left",
                }}
              />
              {showMoreInfo && (
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
                  We will work hard to protect your privacy. A unique code
                  instead of your name or other information that could
                  identify you will be used on all your study data.
                  Researchers will only analyze data without information that
                  identifies you. Your study data will be coded and stored in
                  a manner that keeps your information as safe as possible and
                  prevents unauthorized people from getting to your data. Even
                  with removal of your personal information and these
                  procedures, it is sometimes possible to re-identify an
                  individual. This risk, while very low, should still be
                  considered before enrolling.
                </Typography>
              )}

                {/* <Accordion
                  sx={{
                    border: "1px solid #E0E0E0",
                    boxShadow: "none",
                    width: "98%",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Click here to learn more about privacy
                  </AccordionSummary>
                  <AccordionDetails sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        fontWeight: 400,
                        color: "#363738",
                        lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                        textAlign: "left",
                        paddingBottom: "15px",
                      }}
                    >
                      We will work hard to protect your privacy. A unique code
                      instead of your name or other information that could
                      identify you will be used on all your study data.
                      Researchers will only analyze data without information
                      that identifies you. Your study data will be coded and
                      stored in a manner that keeps your information as safe as
                      possible and prevents unauthorized people from getting to
                      your data. Even with removal of your personal information
                      and these procedures, it is sometimes possible to
                      re-identify an individual. This risk, while very low,
                      should still be considered before enrolling.
                    </Typography>
                  </AccordionDetails>
                </Accordion> */}
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "8px",
              }}
            >
              {[0, 1, 2].map((step) => (
                <Box
                  key={step}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor:
                      currentStep === step ? "grey.800" : "grey.400",
                    mx: 1,
                  }}
                />
              ))}
            </Box>

            <Box
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  fontWeight: { xs: 500, sm: 600, md: 600 },
                  fontSize: "16px",
                  lineHeight: "20px",
                  marginTop: "15px",
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
                onClick={this.props.onClickGoToPage("Study Tasks")}
              >
                BACK
              </Button>

              <Button
                sx={{
                  fontWeight: { xs: 500, sm: 700, md: 700 },
                  fontSize: "16px",
                  lineHeight: "20px",
                  marginTop: "15px",
                  letterSpacing: "0.5px",
                  color: "#FFFFFF",
                  backgroundColor: "#D80C8C",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#D80C8C",
                  },
                }}
                onClick={this.props.onClickGoToPage("Data Collection")}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Modal>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
