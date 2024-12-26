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
import SignaturePad from "react-signature-canvas";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";

class ElectronicConsent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
      isContinueClicked: false, 
      consentFormData: {
        allow_data_use: "",
        permission_to_contact: "",
        permission_to_use_data_directly_related: "",
        permission_to_use_data_not_related: "",
        permission_to_give_data: "",
        consent_printed_name: "", 
      },
    };
  }

  handleSignatureStart = () => {
    this.setState({ isDrawing: true });
  };
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

  onClickSubmitConsent = (e) => {
    this.setState({ isContinueClicked: true });
    if (!this.validateFields()) {
      return; 
    }
    const printedName = this.props.getValue(
      "consentFormData",
      "consent_printed_name"
    );
    if (!printedName || printedName.trim() === "") {
      alert("The Printed Name of Participant is required.");
      return; // Stop further execution
    }

    if (this.sigCanvas.isEmpty()) {
      this.sigRequired.show({
        severity: "warn",
        summary: "Warning",
        detail: "Your signature is required.",
        life: 3000,
      });
      return; 
    }

    const formData = { ...this.props.state["consentFormData"] };
    formData["consent_signature"] = this.sigCanvas.toDataURL();
    this.props.onValueChange("consentFormData", formData);

    this.props.onClickGoToPage("Certify")();
  };

  onClickClearSignature = (e) => {
    console.log("e");
    this.sigCanvas.clear();
  };

  validateFields = () => {
    const requiredFields = [
      "allow_data_use", 
      "permission_to_contact", 
      "permission_to_use_data_directly_related", 
      "permission_to_use_data_not_related", 
      "permission_to_give_data", 
       "consent_printed_name"
    ];
  
    const allowDataUse = this.props.getValue("consentFormData", "allow_data_use");
  
    // Filter out fields that are not required based on the user's response
    const conditionalFields = [
      "permission_to_contact",
      "permission_to_use_data_directly_related",
      "permission_to_use_data_not_related",
      "permission_to_give_data"
    ];
  
    const fieldsToValidate = requiredFields.filter(field => {
      if (field === "allow_data_use") return true; 
      if (allowDataUse === "1" && conditionalFields.includes(field)) return true; 
      return false;
    });
  
    const emptyFields = fieldsToValidate.filter(
      (field) => this.props.getValue("consentFormData", field) === "" || this.props.getValue("consentFormData", field) === null
    );

    if (emptyFields.length > 0) {
      alert("Please answer all required questions.");
      return false;
    }
    return true;
  };

  onFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    this.props.onValueChange("consentFormData", {
      ...this.props.state.consentFormData,
      [fieldName]: value,
    });
  };
  

  render() {
    return (
      <>
        <Box
          sx={{
            boxSizing: "border-box",
            width: "100%",
            padding: {
              xs: "0 20px",
              sm: "0 40px",
              md: "0 65px",
            },
          }}
        >
          <Header />
          <Box
            sx={{
              width: "100%",
              paddingTop: { xs: "10px", sm: "16px", md: "24px" },
              maxWidth: { xs: "90%", sm: "85%", lg: "1200px" },
              margin: "0 auto",
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
              WISDOM ELECTRONIC CONSENT
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
              Thank you again for your interest in the WIsDoM study. Please
              review the consent document below. If you would like to
              participate in the study, at the end of the page please
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            boxSizing: "border-box",
            width: "100%",
            mt: { xs: 4, sm: 6, md: 8 },
            p: 2,
            background: "linear-gradient(90deg, #D80C8C 0%, #221F73 100%)",
            border: "1px solid rgba(0, 0, 0, 0.19)",
            boxShadow: "0px 2px 12.5px 0px rgba(0, 0, 0, 0.19)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            overflow: "hidden",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <Box
              key={num}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                width: { xs: "100%", sm: "14%", md: "12%" },
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "36px",
                  lineHeight: "1.2",
                  fontWeight: 700,
                  fontFamily: "IBM Plex Sans",
                }}
              >
                {num}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "16px",
                  lineHeight: "1.2",
                  mt: 0,
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                }}
              >
                {index === 0 && (
                  <>
                    Click the statement confirming that you have reviewed and
                    understand the study information.
                  </>
                )}
                {index === 1 && <>Complete the use of Your Data Question(s).</>}
                {index === 2 && <>Sign the document.</>}
                {index === 3 && <>Enter your full Name.</>}
                {index === 4 && (
                  <>Enter the date and time (can click the Now button).</>
                )}
                {index === 5 && (
                  <>
                    Click Next and review the submitted information before
                    clicking the certification statement and then clicking
                    Submit.
                  </>
                )}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            width: { xs: "100%", sm: "100%", md: "100%" },
            height: { xs: "300px", sm: "400px", md: "500px" },
          }}
        >
          <iframe
            src="https://wisdom-dev-app.azurewebsites.net/webapp/build/Wisdom_consent_2023_09_11.pdf"
            width="90%"
            height="100%"
            style={{
              border: "none",
              overflow: "auto",
            }}
            title="PDF Viewer"
          />
        </Box>

        <Box
          sx={{
            boxSizing: "border-box",
            width: "90%",
            // maxWidth: { xs: "90%", sm: "85%", md: "1200px" },
            margin: "0 auto",
            paddingTop: { xs: "16px", md: "24px" },
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                onChange={this.props.checkCheckbox(
                  "consentFormData",
                  "agree_to_take_part"
                )}
                checked={
                  this.props.getValue(
                    "consentFormData",
                    "agree_to_take_part"
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
                  fontSize: { xs: "12px", sm: "16px", md: "18px" },
                  fontFamily: "Inter",
                  fontWeight: 400,
                }}
              >
                By clicking or tapping here, you confirm that you have reviewed
                the information about the study. You confirm that you understand
                the study and all of your questions about the research study
                have been answered at this time. You voluntarily agree to take
                part in the research study.
              </Typography>
            }
          />

          <Typography
            sx={{
              color: "#363738",
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontFamily: "Inter",
              fontWeight: 400,
              mt: { xs: "16px", md: "24px" },
              marginLeft: { xs: "32px", sm: "32px" },
            }}
          >
            If you agree to take part in the research study, below will be the
            Use of Your Data questions for you to respond to. Your signature for
            documenting your permission to take part in this research study will
            be at the bottom of the page.
          </Typography>

          {this.props.getValue("consentFormData", "agree_to_take_part") ===
            "1" && (
            <>
              <Box
                sx={{
                  mt: 4,
                  mb: 2,
                  display: "flex",
                  flexDirection: { xs: "row", md: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    width: "70%",
                    color: "black",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: { xs: "12px", sm: "16px", md: "18px" },
                  }}
                >
                  <span style={{ color: "red" }}>*</span> Indicates a required
                  field
                </Typography>
              </Box>

              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  flexDirection: { xs: "row", md: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    width: "70%",
                    color: "black",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: { xs: "12px", sm: "16px", md: "18px" },
                  }}
                >
                  <span style={{ color: "red" }}>*</span> Will you allow the
                  researchers to store your data to use in current or future
                  research studies?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.props.onFieldChange(
                      "consentFormData",
                      "allow_data_use"
                    )}
                    checked={
                      this.props.getValue(
                        "consentFormData",
                        "allow_data_use"
                      ) === "1"
                    }
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.props.onFieldChange(
                      "consentFormData",
                      "allow_data_use"
                    )}
                    checked={
                      this.props.getValue(
                        "consentFormData",
                        "allow_data_use"
                      ) === "0"
                    }
                  />
                </RadioGroup>
              </Box>

              {this.props.getValue("consentFormData", "allow_data_use") ===
              "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      flexDirection: { xs: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        width: "70%",
                        color: "black",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: { xs: "12px", sm: "16px", md: "18px" },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span> Do you give the
                      researchers permission to contact you in the future to
                      collect additional information about you, discuss how your
                      data might be used, or to discuss possible participation
                      in another research project?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_contact"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_contact"
                          ) === "1"
                        }
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_contact"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_contact"
                          ) === "0"
                        }
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      flexDirection: { xs: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        width: "70%",
                        color: "black",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: { xs: "12px", sm: "16px", md: "18px" },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span> Do you give the
                      researchers permission to keep the data indefinitely and
                      use them for future studies that are directly related to
                      the purpose of the current study?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_use_data_directly_related"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_use_data_directly_related"
                          ) === "1"
                        }
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_use_data_directly_related"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_use_data_directly_related"
                          ) === "0"
                        }
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      flexDirection: { xs: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        width: "70%",
                        color: "black",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: { xs: "12px", sm: "16px", md: "18px" },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span> Do you give the
                      researchers permission to keep the data indefinitely and
                      use them for future studies that are not related to the
                      purpose of the current study (for example, a different
                      area of research)?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_use_data_not_related"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_use_data_not_related"
                          ) === "1"
                        }
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_use_data_not_related"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_use_data_not_related"
                          ) === "0"
                        }
                      />
                    </RadioGroup>
                  </Box>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      flexDirection: { xs: "row", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        width: "70%",
                        color: "black",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: { xs: "12px", sm: "16px", md: "18px" },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span> Do you give
                      permission to have portions of the data given to other
                      researchers at Mount Sinai or other institutions for use
                      in research that is either related or not related to the
                      purpose of this study?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_give_data"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_give_data"
                          ) === "1"
                        }
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.props.onFieldChange(
                          "consentFormData",
                          "permission_to_give_data"
                        )}
                        checked={
                          this.props.getValue(
                            "consentFormData",
                            "permission_to_give_data"
                          ) === "0"
                        }
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
            </>
          )}
        </Box>

        <Box
          sx={{
            width: "90%",
            paddingTop: { xs: "10px", sm: "16px", md: "24px" },
            maxWidth: { xs: "90%", sm: "90%", lg: "90%" },
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "#1A202C",
              fontWeight: 800,
              fontFamily: "Montserrat",
              fontSize: "25px",
              mt: { xs: 1, sm: 2, md: 3 },
            }}
          >
            ADULT PARTICIPANT
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "#363738",
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: { xs: "14px", sm: "18px", md: "24px" },
              mt: { xs: 1, sm: 2, md: 3 },
            }}
          >
            Your signature below documents your permission to take part in this
            research study and to the use and disclosure of your protected
            health information. A signed and dated copy will be given to you.
          </Typography>

          <Box
            sx={{
              backgroundColor: "#F1F3F7",
              padding: { xs: "16px", sm: "24px" },
              mt: { xs: 2, sm: 4 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "150px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            {!this.state.isDrawing && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "#D80C8C",
                  fontSize: { xs: "26px", sm: "18px", md: "40px" },
                  fontFamily: "Qwitcher Grypen",
                  fontWeight: 400,
                }}
              >
                Your Signature Here
              </Typography>
            )}
            <SignaturePad
              canvasProps={{
                width: 600,
                height: 200,
                className: "sigCanvas",
                style: { cursor: "pointer" },
              }}
              ref={(ref) => {
                this.sigCanvas = ref;
              }}
              onBegin={this.handleSignatureStart}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              alignItems: "flex-start",
              justifyContent: { md: "space-between" },
              mt: { xs: 2, sm: 4 },
              padding: { xs: "8px", sm: "2px" },
              gap: { xs: 1, sm: 8, md: 10 },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                label: "Clear",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontFamily: "Inter",
                color: "#000000",
                border: "2px solid #D80C8C",
                "&:hover": {
                  border: "2px solid #D80C8C",
                },
                minWidth: "150px",
              }}
              onClick={this.onClickClearSignature}
            >
              Clear Signature
            </Button>

            <Typography
              sx={{
                color: "#363738",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                fontFamily: "Montserrat",
                fontWeight: 500,
                textAlign: { xs: "left", sm: "left", md: "center" },
                flexGrow: 1,
              }}
            >
               <span style={{ color: "red" }}>*</span>
              Printed Name of Participant:{" "}
              <div style={{ paddingTop: "5px" }}>
                <InputText
                  placeholder=" Enter Name"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    color: "#666666",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    textAlign: "center",
                    cursor: "pointer",
                    border: "1px solid black",
                  }}
                  value={
                    this.props.getValue(
                      "consentFormData",
                      "consent_printed_name"
                    ) === "0"
                      ? ""
                      : this.props.getValue(
                          "consentFormData",
                          "consent_printed_name"
                        )
                  }
                  onChange={this.props.onFieldChange(
                    "consentFormData",
                    "consent_printed_name"
                  )}
                />
              </div>
            </Typography>

            <Typography
              sx={{
                color: "#363738",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                fontFamily: "Inter",
                fontWeight: 400,
                textAlign: { xs: "left", sm: "left", md: "center" },
                minWidth: "180px",
              }}
            >
              Date and Time:
              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  color: "#666666",
                }}
              >
                {this.props?.state?.consentFormData?.consent_given_on}
              </div>
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              mt: 4,
              paddingLeft: { xs: "16px", sm: "32px" },
              backgroundColor: "rgba(255, 255, 255, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.68)",
                fontSize: "24px",
                fontWeight: 600,
                mr: 1,
                fontFamily: "Inter",
              }}
            >
              CONTINUE
            </Typography>
            <Button
              onClick={this.onClickSubmitConsent}
              sx={{ color: "blue" }}
              startIcon={<NextIcon />}
            ></Button>
          </Box>
        </Box>

        <Toast
          ref={(ref) => {
            this.sigRequired = ref;
          }}
        />
      </>
    );
  }
}

export default ElectronicConsent;
