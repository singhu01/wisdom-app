import React, { useState } from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import { ReactComponent as NextIcon } from "../src/assets/icons/next.svg";
import { ReactComponent as PreviousIcon } from "../src/assets/icons/previous.svg";
import { FilledPDF } from "./FilledPDF";
import CustomModal3 from "./CustomModal3";
import nextImage from "../src/assets/images/nextImage.png";

class Certify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false, // To track when the user is drawing
    };
  }

  onBack = () => {
    this.props.onClickGoToPage("Certify")();
  };

  render() {
    return (
      <>
        <Box
          sx={{
            boxSizing: "border-box",
            width: "100%",
            padding: {
              xs: "0 20px", // Adjust padding for xs screens
              sm: "0 40px", // Adjust padding for sm screens
              md: "0 65px", // Original padding for md and above
            },
          }}
        >
          <Header />
          <Box
            sx={{
              width: "100%",
              paddingTop: { xs: "20px", sm: "30px", md: "57px" },
              ml: {
                xs: -1,
                sm: 0,
                md: 2,
              },
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "rgba(26, 32, 44, 1)",
                fontWeight: 800,
                fontFamily: "Montserrat",
                fontSize: { xs: "24px", sm: "32px", md: "40px" },
              }}
            >
              CONSENT REVIEW
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontWeight: 400,
                fontFamily: "Montserrat",
                fontSize: { xs: "14px", sm: "18px", md: "20px" },
                mt: { xs: 1, md: 2 },
              }}
            >
              Displayed below is a read-only copy of your survey responses.
              Please review it and the options at the bottom.
            </Typography>
          </Box>
          <div style={{ marginTop: "15px" }}>
            <FilledPDF consentFormData={this.props.consentFormData} />
          </div>
          <Box
            sx={{
              boxSizing: "border-box",
              width: "100%",
              paddingTop: { xs: "20px", sm: "30px", md: "57px" },
              ml: {
                xs: -1,
                sm: 0,
                md: 2,
              },
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onChange={this.props.checkCheckbox(
                    "consentFormData",
                    "consent_certified"
                  )}
                  checked={
                    this.props.getValue(
                      "consentFormData",
                      "consent_certified"
                    ) === "1"
                  }
                  name="consentCheckbox"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "#363738",
                    fontSize: { xs: "12px", sm: "16px", md: "24px" },
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                >
                  I certify that all of my information in the document above is
                  correct. I understand that clicking 'Submit' will
                  electronically sign the form and that signing this form
                  electronically is the equivalent of signing a physical
                  document.
                </Typography>
              }
            />
            <Typography
              sx={{
                color: "#363738",
                fontSize: { xs: "12px", sm: "16px", md: "24px" },
                fontFamily: "Inter",
                fontWeight: 400,
                marginTop: { xs: "8px", sm: "12px", md: "16px" },
              }}
            >
              If any information above is not correct, you may click
              <span style={{ fontWeight: "bold" }}> Go Back </span>
              to go back and correct it.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            width: "95%",
            mt: { xs: 3, sm: 4, md: 4 },
            paddingLeft: { xs: "16px", sm: "24px", md: "60px" },
            paddingRight: { xs: "16px", sm: "24px" },
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // maxWidth: { xs: "100%", sm: "90%", md: "1200px" },
            margin: "0 auto",
            flexDirection: { xs: "row", md: "row" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: "blue",
                minWidth: "auto",
                display: "flex",
                alignItems: "center",
                ml: -6,
              }}
              startIcon={<PreviousIcon />}
              onClick={this.props.onClickGoToPage("Consent")}
            >
              <Typography
                sx={{
                  color: "rgba(0, 0, 0, 0.68)",
                  fontSize: { xs: "14px", sm: "16px", md: "24px" },
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontFamily: "Inter",
                }}
              >
                GO BACK
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: "blue",
                minWidth: "auto",
                display: "flex",
                alignItems: "center",
                pr: "12",
              }}
              onClick={this.props.onClickCertify}
              disabled={
                this.props.getValue("consentFormData", "consent_certified") !==
                "1"
              }
              endIcon={<NextIcon />}
            >
              <Typography
                sx={{
                  color: "#D80C8C",
                  fontSize: { xs: "16px", sm: "18px", md: "24px" },
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontFamily: "Inter",
                }}
              >
                SUBMIT
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  color: "blue",
                  minWidth: "auto",
                  display: "flex",
                  alignItems: "center",
                  mr: -3,
                }}
                onClick={this.props.onClickGoToPage("Consent")}
                startIcon={<PreviousIcon />}
              />
              <Button
                sx={{
                  color: "blue",
                  minWidth: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={this.props.onClickCertify}
                endIcon={<NextIcon />}
              />
            </Box>
          </Box>
        </Box>

        {this.props.modalOpen ? (
          <CustomModal3
            open={this.props.modalOpen}
            onBack={this.onBack}
            // onClose={this.onClose}
            onNext={this.props.onNext}
            title={"Nice Work"}
            message={
              "Thank you for enrolling in the study. Click Next to complete the baseline questionnaire."
            }
            imageSrc={nextImage}
            buttonText={"Next"}
          />
        ) : null}
      </>
    );
  }
}

export default Certify;
