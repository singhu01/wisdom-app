import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

export class StudyTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      open: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    const currentStep = 0;
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
                  lineHeight: { xs: "26px", sm: "30px", md: "38px" },
                }}
              >
                Study Tasks and Time Commitment
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  fontWeight: 400,
                  color: "#363738",
                  lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                  textAlign: "left",
                }}
              >
                To participate in this study, we will ask you to:
                <br />
                <ul
                  style={{
                    paddingLeft: "20px",
                    marginTop: "8px",
                    marginBottom: "5px",
                  }}
                >
                  <li>Complete an interview via telephone or online.</li>
                  <li>
                    Complete monthly health surveys via telephone or online.
                  </li>
                  <li>
                    Allow researchers access to your information in your medical
                    record.
                  </li>
                  <li>
                    Agree to have private information (name, address, phone
                    number) and study data collected and stored at Icahn School
                    of Medicine at Mount Sinai.
                  </li>
                </ul>
                <br />
                Registering for the study and completing the initial survey
                should take 30 minutes or less. You can stop and restart where
                you left off at any time.
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    fontWeight: 400,
                    color: "#363738",
                    lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                    textAlign: "left",
                    paddingTop: "15px",
                  }}
                >
                  Your participation in the study will then include shorter
                  monthly surveys that take a few minutes to complete.
                </Typography>
              </Typography>

              {/* <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },

                  fontWeight: 400,
                  color: "#363738",
                  lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                  textAlign: "left",
                }}
              >
                To participate in this study, we will ask you to:
                <br />
                <div>&bull; Complete an interview via telephone or online.</div>
                <div>
                  &bull; Complete monthly health surveys via telephone or
                  online.
                </div>
                <div>
                  &bull; Allow researchers access to your information in your
                  medical record.
                </div>
                <div>
                  &bull; Agree to have private information (name, address, phone
                  number) and study data collected and stored at Icahn School of
                  Medicine at Mount Sinai.
                </div>
                <br />
                Registering for the study and completing the initial survey
                should take 30 minutes or less. You can stop and restart where
                you left off at any time.
                <br />
                Your participation in the study will then include shorter
                monthly surveys that take a few minutes to complete.
              </Typography> */}
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
          <Button
            sx={{
              fontWeight: { xs: 500, sm: 600, md: 600 },
              fontSize: "16px",
              lineHeight: "20px",
              marginTop: "15px",
              letterSpacing: "0.5px",
              color: "#FFFFFF",
              backgroundColor: "#D80C8C",
              padding: "10px 20px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#D80C8C",
              },
            }}
            onClick={this.props.onClickGoToPage("Privacy")}
          >
            Next
          </Button>
        </Box>
      </Modal>
    );
  }
}
