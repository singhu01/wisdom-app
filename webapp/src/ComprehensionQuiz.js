import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as NextIcon } from "../src/assets/icons/next.svg";
import { ReactComponent as PreviousIcon } from "../src/assets/icons/previous.svg";
import nextImage from "../src/assets/images/nextImage.png";
import CustomModal from "./CustomModal";

export class ComprehensionQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      modalOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  onBack = () => {
    this.props.onClickGoToPage(this.props.goBackTo)();
  };

  render() {
    if (this.state.isLoaded) {
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
                paddingTop: { xs: "40px", md: "57px" },
                maxWidth: { xs: "90%", sm: "85%", md: "1200px" },
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
                  fontSize: { xs: "24px", sm: "32px", md: "46px" }, // Adjusted for smaller screens
                }}
              >
                Comprehension Quiz
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: "#363738",
                  fontWeight: 400,
                  fontFamily: "Inter",
                  fontSize: { xs: "16px", sm: "18px", md: "24px" }, // Adjusted for smaller screens
                  mt: { md: 1 },
                }}
              >
                Thank you for learning about our study. Let's take the final
                quiz.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              boxSizing: "border-box",
              width: "100%",
              height: { xs: "120px", sm: "150px", md: "186px" }, // Adjusted heights
              mt: { xs: 2, md: 5 }, // Adjusted margins
              p: { xs: 1, sm: 2 }, // Adjusted padding
              background: "linear-gradient(90deg, #D80C8C 0%, #221F73 100%)",
              border: "1px solid rgba(0, 0, 0, 0.19)",
              boxShadow: "0px 2px 12.5px 0px rgba(0, 0, 0, 0.19)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                color: "rgba(255, 255, 255, 1)",
                fontSize: { xs: "14px", sm: "16px", md: "22px" }, // Adjusted font size
                lineHeight: "1.5",
                fontWeight: 700,
                maxWidth: { xs: "90%", sm: "95%", md: "95%" }, // Adjusted width
                // margin: "0 auto",
              }}
            >
              3. Please read each question carefully and choose the best answer
              to each one. Once finished, click Next. If you would like to
              review the information again, you may click Go Back.
            </Typography>
          </Box>
          <Box
            sx={{
              paddingLeft: { md: "55px", sm: "0px", xs: "0px" },
            }}
          >
            <Box
              sx={{
                boxSizing: "border-box",
                width: "100%",
                mt: { xs: 2, md: 4 },
                paddingLeft: { xs: "8px", sm: "16px", md: "8px" },
                paddingRight: { xs: "8px", sm: "16px", md: "32px" },
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                maxWidth: { xs: "100%", sm: "90%", md: "1200px" },
                // margin: "0 auto",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "20px" },
                  fontWeight: 700,
                  color: "rgba(0, 0, 0, 0.87)",
                  mb: 2,
                  fontFamily: "Montserrat",
                }}
              >
                A. The main purpose of this study is to.{" "}
                <span
                  style={{
                    color: "#686868",
                    fontFamily: "Roboto",
                    fontStyle: "italic",
                    fontWeight: 300,
                    lineHeight: "23px",
                  }}
                >
                  Select one option.
                </span>
              </Typography>

              <RadioGroup
                name="quiz-question"
                value={this.props.getValue("quizData", "question1")}
                onChange={this.props.onFieldChange("quizData", "question1")}
                sx={{
                  ml: { xs: 0, sm: 1, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label="To determine the outcomes of pregnancies with inflammatory bowel disease."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question1") === "A"} // Logic for checked
                />

                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label="To provide you with genetic information from the information you provide."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question1") === "B"}
                />

                <FormControlLabel
                  value="C"
                  control={<Radio />}
                  label="To provide your doctor with medical information obtained from all the information you provide us."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question1") === "C"}
                />

                <FormControlLabel
                  value="D"
                  control={<Radio />}
                  label="To provide your health insurer with medical information obtained from your data and family/medical history questionnaires."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question1") === "D"}
                />
              </RadioGroup>
            </Box>

            <Box
              sx={{
                boxSizing: "border-box",
                width: "100%",
                mt: { xs: 2, md: 4 }, // Adjusted margin-top
                paddingLeft: { xs: "8px", sm: "16px", md: "8px" }, // Adjusted padding
                paddingRight: { xs: "8px", sm: "16px", md: "32px" }, // Adjusted padding
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                maxWidth: { xs: "100%", sm: "90%", md: "1200px" }, // Adjusted max-width
                // margin: "0 auto", // Centered for smaller screens
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "20px" }, // Adjusted font size
                  fontWeight: 700,
                  color: "rgba(0, 0, 0, 0.87)",
                  mb: 2,
                  fontFamily: "Montserrat",
                }}
              >
                B. How are the data you provide and your personal health
                information stored?
                <span
                  style={{
                    color: "#686868",
                    fontFamily: "Roboto",
                    fontStyle: "italic",
                    fontWeight: 300,
                    lineHeight: "23px",
                  }}
                >
                  Select one option.
                </span>
              </Typography>
              <RadioGroup
                name="quiz-question"
                value={this.props.getValue("quizData", "question2")} // Use value from second code
                onChange={this.props.onFieldChange("quizData", "question2")} // Apply functionality from second code
                sx={{
                  ml: { xs: 0, sm: 1, md: 3 }, // Adjusted margin-left for smaller screens
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px", // Adjusted gap
                }}
              >
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label="Data will only be labeled with your name and other identifiers, so that researchers will know who the data came from."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" }, // Adjusted font size
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question2") === "A"} // Logic for checked
                />
                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label="Data is tagged with a unique study number code so that only researchers with permission can trace it back to your identity."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question2") === "B"} // Logic for checked
                />
                <FormControlLabel
                  value="C"
                  control={<Radio />}
                  label="Your data is completely anonymous and researchers can not link the sample back to you."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question2") === "C"} // Logic for checked
                />
                <FormControlLabel
                  value="D"
                  control={<Radio />}
                  label="Data and health information is stored in your medical record which is viewable to you and your doctor."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question2") === "D"} // Logic for checked
                />
              </RadioGroup>
            </Box>

            <Box
              sx={{
                boxSizing: "border-box",
                width: "100%",
                mt: { xs: 2, md: 4 }, // Adjusted margin-top
                paddingLeft: { xs: "8px", sm: "16px", md: "8px" }, // Adjusted padding
                paddingRight: { xs: "8px", sm: "16px", md: "32px" }, // Adjusted padding
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                maxWidth: { xs: "100%", sm: "90%", md: "1200px" }, // Adjusted max-width
                // margin: "0 auto", // Centered for smaller screens
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "20px" }, // Adjusted font size
                  fontWeight: 700,
                  color: "rgba(0, 0, 0, 0.87)",
                  mb: 2,
                  fontFamily: "Montserrat",
                }}
              >
                C. Under what circumstances would you expect to hear from the
                researchers again?
                <span
                  style={{
                    color: "#686868",
                    fontFamily: "Roboto",
                    fontStyle: "italic",
                    fontWeight: 300,
                    lineHeight: "23px",
                  }}
                >
                  Select one option.
                </span>
              </Typography>
              <RadioGroup
                name="quiz-question"
                value={this.props.getValue("quizData", "question3")} // Use value from second code
                onChange={this.props.onFieldChange("quizData", "question3")} // Apply functionality from second code
                sx={{
                  ml: { xs: 0, sm: 1, md: 3 }, // Adjusted margin-left for smaller screens
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px", // Adjusted gap
                }}
              >
                <FormControlLabel
                  value="A"
                  control={<Radio />}
                  label="Researchers may contact you to return genetic testing results."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" }, // Adjusted font size
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question3") === "A"} // Logic for checked
                />
                <FormControlLabel
                  value="B"
                  control={<Radio />}
                  label="Researchers may contact you to collect additional information about your health (completing surveys) and/or to discuss how your data might be used."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question3") === "B"} // Logic for checked
                />
                <FormControlLabel
                  value="C"
                  control={<Radio />}
                  label="Researchers will never contact you again."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question3") === "C"} // Logic for checked
                />
                <FormControlLabel
                  value="D"
                  control={<Radio />}
                  label="Researchers may contact you to let you know of other researchers studies your sample has been included in."
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: { xs: "16px", sm: "18px", md: "18px" },
                      color: "rgba(26, 32, 44, 1)",
                      lineHeight: "1.5",
                      fontFamily: "Montserrat",
                    },
                  }}
                  checked={this.props.getValue("quizData", "question3") === "D"} // Logic for checked
                />
              </RadioGroup>
            </Box>
          </Box>

          <Box
            sx={{
              boxSizing: "border-box",
              width: "100%",
              mt: { xs: 3, sm: 4, md: 4 },
              paddingLeft: { xs: "16px", sm: "24px", md: "8px" },
              paddingRight: { xs: "16px", sm: "24px", md: "32px" },
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: { xs: "100%", sm: "90%", md: "95%" },
              // margin: "0 auto",
              flexDirection: { xs: "row", md: "row" }, // Ensure buttons are in row for all screen sizes
            }}
          >
            {/* Go Back Button */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                paddingLeft: { md: "40px", sm: "0px", xs: "0px" },
              }}
            >
              <Button
                sx={{
                  color: "blue",
                  minWidth: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
                startIcon={<PreviousIcon />}
                onClick={this.props.onClickGoToPage("Break Time 1")}
              >
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 0.68)",
                    fontSize: { xs: "14px", sm: "16px", md: "24px" }, // Font size adjustment
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

            {/* Continue Button */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" }, // Hide on xs screens and show on md and above
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  color: "blue",
                  minWidth: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={this.props.onClickGoToPage("Quiz Result")}
                endIcon={<NextIcon />}
              >
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 0.68)",
                    fontSize: { xs: "16px", sm: "18px", md: "24px" }, // Font size adjustment
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontFamily: "Inter",
                  }}
                >
                  CONTINUE
                </Typography>
              </Button>
            </Box>

            {/* Only Icons for xs Screens */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" }, // Show on xs screens and hide on md and above
                justifyContent: "center",
                alignItems: "center",
                flex: 1, // Ensure this box takes up remaining space
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%", // Ensure the box spans the full width
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
                  onClick={this.props.onClickGoToPage("Break Time 1")}
                  startIcon={<PreviousIcon />}
                />
                <Button
                  sx={{
                    color: "blue",
                    minWidth: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={this.props.onClickGoToPage("Quiz Result")}
                  endIcon={<NextIcon />}
                />
              </Box>
            </Box>
          </Box>

          {this.props.modalOpen ? (
            <CustomModal
              open={this.props.modalOpen}
              onBack={this.onBack}
              // onClose={this.onClose}
              onNext={
                this.props.modalView === "T"
                  ? this.props.onClickGoToPage("Consent")
                  : this.props.onClickGoToPage(this.props.goBackTo)
              }
              title={
                this.props.modalView === "T"
                  ? "Nice Work"
                  : "Thank you again for your interest in the WIsDoM study."
              }
              message={
                this.props.modalView === "T" ? (
                  <>
                    <div>
                      Please click Next to review and sign the consent form.
                      If you have any questions about the study or the consent,
                      please reach out to the study team via email
                      (wisdom@mssm.edu) or phone (212-824-7786).
                    </div>
                    <div>
                      If you do not want to participate in the study or continue
                      in the consent process, you can close the window at any
                      time to exit.
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ marginTop: "15px" }}>
                      {this.props.description}
                    </div>
                    <div style={{ marginTop: "15px" }}>
                      Don't worry! Please review the study information by
                      clicking <span style={{ fontWeight: "bold" }}>Back</span>,
                      and complete the {this.props.whatToComplete} again when
                      you are ready. Once all the questions are answered
                      correctly you may then continue the consent process.
                    </div>
                    <div style={{ marginTop: "15px" }}>
                      If you have questions, please reach out to the study team
                      via email (
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
                    {this.props.missedBreakTimeQuestion && (
                      <div style={{ marginTop: "15px" }}>
                        Earlier Incorrect Quiz Question(s):
                        {this.props.getValue("breakTimeData", "question1") !==
                          "T" && (
                          <div style={{ marginTop: "10px" }}>
                            1. To participate in this study, we will ask you to
                            complete a baseline survey online or via telephone
                            and ask you to complete monthly surveys (online or
                            via telephone). We will also ask you to allow the
                            researchers to collect information from your medical
                            record.
                            <div style={{ marginTop: "5px" }}>
                              Incorrect Response:{" "}
                              {this.props.getValue(
                                "breakTimeData",
                                "question1"
                              )}
                            </div>
                          </div>
                        )}
                        {this.props.getValue("breakTimeData", "question2") !==
                          "T" && (
                          <div style={{ marginTop: "10px" }}>
                            2. If you have questions or if you no longer would
                            like to participate, the study team can be reached
                            via email (wisdom@mssm.edu) or phone (212-824-7786).
                            <div style={{ marginTop: "5px" }}>
                              Incorrect Response:{" "}
                              {this.props.getValue(
                                "breakTimeData",
                                "question2"
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {this.props.missedFinalQuizQuestion && (
                      <div style={{ marginTop: "15px" }}>
                        Incorrect Final Quiz Question(s):
                        {this.props.getValue("quizData", "question1") !==
                          "A" && (
                          <div style={{ marginTop: "10px" }}>
                            Purpose of this study:
                            <div
                              style={{
                                marginTop: "5px",
                                marginLeft: "10px",
                                fontStyle: "italic",
                              }}
                            >
                              The main purpose of this study is to determine the
                              outcomes of pregnancies with inflammatory bowel
                              disease (IBD) and help understand the impact of
                              IBD on fertility.
                            </div>
                          </div>
                        )}
                        {this.props.getValue("quizData", "question2") !==
                          "B" && (
                          <div style={{ marginTop: "10px" }}>
                            Storage of study data:
                            <div
                              style={{
                                marginTop: "5px",
                                marginLeft: "10px",
                                fontStyle: "italic",
                              }}
                            >
                              A unique code instead of your name or other
                              information that could identify you will be used
                              on all your study data. Your study data will be
                              coded and stored in a manner that keeps your
                              information as safe as possible and prevents
                              unauthorized people from getting to your data.
                            </div>
                          </div>
                        )}
                        {this.props.getValue("quizData", "question3") !==
                          "B" && (
                          <div style={{ marginTop: "10px" }}>
                            Contact from the researchers:
                            <div
                              style={{
                                marginTop: "5px",
                                marginLeft: "10px",
                                fontStyle: "italic",
                              }}
                            >
                              Researchers may contact you to collect additional
                              information about your health (completing surveys)
                              and/or to discuss how your data might be used.
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )
              }
              messageHeight={this.props.modalView === "T" ? "" : "200px"}
              imageSrc={this.props.modalView === "T" ? nextImage : ""}
              buttonText={this.props.modalView === "T" ? "Next" : "Next"}
            />
          ) : null}
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
