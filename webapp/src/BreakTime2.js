import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as NextIcon } from "../src/assets/icons/next.svg";
import { ReactComponent as PreviousIcon } from "../src/assets/icons/previous.svg";
import nextImage from "../src/assets/images/nextImage.png";
import CustomModal from "./CustomModal";

export class BreakTime2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      bool: "",
      modalOpen: false,
      modalView: "",
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  onClose = () => {
    this.setState({
      ...this.state,
      modalOpen: false,
      modalView: "",
    });
  };

  onNextFromCorrect = () => {
    this.setState({
      ...this.state,
      modalOpen: true,
      modalView: "Confidentiality",
    });
  };

  onNextFromIncorrect = () => {
    this.setState({
      ...this.state,
      modalOpen: false,
    });
    this.props.onClickGoToPage("Comprehension Quiz")();
  };

  onNextFromConfidentiality = () => {
    this.setState({
      ...this.state,
      modalOpen: false,
    });
    this.props.onClickGoToPage("Comprehension Quiz")();
  };

  onBack = () => {
    this.setState({
      ...this.state,
      modalOpen:
        (this.state.bool === "T" && this.state.modalView === "Correct") ||
        this.state.bool === "F"
          ? false
          : true,
      modalView:
        this.state.bool === "T" && this.state.modalView === "Confidentiality"
          ? "Correct"
          : "Correct",
    });
  };

  render() {
    console.log("modal open");
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
                  fontSize: { xs: "24px", sm: "28px", md: "46px" },
                }}
              >
                BREAK TIME
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: "rgba(0, 0, 0, 1)",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  fontSize: { xs: "16px", sm: "18px", md: "22px" }, // Adjusted font size for clarity
                  mt: { xs: 1, sm: 2, md: 2 },
                }}
              >
                Before moving to the next section, let's take a quick quiz.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              boxSizing: "border-box",
              width: "100%",
              height: { xs: "auto", sm: "150px", md: "186px" }, // Set height to auto for xs screens
              mt: { xs: 4, sm: 6, md: 10 },
              p: { xs: 3, sm: 2 }, // Increase padding for xs screens
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
                fontSize: { xs: "16px", sm: "18px", md: "22px" },
                lineHeight: "24px",
                fontWeight: 700,
                fontFamily: "Montserrat",
                maxWidth: { xs: "90%", sm: "90%", md: "95%" }, // Adjusted maxWidth for xs screens
                mb: { xs: 2, sm: 0 }, // Add margin-bottom for xs screens
                mx: { xs: 2, sm: 0 }, // Add horizontal margin for xs screens
              }}
            >
              2. If you have questions or if you no longer would like to
              participate, the study team can be reached via email
              (wisdom@mssm.edu) or phone (212-824-7786)
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 3, sm: 4, md: 4 },
              gap: { xs: 1, sm: 1.5, md: 2 },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: { xs: "120px", sm: "121px", md: "121px" },
                height: { xs: "44px", sm: "54px", md: "54px" },
                border:
                  this.state.bool === "T"
                    ? "2px solid   #b2b2b2"
                    : "1px solid rgba(225, 228, 237, 1)",
                backgroundColor:
                  this.state.bool === "T"
                    ? "  #b2b2b2"
                    : "rgba(248, 250, 255, 1)",
                color:
                  this.state.bool === "T" ? "white" : "rgba(109, 117, 143, 1)",
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "20px", md: "25px" },
                "&:hover": {
                  backgroundColor:
                    this.state.bool === "T"
                      ? "#b2b2b2"
                      : "rgba(248, 250, 255, 1)",
                  borderColor:
                    this.state.bool === "T"
                      ? "#b2b2b2"
                      : "rgba(225, 228, 237, 1)",
                  color:
                    this.state.bool === "T"
                      ? "white"
                      : "rgba(109, 117, 143, 1)",
                },
              }}
              onClick={() => {
                this.props.onButtonClick("breakTimeData", "question2", "T")();
                this.setState({
                  ...this.state,
                  bool: "T",
                  modalView: "Correct",
                });
              }}
            >
              True
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "120px", sm: "121px", md: "121px" },
                height: { xs: "44px", sm: "54px", md: "54px" },
                border:
                  this.state.bool === "F"
                    ? "2px solid #b2b2b2"
                    : "1px solid rgba(225, 228, 237, 1)",
                backgroundColor:
                  this.state.bool === "F"
                    ? "#b2b2b2"
                    : "rgba(248, 250, 255, 1)",
                color:
                  this.state.bool === "F" ? "white" : "rgba(109, 117, 143, 1)",
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "20px", md: "25px" },
                "&:hover": {
                  backgroundColor:
                    this.state.bool === "F"
                      ? "#b2b2b2"
                      : "rgba(248, 250, 255, 1)",
                  borderColor:
                    this.state.bool === "F"
                      ? "#b2b2b2"
                      : "rgba(225, 228, 237, 1)",
                  color:
                    this.state.bool === "F"
                      ? "white"
                      : "rgba(109, 117, 143, 1)",
                },
              }}
              onClick={() => {
                this.props.onButtonClick("breakTimeData", "question2", "F")();
                this.setState({
                  ...this.state,
                  bool: "F",
                  modalView: "Incorrect",
                });
              }}
            >
              False
            </Button>
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
              flexDirection: { xs: "row", md: "row" },
            }}
          >
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
                }}
                endIcon={<NextIcon />}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    modalOpen: true,
                  });
                }}
                disabled={!this.state.modalView}
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
                  startIcon={<PreviousIcon />}
                  onClick={this.props.onClickGoToPage("Data Collection")}
                />
                <Button
                  sx={{
                    color: "blue",
                    minWidth: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                  endIcon={<NextIcon />}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      modalOpen: true,
                    });
                  }}
                  disabled={!this.state.modalView}
                />
              </Box>
            </Box>
          </Box>

          {this.state.modalOpen ? (
            <CustomModal
              open={this.state.modalOpen}
              onNext={
                this.state.bool === "T"
                  ? this.state.modalView === "Correct"
                    ? this.onNextFromCorrect
                    : this.onNextFromConfidentiality
                  : this.onNextFromIncorrect
              }
              onBack={this.onBack}
              title={
                this.state.bool === "T"
                  ? this.state.modalView === "Correct"
                    ? "Nice Work"
                    : "Confidentiality and Protected Information"
                  : "Oops. Looks like you answered incorrectly."
              }
              message={
                this.state.bool === "T" ? (
                  this.state.modalView === "Correct" ? (
                    <>
                      <div>You got it correct.</div>

                      <div style={{ marginTop: "15px" }}>
                        Yes, the research study team can be reached via email (
                        <a
                          style={{ color: "black" }}
                          href="mailto:wisdom@mssm.edu"
                          target="_blank"
                          rel="noreferrer"
                        >
                          wisdom@mssm.edu
                        </a>
                        ) or phone (212-824-7786), for questions about the study
                        and about participation in the study.
                      </div>
                      <div style={{ marginTop: "15px" }}>
                        Let's continue reviewing important information about the
                        study by clicking{" "}
                        <span style={{ fontWeight: "bold" }}>Next</span>.
                      </div>
                      <div style={{ marginTop: "15px" }}>
                        If you have any questions about the study or the
                        consent, please contact the study team via email (
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
                    </>
                  ) : (
                    {
                      initialText: (
                        <>
                          <div>
                            As you take part in this research study, it will be
                            necessary for the research team and others to use
                            and share some of your private protected health
                            information. Protected Health Information (PHI)
                            include, for example: your name, address, telephone
                            number, medical record number, date of birth, family
                            history, your medical record, etc.
                          </div>
                          <div style={{ marginTop: "15px" }}>
                            Your health information, along with results of any
                            procedures collected as part of this research study
                            or regular clinical care, will be used for this
                            study as explained earlier in this consent process.
                            The results of this study could be published or
                            presented at scientific meetings, lectures, etc.,
                            but would not include any information that would let
                            others know who you are, unless you give separate
                            permission to do so.
                          </div>
                        </>
                      ),
                      readMoreText: (
                        <>
                          <div>
                            Consistent with the federal Health Insurance
                            Portability and Accountability Act (HIPAA), we are
                            asking your permission to receive, use and share
                            your Protected Health Information.
                          </div>
                          <div style={{ marginTop: "15px" }}>
                            Your authorization for the use of your protected
                            health information for this specific study does not
                            expire.
                          </div>
                          <div style={{ marginTop: "15px" }}>
                            During your participation in this study, you will
                            have access to your medical record and any study
                            information that is part of that record.The
                            investigator is not required to release to you
                            research information that is not part of your
                            medical record.
                          </div>
                          <div style={{ marginTop: "15px" }}>
                            If you are authorizing the release of HIV-related
                            information, you should be aware that the
                            recipient(s) is (are) prohibited from re-disclosing
                            any HIV-related information without your
                            authorization unless permitted to do so under
                            federal or state law.
                          </div>
                          <div style={{ marginTop: "15px" }}>
                            The research team and other authorized members of
                            The Mount Sinai Health System ("Mount Sinai") workforce
                            may use and share your information to ensure that
                            the research meets legal, institutional or
                            accreditation requirements. For example, the
                            School’s Program for the Protection of Human
                            Subjects is responsible for overseeing research on
                            human subjects, and may need to see your
                            information.
                          </div>
                        </>
                      ),
                    }
                  )
                ) : (
                  <>
                    <div>
                      The research study team can be reached via email (
                      <a
                        style={{ color: "black" }}
                        href="mailto:wisdom@mssm.edu"
                        target="_blank"
                        rel="noreferrer"
                      >
                        wisdom@mssm.edu
                      </a>
                      ) or phone (212-824-7786), for questions about the study
                      and about participation in the study.
                    </div>
                    <div style={{ marginTop: "15px" }}>
                      Don't worry! Please review the study information by
                      clicking <span style={{ fontWeight: "bold" }}> Back</span>
                      , and complete the quiz again when you are ready.
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
                  </>
                )
              }
              imageSrc={
                this.state.bool === "T"
                  ? this.state.modalView === "Correct"
                    ? nextImage
                    : ""
                  : ""
              }
              readMoreRequired={
                this.state.bool === "T"
                  ? this.state.modalView === "Correct"
                    ? false
                    : true
                  : false
              }
              buttonText={this.state.bool === "T" ? "Next" : "Next"}
            />
          ) : null}
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
