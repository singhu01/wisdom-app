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

export class DataCollection extends React.Component {
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
    const currentStep = 2;
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
                  Data Collection and Use
                </Typography>

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
                  The data collected for this study are from the initial survey
                  and monthly surveys that you complete. Additionally, the
                  research team will collect health information from your
                  medical record. This is a requirement for participation in the
                  study.
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
                  We may follow up with a phone call or message to remind you to
                  complete the surveys or if we need additional information
                  where you received care for your IBD.
                </Typography>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showMoreInfo}
                      onChange={this.handleCheckboxChange}
                      color="primary"
                    />
                  }
                  label="Click here to learn more about data collection and use"
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
                  <>
                                      <Typography
                      sx={{
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        fontWeight: 400,
                        color: "#363738",
                        lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                        textAlign: "left",
                      }}
                    >
                      This study collects information from surveys and your
                      medical record. If you received IBD care outside of the
                      Mount Sinai Health System, you will be requested to
                      complete a form to release your health information related
                      to your IBD care from the outside facilities to the
                      research team.
                    </Typography>
                  </>
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
                    sx={{ textAlign: "left" }}
                  >
                    Click here to learn more about data collection and use
                  </AccordionSummary>
                  <AccordionDetails sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        fontWeight: 400,
                        color: "#363738",
                        lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                        textAlign: "left",
                      }}
                    >
                      This study collects information from surveys and your
                      medical record. If you received IBD care outside of the
                      Mount Sinai Health System, you will be requested to
                      complete a form to release your health information related
                      to your IBD care from the outside facilities to the
                      research team.
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
                onClick={this.props.onClickGoToPage("Privacy")}
              >
                BACK
              </Button>

              <Button
                sx={{
                  fontWeight: { xs: 500, sm: 600, md: 600 },
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
                onClick={this.props.onClickGoToPage("Break Time 1")}
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
