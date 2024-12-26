import React, { Component } from "react";
import {
  Modal,
  Box,
  IconButton,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
class CustomModal2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      // expanded: false,
    };
  }

  toggleShowMore = (e) => {
    this.setState({
      ...this.state,
      showMore: e?.target?.checked,
    });
  };

  // handleAccordionChange = (event, isExpanded) => {
  //   this.setState({
  //     expanded: isExpanded, 
  //   });
  // };

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

  renderContent = () => {
    const content = [
      {
        heading: "Re-contacting",
        initialText:
          "By consenting to be part of this study you are consenting to being contacted in the future to collect additional information about your health (completing surveys) and/or to discuss how your data might be used via phone and/or email.",
        readMoreText:
          "The research team may reach out to you in the future to see if you are interested in participating in future studies. Participation in future studies is optional. The researchers would like your permission to keep your information and study data for future or current research studies. There will be a few questions before signing the consent that allows you to specify how your information and data can be used. You can still be part of the study if you do not allow us to use or share them.",
      },
      {
        heading: "Potential Benefits",
        initialText:
          "This study is not designed to benefit you personally. However, possible future benefits to others include increased understanding of IBD or the impact of surgery on fertility in women with IBD.",
        readMoreText:
          "The goal of the study is to determine the outcomes of pregnancies with inflammatory bowel disease. One arm of the study is to look specifically at impact of surgery on infertility in women with IBD. We also aim to examine the other factors that may predict fertility outcomes. Previous research in this field has been compromised by poor research design and outdated surgical techniques. We plan to use the results of our research to inform women and physicians regarding the true effect of surgery on fertility.",
      },
      {
        heading: "Potential Risks",
        initialText:
          "There always exists the potential for loss of private information.",
        readMoreText: (
          <>
            <div>
              There are procedures in place to minimize this risk.If your data
              is shared in a larger database there are additional risks.
            </div>
            <div style={{ marginTop: "15px" }}>
              Group Risks - Although your name will not be given to researchers,
              basic information such as your race, ethnic group, and sex may be
              shared. This information helps researchers learn whether the
              factors that lead to health problems are the same in different
              groups of people. It is possible that such findings could one day
              help people of the same race, ethnic group, or sex as you.
              However, they could also be used to support harmful stereotypes or
              discrimination.
            </div>
            <div style={{ marginTop: "15px" }}>
              Privacy Risks - Your name and other information that could
              directly identify you (such as an address, date of birth, or
              social security number) will never be placed into a shared
              database. However, there is a small chance that someone could
              trace it back to you. The risk of this happening is very small,
              but may grow in the future. If your private information was
              misused, it is possible you would experience other harms, such as
              stress, anxiety, stigmatization, or embarrassment from revealing
              information about your family relationships, ethnic heritage, or
              health conditions.
            </div>
          </>
        ),
      },
      {
        heading: "Withdrawing",
        initialText: (
          <>
            <div>
              There will be no penalty if you decide not to take part in this
              study. You can withdraw your consent and discontinue participation
              at any time.
            </div>
            <div style={{ marginTop: "15px" }}>
              The study team can be reached via email (wisdom@mssm.edu) or phone
              (212-824-7786).
            </div>
          </>
        ),

        readMoreText:
          "There will be no penalty to you if you decide not to take part in this study. To stop being in the study at any time, you may withdraw from the study when completing the monthly surveys or by contacting the study team by email or phone. If you withdraw from the study, we will stop collecting new data, but any data already collected will remain as part of the study. The study team may also withdraw you from the study at any time for any reason.",
      },
    ];

    return content[this.props.currentStep];
  };

  render() {
    const { open, currentStep, onClose } = this.props;
    const { heading, initialText, readMoreText } = this.renderContent();
    const { expanded,showMore } = this.state;

    return (
      <div>
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
              width: { xs: "90%", sm: "80%", md: "60%" },
              maxWidth: "600px",
              height: "auto",
              maxHeight: "80vh",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: { xs: "16px", sm: "24px", md: "32px" },
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowY: "auto",
              gap: { xs: "16px", sm: "24px", md: "32px" },
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
                  {heading}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    fontWeight: 400,
                    color: "#363738",
                    lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                    textAlign: "left",
                    paddingBottom: "10px",
                  }}
                >
                  {initialText}
                </Typography>
                {/* <Accordion
                  sx={{
                    border: "1px solid #E0E0E0",
                    boxShadow: "none",
                    width: "98%",
                  }}
                  expanded={expanded} 
                  onChange={this.handleAccordionChange}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {`Click here to learn more about ${heading}`}
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
                      {readMoreText}
                    </Typography>
                  </AccordionDetails>
                </Accordion> */}

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.showMore}
                      onChange={this.toggleShowMore}
                      color="primary"
                    />
                  }
                  label={`Click here to learn more about ${heading}`}
                  sx={{
                    fontSize: "18px !important",
                    fontWeight: 500,
                    marginTop: "10px",
                    marginRight: "0px",
                    width: "100%",
                    textAlign: "left",
                  }}
                />

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
                    {readMoreText}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Dots */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {[0, 1, 2, 3].map((step) => (
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
              sx={{
                display: "flex",
                width: { xs: "80%", sm: "60%", md: "50%" },
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  fontWeight: { xs: 500, sm: 700, md: 700 },
                  fontSize: "20px",
                  lineHeight: "20px",
                  letterSpacing: "0.5px",
                  color: "#D80C8C",
                  backgroundColor: "#FFFFFF",
                  padding: "12px 14px",
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
                onClick={this.handleNext}
                sx={{
                  fontWeight: { xs: 500, sm: 700, md: 700 },
                  fontSize: "20px",
                  lineHeight: "20px",
                  letterSpacing: "0.5px",
                  color: "#FFFFFF",
                  backgroundColor: "#D80C8C",
                  padding: "12px 14px",

                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#D80C8C",
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default CustomModal2;
