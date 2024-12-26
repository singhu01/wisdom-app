import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { ReactComponent as PdfIcon } from "./assets/pdf.svg";
import { ReactComponent as PreviousIcon } from "./assets/previous.svg";
import { ReactComponent as NextIcon } from "./assets/next.svg";
import { ReactComponent as SupportIcon } from "./assets/support.svg";
import Header from "./Header";
import arrowWelcome from "./assets/arrowWelcome.png";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    if (this.state.isLoaded) {
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
                    fontFamily: "Montserrat",
                    fontSize: {
                      xs: "32px",
                      sm: "38px",
                      md: "46px",
                    },
                  }}
                >
                  WELCOME
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
                  Thank you for your interest in the Women with Inflammatory
                  Bowel Disease and Motherhood{" "}
                  <span style={{ color: "#D80C8C" }}>(WIsDoM)</span> Study. The
                  main goal of this study is to determine the outcomes of
                  pregnancies in women with inflammatory bowel disease.
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
                  }}
                >
                  This study will collect data from survey questions and
                  information from your health record.
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
                  If you are interested in learning more about joining this
                  study, this simple walk-through will first see if you are
                  eligible and then highlight the details of what participation
                  will involve.
                </Typography>
                <Typography
                  sx={{
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
                  After reading about the study, we will ask you to complete a
                  short quiz to make sure that you understand what's involved.
                </Typography>
                <Typography
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
                  If you do not want to participate in the study or continue in
                  the
                </Typography>
                <Typography
                  sx={{
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
                  consent process, you can close the window at any time to exit.
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
                  display: "flex",
                  alignItems: "center",
                  paddingRight: { md: "100px", sm: "0px", xs: "0px" },
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-end",
                  },
                }}
              >
                <Button
                  sx={{ color: "blue" }}
                  startIcon={<PreviousIcon />}
                  onClick={this.props.onClickGoToPage("Landing")}
                ></Button>
                <Button
                  sx={{ color: "blue" }}
                  startIcon={<NextIcon />}
                  onClick={this.props.onClickGoToPage("Eligibility Criteria")}
                ></Button>
              </Box>

              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "97%",
                    md: "97%",
                  },
                  height: "80%",
                  mx: "auto",
                  textAlign: "center",
                  padding: "20px",
                  mb: 5,
                  position: "relative",
                  border: "1px solid rgba(225, 228, 237, 1)",
                  borderRadius: "10px",
                  mt: 4,
                }}
              >
                <Button startIcon={<SupportIcon />}></Button>

                <Typography
                  variant="body1"
                  sx={{ color: "rgba(216, 12, 140, 1)" }}
                >
                  Help & Support
                </Typography>
                <Typography variant="body2" sx={{ mt: "2px" }}>
                  For any queries related to the study and the consent please
                  contact us
                </Typography>
                <Typography variant="body2" sx={{ mt: "2px" }}>
                  <a
                    href="mailto:wisdom@mssm.edu"
                    style={{
                      color: "rgba(34, 31, 115, 1)",
                      textDecoration: "underline",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    wisdom@mssm.edu
                    <img
                      alt="Wisdom"
                      src={arrowWelcome}
                      style={{
                        display: "inline",
                        marginLeft: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
