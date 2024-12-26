import React from "react";
import $ from "jquery";
import validator from "validator";
import SignaturePad from "react-signature-canvas";

import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { RadioButton } from "primereact/radiobutton";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { PageHeader } from "./PageHeader";
import { Landing } from "./Landing";
import { Welcome } from "./Welcome";
import { EmailExists } from "./EmailExists";
import { StudyTasks } from "./StudyTasks";
import { Privacy } from "./Privacy";
import { DataCollection } from "./DataCollection";
import { Recontacting } from "./Recontacting";
import { PotentialBenefits } from "./PotentialBenefits";
import { PotentialRisks } from "./PotentialRisks";
import { Withdrawing } from "./Withdrawing";
import { Confidentiality } from "./Confidentiality";
import { FilledPDF } from "./FilledPDF";

import { RTLForm } from "./RTLForm";
import { baselinePatientElements } from "./BaselinePatient";
import { monthlyFollowUpElements } from "./MonthlyFollowUp";
import BaselinePatients from "./BaselinePatients";
import { ReactComponent as PreviousIcon } from "./assets/previous.svg";
import { ReactComponent as NextIcon } from "./assets/next.svg";
import thankyou from "./assets/thankyou.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Modal,
  IconButton,
  Grid,
  TextField,
  Snackbar,
} from "@mui/material";
import elligibilityImage from "./assets/elligibilityImage.png";
import { Select, MenuItem } from "@mui/material";
import { ReactComponent as PdfIcon } from "./assets/pdf.svg";
import Header from "./Header";
import { BreakTime } from "./BreakTime";
import { BreakTime2 } from "./BreakTime2";
import { ComprehensionQuiz } from "./ComprehensionQuiz";
import ElectronicConsent from "./ElectronicConsent";
import Certify from "./Certify";
import imageTwo from "./assets/imageTwo.png";
import accessKeyBackGround from "./assets/accessKeyBackground.png";
import imageOne from "./assets/imageOne.png";
import rightArrow from "./assets/arrowRigth.png";
import Monthly from "./Monthy";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 66,
  height: 36,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 24,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(30px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 4,
    "&.Mui-checked": {
      transform: "translateX(30px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "green",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 28,
    height: 28,
    borderRadius: 14,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 36 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      open: true,
      view: "Landing",
      eligibilityCriteriaFormData: {
        is_female: "0",
        is_18_or_older: "0",
        is_45_or_younger: "0",
        has_ibd_diagnosis: "0",
        was_uterus_removed: "0",
        is_currently_pregnant: "0",
        is_planning_pregnancy: "0",
      },
      eligibilityCriteriaFormErrors: {},
      contactInformationFormData: {
        screening_prefermethod: "1",
      },
      contactInformationFormErrors: {},
      quizData: {},
      breakTimeData: {},
      baselinePatientFormVisible: false,
      monthlyFollowUpFormVisible: false,
      enrolleeAccessData: {},
      consentFormData: {},
      isLoggedIn: false,
    };
    // this.msalConfig = {
    //   auth: {
    //     clientId: '43874f05-174d-4f18-afad-c66c6a90b2cd',
    //     authority: 'https://login.microsoftonline.com/5a6c876c-f971-4b14-91e5-b14f89bb031d',
    //     redirectUri: 'http://localhost:3000/',
    //     clientSecret: '.od8Q~IpjsAHju2HM-4_qVLLjt17S7G2JX1Ntc2_'
    //   },
    //   cache: {
    //     cacheLocation: 'sessionStorage',
    //     storeAuthStateInCookie: true,
    //   },
    // };
    // this.msalInstance = new PublicClientApplication(this.msalConfig);
  }

  componentDidMount() {
    $.post(
      "./api/get_user.php",
      {},
      function (response) {
        // This is temporary code that is in place until the production database is ready.
        // When ready, remove the code and uncomment out the rest of the code.
        // this.setState({
        //     isLoaded: true,
        //     sites: []
        // });

        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            this.setState({
              isLoaded: true,
              sites: response.data.sites,
            });
          } else {
            this.error_alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
    const user = localStorage.getItem("user");
    if (user) {
      this.setState({ isLoggedIn: true });
    }
    console.log("Executing componentDidMount.");
  }

  handleLoginSuccess = () => {
    this.setState({ isLoggedIn: true });
    localStorage.setItem("user", "user_data_here");
    // this.handleClose();
  };

  render() {
    if (this.state.isLoaded) {
      let siteOptions = this.state.sites.map(function (value) {
        return { label: value.site_name, value: value.site_name };
      });
      siteOptions.push({ label: "Other", value: "Other" });
      switch (this.state.view) {
        case "Landing":
          return <Landing onClickGoToPage={this.onClickGoToPage} />;
        case "Welcome":
          return <Welcome onClickGoToPage={this.onClickGoToPage} />;
        case "Eligibility Criteria":
          return (
            <>
              <Grid sx={{ paddingRight: "40px" }}>
                <Header />
              </Grid>
              <Box
                sx={{
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "0 65px",
                  "@media (max-width: 600px)": {
                    padding: "0 16px",
                  },
                }}
              >
                <Box sx={{ width: "100%", paddingTop: "57px" }}>
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "90%",
                        md: "70%",
                      },
                      ml: {
                        xs: 0,
                        sm: 0,
                        md: 2,
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        color: "#1A202C",
                        fontWeight: 800,
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: {
                          xs: "24px",
                          sm: "28px",
                          md: "46px",
                        },
                      }}
                    >
                      ELIGIBILITY CRITERIA
                    </Typography>

                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "#000000",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "22px",
                        },
                      }}
                    >
                      Before you begin the walk through of the consent, the
                      study team will need to determine if you meet the
                      qualifications to join this study.
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        color: "#000000",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "22px",
                        },
                        mt: 4,
                      }}
                    >
                      Your responses will be kept for tracking purposes and
                      general reporting of how many people completed the
                      screening, how many and why individuals didn't meet
                      inclusion criteria, and how many decided not to
                      participate in the research study. This information will
                      be stored without your contact information if you are
                      ineligible for the study and unlinked to your contact
                      information if you choose not to participate in the study.
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        mt: 3,
                        color: "#000000",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "22px",
                        },
                      }}
                    >
                      If you do not wish to answer these questions or do not
                      want to participate in the study, you can close the window
                      at any time to exit.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                      },
                      ml: {
                        xs: 0,
                        sm: 0,
                        md: 1.5,
                      },
                      mt: 4,
                      p: 2,
                      backgroundColor: "#rgba(255, 255, 255, 1)",
                      borderRadius: "20px",
                      border: "1px solid rgba(0, 0, 0, 0.19)",
                      boxShadow: "0px 2px 12.5px 0px rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#1C1C1C",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Indicates a required field
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#1C1C1C",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Were you assigned female at birth, such as on an
                        original birth certificate?
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                          mt: {
                            xs: 2,
                            sm: 2,
                            md: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          No
                        </Typography>
                        <AntSwitch
                          checked={
                            this.getValue(
                              "eligibilityCriteriaFormData",
                              "is_female"
                            ) === "1"
                          }
                          onChange={(e) =>
                            this.onFieldChange(
                              "eligibilityCriteriaFormData",
                              "is_female"
                            )({
                              target: { value: e.target.checked ? "1" : "0" },
                            })
                          }
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          Yes
                        </Typography>
                      </Stack>

                      {/* {!this.isEmpty(
                        "eligibilityCriteriaFormErrors",
                        "is_female"
                      ) && (
                        <Message
                          severity="error"
                          text={this.getValue(
                            "eligibilityCriteriaFormErrors",
                            "is_female"
                          )}
                        />
                      )} */}
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#1C1C1C",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Are you 18 years of age or older?
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                          mt: {
                            xs: 2,
                            sm: 2,
                            md: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          No
                        </Typography>
                        <AntSwitch
                          checked={
                            this.getValue(
                              "eligibilityCriteriaFormData",
                              "is_18_or_older"
                            ) === "1"
                          }
                          onChange={(e) =>
                            this.onFieldChange(
                              "eligibilityCriteriaFormData",
                              "is_18_or_older"
                            )({
                              target: { value: e.target.checked ? "1" : "0" },
                            })
                          }
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          Yes
                        </Typography>
                      </Stack>

                      {/* {!this.isEmpty(
                        "eligibilityCriteriaFormErrors",
                        "is_18_or_older"
                      ) && (
                        <Message
                          severity="error"
                          text={this.getValue(
                            "eligibilityCriteriaFormErrors",
                            "is_18_or_older"
                          )}
                        />
                      )} */}
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#1C1C1C",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Are you 45 years old or younger?
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                          mt: {
                            xs: 2,
                            sm: 2,
                            md: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          No
                        </Typography>
                        <AntSwitch
                          checked={
                            this.getValue(
                              "eligibilityCriteriaFormData",
                              "is_45_or_younger"
                            ) === "1"
                          }
                          onChange={(e) =>
                            this.onFieldChange(
                              "eligibilityCriteriaFormData",
                              "is_45_or_younger"
                            )({
                              target: { value: e.target.checked ? "1" : "0" },
                            })
                          }
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          Yes
                        </Typography>
                      </Stack>
                      {/* 
                      {!this.isEmpty(
                        "eligibilityCriteriaFormErrors",
                        "is_45_or_younger"
                      ) && (
                        <Message
                          severity="error"
                          text={this.getValue(
                            "eligibilityCriteriaFormErrors",
                            "is_45_or_younger"
                          )}
                        />
                      )} */}
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#1C1C1C",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Have you been diagnosed with inflammatory bowel disease
                        (IBD) (like ulcerative colitis or Crohn's disease)?
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                          mt: {
                            xs: 2,
                            sm: 2,
                            md: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          No
                        </Typography>
                        <AntSwitch
                          checked={
                            this.getValue(
                              "eligibilityCriteriaFormData",
                              "has_ibd_diagnosis"
                            ) === "1"
                          }
                          onChange={(e) =>
                            this.onFieldChange(
                              "eligibilityCriteriaFormData",
                              "has_ibd_diagnosis"
                            )({
                              target: { value: e.target.checked ? "1" : "0" },
                            })
                          }
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          Yes
                        </Typography>
                      </Stack>

                      {/* {!this.isEmpty(
                        "eligibilityCriteriaFormErrors",
                        "has_ibd_diagnosis"
                      ) && (
                        <Message
                          severity="error"
                          text={this.getValue(
                            "eligibilityCriteriaFormErrors",
                            "has_ibd_diagnosis"
                          )}
                        />
                      )} */}
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#1C1C1C",
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Have you had your uterus surgically removed?
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                          mt: {
                            xs: 2,
                            sm: 2,
                            md: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          No
                        </Typography>
                        <AntSwitch
                          checked={
                            this.getValue(
                              "eligibilityCriteriaFormData",
                              "was_uterus_removed"
                            ) === "1"
                          }
                          onChange={(e) =>
                            this.onFieldChange(
                              "eligibilityCriteriaFormData",
                              "was_uterus_removed"
                            )({
                              target: { value: e.target.checked ? "1" : "0" },
                            })
                          }
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography
                          sx={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            fontSize: {
                              xs: "12px",
                              sm: "14px",
                              md: "16px",
                            },
                          }}
                        >
                          Yes
                        </Typography>
                      </Stack>

                      {/* {!this.isEmpty(
                        "eligibilityCriteriaFormErrors",
                        "was_uterus_removed"
                      ) && (
                        <Message
                          severity="error"
                          text={this.getValue(
                            "eligibilityCriteriaFormErrors",
                            "was_uterus_removed"
                          )}
                        />
                      )} */}
                    </Box>

                    {this.getValue(
                      "eligibilityCriteriaFormData",
                      "was_uterus_removed"
                    ) === "0" && (
                      <Box
                        sx={{
                          mb: 2,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          component="div"
                          sx={{
                            color: "#1C1C1C",
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontSize: {
                              xs: "14px",
                              sm: "16px",
                              md: "18px",
                            },
                          }}
                        >
                          <span style={{ color: "red" }}>*</span>
                          Are you currently pregnant?
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          sx={{
                            mt: {
                              xs: 2,
                              sm: 2,
                              md: 0,
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#6B7280",
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: {
                                xs: "12px",
                                sm: "14px",
                                md: "16px",
                              },
                            }}
                          >
                            No
                          </Typography>
                          <AntSwitch
                            checked={
                              this.getValue(
                                "eligibilityCriteriaFormData",
                                "is_currently_pregnant"
                              ) === "1"
                            }
                            onChange={(e) =>
                              this.onFieldChange(
                                "eligibilityCriteriaFormData",
                                "is_currently_pregnant"
                              )({
                                target: { value: e.target.checked ? "1" : "0" },
                              })
                            }
                            inputProps={{ "aria-label": "ant design" }}
                          />
                          <Typography
                            sx={{
                              color: "#6B7280",
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: {
                                xs: "12px",
                                sm: "14px",
                                md: "16px",
                              },
                            }}
                          >
                            Yes
                          </Typography>
                        </Stack>
                        {/* 
                    {!this.isEmpty(
                      "eligibilityCriteriaFormErrors",
                      "is_currently_pregnant"
                    ) && (
                      <Message
                        severity="error"
                        text={this.getValue(
                          "eligibilityCriteriaFormErrors",
                          "is_currently_pregnant"
                        )}
                      />
                    )} */}
                      </Box>
                    )}

                    {this.getValue(
                      "eligibilityCriteriaFormData",
                      "was_uterus_removed"
                    ) === "0" &&
                      this.getValue(
                        "eligibilityCriteriaFormData",
                        "is_currently_pregnant"
                      ) === "0" && (
                        <Box
                          sx={{
                            mb: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="body1"
                            component="div"
                            sx={{
                              color: "#1C1C1C",
                              fontFamily: "Inter",
                              fontWeight: 400,
                              fontSize: {
                                xs: "14px",
                                sm: "16px",
                                md: "18px",
                              },
                            }}
                          >
                            <span style={{ color: "red" }}>*</span>
                            Do you have a desire to become pregnant within the
                            next 18 months?
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{
                              mt: {
                                xs: 2,
                                sm: 2,
                                md: 0,
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#6B7280",
                                fontFamily: "Inter",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                },
                              }}
                            >
                              No
                            </Typography>
                            <AntSwitch
                              checked={
                                this.getValue(
                                  "eligibilityCriteriaFormData",
                                  "is_planning_pregnancy"
                                ) === "1"
                              }
                              onChange={(e) =>
                                this.onFieldChange(
                                  "eligibilityCriteriaFormData",
                                  "is_planning_pregnancy"
                                )({
                                  target: {
                                    value: e.target.checked ? "1" : "0",
                                  },
                                })
                              }
                              inputProps={{ "aria-label": "ant design" }}
                            />
                            <Typography
                              sx={{
                                color: "#6B7280",
                                fontFamily: "Inter",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                },
                              }}
                            >
                              Yes
                            </Typography>
                          </Stack>

                          {/* {!this.isEmpty(
                      "eligibilityCriteriaFormErrors",
                      "is_planning_pregnancy"
                    ) && (
                      <Message
                        severity="error"
                        text={this.getValue(
                          "eligibilityCriteriaFormErrors",
                          "is_planning_pregnancy"
                        )}
                      />
                    )} */}
                        </Box>
                      )}
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "90%",
                      },
                      mt: 4,
                      paddingLeft: {
                        xs: "0",
                        sm: "0",
                        md: "32px",
                      },
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                      },
                      gap: 1,
                      mx: "auto",
                    }}
                  >
                    <Button
                      sx={{ color: "blue" }}
                      onClick={this.onClickGoToPage("Welcome")}
                      startIcon={<PreviousIcon />}
                    />
                    <Button
                      sx={{ color: "blue" }}
                      onClick={this.onClickSubmitEligibilityCriteria}
                      startIcon={<NextIcon />}
                    />
                  </Box>
                </Box>
              </Box>
            </>
          );
        case "Thank You":
          if (this.state.registrant.meets_criteria === "Yes") {
            return (
              <Modal
                open={this.state.registrant.meets_criteria === "Yes"}
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
                      component="img"
                      src={elligibilityImage}
                      alt="elligibilityImage"
                      sx={{
                        width: "100%",
                        maxWidth: "150px",
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
                          fontSize: { xs: "24px", sm: "28px", md: "32px" },
                          fontWeight: 800,
                          color: "#1A202C",
                        }}
                      >
                        Currently Eligible
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "16px", sm: "18px", md: "20px" },
                          fontWeight: 400,
                          color: "#363738",
                          lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                        }}
                      >
                        Thank you again for your interest in the WIsDoM study.
                        You have met the initial qualifications to join the
                        study. Please click{" "}
                        <span style={{ fontWeight: "bold", color: "#D80C8C" }}>
                          Next
                        </span>{" "}
                        to begin the consent process.
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "16px", sm: "18px", md: "20px" },
                          fontWeight: 400,
                          color: "#363738",
                        }}
                      >
                        If you have questions, please reach out to us via email
                        (
                        <a
                          style={{ color: "black" }}
                          href="mailto:wisdom@mssm.edu"
                          target="_blank"
                          rel="noreferrer"
                        >
                          wisdom@mssm.edu
                        </a>
                        ) or phone (212-824-7786).
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    sx={{
                      fontWeight: { xs: 500, sm: 600, md: 600 },
                      fontSize: "18px",
                      marginTop: "15px",
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
                    onClick={this.onClickGoToPage("Introduction")}
                  >
                    Next
                  </Button>
                </Box>
              </Modal>
            );
          } else {
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
                    p: { xs: "16px", sm: "24px", md: "30px" },
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ overflowY: "auto", textAlign: "center" }}>
                    <Box
                      component="img"
                      src={elligibilityImage}
                      alt="elligibilityImage"
                      sx={{
                        width: "100%",
                        maxWidth: "150px",
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
                          fontSize: { xs: "24px", sm: "28px", md: "32px" },
                          fontWeight: 800,
                          color: "#1A202C",
                        }}
                      >
                        Currently Ineligible
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "16px", sm: "18px", md: "20px" },
                          fontWeight: 400,
                          color: "#363738",
                          lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                        }}
                      >
                        Thank you again for your interest in the WIsDoM study.
                        We are sorry, you do not meet the eligibility criteria
                        to participate in this study at this time. We appreciate
                        your interest. If you have questions about why you are
                        ineligible, please reach out to us via email (
                        <a
                          style={{ color: "black" }}
                          href="mailto:wisdom@mssm.edu"
                          target="_blank"
                          rel="noreferrer"
                        >
                          wisdom@mssm.edu
                        </a>
                        ) or phone (212-824-7786). Please click{" "}
                        <span style={{ fontWeight: "bold" }}>Next</span> to
                        exit.
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    sx={{
                      fontWeight: { xs: 500, sm: 600, md: 600 },
                      fontSize: "18px",
                      marginTop: "15px",

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
                      this.onClickGoToPage("Landing");
                      window.location.reload();
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Modal>
            );
          }
        case "Introduction":
          return (
            <>
              <Grid sx={{ paddingRight: "40px" }}>
                <Header />
              </Grid>
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
                <Box sx={{ width: "100%", paddingTop: "57px" }}>
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "70%",
                      },
                      ml: {
                        xs: 0,
                        sm: 0,
                        md: 2,
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        color: "#1A202C",
                        fontWeight: 800,
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: {
                          xs: "32px",
                          sm: "36px",
                          md: "46px",
                        },
                      }}
                    >
                      INTRODUCTION
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "#000000",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: {
                          xs: "18px",
                          sm: "20px",
                          md: "22px",
                        },
                      }}
                    >
                      Thank you for your interest in the Women with
                      <span style={{ color: "#D80C8C" }}>
                        {" "}
                        Inflammatory Bowel Disease and Motherhood (WIsDoM)
                      </span>{" "}
                      Study. The main goal of this study is to determine the
                      outcomes of pregnancies in women with inflammatory bowel
                      disease.
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "black",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: {
                          xs: "18px",
                          sm: "20px",
                          md: "22px",
                        },
                      }}
                    >
                      If you are interested in learning more about joining this
                      study, this simple walkthrough will highlight the details
                      of what participation involves.
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "black",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: {
                          xs: "18px",
                          sm: "20px",
                          md: "22px",
                        },
                      }}
                    >
                      After reading about the study, we will ask you to complete
                      a short quiz to make sure that you understand what's
                      involved.
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{
                        mt: 2,
                        color: "black",
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: {
                          xs: "18px",
                          sm: "20px",
                          md: "22px",
                        },
                      }}
                    >
                      You may download a copy of the full consent below for
                      review along with the walkthrough. The full consent will
                      also be available at the very end.
                    </Typography>
                    <Button
                      sx={{
                        color: "rgba(0, 0, 0, 1)",
                        mt: 5,
                        ml: {
                          xs: 0,
                          sm: 0,
                          md: "-12px",
                        },
                        fontFamily: "Montserrat",
                        fontSize: {
                          xs: "16px",
                          sm: "18px",
                          md: "22px",
                        },
                        fontWeight: 400,
                        textTransform: "none",
                      }}
                      startIcon={<PdfIcon />}
                    >
                      <a
                        style={{ color: "#000" }}
                        href="Wisdom_consent_2023_09_11.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Consent Detail Pdf
                      </a>
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: "90%",
                        sm: "90%",
                        md: "90%",
                      },
                      mt: 4,
                      p: 2,
                      backgroundColor: "#rgba(255, 255, 255, 1)",
                      borderRadius: "20px",
                      border: "1px solid rgba(0, 0, 0, 0.19)",
                      boxShadow: "0px 2px 12.5px 0px rgba(0, 0, 0, 0.19)",
                      ml: {
                        xs: 0,
                        sm: 0,
                        md: 1.5,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: {
                          xs: "flex-start",
                          sm: "space-between",
                          md: "space-between",
                        },
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                          md: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          md: "row",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Inter",
                          fontWeight: 500,
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        What facility do you receive IBD care from?
                      </Typography>
                      <Dropdown
                        placeholder="Select"
                        className="responsive-dropdown"
                        value={this.getValue(
                          "contactInformationFormData",
                          "how_heard"
                        )}
                        options={siteOptions}
                        placeholde="Select..."
                        onChange={this.onFieldChange(
                          "contactInformationFormData",
                          "how_heard"
                        )}
                      />
                      {this.getValue(
                        "contactInformationFormData",
                        "how_heard"
                      ) === "Other" && (
                        <label className={"response"}>
                          - specify:{"Select"}
                          <InputText
                            placeholder="Facility name"
                            value={this.getValue(
                              "contactInformationFormData",
                              "other_source"
                            )}
                            onChange={this.onFieldChange(
                              "contactInformationFormData",
                              "other_source"
                            )}
                          />
                        </label>
                      )}
                      {!this.isEmpty(
                        "contactInformationFormErrors",
                        "how_heard"
                      ) && (
                        <Message
                          severity="error"
                          text={this.getValue(
                            "contactInformationFormErrors",
                            "how_heard"
                          )}
                        />
                      )}
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: {
                          xs: "flex-start",
                          sm: "space-between",
                          md: "space-between",
                        },
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                          md: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          md: "row",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Inter",
                          fontWeight: 500,
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Your First Name
                      </Typography>

                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "300px",
                            md: "300px",
                          },
                        }}
                      >
                        <InputText
                          className="responsive-dropdown"
                          value={
                            this.getValue(
                              "contactInformationFormData",
                              "screening_first_name"
                            ) === "0"
                              ? ""
                              : this.getValue(
                                  "contactInformationFormData",
                                  "screening_first_name"
                                )
                          }
                          onChange={this.onFieldChange(
                            "contactInformationFormData",
                            "screening_first_name"
                          )}
                        />
                        {!this.isEmpty(
                          "contactInformationFormErrors",
                          "screening_first_name"
                        ) && (
                          <Message
                            severity="error"
                            text={this.getValue(
                              "contactInformationFormErrors",
                              "screening_first_name"
                            )}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: {
                          xs: "flex-start",
                          sm: "space-between",
                          md: "space-between",
                        },
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                          md: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          md: "row",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Inter",
                          fontWeight: 500,
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Your Last Name
                      </Typography>

                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "300px",
                            md: "300px",
                          },
                        }}
                      >
                        <InputText
                          className="responsive-dropdown"
                          value={
                            this.getValue(
                              "contactInformationFormData",
                              "screening_last_name"
                            ) === "0"
                              ? ""
                              : this.getValue(
                                  "contactInformationFormData",
                                  "screening_last_name"
                                )
                          }
                          onChange={this.onFieldChange(
                            "contactInformationFormData",
                            "screening_last_name"
                          )}
                        />
                        {!this.isEmpty(
                          "contactInformationFormErrors",
                          "screening_last_name"
                        ) && (
                          <Message
                            severity="error"
                            text={this.getValue(
                              "contactInformationFormErrors",
                              "screening_last_name"
                            )}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: {
                          xs: "flex-start",
                          sm: "space-between",
                          md: "space-between",
                        },
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                          md: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          md: "row",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Inter",
                          fontWeight: 500,
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Phone Number
                      </Typography>

                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "300px",
                            md: "300px",
                          },
                        }}
                      >
                        <InputMask
                          className="responsive-dropdown"
                          mask="(999) 999-9999"
                          placeholder="(999) 999-9999"
                          value={this.getValue(
                            "contactInformationFormData",
                            "screening_phone_1"
                          )}
                          onChange={this.onFieldChange(
                            "contactInformationFormData",
                            "screening_phone_1"
                          )}
                        />
                        {!this.isEmpty(
                          "contactInformationFormErrors",
                          "screening_phone_1"
                        ) && (
                          <Message
                            severity="error"
                            text={this.getValue(
                              "contactInformationFormErrors",
                              "screening_phone_1"
                            )}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: {
                          xs: "flex-start",
                          sm: "space-between",
                          md: "space-between",
                        },
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                          md: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          md: "row",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Inter",
                          fontWeight: 500,
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Email Address
                      </Typography>

                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "300px",
                            md: "300px",
                          },
                        }}
                      >
                        <InputText
                          className="responsive-dropdown"
                          value={
                            this.getValue(
                              "contactInformationFormData",
                              "screening_email"
                            ) === "0"
                              ? ""
                              : this.getValue(
                                  "contactInformationFormData",
                                  "screening_email"
                                )
                          }
                          onChange={this.onFieldChange(
                            "contactInformationFormData",
                            "screening_email"
                          )}
                          keyfilter="email"
                          // keyfilter="screening_email"
                        />
                        {!this.isEmpty(
                          "contactInformationFormErrors",
                          "screening_email"
                        ) && (
                          <Message
                            severity="error"
                            text={this.getValue(
                              "contactInformationFormErrors",
                              "screening_email"
                            )}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: {
                          xs: "flex-start",
                          sm: "space-between",
                          md: "space-between",
                        },
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                          md: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          md: "row",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Inter",
                          fontWeight: 500,
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Preferred Method of Contact
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography
                          style={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                          }}
                        >
                          Email
                        </Typography>
                        <AntSwitch
                          checked={
                            this.getValue(
                              "contactInformationFormData",
                              "screening_prefermethod"
                            ) === "2"
                          }
                          onChange={(e) =>
                            this.onFieldChange(
                              "contactInformationFormData",
                              "screening_prefermethod"
                            )({
                              target: { value: e.target.checked ? "2" : "1" },
                            })
                          }
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography
                          style={{
                            color: "#6B7280",
                            fontFamily: "Inter",
                            fontWeight: 500,
                          }}
                        >
                          Phone
                        </Typography>
                      </Stack>

                      {!this.isEmpty(
                        "contactInformationFormErrors",
                        "screening_prefermethod"
                      ) && (
                        <Message
                          severity="error"
                          text={this.getValue(
                            "contactInformationFormErrors",
                            "screening_prefermethod"
                          )}
                        />
                      )}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "90%",
                      mt: 4,
                      paddingLeft: {
                        xs: 0,
                        sm: 0,
                        md: "32px",
                      },
                      backgroundColor: "#rgba(255, 255, 255, 1)",
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                      },
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                        sx={{
                          color: "blue",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={this.onClickSubmitContactInformation}
                        startIcon={<NextIcon />}
                      ></Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          );
        case "Email Exists":
          return <EmailExists onClickGoToPage={this.onClickGoToPage} />;
        case "Study Tasks":
          return <StudyTasks onClickGoToPage={this.onClickGoToPage} />;
        case "Privacy":
          return <Privacy onClickGoToPage={this.onClickGoToPage} />;
        case "Data Collection":
          return <DataCollection onClickGoToPage={this.onClickGoToPage} />;
        case "Break Time 1":
          return (
            <BreakTime
              onClickGoToPage={this.onClickGoToPage}
              onButtonClick={this.onButtonClick}
              isEmpty={this.isEmpty}
            />
          );
        case "Break Time 2":
          return (
            <BreakTime2
              onClickGoToPage={this.onClickGoToPage}
              onButtonClick={this.onButtonClick}
              isEmpty={this.isEmpty}
            />
          );
        case "Confidentiality":
          return <Confidentiality onClickGoToPage={this.onClickGoToPage} />;
        case "Comprehension Quiz":
          return (
            <ComprehensionQuiz
              getValue={this.getValue}
              onFieldChange={this.onFieldChange}
              onClickGoToPage={this.onClickGoToPage}
              modalOpen={false}
              modalView={""}
            />
          );
        case "Quiz Result":
          let missedBreakTimeQuestion =
            this.getValue("breakTimeData", "question1") !== "T" ||
            this.getValue("breakTimeData", "question2") !== "T";
          let missedFinalQuizQuestion =
            this.getValue("quizData", "question1") !== "A" ||
            this.getValue("quizData", "question2") !== "B" ||
            this.getValue("quizData", "question3") !== "B";
          if (missedFinalQuizQuestion) {
            this.missedFinalQuizQuestion = true;
          }
          if (missedBreakTimeQuestion || missedFinalQuizQuestion) {
            let description =
              "Looks like you answered one of the earlier quiz questions incorrectly, as well as one of the final quiz questions.";
            let goBackTo = "Break Time 1";
            let whatToComplete = "earlier quiz questions and final quiz";
            if (!missedBreakTimeQuestion) {
              description =
                "Looks like you answered one of the questions on the final quiz incorrectly.";
              goBackTo = "Comprehension Quiz";
              whatToComplete = "quiz";
            } else if (this.getValue("breakTimeData", "question1") === "T") {
              goBackTo = "Break Time 2";
            }
            if (!missedFinalQuizQuestion) {
              description =
                "Looks like you answered one of the earlier quiz questions incorrectly.";
              whatToComplete = "quiz";
            }

            return (
              <ComprehensionQuiz
                getValue={this.getValue}
                onFieldChange={this.onFieldChange}
                onClickGoToPage={this.onClickGoToPage}
                modalOpen={true}
                modalView={"F"}
                description={description}
                goBackTo={goBackTo}
                whatToComplete={whatToComplete}
                missedBreakTimeQuestion={missedBreakTimeQuestion}
                missedFinalQuizQuestion={missedFinalQuizQuestion}
              />
            );
          } else if (this.missedFinalQuizQuestion) {
            return (
              <ComprehensionQuiz
                getValue={this.getValue}
                onFieldChange={this.onFieldChange}
                onClickGoToPage={this.onClickGoToPage}
                modalOpen={true}
                modalView={"T"}
                goBackTo={"Comprehension Quiz"}
              />
            );
          } else {
            return (
              <ComprehensionQuiz
                getValue={this.getValue}
                onFieldChange={this.onFieldChange}
                onClickGoToPage={this.onClickGoToPage}
                modalOpen={true}
                modalView={"T"}
                goBackTo={"Comprehension Quiz"}
              />
            );
          }
        case "Before Consent":
          return (
            <div
              style={{
                backgroundColor: "white",
                textAlign: "left",
                margin: "20px",
                fontSize: "14pt",
              }}
            >
              <PageHeader />
              <div
                style={{
                  backgroundColor: "#221f72",
                  color: "white",
                  padding: "5px",
                  marginTop: "20px",
                }}
              >
                Consent Process
              </div>
              <div style={{ marginTop: "15px" }}>
                The following page will be the consent form.
              </div>
              <div style={{ marginTop: "15px" }}>
                Please click <span style={{ fontWeight: "bold" }}>Next</span> to
                review and sign the consent form.
              </div>
              <div style={{ marginTop: "15px", fontWeight: "bold" }}>
                By clicking <span style={{ fontWeight: "bold" }}>Next</span>,
                you will be taken to the consent form for your review. If you
                would like to participate in the study, please follow the
                instructions on the next page for completing the consent
                document.
              </div>
              <div style={{ marginTop: "15px" }}>
                If you have any questions about the study or the consent, please
                reach out to the study team via email (
                <a
                  style={{ color: "black" }}
                  href="mailto:wisdom@mssm.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  wisdom@mssm.edu
                </a>
                ) or phone (212-824-7786).
              </div>
              <div style={{ marginTop: "15px" }}>
                If you do not want to participate in the study or continue in
                the consent process, you can close the window at any time to
                exit.
              </div>
              <table style={{ marginTop: "25px", width: "100%" }}>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <Button
                      className={"p-button"}
                      style={{ backgroundColor: "hotpink", fontSize: "large" }}
                      label="< Go Back"
                      onClick={this.onClickGoToPage("Comprehension Quiz")}
                    />
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <Button
                      className={"p-button"}
                      style={{ backgroundColor: "hotpink", fontSize: "large" }}
                      label="Next >"
                      onClick={this.onClickGoToPage("Consent")}
                    />
                  </td>
                </tr>
              </table>
            </div>
          );
        case "Answer Not Corrected":
          return (
            <div
              style={{
                backgroundColor: "white",
                textAlign: "left",
                margin: "20px",
                fontSize: "14pt",
              }}
            >
              <PageHeader />
              <div
                style={{
                  backgroundColor: "#221f72",
                  color: "white",
                  padding: "5px",
                  marginTop: "20px",
                }}
              >
                Currently Ineligible
              </div>
              <div style={{ marginTop: "15px" }}>
                Thank you again for your interest in the WIsDoM study.
              </div>
              <div style={{ marginTop: "15px" }}>
                We are sorry, you have answered one of the quiz questions
                incorrectly and do not meet the eligibility criteria to
                participate in this study at this time.
              </div>
              <div style={{ marginTop: "15px" }}>
                Please reach out to the study team via email (
                <a
                  style={{ color: "black" }}
                  href="mailto:wisdom@mssm.edu"
                  target="_blank"
                  rel="noreferrer"
                >
                  wisdom@mssm.edu
                </a>
                ) or phone (212-824-7786) to help assist with review of the
                consent if you are still interested in participating in the
                study.
              </div>
              <div style={{ marginTop: "15px" }}>
                We, again, appreciate your interest in our study.
              </div>
              <div style={{ marginTop: "15px" }}>
                Please click <span style={{ fontWeight: "bold" }}>Next</span> to
                exit.
              </div>
              <div style={{ marginTop: "15px", fontStyle: "italic" }}>
                The WIsDoM Study Team
              </div>
              <div style={{ marginTop: "25px", textAlign: "center" }}>
                <Button
                  className={"p-button"}
                  style={{ backgroundColor: "hotpink", fontSize: "large" }}
                  label="Next >"
                  onClick={this.onClickGoToPage("Landing")}
                />
              </div>
            </div>
          );
        case "Consent":
          return (
            <ElectronicConsent
              checkCheckbox={this.checkCheckbox}
              getValue={this.getValue}
              onFieldChange={this.onFieldChange}
              onClickGoToPage={this.onClickGoToPage}
              state={this.state}
              onValueChange={this.handleValueChange}
            />
          );
        case "Certify":
          return (
            <Certify
              checkCheckbox={this.checkCheckbox}
              getValue={this.getValue}
              consentFormData={this.state.consentFormData}
              onClickCertify={this.onClickCertify}
              onClickGoToPage={this.onClickGoToPage}
            />
          );
        case "Enrolled":
          return (
            <Certify
              checkCheckbox={this.checkCheckbox}
              getValue={this.getValue}
              consentFormData={this.state.consentFormData}
              onClickCertify={this.onClickCertify}
              onNext={this.onClickEnter}
              modalOpen={true}
              onClickGoToPage={this.onClickGoToPage}
            />
          );

        case "Already registered":
          return (
            <Grid container sx={{ minHeight: "100vh" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "auto",
                    width: "90%",
                    maxWidth: "467px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={imageTwo}
                    style={{
                      width: "158px",
                      height: "auto",
                      maxHeight: "286px",
                      paddingBottom: "73px",
                    }}
                    alt="Image Two"
                  />
                  <Box sx={{ width: "100%", textAlign: "left" }}>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontSize: "30px",
                        fontWeight: 800,
                        lineHeight: "36px",
                      }}
                    >
                      <span style={{ color: "#D80C8C" }}>WIsDoM </span>: A Study
                      Focused on Female Fertility and IBD
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000000",
                        fontSize: "16px",
                        fontWeight: "400",
                        paddingTop: "30px",
                        lineHeight: "24px",
                      }}
                    >
                      In order to proceed, you will need to enter the email
                      address you registered with as well as an access key. If
                      you received a reminder to do a questionnaire, the message
                      includes the access key, which you can enter below. If you
                      are trying to complete your enrollment, enter your email
                      address and click{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Send Access Key.
                      </span>
                      We will email you a message that includes the access key.
                      Once you have entered both the email address and access
                      key, click{" "}
                      <span style={{ fontWeight: "bold" }}>Enter</span>.
                    </Typography>
                  </Box>
                  <Box>
                    <Grid
                      container
                      spacing={2}
                      sx={{ alignItems: "center", paddingTop: "30px" }}
                    >
                      <Grid item xs={12} sm={12} md={7}>
                        <TextField
                          label="Email Address"
                          fullWidth
                          value={this.getValue(
                            "enrolleeAccessData",
                            "screening_email"
                          )}
                          onChange={this.onFieldChange(
                            "enrolleeAccessData",
                            "screening_email"
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={5} sm={12}>
                        <Button
                          sx={{
                            width: "100%",
                            fontWeight: 600,
                            fontSize: { md: "14px", sm: "20px", xs: "16px" },
                            color: "#FFFFFF",
                            backgroundColor: "#221F73",
                            padding: "14px 18px !important",
                            borderRadius: "6px",
                            "&:hover": {
                              backgroundColor: "#221F73",
                            },
                            textTransform: "none",
                            "&.Mui-disabled": {
                              color: "#FFFFFF",
                              backgroundColor: "#221f7399",
                            },
                          }}
                          onClick={this.onClickSendAccessKey}
                          disabled={this.isEmpty(
                            "enrolleeAccessData",
                            "screening_email"
                          )}
                        >
                          Get Access Key{" "}
                          <span style={{ paddingTop: "2px" }}>
                            <img
                              style={{ paddingLeft: "10px" }}
                              src={rightArrow}
                            />
                          </span>
                        </Button>
                        <Toast
                          ref={(ref) => {
                            this.accessKeyStatus = ref;
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Access Key"
                          fullWidth
                          value={this.getValue(
                            "enrolleeAccessData",
                            "access_key"
                          )}
                          onChange={this.onFieldChange(
                            "enrolleeAccessData",
                            "access_key"
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Button
                          sx={{
                            width: "100%",
                            padding: "10px 18px !important",
                            borderRadius: "10px",
                            fontWeight: 600,
                            fontSize: { md: "20px", sm: "20px", xs: "16px" },
                            color: "#FFFFFF",
                            backgroundColor: "#D80C8C",
                            "&:hover": {
                              backgroundColor: "#D80C8C",
                            },
                            textTransform: "none",
                            "&.Mui-disabled": {
                              color: "#FFFFFF",
                              backgroundColor: "#d80c8c99",
                            },
                          }}
                          onClick={this.onClickEnter}
                          disabled={
                            this.isEmpty(
                              "enrolleeAccessData",
                              "screening_email"
                            ) ||
                            this.isEmpty("enrolleeAccessData", "access_key")
                          }
                        >
                          Enter
                        </Button>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6}>
                        <Button
                          sx={{
                            width: "100%",
                            padding: "10px 18px !important",
                            borderRadius: "10px",
                            fontWeight: 600,
                            fontSize: { md: "20px", sm: "20px", xs: "16px" },
                            color: "#D80C8C",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #D80C8C",
                          }}
                          onClick={() => {
                            this.onClickGoToPage("Landing");
                            window.location.reload();
                          }}
                        >
                          Back
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: { md: "flex", sm: "none", xs: "none" },
                    justifyContent: "center",
                    alignItems: "flex-end",
                    minHeight: "100%",
                    flexGrow: 1,
                    backgroundImage: `url(${accessKeyBackGround})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    src={imageOne}
                    style={{ width: "100%", maxWidth: "595px", height: "auto" }}
                    alt="Image One"
                  />
                </Box>
              </Grid>
            </Grid>
          );
        case "Questionnaire Due":
          return (
            <div>
              {this.state.baselinePatientFormVisible && (
                <BaselinePatients
                  onSubmit={this.processBaselinePatient}
                  data={{
                    screening_email:
                      this.state.enrolleeAccessData.screening_email,
                    access_key: this.state.enrolleeAccessData.access_key,
                  }}
                  // onClickGoToPage={this.onClickGoToPage}
                />
              )}
              {this.state.monthlyFollowUpFormVisible && (
                <Monthly
                  onSubmit={this.processMonthlyFollowUp}
                  data={{
                    screening_email:
                      this.state.enrolleeAccessData.screening_email,
                    access_key: this.state.enrolleeAccessData.access_key,
                  }}
                  // onClickGoToPage={this.onClickGoToPage}
                />
              )}
            </div>
          );
        case "Questionnaire Done":
          return (
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
                  boxSizing: "border-box",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "100%" },
                    textAlign: "center",
                  }}
                >
                  <img
                    alt="Wisdom"
                    src={thankyou}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: "#1A202C",
                    fontFamily: "Montserrat",
                    fontWeight: 800,
                    textAlign: "center",
                    fontSize: "46px",
                  }}
                >
                  NICE WORK
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      color: "#363738",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      textAlign: "center",
                      fontSize: "24px",
                      width: "80%",
                    }}
                  >
                    Thank you for enrolling in the study. You have Succesfully
                    Submitted the baseline questionnaire.
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        case "Questionnaire Not Due":
          return (
            <Modal
              open={this.state.open}
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
                    component="img"
                    src={elligibilityImage}
                    alt="elligibilityImage"
                    sx={{
                      width: "100%",
                      maxWidth: "150px",
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
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        fontWeight: 400,
                        color: "#363738",
                        lineHeight: { xs: "20px", sm: "24px", md: "24px" },
                      }}
                    >
                      You do not have a questionnaire that is due at this time.
                      You will receive email when your next questionnaire is
                      due.
                    </Typography>
                  </Box>
                </Box>

                <Button
                  sx={{
                    fontWeight: { xs: 500, sm: 600, md: 600 },
                    fontSize: "18px",
                    marginTop: "15px",
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
                  onClick={this.onClickGoToPage("Landing")}
                >
                  Next
                </Button>
              </Box>
            </Modal>
          );
        default:
          return <div>Error loading page</div>;
      }
    } else {
      return <div>Loading...</div>;
    }
  }

  checkCheckbox = (dataSource, field_name) => (e) => {
    var formData = Object.assign({}, this.state[dataSource]);
    formData[field_name] = e.target.checked ? "1" : "0";
    if (field_name === "agree_to_take_part") {
      let consent_given_on = null;
      if (e.target.checked) {
        let today = new Date();
        let month = "".concat(today.getMonth() + 1).padStart(2, "0");
        let day = "".concat(today.getDate()).padStart(2, "0");
        let year = "".concat(today.getFullYear());
        let hours = "".concat(today.getHours()).padStart(2, "0");
        let minutes = "".concat(today.getMinutes()).padStart(2, "0");
        consent_given_on =
          month + "-" + day + "-" + year + " " + hours + ":" + minutes;
      }
      formData["consent_given_on"] = consent_given_on;
    }
    this.setState({ [dataSource]: formData });
  };

  error_alert = (error_message) => {
    if (error_message.indexOf("ERROR:") === 0) {
      error_message = error_message.substr(7);
      if (error_message.indexOf("CONTEXT:") > -1) {
        error_message = error_message.substr(
          0,
          error_message.indexOf("CONTEXT:")
        );
      }
    }
    alert(error_message);
  };

  // getValue = (dataSource, fieldName) => {
  //   let record = this.state[dataSource];
  //   if (
  //     record === null ||
  //     record === undefined ||
  //     record[fieldName] === null ||
  //     record[fieldName] === undefined
  //   ) {
  //     return "";
  //   }

  //   return record[fieldName];
  // };

  getValue = (dataSource, fieldName) => {
    let record = this.state[dataSource];
    if (
      record === null ||
      record === undefined ||
      record[fieldName] === null ||
      record[fieldName] === undefined
    ) {
      return "";
    }

    return record[fieldName];
  };

  isEmpty = (dataSource, fieldName) => {
    return (
      this.state[dataSource][fieldName] === undefined ||
      this.state[dataSource][fieldName] === null ||
      this.state[dataSource][fieldName] === ""
    );
  };

  missedFinalQuizQuestion = false;

  onClickBaselinePatientForm = (e) => {
    this.setState({
      baselinePatientFormVisible: true,
    });
  };

  onClickCertify = (e) => {
    let formData = this.state.consentFormData;
    let postData = {
      id: this.state.registrant.id,
      agree_to_take_part: formData.agree_to_take_part,
      allow_data_use:
        formData.agree_to_take_part === "1" ? formData.allow_data_use : null,
      permission_to_contact:
        formData.agree_to_take_part === "1" && formData.allow_data_use === "1"
          ? formData.permission_to_contact
          : null,
      permission_to_use_data_directly_related:
        formData.agree_to_take_part === "1" && formData.allow_data_use === "1"
          ? formData.permission_to_use_data_directly_related
          : null,
      permission_to_use_data_not_related:
        formData.agree_to_take_part === "1" && formData.allow_data_use === "1"
          ? formData.permission_to_use_data_not_related
          : null,
      permission_to_give_data:
        formData.agree_to_take_part === "1" && formData.allow_data_use === "1"
          ? formData.permission_to_give_data
          : null,
      consent_signature: formData.consent_signature,
      consent_printed_name: formData.consent_printed_name,
      consent_given_on: formData.consent_given_on,
      consent_certified: formData.consent_certified,
    };

    $.post(
      "./api/save_consent.php",
      postData,
      function (response) {
        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            this.setState({
              view: "Enrolled",
              enrolleeAccessData: response.data,
            });
          } else {
            this.error_alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
  };

  onClickClearSignature = (e) => {
    this.sigCanvas.clear();
  };

  onClickEnter = (e) => {
    let script = "./api/get_questionnaire.php";
    if (this.state.isStillRegistering) {
      script = "./api/get_registrant.php";
    }
    $.post(
      script,
      this.state.enrolleeAccessData,
      function (response) {
        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            if (this.state.isStillRegistering) {
              this.setState({
                contactInformationFormErrors: {},
                view: "Study Tasks",
                registrant: response.data,
              });
            } else {
              if (response.survey_sequence === -1) {
                this.setState({
                  view: "Questionnaire Not Due",
                });
              } else {
                this.setState({
                  view: "Questionnaire Due",
                  survey_sequence: response.survey_sequence,
                  screening_email: response.screening_email,
                  access_key: response.access_key,
                });
                this.onClickStartQuestionnaire();
              }
            }
          } else {
            this.error_alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
  };

  onClickSendAccessKey = (e) => {
    $.post(
      "./api/send_access_key.php",
      this.state.enrolleeAccessData,
      function (response) {
        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            this.accessKeyStatus.show({
              severity: "info",
              summary: "Info",
              detail: "An email message has been sent.",
              life: 3000,
            });
            this.setState({ isStillRegistering: true });
          } else {
            this.error_alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
  };

  onClickGoToPage = (page) => (e) => {
    this.setState({
      view: page,
    });
  };

  onClickMonthlyFollowUpForm = (e) => {
    this.setState({
      monthlyFollowUpFormVisible: true,
    });
  };

  onClickStartQuestionnaire = (e) => {
    if (this.state.survey_sequence === "0") {
      this.setState({
        baselinePatientFormVisible: true,
      });
    } else {
      this.setState({
        monthlyFollowUpFormVisible: true,
      });
    }
  };

  onClickSubmitConsent = (e) => {
    if (this.sigCanvas.isEmpty()) {
      this.sigRequired.show({
        severity: "warn",
        summary: "Warning",
        detail: "Your signature is required.",
        life: 3000,
      });
      return;
    }

    var formData = Object.assign({}, this.state["consentFormData"]);
    formData["consent_signature"] = this.sigCanvas.toDataURL();
    this.setState({
      consentFormData: formData,
      view: "Certify",
    });
  };

  onClickSubmitContactInformation = (e) => {
    let contactInformationFormErrors = {};
    if (
      this.isEmpty("contactInformationFormData", "how_heard") ||
      (this.state.contactInformationFormData.how_heard === "Other" &&
        this.isEmpty("contactInformationFormData", "other_source"))
    ) {
      contactInformationFormErrors.how_heard = "Response is required";
    }
    if (this.isEmpty("contactInformationFormData", "screening_first_name")) {
      contactInformationFormErrors.screening_first_name =
        "Response is required";
    }
    if (this.isEmpty("contactInformationFormData", "screening_last_name")) {
      contactInformationFormErrors.screening_last_name = "Response is required";
    }
    if (this.isEmpty("contactInformationFormData", "screening_email")) {
      contactInformationFormErrors.screening_email = "Response is required";
    } else if (
      !validator.isEmail(this.state.contactInformationFormData.screening_email)
    ) {
      contactInformationFormErrors.screening_email = "Invalid response";
    }
    if (this.isEmpty("contactInformationFormData", "screening_phone_1")) {
      contactInformationFormErrors.screening_phone_1 = "Response is required";
    }
    if (this.isEmpty("contactInformationFormData", "screening_prefermethod")) {
      contactInformationFormErrors.screening_prefermethod =
        "Response is required";
    }
    if (Object.keys(contactInformationFormErrors).length !== 0) {
      this.setState({
        contactInformationFormErrors: contactInformationFormErrors,
      });
      return;
    }

    let formData = this.state.contactInformationFormData;
    let postData = {
      id: this.state.registrant.id,
      how_heard: formData.how_heard,
      other_source:
        formData.how_heard === "Other" ? formData.other_source : null,
      screening_first_name: formData.screening_first_name,
      screening_last_name: formData.screening_last_name,
      screening_email: formData.screening_email,
      screening_phone_1: formData.screening_phone_1,
      screening_phone_2: formData.screening_phone_2,
      screening_prefermethod: formData.screening_prefermethod,
    };

    $.post(
      "./api/save_contact_information.php",
      postData,
      function (response) {
        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            if (response.email_exists === "Yes") {
              this.setState({
                view: "Email Exists",
                contactInformationFormData: {},
                contactInformationFormErrors: {},
                view: "Email Exists",
                registrant: {},
              });
            } else {
              this.setState({
                view: "Study Tasks",
                contactInformationFormData: {},
                contactInformationFormErrors: {},
                view: "Study Tasks",
                registrant: response.data,
              });
            }
          } else {
            alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
  };

  onClickSubmitEligibilityCriteria = (e) => {
    let eligibilityCriteriaFormErrors = {};
    if (this.isEmpty("eligibilityCriteriaFormData", "is_female")) {
      eligibilityCriteriaFormErrors.is_female = "Response is required";
    }
    if (this.isEmpty("eligibilityCriteriaFormData", "is_18_or_older")) {
      eligibilityCriteriaFormErrors.is_18_or_older = "Response is required";
    }
    if (this.isEmpty("eligibilityCriteriaFormData", "is_45_or_younger")) {
      eligibilityCriteriaFormErrors.is_45_or_younger = "Response is required";
    }
    if (this.isEmpty("eligibilityCriteriaFormData", "has_ibd_diagnosis")) {
      eligibilityCriteriaFormErrors.has_ibd_diagnosis = "Response is required";
    }
    if (this.isEmpty("eligibilityCriteriaFormData", "was_uterus_removed")) {
      eligibilityCriteriaFormErrors.was_uterus_removed = "Response is required";
    }
    if (
      this.getValue("eligibilityCriteriaFormData", "was_uterus_removed") ===
        "0" &&
      this.isEmpty("eligibilityCriteriaFormData", "is_currently_pregnant")
    ) {
      eligibilityCriteriaFormErrors.is_currently_pregnant =
        "Response is required";
    }
    if (
      this.getValue("eligibilityCriteriaFormData", "was_uterus_removed") ===
        "0" &&
      this.getValue("eligibilityCriteriaFormData", "is_currently_pregnant") ===
        "0" &&
      this.isEmpty("eligibilityCriteriaFormData", "is_planning_pregnancy")
    ) {
      eligibilityCriteriaFormErrors.is_planning_pregnancy =
        "Response is required";
    }
    if (Object.keys(eligibilityCriteriaFormErrors).length !== 0) {
      this.setState({
        eligibilityCriteriaFormErrors: eligibilityCriteriaFormErrors,
      });
      return;
    }

    let formData = this.state.eligibilityCriteriaFormData;
    let postData = {
      is_female: formData.is_female,
      is_18_or_older: formData.is_18_or_older,
      is_45_or_younger: formData.is_45_or_younger,
      has_ibd_diagnosis: formData.has_ibd_diagnosis,
      was_uterus_removed: formData.was_uterus_removed,
      is_currently_pregnant:
        formData.was_uterus_removed === "0"
          ? formData.is_currently_pregnant
          : null,
      is_planning_pregnancy:
        formData.was_uterus_removed === "0" &&
        formData.is_currently_pregnant === "0"
          ? formData.is_planning_pregnancy
          : null,
    };

    $.post(
      "./api/save_eligibility_criteria.php",
      postData,
      function (response) {
        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            // if (response.email_exists === 'Yes') {
            //     this.setState({view: 'Email Exists'});
            // }
            this.setState({
              eligibilityCriteriaFormData: {},
              eligibilityCriteriaFormErrors: {},
              view: "Thank You",
              registrant: response.data,
            });
          } else {
            alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
  };

  processBaselinePatient = (formData) => {
    const keysToDelete = [
      "ancestry_detail",
      "contra_past_stop",
      "herpes",
      "ab_pap",
      "ab_pap_spec",
      "decreased_fertility_who",
      "problem_partner",
      "infert_treat_spec",
      "surgery_partner_pelvis",
      "part_dx_infec",
      "part_diag_cond",
      "part_surg_proced",
      "hernia_type",
      "part_exposed_2",
      "chlamydia",
      "infertility_type",
      "infertility_relative_1",
      "infertility_2_relatives",
      "infertility_2_relatives_2",
      "ibd_type",
      "relative_uc",
      "relative_ibd_u",
      "hiv",
      "autoimmune",
      "gonorrhea",
      "bacterial_vaginosis",
      "thyroid_condition_specific",
      "relative_thyroid_overactive",
      "relative_thyroid_underactive",
      "relative_thyroid_other",
      "relative_thyroid_unknown",
      "relative_autoimmune2",
      "relative_autoimmune3",
      "relative_autoimmune4",
      "relative_autoimmune5",
      "relative_autoimmune6",
      "relative_autoimmune7",
      "relative_autoimmune8",
      "relative_autoimmune9",
      "relative_autoimmune10",
      "relative_autoimmune11",
      "relative_autoimmune_other",
    ];

    keysToDelete.forEach((key) => {
      if (formData.hasOwnProperty(key)) {
        delete formData[key];
      }
    });

    $.post(
      "./api/save_baseline_patient.php",
      formData,
      function (response) {
        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            this.setState({
              view: "Questionnaire Done",
              baselinePatientFormVisible: false,
              monthlyFollowUpFormVisible: false,
            });
          } else {
            this.error_alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
  };

  processMonthlyFollowUp = (formData) => {
    $.post(
      "./api/save_monthly_followup.php",
      formData,
      function (response) {
        try {
          if (typeof response !== "object" || response === null) {
            alert("API call failed.");
          } else if (response.status === 0) {
            this.setState({
              view: "Questionnaire Done",
              baselinePatientFormVisible: false,
              monthlyFollowUpFormVisible: false,
            });
          } else {
            this.error_alert(response.error_message);
          }
        } catch (err) {
          alert("Error occurred: " + err);
        }
      }.bind(this),
      "json"
    );
  };

  onFieldChange = (dataSource, fieldName) => (e) => {
    var formData = Object.assign({}, this.state[dataSource]);
    formData[fieldName] = e.target.value;
    this.setState({ [dataSource]: formData });
  };

  onHide = (prop) => (e) => {
    this.setState({ [prop]: false });
  };

  radioButtonResponse = (source, field_name, field_value) => {
    return (
      <label className={"response"}>
        <RadioButton
          className={"p-radiobutton"}
          value={field_value}
          onChange={this.onFieldChange(source, field_name)}
          checked={this.getValue(source, field_name) === field_value}
        />{" "}
        {field_value}
      </label>
    );
  };

  onButtonClick = (dataSource, fieldName, value) => () => {
    var formData = Object.assign({}, this.state[dataSource]);
    formData[fieldName] = value;
    this.setState({ [dataSource]: formData });
  };

  handleValueChange = (key, value) => {
    this.setState((prevState) => ({
      [key]: value,
    }));
  };
}
