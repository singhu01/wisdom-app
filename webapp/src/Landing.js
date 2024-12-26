import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import materialSymbolsFemale from "./assets/materialSymbolsFemale.png";
import torsosFemaleMale from "./assets/torsosFemaleMale.png";
import roundNextPlan from "./assets/roundNextPlan.png";
import signFilled from "./assets/signFilled.png";
import imageSeven from "./assets/imageSeven.png";
import topArrow from "./assets/topArrow.png";
import infoBG from "./assets/infoBG.png";
import Vector from "./assets/Vector.png";
import survey from "./assets/survey.png";
import happyCouple from "./assets/happyCouple.png";
import scan from "./assets/scan.png";
import test from "./assets/test.png";
import whiteHeart from "./assets/whiteHeart.png";
import { Menu, MenuItem, List, ListItem, ListItemButton } from "@mui/material";
import oldLogo from "./assets/oldLogo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as GraphIcon } from "./assets/graph.svg";
import { ReactComponent as VectorIcon } from "./assets/Vector.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import FullLockupMaroon from "./assets/Maroon.jpg";
import helmsley from "./assets/helmsley.jpg";
import icahn from "./assets/icahn.jpg";

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.msalInstance = props.msalInstance;
    this.state = {
      isLoaded: false,
      drawerOpen: false,
      anchorEl: null,
    };
  }

  handleSelectStaff = async () => {
    window.location.href =
      "https://wisdom-dev-app.azurewebsites.net/webstaff/build/index.html";
  };

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  // handleAuthResponse = async (authResponse) => {
  //   try {
  //     const { accessToken, account } = authResponse;
  //     const email = account.username || account.userName;

  //     localStorage.setItem('accessToken', accessToken);
  //     localStorage.setItem('userData', JSON.stringify({
  //       username: account.username,
  //       email: account.userName,
  //     }));

  //     const redirectUrl = `http://localhost:3001/?token=${encodeURIComponent(accessToken)}&username=${encodeURIComponent(account.username)}&email=${encodeURIComponent(email)}`;
  //     console.log("Redirecting to:", redirectUrl);
  //     // window.location.href = redirectUrl;
  //   } catch (error) {
  //     console.error("Error handling auth response:", error);
  //   }
  // };

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ drawerOpen: open });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSelectPart = () => {
    this.props.onClickGoToPage("Already registered");
    this.handleClose();
  };

  handleSelectStaff = () => {
    window.location.href = 'https://wisdom-qa-app.azurewebsites.net/webstaff/build/index.html';
  };

  handlVideoeOpen = () => {
    this.setState({ open: true });
  };

  handleVideoClose = () => {
    this.setState({ open: false });
  };

  handleOpenInNewTab = () => {
    window.open("https://www.youtube.com/watch?v=-iQEVX3GUdk", "_blank");
  };

  render() {
    const { drawerOpen, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    if (this.state.isLoaded) {
      return (
        <>
          <Grid sx={{ paddingRight: "40px" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "20px",
                paddingRight: { md: "60px", sm: "10px", xs: "10px" },
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <img
                  alt="Wisdom"
                  src={oldLogo}
                  style={{
                    width: "158px",
                    height: "auto",
                    paddingLeft: "15px",
                  }}
                />
              </div>
              <AppBar
                position="static"
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  width: "90%",
                  background:
                    "linear-gradient(90deg, #FDD6EE 0%, #FBF6FF 50.77%, #DCE6FB 100%)",
                  height: "72px",
                  borderRadius: "20px",
                  marginTop: "28px",
                  boxShadow: "none",
                }}
              >
                <Toolbar
                  sx={{
                    width: "96%",
                    padding: "0 2%",
                    display: "flex",
                    gap: "30px",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      overflowX: "auto",
                      gap: "35px",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: "30px" }}>
                      <div style={{ gap: "10px" }}>
                        <Button
                          sx={{
                            color: "rgba(68, 71, 80, 1)",
                            textTransform: "none",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                          startIcon={<HomeIcon />}
                        >
                          Home
                        </Button>
                      </div>
                      <div style={{ gap: "10px" }}>
                        <Button
                          sx={{
                            color: "rgba(68, 71, 80, 1)",
                            textTransform: "none",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                          startIcon={<GraphIcon />}
                        >
                          <a
                            style={{
                              color: "rgba(68, 71, 80, 1)",
                              fontSize: "14px",
                              fontWeight: 400,
                              textDecoration: "none",
                            }}
                            href="WISDOM_About.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            About
                          </a>
                        </Button>
                      </div>
                      <Button
                        sx={{
                          color: "rgba(68, 71, 80, 1)",
                          textTransform: "none",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                        startIcon={<VectorIcon />}
                      >
                        <a
                          style={{
                            color: "rgba(68, 71, 80, 1)",
                            fontSize: "14px",
                            fontWeight: 400,
                            textDecoration: "none",
                          }}
                          href="WISDOM_FAQ.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          FAQ
                        </a>
                      </Button>
                      <div style={{ gap: "10px" }}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "rgba(34, 31, 115, 1)",
                            color: "white",
                            textTransform: "none",
                            height: "30px",
                            width: "104px",
                            fontWeight: 500,
                            fontSize: "14px",
                            "&:hover": {
                              backgroundColor: "rgba(34, 31, 115, 1)",
                            },
                          }}
                          onClick={this.handleClick}
                        >
                          Login
                        </Button>
                        <Menu
                          anchorEl={anchorEl}
                          open={open}
                          onClose={this.handleClose}
                        >
                          <MenuItem
                            onClick={this.props.onClickGoToPage(
                              "Already registered"
                            )}
                          >
                            Participant
                          </MenuItem>
                          <MenuItem onClick={this.handleSelectStaff}>
                            Staff
                          </MenuItem>
                        </Menu>
                      </div>
                    </Box>
                  </Box>
                </Toolbar>
              </AppBar>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "90%",
                  height: "72px",
                  borderRadius: "20px",
                  marginTop: "28px",
                  boxShadow: "none",
                }}
              >
                <IconButton
                  aria-label="menu"
                  onClick={this.toggleDrawer(true)}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    height: "24px",
                    width: "24px",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                anchor="right"
                // open={open}
                open={this.state.drawerOpen}
                onClose={this.toggleDrawer(false)}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Box
                  sx={{
                    width: 250,
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                  }}
                  role="presentation"
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Button
                          sx={{ color: "rgba(68, 71, 80, 1)" }}
                          startIcon={<HomeIcon />}
                        >
                          Home
                        </Button>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Button
                          sx={{ color: "rgba(68, 71, 80, 1)" }}
                          startIcon={<GraphIcon />}
                        >
                          <a
                            style={{
                              color: "rgba(68, 71, 80, 1)",
                              fontSize: "14px",
                              fontWeight: 400,
                              textDecoration: "none",
                            }}
                            href="WISDOM_About.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            About
                          </a>
                        </Button>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Button
                          sx={{ color: "rgba(68, 71, 80, 1)" }}
                          startIcon={<VectorIcon />}
                        >
                          <a
                            style={{
                              color: "rgba(68, 71, 80, 1)",
                              fontSize: "14px",
                              fontWeight: 400,
                              textDecoration: "none",
                            }}
                            href="WISDOM_FAQ.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            FAQ
                          </a>
                        </Button>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "rgba(34, 31, 115, 1)",
                            color: "white",
                            textTransform: "none",
                            height: "30px",
                            width: "104px",
                            fontWeight: 500,
                            fontSize: "14px",
                            "&:hover": {
                              backgroundColor: "rgba(34, 31, 115, 1)",
                            },
                          }}
                          onClick={(event) => {
                            event.stopPropagation();
                            this.handleClick(event);
                          }}
                        >
                          Login
                        </Button>
                        <Menu
                          anchorEl={anchorEl}
                          open={open}
                          onClose={this.handleClose}
                        >
                          <MenuItem
                            onClick={this.props.onClickGoToPage(
                              "Already registered"
                            )}
                          >
                            Participant
                          </MenuItem>
                          <MenuItem onClick={this.handleSelectStaff}>
                            Staff
                          </MenuItem>
                        </Menu>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Grid>
          <Grid
            container
            sx={{
              padding: {
                md: "0 0rem 0rem 5.3rem",
                sm: "0 3rem 0rem 5.3rem",
                xs: "0 20px 0px 20px",
              },
            }}
          >
            <Grid
              items
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                textAlign: "left",
                paddingTop: { md: "90px", sm: "20px", xs: "20px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "46px", sm: "31px", xs: "25px" },
                  fontWeight: "600",
                  lineHeight: { md: "3.486rem", sm: "2.5rem", xs: "2rem" },
                }}
              >
                The Women with Inflammatory Bowel <br />
                Disease & Motherhood{" "}
                <span style={{ color: "#D80C8C" }}>(WIsDoM) </span>Study
              </Typography>
              <Typography
                sx={{
                  padding: {
                    md: "3.5rem 0rem",
                    sm: "2.1rem 0rem",
                    xs: "1.25rem 0rem",
                  },
                  fontSize: { md: "24px", sm: "20px", xs: "16px" },
                  fontWeight: 400,
                }}
              >
                A Study Focused on Female Fertility and IBD
              </Typography>
              <Button
                sx={{
                  fontWeight: 700,
                  fontSize: { md: "20px", sm: "20px", xs: "16px" },
                  lineHeight: { md: "20px", sm: "20px", xs: "16px" },
                  letterSpacing: "0.5px",
                  color: "#FFFFFF",
                  backgroundColor: "#D80C8C",
                  padding: "16px",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#D80C8C",
                  },
                  textTransform: "none",
                }}
                // id={"get-started-button"}
                // label="Get Started"
                onClick={this.props.onClickGoToPage("Welcome")}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: {
                md: "5.5rem 2.3rem 8.3rem 2.3rem",
                sm: "5rem 1.3rem 4rem 1.3rem",
                xs: "4.5rem 0.5rem 2.3rem 0.5rem",
              },
            }}
          >
            <Box
              sx={{
                borderRadius: "4rem",
                background:
                  "linear-gradient(270deg, #A20969, #D80C8C, #221F73, #1B195C, #AD0A70, #C20B7E)",
                maxWidth: "50.6rem",
                width: { md: "70%", sm: "70%", xs: "80%" },
                height: { md: "15px", sm: "15px", xs: "6px" },
              }}
            ></Box>
          </Grid>

          <Grid
            sx={{
              textAlign: "center",
              padding: {
                md: "0rem 2.3rem  5.1rem 2.3rem",
                sm: "0rem 2.3rem  3.5rem 2.3rem",
                xs: "0px 15px  30px 15px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "2.8rem", sm: "2.5rem", xs: "30px" },
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Learn More
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "18px", sm: "18px", xs: "15px" },
                fontWeight: 400,
                color: "#000000",
              }}
            >
              Join our study to learn how Inflammatory Bowel Disease <br />{" "}
              impacts women's fertility and pregnancy.
            </Typography>
          </Grid>

          <Grid
            container
            sx={{
              padding: {
                md: "0 6.28rem 0 4.06rem",
                sm: "0 3rem 0 3rem",
                xs: "0 10px 0 10px",
              },
              margin: "0px !important",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Grid sx={{ textAlign: { md: "left", xs: "center" } }}>
                <img
                  src={happyCouple}
                  alt="icons"
                  style={{
                    maxWidth: "327px",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </Grid>

              <Grid
                sx={{
                  textAlign: "center",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                <img
                  src={scan}
                  alt="icons"
                  style={{
                    maxWidth: "327px",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </Grid>

              <Grid
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                <img
                  src={test}
                  alt="icons"
                  style={{
                    maxWidth: "327px",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: { md: "25px", sm: "15px", xs: "15px" },
              }}
            >
              <Grid
                container
                direction="column"
                sx={{ width: "100%", margin: "0px !important" }}
                spacing={6}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "0px !important",
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      backgroundColor: "#221F73",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={imageSeven}
                      style={{ width: "24px", height: "24px" }}
                      alt="Icon"
                    />
                  </Box>
                  <Typography
                    sx={{
                      marginLeft: "1rem",
                      color: "#000",
                      fontWeight: 500,
                      fontSize: { md: "18px", xs: "14px" },
                    }}
                  >
                    This research study is an opportunity to help understand the
                    impact of Inflammatory Bowel Disease (IBD) on fertility.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "0px !important",
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      backgroundColor: "#221F73",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={imageSeven}
                      style={{ width: "24px", height: "24px" }}
                      alt="Icon"
                    />
                  </Box>
                  <Typography
                    sx={{
                      marginLeft: "1rem",
                      color: "#000",
                      fontWeight: 500,
                      fontSize: { md: "18px", xs: "14px" },
                    }}
                  >
                    Approximately 50% of patients with Crohn's disease or
                    ulcerative colitis are women, and many are diagnosed during
                    peak childbearing years.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    paddingLeft: "0px !important",
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      backgroundColor: "#221F73",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={imageSeven}
                      style={{ width: "24px", height: "24px" }}
                      alt="Icon"
                    />
                  </Box>
                  <Typography
                    sx={{
                      marginLeft: "1rem",
                      color: "#000",
                      fontWeight: 500,
                      fontSize: { md: "18px", xs: "14px" },
                    }}
                  >
                    Both patients and providers frequently ask whether IBD, IBD
                    surgery, or IBD medications impact a woman's ability to
                    become pregnant. Despite many advances in the field, several
                    important questions remain unanswered.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    paddingLeft: "0px !important",
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      backgroundColor: "#221F73",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={imageSeven}
                      style={{ width: "24px", height: "24px" }}
                      alt="Icon"
                    />
                  </Box>
                  <Typography
                    sx={{
                      marginLeft: "1rem",
                      color: "#000",
                      fontWeight: 500,
                      fontSize: { md: "18px", xs: "14px" },
                    }}
                  >
                    The results of this study will help to answer these
                    questions and provide essential information to IBD patients
                    and their care teams in order to ensure that patients are
                    supported during their journey to motherhood. If you have
                    IBD, you may be eligible to join.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: {
                md: "8.3rem 0rem 6.8rem 0rem",
                sm: "3.8rem 0rem 5rem 0rem",
                xs: "2.8rem 0rem 4rem 0rem",
              },
            }}
          >
            <Box
              sx={{
                borderRadius: "4rem",
                background:
                  "linear-gradient(270deg, #A20969, #D80C8C, #221F73, #1B195C, #AD0A70, #C20B7E)",
                maxWidth: "50.6rem",
                width: "70%",
                height: "15px",
              }}
            ></Box>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              padding: {
                md: "0 6.87rem 5.62rem 6.87rem",
                xs: "0px 10px 40px 25px",
                sm: "0px 20px 50px 45px",
              },
            }}
          >
            <Grid
              xs={12}
              sx={{
                textAlign: "center",
                padding: {
                  md: "0rem 0rem 4rem 0rem",
                  xs: "0rem 0rem 1rem 0rem",
                  sm: "0rem 0rem 1.5rem 0rem",
                },
              }}
            >
              <Typography
                sx={{
                  padding: "0rem",
                  fontSize: { md: "46px", sm: "35px", xs: "25px" },
                  fontWeight: 600,
                  lineHeight: { md: "56px", sm: "40px", xs: "30px" },
                }}
              >
                Who Can Participate in WIsDoM ?
              </Typography>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                paddingBottom: { md: "4rem", sm: "3rem", xs: "1.5rem" },
              }}
            >
              <Grid item xs={6} sm={6} md={3} sx={{ textAlign: "center" }}>
                <img
                  alt="icons"
                  src={materialSymbolsFemale}
                  style={{
                    width: "48px",
                    height: "48px",
                    paddingBottom: "1rem",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { md: "18px", xs: "14px", sm: "16px" },
                    lineHeight: { md: "25px", xs: "20px", sm: "20px" },
                  }}
                >
                  Females with Inflammatory Bowel Disease (IBD)
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                sx={{
                  textAlign: "center",
                }}
              >
                <img
                  alt="icons"
                  src={torsosFemaleMale}
                  style={{
                    width: "48px",
                    height: "48px",
                    paddingBottom: "1rem",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { md: "18px", xs: "14px", sm: "16px" },
                    lineHeight: { md: "25px", xs: "20px", sm: "20px" },
                  }}
                >
                  Women who are 18 to 45 can participate
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                sx={{
                  textAlign: "center",
                }}
              >
                <img
                  alt="icons"
                  src={roundNextPlan}
                  style={{
                    width: "48px",
                    height: "48px",
                    paddingBottom: "1rem",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { md: "18px", xs: "14px", sm: "16px" },
                    lineHeight: { md: "25px", xs: "20px", sm: "20px" },
                  }}
                >
                  Planning to become pregnant in the next 15 months
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                sx={{
                  textAlign: "center",
                }}
              >
                <img
                  alt="icons"
                  src={signFilled}
                  style={{
                    width: "48px",
                    height: "48px",
                    paddingBottom: "1rem",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { md: "18px", xs: "14px", sm: "16px" },
                    lineHeight: { md: "25px", xs: "20px", sm: "20px" },
                  }}
                >
                  Able to consent to participation
                </Typography>
              </Grid>
            </Grid>

            <Grid xs={12} sx={{ textAlign: "center" }}>
              <Button
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "20px",
                  letterSpacing: "0.5px",
                  color: "#FFFFFF",
                  backgroundColor: "#D80C8C",
                  padding: "16px",
                  borderRadius: "10px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#D80C8C",
                  },
                }}
                onClick={this.props.onClickGoToPage("Welcome")}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>

          <Grid
            spacing={2}
            sx={{
              padding: {
                md: "0 6.87rem 5.62rem 6.87rem",
                xs: "0px 15px 40px 15px",
                sm: "0px 40px 50px 40px",
              },
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              sx={{
                height: { md: "450px", sm: "400px", xs: "300px" },
                width: { md: "60%", sm: "90%", xs: "90%" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-iQEVX3GUdk"
                title="WisDoM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "25px",
                }}
              ></iframe>
            </Grid>
          </Grid>

          <Grid
            sx={{
              padding: { md: "0px 36px", sm: "0px 36px", xs: "0px 20px" },
            }}
          >
            <Grid
              sx={{
                backgroundImage: `url(${infoBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: {
                  md: "77px 0px 27px 0px",
                  sm: "50px 0px 25px 0px",
                  xs: "18px 15px",
                },
              }}
            >
              <Grid sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "#221F73",
                    fontSize: { md: "20px", sm: "20px", xs: "18px" },
                    fontWeight: 700,
                    paddingBottom: { md: "21px", sm: "10px", xs: "21px" },
                  }}
                >
                  INFORMATION
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: { md: "46px", sm: "36px", xs: "25px" },
                    fontWeight: 600,
                  }}
                >
                  What Participation Involves
                </Typography>
              </Grid>

              <Grid
                direction={{ xs: "column", sm: "row" }}
                sx={{
                  padding: { md: "80px", sm: "20px 40px", xs: "25px 0px" },
                  display: "flex",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    padding: { md: "24px", sm: "15px", xs: "10px" },
                    borderRadius: "20px",
                    width: "100%",
                    background: "white",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={Vector}
                      alt="Icon"
                      style={{ width: "32px", height: "32px" }}
                    />
                    <Typography
                      sx={{
                        color: "#221F73",
                        paddingBottom: "8px",
                        fontSize: { md: "24px", sm: "24px", xs: "18px" },
                        fontWeight: 700,
                        marginLeft: "8px",
                      }}
                    >
                      Quick Insight
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#21272A",
                      paddingBottom: { md: "35px", sm: "25px" },
                      fontSize: { md: "18px", sm: "18px", xs: "14px" },
                      fontWeight: 400,
                      paddingTop: { md: "20px", sm: "10px" },
                    }}
                  >
                    Once consent is obtained, you will be asked to complete an
                    initial survey, and the research team will contact you to
                    collect information about your IBD history.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    padding: { md: "24px", sm: "15px", xs: "10px" },

                    borderRadius: "20px",
                    width: "100%",
                    background: "white",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={survey}
                      alt="survey"
                      style={{ width: "22px", height: "32px" }}
                    />
                    <Typography
                      sx={{
                        color: "#221F73",
                        paddingBottom: { md: "8px", sm: "8px", xs: "5px" },
                        fontSize: { md: "24px", sm: "24px", xs: "18px" },
                        fontWeight: 700,
                        marginLeft: "8px",
                      }}
                    >
                      Surveys
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#21272A",
                      paddingBottom: { md: "35px", sm: "25px" },
                      fontSize: { md: "18px", sm: "18px", xs: "14px" },
                      fontWeight: 400,
                      paddingTop: { md: "20px", sm: "10px" },
                    }}
                  >
                    You will then be asked to complete monthly surveys while
                    trying to conceive, and then for an additional three months
                    after becoming pregnant. You may choose to opt out of the
                    study at any time
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              padding: {
                md: "3.18rem 2.37rem 0.87rem 2.31rem",
                xs: "39px 24px 24px 24px",
                sm: "39px 44px 24px 44px",
              },
            }}
          >
            <Grid>
              <Grid
                container
                spacing={2}
                sx={{
                  paddingTop: "2.5rem",
                  paddingBottom: { md: "4rem", xs: "2rem", sm: "3rem" },
                  paddingLeft: { xs: "0px", md: "5rem" },
                  paddingRight: { xs: "0px", md: "5rem" },
                }}
              >
                <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
                  <img
                    alt="icon"
                    src={icahn}
                    style={{
                      width: "250px",
                      height: "auto",
                      paddingBottom: "1rem",
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
                  <img
                    alt="icon"
                    src={helmsley}
                    style={{
                      width: "250px",
                      height: "auto",
                      paddingBottom: "1rem",
                    }}
                  />
                </Grid>

                <Grid xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
                  <img
                    alt="icon"
                    src={FullLockupMaroon}
                    style={{
                      width: "240px",
                      height: "auto",
                      paddingBottom: "1rem",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ backgroundColor: "black", padding: "1.5rem" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: { md: "center" },
                  alignItems: "center",
                }}
              >
                <img
                  alt="images"
                  src={whiteHeart}
                  style={{ width: "66px", height: "auto" }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  textAlign: { md: "left", sm: "center", xs: "center" },
                }}
              >
                <Typography
                  sx={{
                    color: "#D4D5D9",
                    fontSize: "16px",
                    fontWeight: 400,
                    marginBottom: { md: "15px", sm: "15px", xs: "5px" },
                  }}
                >
                  Home
                </Typography>
                <Typography
                  sx={{
                    color: "#D4D5D9",
                    fontSize: "16px",
                    fontWeight: 400,
                    cursor: "pointer",
                    marginBottom: { md: "15px", sm: "15px", xs: "5px" },
                  }}
                >
                  <a
                    style={{
                      color: "#D4D5D9",
                      fontSize: "14px",
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                    href="WISDOM_About.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About
                  </a>
                </Typography>
                <Typography
                  sx={{
                    color: "#D4D5D9",
                    fontSize: "16px",
                    fontWeight: 400,
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{
                      color: "#D4D5D9",
                      fontSize: "14px",
                      fontWeight: 400,
                      textDecoration: "none",
                    }}
                    href="WISDOM_FAQ.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FAQ
                  </a>
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  textAlign: { md: "left", sm: "center", xs: "center" },
                  display: "Grid",
                }}
              >
                <Box
                  sx={{
                    paddingTop: { xs: "15px", sm: "15px" },
                  }}
                >
                  <Typography
                    sx={{ color: "#D4D5D9", fontSize: "10px", fontWeight: 500 }}
                  >
                    Contact us
                  </Typography>
                  <Typography
                    sx={{ color: "#D4D5D9", fontSize: "20px", fontWeight: 500 }}
                  >
                    +1 (212) 824-7786
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "Grid",
                    alignItems: "end",
                    paddingTop: { xs: "15px", sm: "15px" },
                  }}
                >
                  <Typography
                    sx={{ color: "#D4D5D9", fontSize: "10px", fontWeight: 500 }}
                  >
                    Email
                  </Typography>
                  <Typography
                    sx={{ color: "#D4D5D9", fontSize: "20px", fontWeight: 500 }}
                  >
                    wisdom@mssm.edu
                  </Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  textAlign: "left",
                  display: "Grid",
                  justifyContent: "end",
                }}
              >
                <img
                  alt="UpArrow"
                  src={topArrow}
                  style={{ width: "40px", height: "auto", cursor: "pointer" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
