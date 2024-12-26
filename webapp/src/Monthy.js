import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";

import React from "react";
import Header from "./Header";
import { Slider } from "@mui/material";

const checkboxes = [
  { response: 1, label: "Started earlier than expected" },
  { response: 2, label: "Started later than expected" },
  { response: 3, label: "Shorter duration than usual" },
  { response: 4, label: "Longer duration than usual" },
  { response: 5, label: "Heavier than usual" },
  { response: 6, label: "Lighter than usual" },
  { response: 555, label: "Other" },
  { response: 0, label: "None of the above" },
];

const healtCareOptions = [
  { response: 1, label: "Gonorrhea" },
  { response: 2, label: "Bacterial vaginosis" },
  { response: 3, label: "Genital herpes" },
  { response: 4, label: "HIV" },
  { response: 5, label: "Chlamydia" },
  { response: 6, label: "Yeast infection" },
  { response: 7, label: "Syphilis" },
  { response: 8, label: "Pelvic inflammatory disease" },
  { response: 9, label: "None of the above" },
];

const questions = [
  {
    field_name: "prom_health",
    label: "In general, would you say your health is:",
  },
  {
    field_name: "prom_qual",
    label: "In general, would you say your quality of life is:",
  },
  {
    field_name: "prom_phys",
    label: "In general, how would you rate your physical health?",
  },
  {
    field_name: "prom_ment_health",
    label:
      "In general, how would you rate your mental health, including your mood and your ability to think?",
  },
  {
    field_name: "prom_satis",
    label:
      "In general, how would you rate your satisfaction with your social activities and relationships?",
  },
  {
    field_name: "prom_social",
    label:
      "In general, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, friend, etc.)",
  },
];

const contraOption = [
  { response: 1, label: "Condoms" },
  { response: 2, label: "Injection birth control (Depo Provera)" },
  { response: 3, label: "Birth control patch" },
  { response: 4, label: "Birth control pills" },
  { response: 5, label: "Hormonal implant (Nexplanon)" },
  { response: 6, label: "IUD (copper/10-year)" },
  {
    response: 7,
    label:
      "IUD (hormonal, 3-year / 5 year - Mirena, Skyla, Liletta or Kyleena)",
  },
  { response: 8, label: "NuvaRing" },
  {
    response: 9,
    label:
      "Rhythm method (having sex only when you think you're not ovulating)",
  },
  { response: 10, label: "Diaphragm" },
  { response: 555, label: "Other" },
];

const setOfQuestion = {
  label: "",
  element_type: "radio_grid",
  options: [
    { label: "Excellent", value: "5" },
    { label: "Very Good", value: "4" },
    { label: "Good", value: "3" },
    { label: "Fair", value: "2" },
    { label: "Poor", value: "1" },
  ],
  questions: [
    {
      field_name: "prom_health",
      label: "In general, would you say your health is:",
    },
    {
      field_name: "prom_qual",
      label: "In general, would you say your quality of life is:",
    },
    {
      field_name: "prom_phys",
      label: "In general, how would you rate your physical health?",
    },
    {
      field_name: "prom_ment_health",
      label:
        "In general, how would you rate your mental health, including your mood and your ability to think?",
    },
    {
      field_name: "prom_satis",
      label:
        "In general, how would you rate your satisfaction with your social activities and relationships?",
    },
    {
      field_name: "prom_social",
      label:
        "In general, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, friend, etc.)",
    },
  ],
};

const infertilityTreatOptions = [
  { response: 1, label: "In-vitro fertilization (IVF)" },
  { response: 2, label: "Medications" },
  { response: 3, label: "Intrauterine Insemination (IUI)" },
  { response: 4, label: "Reproductive surgeries" },
];

const ovulationMethodOptions = [
  { response: 1, label: "Ovulation kit (urine sticks)" },
  { response: 2, label: "Basal body temperature" },
  { response: 3, label: "Cervical discharge" },
  { response: 4, label: "Based on the timing of last menstrual period" },
  { response: 555, label: "Other" },
];

const confirmPregOption = [
  { response: 1, label: "Home pregnancy test" },
  { response: 2, label: "Blood work at my doctor's office" },
  { response: 3, label: "Urinary test at my doctor's office" },
  { response: 4, label: "Ultrasound" },
  { response: 555, label: "Other" },
];

const suregeryPartnerOption = [
  { response: 1, label: "Pelvis" },
  { response: 2, label: "Genitals" },
  { response: 3, label: "Urologic system (ureters, urethra, bladder)" },
];

const partDxOption = [
  {
    response: 1,
    label: "Mumps with testicular involvement (also known as orchitis)",
  },
  { response: 2, label: "Recurrent sinus and lung infections" },
  { response: 3, label: "Chlamydia" },
  { response: 4, label: "Gonorrhea" },
  { response: 5, label: "Syphilis" },
  { response: 6, label: "Prostatitis (infection of the prostate)" },
  { response: 999, label: "I don't know" },
  { response: 0, label: "None of the above" },
];

const partDiagCondOptions = [
  { label: "Obesity (BMI>30)", response: 1 },
  { label: "High blood pressure and/or high cholesterol", response: 2 },
  { label: "Diabetes type 1", response: 3 },
  { label: "Diabetes type 2", response: 4 },
  { label: "Sleep apnea", response: 5 },
  { label: "Klinefelter syndrome", response: 6 },
  { label: "Other", response: 555 },
  { label: "I don't know", response: 999 },
  { label: "None of the above", response: 0 },
];

const partSurgOption = [
  {
    label:
      "Vasectomy (sterilization surgery to block sperm from reaching the semen)",
    response: 1,
  },
  {
    label: "Orchiectomy (surgical removal of one or both testes)",
    response: 2,
  },
  { label: "Hernia repair", response: 3 },
  { label: "I don't know", response: 999 },
  { label: "None of the above", response: 0 },
];

const partExposedOptions = [
  { response: 1, label: "CT scans" },
  { response: 2, label: "Radiation therapy" },
  { response: 3, label: "Chemotherapy" },
  { response: 4, label: "Steroids" },
  { response: 999, label: "I don't know" },
  { response: 0, label: "None of the above" },
];

const outcomePregOption = [
  { response: 1, label: "Ectopic pregnancy" },
  { response: 2, label: "Molar pregnancy or hydatidiform mole" },
  { response: 3, label: "Spontaneous miscarriage" },
  {
    response: 4,
    label:
      "Therapeutic abortion/termination (my doctor recommended an abortion)",
  },
  { response: 5, label: "Elective termination (I chose to have an abortion)" },
  { response: 555, label: "Other" },
  { response: 999, label: "I don't know" },
  { response: 777, label: "I choose not to respond" },
];

const whatSurgeryOption = [
  {
    response: 1,
    label:
      "Subtotal colectomy with end ileostomy and Hartmann pouch creation (removal of the colon with creation of ileostomy where stool is coming out, with rectum still in place) - this may be the first surgery when creating a pouch, or could be for Crohn's in the colon.",
  },
  {
    response: 2,
    label:
      "Removal of rectum, with creation of the ileoanal pouch and diverting loop ileostomy (pouch created but stool coming out of an ostomy not the anus; often the second surgery when creating a pouch)",
  },
  {
    response: 3,
    label:
      "Removal of ileostomy such that stool now flows through the GI tract directly to the pouch and comes out of the anus (restoring continuity of the GI tract)",
  },
  {
    response: 4,
    label:
      "Total proctocolectomy with creation of the ileoanal pouch and diverting loop ileostomy (removing the whole colon and rectum, creating a pouch, and creating an ostomy where stool is coming out)",
  },
  {
    response: 5,
    label:
      "Stricturoplasty (surgical repair of a stricture [narrowed or scarred area of the bowel] without removing any part of the intestine) - this does not include dilation of a stricture during endoscopy or colonoscopy",
  },
  { response: 6, label: "Removal of part of the small intestine" },
  {
    response: 7,
    label:
      "Removal of part of the small intestine and part of the attached colon",
  },
  {
    response: 8,
    label:
      "Total proctocolectomy (surgical removal of the colon and rectum) with end ileostomy",
  },
  {
    response: 9,
    label:
      "Subtotal colectomy (surgical removal of the colon) with the small bowel attached to the rectum",
  },
  {
    response: 10,
    label:
      "Segmental colonic resection (removal of part, but not all, of the colon) with the new ends of the colon attached to each other (no ostomy- colon is in continuity)",
  },
  { response: 11, label: "Repair of fistula near your anus or vagina" },
  { response: 12, label: "Abscess drainage" },
  { response: 13, label: "Not sure which IBD surgery I had" },
  { response: 14, label: "Non IBD surgery" },
];

const medsPouchOption = [
  {
    response: 1,
    label:
      "Topical (rectal) mesalamine or 5-ASA therapy (e.g. enema, suppository)",
  },
  {
    response: 2,
    label: "Steroid topical therapy (e.g. enema, foam, suppository)",
  },
  {
    response: 3,
    label:
      "Oral antibiotic(s), such as metronidazole (Flagyl), ciprofloxacin, amoxicillin - clavulanic acid (Augmentin), rifaximin (Xifaxan)",
  },
  { response: 4, label: "Oral probiotics (e.g. VSL #3)" },
  {
    response: 5,
    label: "Oral steroids (budesonide [Entocort or Uceris] or prednisone)",
  },
  { response: 6, label: "Biologics or small molecules" },
  { response: 12, label: "Tacrolimus (Prograf)" },
  { response: 7, label: "Immunomodulator (eg. 6MP/azathioprine/methotrexate)" },
  {
    response: 8,
    label:
      "Antidiarrheal medications (e.g. loperamide [Imodium], Atropine / Diphenoxylate [Lomotil], tincture of opium)",
  },
  {
    response: 9,
    label:
      "Tricyclic antidepressant (e.g. amitriptyline [Elavil], imipramine [Tofranil], nortriptyline [Pamelor]",
  },
  { response: 10, label: "Topical treatment (e.g. lidocaine gel)" },
  { response: 555, label: "Other" },
  { response: 0, label: "None of the above" },
];

const biologicalTypeOption = [
  {
    response: 1,
    label: "Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)",
  },
  { response: 2, label: "Adalimumab (Humira)" },
  { response: 6, label: "Golimumab (Simponi)" },
  { response: 7, label: "Certolizumab pegol (Cimzia)" },
  { response: 4, label: "Ustekinumab (Stelara)" },
  { response: 11, label: "Risankizumab (Skyrizi)" },
  { response: 9, label: "Natalizumab (Tysabri)" },
  { response: 5, label: "Vedolizumab (Entyvio)" },
  { response: 3, label: "Tofacitinib (Xeljanz)" },
  { response: 8, label: "Upadacitinib (Rinvoq)" },
  { response: 10, label: "Ozanimod (Zeposia)" },
];

const startMedOption = [
  {
    response: 1,
    label: "Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)",
  },
  { response: 2, label: "Adalimumab (Humira)" },
  { response: 3, label: "Golimumab (Simponi)" },
  { response: 4, label: "Certolizumab pegol (Cimzia)" },
  { response: 6, label: "Ustekinumab (Stelara)" },
  { response: 25, label: "Risankizumab (Skyrizi)" },
  { response: 7, label: "Natalizumab (Tysabri)" },
  { response: 9, label: "Vedolizumab (Entyvio)" },
  { response: 14, label: "Tofacitinib (Xeljanz)" },
  { response: 23, label: "Upadacitinib (Rinvoq)" },
  { response: 24, label: "Ozanimod (Zeposia)" },
  { response: 8, label: "Tacrolimus (Prograf)" },
  { response: 10, label: "Ciprofloxacin (Cipro)" },
  { response: 11, label: "Metronidazole (Flagyl)" },
  { response: 20, label: "Amoxicillin - Clavulanic acid (Augmentin)" },
  { response: 21, label: "Rifaximin (Xifaxan)" },
  { response: 5, label: "Cyclosporine" },
  {
    response: 12,
    label: "Azathioprine or 6MP (Imuran, Azasan, Purinethol, 6-Mercaptopurine)",
  },
  { response: 13, label: "Methotrexate" },
  {
    response: 15,
    label: "Oral corticosteroids (Budesonide (Entocort or Uceris), Prednisone)",
  },
  {
    response: 16,
    label:
      "Topical (rectal) steroids (Uceris foam, cortifoam, or hydrocortisone enema, suppositories)",
  },
  {
    response: 17,
    label:
      "5-ASA / Mesalamine Oral (Apriso, Lialda, Pentasa, Asacol, Delzicol)",
  },
  {
    response: 18,
    label:
      "Topical (rectal) 5-ASA / Mesalamine Suppositories or enemas (Canasa, Rowasa)",
  },
  { response: 555, label: "Other" },
];

const stopMedsOption = [
  {
    response: 1,
    label: "Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)",
  },
  { response: 2, label: "Adalimumab (Humira)" },
  { response: 3, label: "Golimumab (Simponi)" },
  { response: 4, label: "Certolizumab pegol (Cimzia)" },
  { response: 5, label: "Ustekinumab (Stelara)" },
  { response: 25, label: "Risankizumab (Skyrizi)" },
  { response: 6, label: "Natalizumab (Tysabri)" },
  { response: 7, label: "Vedolizumab (Entyvio)" },
  { response: 14, label: "Tofacitinib (Xeljanz)" },
  { response: 23, label: "Upadacitinib (Rinvoq)" },
  { response: 24, label: "Ozanimod (Zeposia)" },
  { response: 8, label: "Tacrolimus (Prograf)" },
  { response: 9, label: "Ciprofloxacin (Cipro)" },
  { response: 10, label: "Metronidazole (Flagyl)" },
  { response: 20, label: "Amoxicillin - Clavulanic acid (Augmentin)" },
  { response: 21, label: "Rifaximin (Xifaxan)" },
  { response: 11, label: "Cyclosporine" },
  {
    response: 12,
    label: "Azathioprine or 6MP (Imuran, Azasan, Purinethol, 6-Mercaptopurine)",
  },
  { response: 13, label: "Methotrexate" },
  {
    response: 15,
    label: "Oral corticosteroids (Budesonide (Entocort or Uceris), Prednisone)",
  },
  {
    response: 16,
    label:
      "Topical (rectal) steroids (Uceris foam, cortifoam, or hydrocortisone enema, suppositories)",
  },
  {
    response: 17,
    label:
      "5-ASA / Mesalamine Oral (Apriso, Lialda, Pentasa, Asacol, Delzicol)",
  },
  {
    response: 18,
    label:
      "Topical (rectal) 5-ASA / Mesalamine Suppositories or enemas (Canasa, Rowasa)",
  },
  { response: 555, label: "Other" },
];

const herniaTypeOpt = [
  { label: "Femoral", response: 1 },
  { label: "Inguinal", response: 2 },
  { label: "Ventral/umbilical", response: 3 },
  { label: "Other", response: 555 },
];

const hormoneOption = [
  { response: 1, label: "Clomiphene (Clomid)" },
  { response: 2, label: "Letrozole (Femara)" },
  { response: 3, label: "Gonadotropin" },
  { response: 4, label: "Metformin (Glumetza, Glucophage, Fortamet)" },
  { response: 5, label: "Bromocriptine (Arlodel, Cycloset)" },
  { response: 6, label: "Hormones that make you ovulate (not listed above)" },
  { response: 7, label: "Steroids" },
  { response: 8, label: "IVIG" },
  { response: 999, label: "Not sure of which medication" },
];

const typeSurgeryOpt = [
  { response: 1, label: "Surgical repair for blockage of the fallopian tubes" },
  { response: 2, label: "Removal of the fallopian tubes" },
  { response: 3, label: "Surgical treatment for endometriosis" },
  { response: 4, label: "Uterine fibroid removal (myomectomy)" },
  { response: 5, label: "Other surgery on your uterus" },
  { response: 6, label: "Surgery for PCOS" },
  { response: 555, label: "Other surgery" },
];

const whereReproOption = [
  { response: 1, label: "Mount Sinai" },
  { response: 2, label: "University of Minnesota/MHealth Fairview" },
  { response: 555, label: "Other" },
];

class Monthly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      // data: this.props.data,
      data: {
        ...this.props.data,
        today_date: "",
        fu_status: "",
        fu_contraception_past: "",
      },
      errors: {},
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }
  componentDidUpdate() {
    console.log("State Updated -->", this.state.data);
  }

  onFieldChangeA = (field) => (event) => {
    const { value } = event.target;

    const updatedData = { ...this.state.data };

    if (field === "fu_status") {
      for (const key in updatedData) {
        if (
          key !== "fu_status" &&
          key !== "screening_email" &&
          key !== "access_key" &&
          key !== "today_date"
        ) {
          updatedData[key] = "";
        }
      }
    }

    updatedData[field] = value;

    console.log("State Updated -->", updatedData);

    this.setState({ data: updatedData }, () => {
      console.log("State after update -->", this.state.data);
    });
  };

  marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
  ];

  render() {
    if (this.state.isLoaded) {
      const getTodayDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
      };

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
                Monthly Follow-Up
              </Typography>
              <Box
                sx={{
                  mb: 2,
                  mt: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
                  },
                  width: {
                    xs: "90%",
                    sm: "100%",
                    md: "100%",
                  },
                  alignItems: { xs: "flex-start", sm: "center", md: "center" },
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
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "16px",
                    mb: {
                      xs: 1,
                      md: 0,
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  Todays Date
                </Typography>
                <input
                  type="Date"
                  placeholder="DD"
                  style={{
                    width: "286px",
                    height: "46px",
                    borderRadius: "6px",
                    boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                    border: "1px solid rgba(109, 117, 143, 1)",
                    padding: "0 10px",
                    boxSizing: "border-box",
                  }}
                  value={this.state.data?.today_date}
                  onChange={this.onFieldChange("today_date")}
                  max={getTodayDate()}
                />
              </Box>
              <Box
                sx={{
                  mb: 2,
                  mt: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
                  },
                  width: {
                    xs: "90%",
                    sm: "100%",
                    md: "100%",
                  },
                  alignItems: {
                    xs: "flex-start",
                    sm: "flex-start",
                    md: "flex-start",
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
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "16px",
                    mb: {
                      xs: 1,
                      md: 0,
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  Please choose among the following options which best defines
                  your status:
                </Typography>
                <RadioGroup
                  value={this.state.data.fu_status || ""}
                  onChange={(event) => this.onFieldChangeA("fu_status")(event)}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Not pregnant, attempting conception without assisted reproductive technology"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Not attempting conception"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Not pregnant, have started assisted reproductive technology"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Currently pregnant"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Recently pregnant, but no longer pregnant"
                  />
                  <FormControlLabel
                    value="6"
                    control={<Radio />}
                    label="Opt out from study"
                  />
                </RadioGroup>
              </Box>
              {this.state?.data?.fu_status === "1" ? (
                <>
                  <Box
                    id="Section-1"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 1: Current Reproductive Status
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, have you used any type(s)
                      of contraception ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.fu_contraception_past || ""}
                      onChange={this.onFieldChange("fu_contraception_past")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What type(s) of contraception did you use ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.contra || []}
                      onChange={this.onFieldChange("contra")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = contraOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {contraOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.contra?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}

              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(1) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use condoms?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date}
                      onChange={this.onFieldChange("stop_contra_date")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(2) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use injection birth control (Depo
                      Provera) ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_2}
                      onChange={this.onFieldChange("stop_contra_date_2")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(3) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use birth control patch ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_3}
                      onChange={this.onFieldChange("stop_contra_date_3")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(4) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What type of birth control pills ?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.type_pills || ""}
                      onChange={this.onFieldChange("type_pills")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">
                        Combined estrogen and progestin
                      </MenuItem>
                      <MenuItem value="2">Progestin only</MenuItem>
                      <MenuItem value="999">Unsure</MenuItem>
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use birth control pills ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_4}
                      onChange={this.onFieldChange("stop_contra_date_4")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(5) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use hormonal implant (Nexplanon) ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_5}
                      onChange={this.onFieldChange("stop_contra_date_5")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(6) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use IUD (copper/10-year) ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_6}
                      onChange={this.onFieldChange("stop_contra_date_6")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(7) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use IUD (hormonal, 3-year / 5 year -
                      Mirena, Skyla, Liletta or Kyleena) ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_7}
                      onChange={this.onFieldChange("stop_contra_date_7")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(8) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use NuvaRing ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_8}
                      onChange={this.onFieldChange("stop_contra_date_8")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(9) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use rhythm method (having sex only when
                      you think you're not ovulating) ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_9}
                      onChange={this.onFieldChange("stop_contra_date_9")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(10) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use a diaphragm ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_10}
                      onChange={this.onFieldChange("stop_contra_date_10")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.fu_contraception_past === "1" &&
              this.state?.data?.contra?.includes(555) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When did you last use other type(s) of contraception ?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_contra_date_11}
                      onChange={this.onFieldChange("stop_contra_date_11")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {this.state?.data?.fu_status === "1" ? (
                <>
                  <Box
                    id="Section-2"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 2: Menstruation, ovulation and intercourse
                      histories
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When was the first day of your last menstrual period
                      (please answer as precisely as possible)?
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.last_menst_period}
                      onChange={this.onFieldChange("last_menst_period")}
                      max={getTodayDate()}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please state abnormalities (if any) during last menstrual
                      period:
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.period_abnormalities || []}
                      onChange={this.onFieldChange("period_abnormalities")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = checkboxes.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {checkboxes.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.period_abnormalities?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Regarding your most recent menstrual cycle:
                    </Typography>

                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.type_pills || ""}
                      onChange={this.onFieldChange("type_pills")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">I checked my ovulation</MenuItem>
                      <MenuItem value="0">
                        I did not check my ovulation
                      </MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.type_pills === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What method(s) did you use to check ovulation ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.ovulation_method_v2 || []}
                      onChange={this.onFieldChange("ovulation_method_v2")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = ovulationMethodOptions.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {ovulationMethodOptions.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.ovulation_method_v2?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When I checked for ovulation I was:
                    </Typography>

                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.ovulation || ""}
                      onChange={this.onFieldChange("ovulation")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">Ovulating</MenuItem>
                      <MenuItem value="0">Not ovulating</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.type_pills === "1" &&
              this.state?.data?.ovulation === "1" ? (
                <>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Please enter your most recent dates of ovulation:
                  </Typography>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Start date
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.ovulation_strt_rng_1}
                      onChange={this.onFieldChange("ovulation_strt_rng_1")}
                      max={getTodayDate()}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      End date
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.ovulation_end_rng_1}
                      onChange={this.onFieldChange("ovulation_end_rng_1")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, what was the total number
                      of days you had unprotected sexual intercourse?
                    </Typography>
                    <input
                      type="number"
                      placeholder="number"
                      value={this.state.data?.sex_times}
                      min={1}
                      onChange={this.onFieldChange("sex_times")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>

                  <Box
                    id="Section-3"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 3: Partner information
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Is your current partner the same partner from your last
                      questionnaire?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.a_is_your_current_partner || ""}
                      onChange={this.onFieldChange("a_is_your_current_partner")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" &&
              this.state?.data?.a_is_your_current_partner === "0" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Is your current partner with whom you plan to have a child
                      ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.curr_part_child_v2 || ""}
                      onChange={this.onFieldChange("curr_part_child_v2")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "4" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you indicate that you were pregnant during your last
                      questionnaire ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.preg_last_fu || ""}
                      onChange={this.onFieldChange("preg_last_fu")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0") ? (
                <>
                  <Box
                    id="Section 1"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 1: Assisted Reproductive Technologies
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, have you undergone
                      infertility treatments ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.infert_treat || ""}
                      onChange={this.onFieldChange("infert_treat")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0") ? (
                this.state?.data?.infert_treat === "1" ? (
                  <>
                    <Box
                      sx={{
                        mb: 2,
                        mt: 2,
                        display: "flex",
                        justifyContent: {
                          xs: "flex-start",
                          sm: "space-between",
                          md: "space-between",
                        },
                        width: {
                          xs: "90%",
                          sm: "100%",
                          md: "100%",
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
                          fontFamily: "Montserrat",
                          fontWeight: 400,
                          fontSize: "16px",
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                          width: {
                            xs: "90%",
                            sm: "60%",
                            md: "70%",
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        Which of the following infertility treatments have you
                        undergone since your last questionnaire ?
                      </Typography>
                      <Select
                        labelId="multi-select-label"
                        multiple
                        value={this.state.data?.infertility_treat || []}
                        onChange={this.onFieldChange("infertility_treat")}
                        renderValue={(selected) => (
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {selected?.length
                              ? selected.map((value) => {
                                  const option = infertilityTreatOptions.find(
                                    (option) => option.response === value
                                  );
                                  return option ? (
                                    <div
                                      key={value}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        margin: "2px",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        border: "1px solid #ccc",
                                      }}
                                    >
                                      {option.label}
                                    </div>
                                  ) : null;
                                })
                              : null}
                          </div>
                        )}
                        sx={{
                          width: "286px",
                          minHeight: "46px",
                          maxHeight: "max-content",
                          borderRadius: "6px",
                          boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                          border: "1px solid rgba(109, 117, 143, 1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "& .MuiSelect-select": {
                            padding: "0 10px",
                            height: "100%",
                          },
                          "& .MuiSelect-icon": {
                            right: "10px",
                          },
                        }}
                      >
                        {infertilityTreatOptions.map((option) => (
                          <MenuItem
                            sx={{ width: "286px" }}
                            key={option.response}
                            value={option.response}
                          >
                            <Checkbox
                              checked={
                                this.state.data?.infertility_treat?.indexOf(
                                  option.response
                                ) > -1
                              }
                            />
                            <ListItemText
                              primary={option.label}
                              sx={{
                                overflow: "visible",
                                whiteSpace: "normal",
                              }}
                            />
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </>
                ) : null
              ) : null}
              {(this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  this.state?.data?.preg_last_fu === "0")) &&
              this.state?.data?.infert_treat === "1" &&
              this.state?.data?.infertility_treat?.includes(1) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      List number of egg retrievals since last follow-up
                      questionnaire:
                    </Typography>
                    <input
                      type="number"
                      placeholder="number"
                      value={this.state.data?.num_ivf}
                      min={1}
                      onChange={this.onFieldChange("num_ivf")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      List number of embryo transfers since last follow-up
                      questionnaire:
                    </Typography>
                    <input
                      type="number"
                      placeholder="number"
                      value={this.state.data?.number_embryo_tranfs}
                      min={1}
                      onChange={this.onFieldChange("number_embryo_tranfs")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  this.state?.data?.preg_last_fu === "0")) &&
              this.state?.data?.infert_treat === "1" &&
              this.state?.data?.infertility_treat?.includes(2) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Types of medications:
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.hormone_type || []}
                      onChange={this.onFieldChange("hormone_type")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = hormoneOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {hormoneOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.hormone_type?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  this.state?.data?.preg_last_fu === "0")) &&
              this.state?.data?.infert_treat === "1" &&
              this.state?.data?.infertility_treat?.includes(3) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      List number of inseminations since last follow-up
                      questionnaire:
                    </Typography>
                    <input
                      type="number"
                      placeholder="number"
                      value={this.state.data?.num_insemination}
                      min={1}
                      onChange={this.onFieldChange("num_insemination")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  this.state?.data?.preg_last_fu === "0")) &&
              this.state?.data?.infert_treat === "1" &&
              this.state?.data?.infertility_treat?.includes(4) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Reproductive surgery types
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.types_surger || []}
                      onChange={this.onFieldChange("types_surger")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = typeSurgeryOpt.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {typeSurgeryOpt.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.types_surger?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Where was the surgery performed ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.where_repro_surg || []}
                      onChange={this.onFieldChange("where_repro_surg")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = whereReproOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {whereReproOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.where_repro_surg?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "3" ? (
                <>
                  <Box
                    id="Section 2"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 2: IBD Health Status
                    </Typography>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "3" &&
              this.state?.data?.stop_meds?.includes(1) ? (
                <>
                  <Box>Check</Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "3" &&
              this.state?.data?.stop_meds?.includes(1) ? (
                <div>
                  Follow-up status is 3 and new medications have started.
                </div>
              ) : null}
              {this.state?.data?.fu_status === "4" &&
              this.state?.data?.preg_last_fu === "0" ? (
                <>
                  <Box
                    id="Section 2"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 2: Pregnancy Status
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                    <Box>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Montserrat",
                          fontWeight: 400,
                          fontSize: "16px",
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        How many weeks and how many days pregnant ?
                      </Typography>
                    </Box>
                    <Box>
                      <input
                        placeholder="week"
                        value={this.state.data?.weeks_preg}
                        onChange={this.onFieldChange("weeks_preg")}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginRight: "5px",
                          width: "286px",
                          height: "46px",
                          borderRadius: "6px",
                          boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                          border: "1px solid rgba(109, 117, 143, 1)",
                          padding: "0 10px",
                          boxSizing: "border-box",
                        }}
                      />

                      <input
                        placeholder="days"
                        value={this.state.data?.days_pregnant}
                        onChange={this.onFieldChange("days_pregnant")}
                        style={{
                          width: "286px",
                          height: "46px",
                          borderRadius: "6px",
                          boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                          border: "1px solid rgba(109, 117, 143, 1)",
                          padding: "0 10px",
                          boxSizing: "border-box",
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      How did you confirm that you are pregnant ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.confirm_preg || []}
                      onChange={this.onFieldChange("confirm_preg")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = confirmPregOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {confirmPregOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.confirm_preg?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Date of last menstrual period:
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.date_menstrual_per_3}
                      onChange={this.onFieldChange("date_menstrual_per_3")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "4" &&
              this.state?.data?.preg_last_fu === "0" ? (
                <>
                  <Box
                    id="Section 3"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 3: Partner information
                    </Typography>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "4" &&
              this.state?.data?.preg_last_fu === "0" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Is the father of this fetus the same partner from your
                      baseline questionnaire ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.father_fetus || ""}
                      onChange={this.onFieldChange("father_fetus")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0" &&
                this.state?.data?.father_fetus === "0") ||
              (this.state?.data?.fu_status === "1" &&
                this.state?.data?.a_is_your_current_partner === "0" &&
                this.state?.data?.curr_part_child_v2 === "1") ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What is your partner's current age ?
                    </Typography>

                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.cur_part_age_v2 || ""}
                      onChange={this.onFieldChange("cur_part_age_v2")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">Less than 35</MenuItem>
                      <MenuItem value="2">35-45</MenuItem>
                      <MenuItem value="3">46-60</MenuItem>
                      <MenuItem value="4">Older than 60</MenuItem>
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Has your partner ever been diagnosed with infertility ?
                    </Typography>

                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.part_diag_fer_v2 || ""}
                      onChange={this.onFieldChange("part_diag_fer_v2")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="2">No</MenuItem>
                      <MenuItem value="999">I don\'t know</MenuItem>
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Has your partner ever had any procedures or surgeries
                      involving his pelvis, genital organs, or urologic system
                      (ureters/urethra/bladder) ?
                    </Typography>

                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.pelvic_proc_v2 || ""}
                      onChange={this.onFieldChange("pelvic_proc_v2")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="2">No</MenuItem>
                      <MenuItem value="999">I don\'t know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {((this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0" &&
                this.state?.data?.father_fetus === "0") ||
                (this.state?.data?.fu_status === "1" &&
                  this.state?.data?.a_is_your_current_partner === "0" &&
                  this.state?.data?.curr_part_child_v2 === "1")) &&
              this.state?.data?.pelvic_proc_v2 === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please specify location of surgery
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.surgery_partner_pelvis || []}
                      onChange={this.onFieldChange("surgery_partner_pelvis")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = suregeryPartnerOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {suregeryPartnerOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.surgery_partner_pelvis?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0" &&
                this.state?.data?.father_fetus === "0") ||
              (this.state?.data?.fu_status === "1" &&
                this.state?.data?.a_is_your_current_partner === "0" &&
                this.state?.data?.curr_part_child_v2 === "1") ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Has your partner ever been diagnosed with any of the
                      following infections ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.part_dx_infec_v2 || []}
                      onChange={this.onFieldChange("part_dx_infec_v2")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = partDxOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {partDxOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_dx_infec_v2?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Has your partner ever been diagnosed with any of the
                      following conditions ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.part_diag_cond_v2 || []}
                      onChange={this.onFieldChange("part_diag_cond_v2")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = partDiagCondOptions.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {partDiagCondOptions.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_diag_cond_v2?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please list your partner\'s current medications, if you
                      know them <br />
                      Enter "none" for no medications or "UNK" for unknown
                    </Typography>
                    <input
                      value={this.state.data?.part_meds_v2}
                      onChange={this.onFieldChange("part_meds_v2")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Has your partner ever undergone any of the following
                      surgical procedures ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.part_surg_proced_v2 || []}
                      onChange={this.onFieldChange("part_surg_proced_v2")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = partSurgOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {partSurgOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_surg_proced_v2?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.part_surg_proced_v2?.includes(3) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Which hernia type ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.hernia_type_v2 || []}
                      onChange={this.onFieldChange("hernia_type_v2")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = herniaTypeOpt.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {herniaTypeOpt.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.hernia_type_v2?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0" &&
                this.state?.data?.father_fetus === "0") ||
              (this.state?.data?.fu_status === "1" &&
                this.state?.data?.a_is_your_current_partner === "0" &&
                this.state?.data?.curr_part_child_v2 === "1") ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Has your partner ever been exposed to any of the following
                      ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.part_exposed_v2 || []}
                      onChange={this.onFieldChange("part_exposed_v2")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = partExposedOptions.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {partExposedOptions.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_exposed_v2?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.part_exposed_v2?.includes(1) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      About how many CT scans ?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.part_how_many_ct_scans_v2 || ""}
                      onChange={this.onFieldChange("part_how_many_ct_scans_v2")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">1 to 5 CT scans</MenuItem>
                      <MenuItem value="2">More than 5 CT scans</MenuItem>
                      <MenuItem value="999">I don\'t know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" ||
              (this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0") ? (
                <>
                  <Box
                    id="Section-IBD"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 4: IBD Health Status
                    </Typography>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "4" &&
              this.state?.data?.preg_last_fu === "1" ? (
                <>
                  <Box
                    id="Section-IBD"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 1: IBD Health Status
                    </Typography>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Disease activity
                  </Typography>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      On average, how many total bowel movements do you
                      currently have over a 24-hour period ?
                    </Typography>
                    <input
                      type="number"
                      placeholder="number"
                      value={this.state.data?.avg_stools}
                      min={1}
                      onChange={this.onFieldChange("avg_stools")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What is a normal number of bowel movements per 24-hour
                      period when your IBD is controlled ?
                    </Typography>
                    <input
                      type="number"
                      placeholder="number"
                      min={1}
                      value={this.state.data?.normal_stool}
                      onChange={this.onFieldChange("normal_stool")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      How often do you have loose bowel movements ?
                    </Typography>

                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.loose_stools || ""}
                      onChange={this.onFieldChange("loose_stools")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">With every bowel movement</MenuItem>
                      <MenuItem value="2">With most bowel movements</MenuItem>
                      <MenuItem value="3">Sometimes</MenuItem>
                      <MenuItem value="4">Rarely</MenuItem>
                      <MenuItem value="5">
                        Never (my stools are always formed)
                      </MenuItem>
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Fecal urgency is defined as sudden, irresistible urge to
                      have a bowel movement. Do you have fecal urgency ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.fec_urg || ""}
                      onChange={this.onFieldChange("fec_urg")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Do you have rectal bleeding ?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.rec_bleed || ""}
                      onChange={this.onFieldChange("rec_bleed")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">Never</MenuItem>
                      <MenuItem value="2">
                        Visible blood with stool less than 50% of the time
                      </MenuItem>
                      <MenuItem value="3">
                        Visible blood with stool greater than or equal to 50% of
                        the time
                      </MenuItem>
                      <MenuItem value="4">Passing blood alone</MenuItem>
                    </Select>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Incontinence is defined as inability to hold stool (having
                      an accident). Do you have incontinence during the daytime
                      ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.day_incont || ""}
                      onChange={this.onFieldChange("day_incont")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Do you have night time incontinence ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.night_incont || ""}
                      onChange={this.onFieldChange("night_incont")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      How often do you have abdominal pain ?
                    </Typography>

                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.uc_abd_pain || ""}
                      onChange={this.onFieldChange("uc_abd_pain")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">Every day</MenuItem>
                      <MenuItem value="2">Most days</MenuItem>
                      <MenuItem value="3">1-2 days per week</MenuItem>
                      <MenuItem value="4">1-2 times per month</MenuItem>
                      <MenuItem value="5">Rarely</MenuItem>
                      <MenuItem value="6">Never</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              ["1", "2", "3", "4", "5"].includes(
                this.state?.data?.uc_abd_pain
              ) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      When you have abdominal pain, how would you describe the
                      severity ?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.uc_pain_severity || ""}
                      onChange={this.onFieldChange("uc_pain_severity")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">Mild</MenuItem>
                      <MenuItem value="2">Moderate</MenuItem>
                      <MenuItem value="3">
                        Severe (but can still do my daily activities)
                      </MenuItem>
                      <MenuItem value="4">
                        Severe (interferes with my daily activities)
                      </MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Complications
                  </Typography>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Since your last questionnaire, have you been newly diagnosed
                    with any of the following ?
                  </Typography>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Joint pains and swelling
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.arthralgia || ""}
                      onChange={this.onFieldChange("arthralgia")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Inflammation in your eye related to IBD
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.uveitis_hbi || ""}
                      onChange={this.onFieldChange("uveitis_hbi")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Erythema nodosum
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.erythm || ""}
                      onChange={this.onFieldChange("erythm")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Ulcers/sores in your mouth
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.oral_ulcers || ""}
                      onChange={this.onFieldChange("oral_ulcers")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Pyoderma gangrenosum
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.pydrm_gngrnsm || ""}
                      onChange={this.onFieldChange("pydrm_gngrnsm")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Anal fissures (small cuts around your anus)
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.anal_fissures || ""}
                      onChange={this.onFieldChange("anal_fissures")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      New fistula
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.new_fistula || ""}
                      onChange={this.onFieldChange("new_fistula")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Abscess
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.anal_abscess || ""}
                      onChange={this.onFieldChange("anal_abscess")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, have you been hospitalized
                      ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.hosp_fu || ""}
                      onChange={this.onFieldChange("hosp_fu")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.hosp_fu === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      For how many days were you hospitalized ?
                    </Typography>
                    <input
                      type="number"
                      placeholder="number"
                      value={this.state.data?.for_how_many_days_were_you}
                      min={1}
                      onChange={this.onFieldChange(
                        "for_how_many_days_were_you"
                      )}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.hosp_fu === "1") ||
              (this.state?.data?.fu_status === "4" &&
                ["0", "1"].includes(this.state?.data?.preg_last_fu)) ||
              this.state?.data?.hosp_fu === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Was your hospitalization related to IBD ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.reason_for_hosp_ibd || ""}
                      onChange={this.onFieldChange("reason_for_hosp_ibd")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.reason_for_hosp_ibd === "0" ||
              this.state?.data?.reason_for_hosp_ibd === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please explain further.
                    </Typography>
                    <input
                      value={this.state.data?.reason_for_hosp_ibd_explain}
                      onChange={this.onFieldChange(
                        "reason_for_hosp_ibd_explain"
                      )}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </>
              ) : null}

              {this.state?.data?.fu_status === "1" ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, have you had surgery ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.surg_fu || ""}
                      onChange={this.onFieldChange("surg_fu")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.surg_fu === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please select which surgery you have had
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.what_surgery || []}
                      onChange={this.onFieldChange("what_surgery")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = whatSurgeryOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {whatSurgeryOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.what_surgery?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you experience post-operative complications ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.post_op_complications || ""}
                      onChange={this.onFieldChange("post_op_complications")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Was this most recent surgery needed to fix a complication
                      from a prior surgery ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.reoperation_needed || ""}
                      onChange={this.onFieldChange("reoperation_needed")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.surg_fu === "1") ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <></>
              ) : null}
              {this.state?.data?.dx_pouch_since_last?.includes(1) ||
              this.state?.data?.dx_pouch_since_last?.includes(2) ||
              this.state?.data?.dx_pouch_since_last?.includes(3) ||
              this.state?.data?.dx_pouch_since_last?.includes(4) ||
              this.state?.data?.dx_pouch_since_last?.includes(5) ||
              this.state?.data?.dx_pouch_since_last?.includes(999) ||
              this.state?.data?.dx_pouch_since_last?.includes(555) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What medications are you currently receiving for any of
                      those pouch-related conditions ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.meds_pouch_inflamma || []}
                      onChange={this.onFieldChange("meds_pouch_inflamma")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = medsPouchOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {medsPouchOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.meds_pouch_inflamma?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.meds_pouch_inflamma?.includes(6) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please specify which type(s) of biologics or small
                      molecules:
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.biologic_type || []}
                      onChange={this.onFieldChange("biologic_type")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = biologicalTypeOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {biologicalTypeOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.biologic_type?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, have you started any new
                      medications ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.started_new_meds || ""}
                      onChange={this.onFieldChange("started_new_meds")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.started_new_meds === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Which medications have you started since your last
                      questionnaire ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.start_meds || []}
                      onChange={this.onFieldChange("start_meds")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = startMedOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {startMedOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.start_meds?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(1)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(1)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(1)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Infliximab (Remicade,
                      Renflexis, Inflectra, Avsola, Ixifi)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_1}
                      onChange={this.onFieldChange("start_date_med_1")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(2)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(2)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(2)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Adalimumab (Humira)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_2}
                      onChange={this.onFieldChange("start_date_med_2")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(3)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(3)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(3)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Golimumab (Simponi)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_3}
                      onChange={this.onFieldChange("start_date_med_3")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(4)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(4)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(4)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Certolizumab pegol (Cimzia)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_4}
                      onChange={this.onFieldChange("start_date_med_4")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(6)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(6)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(6)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Ustekinumab (Stelara)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_6}
                      onChange={this.onFieldChange("start_date_med_6")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(25)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(25)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(25)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Risankizumab (Skyrizi)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_skyrizi}
                      onChange={this.onFieldChange("start_date_med_skyrizi")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(7)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(7)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(7)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Natalizumab (Tysabri)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_7}
                      onChange={this.onFieldChange("start_date_med_7")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(9)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(9)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(9)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Vedolizumab (Entyvio)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_9}
                      onChange={this.onFieldChange("start_date_med_9")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(14)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(14)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(14)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Tofacitinib (Xeljanz)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_xeljanz}
                      onChange={this.onFieldChange("start_date_med_xeljanz")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(23)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(23)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(23)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Upadacitinib (Rinvoq)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_rinvoq}
                      onChange={this.onFieldChange("start_date_med_rinvoq")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(24)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(24)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(24)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Ozanimod (Zeposia)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_zeposia}
                      onChange={this.onFieldChange("start_date_med_zeposia")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(8)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(8)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(8)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Tacrolimus (Prograf)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_tacr_fu}
                      onChange={this.onFieldChange("start_date_med_tacr_fu")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(10)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(10)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(10)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Ciprofloxacin (Cipro)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_cipro}
                      onChange={this.onFieldChange("start_date_med_cipro")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(11)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(11)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(11)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Metronidazole (Flagyl)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_flag}
                      onChange={this.onFieldChange("start_date_med_flag")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(20)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(20)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(20)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Amoxicillin - Clavulanic
                      acid (Augmentin)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_augment}
                      onChange={this.onFieldChange("start_date_med_augment")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(21)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(21)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(21)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Rifaximin (Xifaxan)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_rifx}
                      onChange={this.onFieldChange("start_date_med_rifx")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(5)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(5)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(5)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Cyclosporine
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_cyclo}
                      onChange={this.onFieldChange("start_date_med_cyclo")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(12)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(12)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(12)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Azathioprine or 6MP (Imuran,
                      Azasan, Purinethol, 6-Mercaptopurine)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_aza}
                      onChange={this.onFieldChange("start_date_med_aza")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(13)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(13)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(13)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of Methotrexate
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_mtx}
                      onChange={this.onFieldChange("start_date_med_mtx")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(15)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(15)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(15)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of oral corticosteroids
                      (Budesonide (Entocort or Uceris), Prednisone)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_steroids}
                      onChange={this.onFieldChange("start_date_med_steroids")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(16)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(16)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(16)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of topical (rectal) steroids
                      (Uceris foam, cortifoam, or hydrocortisone enema,
                      suppositories)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_top_steroids}
                      onChange={this.onFieldChange(
                        "start_date_med_top_steroids"
                      )}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(7)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(17)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(17)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of 5-ASA / Mesalamine Oral
                      (Apriso, Lialda, Pentasa, Asacol, Delzicol)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_asa}
                      onChange={this.onFieldChange("start_date_med_asa")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(18)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(18)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(18)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of topical (rectal) 5-ASA /
                      Mesalamine Suppositories or enemas (Canasa, Rowasa)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_asa_enema}
                      onChange={this.onFieldChange("start_date_med_asa_enema")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.start_meds?.includes(555)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.start_meds?.includes(555)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.start_meds?.includes(555)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate START date of other medications
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.start_date_med_other}
                      onChange={this.onFieldChange("start_date_med_other")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, have you stopped any
                      medications ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.stopped_meds || ""}
                      onChange={this.onFieldChange("stopped_meds")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.stopped_meds === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Which medications have you stopped since your last
                      questionnaire
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.stop_meds || []}
                      onChange={this.onFieldChange("stop_meds")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = stopMedsOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {stopMedsOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.stop_meds?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(1)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(1)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(1)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Infliximab (Remicade,
                      Renflexis, Inflectra, Avsola, Ixifi)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_remi}
                      onChange={this.onFieldChange("stop_date_med_remi")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(2)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(2)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(2)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Adalimumab (Humira)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_ada}
                      onChange={this.onFieldChange("stop_date_med_ada")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(3)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(3)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(3)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Golimumab (Simponi)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_goli}
                      onChange={this.onFieldChange("stop_date_med_goli")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(4)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(4)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(4)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Certolizumab pegol (Cimzia)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_cert}
                      onChange={this.onFieldChange("stop_date_med_cert")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(5)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(5)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(5)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Ustekinumab (Stelara)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_stelara}
                      onChange={this.onFieldChange("stop_date_med_stelara")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(25)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(25)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(25)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Risankizumab (Skyrizi)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_skyrizi}
                      onChange={this.onFieldChange("stop_date_med_skyrizi")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(6)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(6)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(6)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Natalizumab (Tysabri)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_nata}
                      onChange={this.onFieldChange("stop_date_med_nata")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(7)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(7)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(7)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Vedolizumab (Entyvio)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_vedo}
                      onChange={this.onFieldChange("stop_date_med_vedo")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(14)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(14)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(14)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Tofacitinib (Xeljanz)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_tofa}
                      onChange={this.onFieldChange("stop_date_med_tofa")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(23)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(23)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(23)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Upadacitinib (Rinvoq)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_rinvoq}
                      onChange={this.onFieldChange("stop_date_med_rinvoq")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(24)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(24)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(24)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Ozanimod (Zeposia)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_zeposia}
                      onChange={this.onFieldChange("stop_date_med_zeposia")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(8)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(8)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(8)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Tacrolimus (Prograf)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_tacro}
                      onChange={this.onFieldChange("stop_date_med_tacro")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(9)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(9)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(9)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Ciprofloxacin (Cipro)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_cipro}
                      onChange={this.onFieldChange("stop_date_med_cipro")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(10)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(10)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(10)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Metronidazole (Flagyl) Please
                      indicate STOP date of Ciprofloxacin (Cipro)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_flagyl}
                      onChange={this.onFieldChange("stop_date_med_flagyl")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(20)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(20)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(20)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Amoxicillin - Clavulanic acid
                      (Augmentin)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_augmentin}
                      onChange={this.onFieldChange("stop_date_med_augmentin")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(21)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(21)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(21)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Rifaximin (Xifaxan)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_rifax}
                      onChange={this.onFieldChange("stop_date_med_rifax")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(11)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(11)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(11)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Cyclosporine
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_cyclo}
                      onChange={this.onFieldChange("stop_date_med_cyclo")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(12)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(12)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(12)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Azathioprine or 6MP (Imuran,
                      Azasan, Purinethol, 6-Mercaptopurine)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_aza}
                      onChange={this.onFieldChange("stop_date_med_aza")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(13)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(13)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(13)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of Methotrexate
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_mtx}
                      onChange={this.onFieldChange("stop_date_med_mtx")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(15)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(15)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(15)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of oral corticosteroids
                      (Budesonide (Entocort or Uceris), Prednisone)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_orl_strds}
                      onChange={this.onFieldChange("stop_date_med_orl_strds")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(16)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(16)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(16)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of topical (rectal) steroids
                      (Uceris foam, cortifoam, or hydrocortisone enema,
                      suppositories)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_top_strds}
                      onChange={this.onFieldChange("stop_date_med_top_strds")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(17)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(17)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(17)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of 5-ASA / Mesalamine Oral
                      (Apriso, Lialda, Pentasa, Asacol, Delzicol)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_asa_oral}
                      onChange={this.onFieldChange("stop_date_med_asa_oral")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(18)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(18)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(18)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of topical (rectal) 5-ASA /
                      Mesalamine Suppositories or enemas (Canasa, Rowasa)
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_asa_enema}
                      onChange={this.onFieldChange("stop_date_med_asa_enema")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" &&
                this.state?.data?.stop_meds?.includes(555)) ||
              (this.state?.data?.fu_status === "3" &&
                this.state?.data?.stop_meds?.includes(555)) ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1") &&
                this.state?.data?.stop_meds?.includes(555)) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please indicate STOP date of other medications
                    </Typography>
                    <input
                      type="Date"
                      placeholder="DD"
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      value={this.state.data?.stop_date_med_other}
                      onChange={this.onFieldChange("stop_date_med_other")}
                      max={getTodayDate()}
                    />
                  </Box>
                </>
              ) : null}

              {this.state?.data?.fu_status === "1" ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Since your last questionnaire, has a doctor or healthcare
                      provider told you that you have any of the following ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.sti_since_last_followup || []}
                      onChange={this.onFieldChange("sti_since_last_followup")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = healtCareOptions.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {healtCareOptions.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.sti_since_last_followup?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </>
              ) : null}

              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(1) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for gonorrhea?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_1 || ""}
                      onChange={this.onFieldChange("treat_sti_1")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(2) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for bacterial vaginosis ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_2 || ""}
                      onChange={this.onFieldChange("treat_sti_2")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(3) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for genital herpes ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_3 || ""}
                      onChange={this.onFieldChange("treat_sti_3")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(4) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for HIV ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_4 || ""}
                      onChange={this.onFieldChange("treat_sti_4")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(5) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for chlamydia ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_5 || ""}
                      onChange={this.onFieldChange("treat_sti_5")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(6) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for yeast infection ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_6 || ""}
                      onChange={this.onFieldChange("treat_sti_6")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(7) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for syphilis ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_7 || ""}
                      onChange={this.onFieldChange("treat_sti_7")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {(this.state?.data?.fu_status === "1" ||
                this.state?.data?.fu_status === "3" ||
                (this.state?.data?.fu_status === "4" &&
                  (this.state?.data?.preg_last_fu === "0" ||
                    this.state?.data?.preg_last_fu === "1"))) &&
              this.state?.data?.sti_since_last_followup?.includes(8) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Did you receive treatment for pelvic inflammatory disease
                      ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.treat_sti_8 || ""}
                      onChange={this.onFieldChange("treat_sti_8")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}

              {this.state?.data?.fu_status === "3" ? (
                <>
                  <Box
                    id="Section 3"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 3: NIH PROMIS Global Health Questionnaire
                    </Typography>
                  </Box>
                </>
              ) : null}

              {this.state?.data?.fu_status === "1" ||
              (this.state?.data?.fu_status === "4" &&
                this.state?.data?.preg_last_fu === "0") ? (
                <>
                  <Box
                    id="Section-5"
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Section 5: NIH PROMIS Global Health Questionnaire
                    </Typography>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "1" ||
              this.state?.data?.fu_status === "3" ||
              (this.state?.data?.fu_status === "4" &&
                (this.state?.data?.preg_last_fu === "0" ||
                  this.state?.data?.preg_last_fu === "1")) ? (
                <>
                  <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item mb={2} xs={6} md={6}></Grid>
                      <Grid item mb={2} xs={6} md={6}>
                        <Grid
                          sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                          }}
                          container
                          spacing={2}
                          alignItems="center"
                        >
                          {setOfQuestion.options.map((option) => (
                            <Grid item xs={2} md={2} key={option.value}>
                              <Typography
                                variant="h6"
                                sx={{ fontSize: "12px", width: "100%" }}
                              >
                                {option.label}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>

                    {setOfQuestion.questions.map((question) => (
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        key={question.field_name}
                        sx={{ mb: 2 }}
                      >
                        <Grid item xs={12} sm={12} md={6}>
                          <Typography
                            variant="body1"
                            component="div"
                            sx={{
                              color: "#6B7280",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              fontSize: "16px",
                              mb: { xs: 1, md: 0 },
                            }}
                          >
                            <span style={{ color: "red" }}>*</span>
                            {question.label}
                          </Typography>
                        </Grid>
                        <Grid
                          sx={{
                            display: { xs: "flex", sm: "flex", md: "none" },
                          }}
                          item
                          xs={12}
                          sm={10}
                          md={6}
                        >
                          {setOfQuestion.options.map((option) => (
                            <Grid mr={2} item xs={2} md={2} key={option.value}>
                              <Typography
                                variant="h6"
                                sx={{ fontSize: "12px", width: "100%" }}
                              >
                                {option.label}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <RadioGroup
                            row
                            name={question.field_name}
                            value={this.state.data?.[question.field_name] || ""}
                            onChange={this.onFieldChange(question.field_name)}
                          >
                            <Grid container spacing={2} alignItems="center">
                              {setOfQuestion.options.map((option) => (
                                <Grid
                                  mr={{ sx: 1, sm: 2, md: 0 }}
                                  item
                                  xs={2}
                                  md={2}
                                  key={option.value}
                                >
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label=""
                                    sx={{
                                      "& .MuiTypography-root": {
                                        fontSize: "6px",
                                      },
                                    }}
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item mb={2} xs={6} md={6}></Grid>
                      <Grid item mb={2} xs={6} md={6}>
                        <Grid
                          container
                          sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                          }}
                          spacing={2}
                          alignItems="center"
                        >
                          {[
                            "Completely",
                            "Mostly",
                            "Moderately",
                            "A Little",
                            "Not at all",
                          ].map((option) => (
                            <Grid item xs={2} md={2} key={option}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "12px",
                                  width: "100%",
                                }}
                              >
                                {option}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>

                    {[
                      "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
                    ].map((question) => (
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        key={question}
                      >
                        <Grid item xs={12} md={6}>
                          <Typography
                            variant="body1"
                            component="div"
                            sx={{
                              color: "#6B7280",
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              fontSize: "16px",
                              mb: {
                                xs: 1,
                                md: 0,
                              },
                            }}
                          >
                            <span style={{ color: "red" }}>*</span>
                            {question}
                          </Typography>
                        </Grid>

                        <Grid
                          sx={{
                            display: { xs: "flex", sm: "flex", md: "none" },
                          }}
                          item
                          xs={12}
                          sm={10}
                          md={6}
                        >
                          {[
                            "Completely",
                            "Mostly",
                            "Moderately",
                            "A Little",
                            "Not at all",
                          ].map((option) => (
                            <Grid mr={2} item xs={2} md={2} key={option}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "12px",
                                  width: "100%",
                                }}
                              >
                                {option}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>

                        <Grid item xs={12} sm={10} md={6}>
                          <RadioGroup
                            row
                            name="global_6"
                            value={this.state.data?.global_6 || ""}
                            onChange={this.onFieldChange("global_6")}
                          >
                            <Grid container spacing={2} alignItems="center">
                              {[
                                { label: "Completely", value: 5 },
                                { label: "Mostly", value: 4 },
                                { label: "Moderately", value: 3 },
                                { label: "A Little", value: 2 },
                                { label: "Not at all", value: 1 },
                              ].map((option, index) => (
                                <Grid
                                  mr={{ sx: 1, sm: 2, md: 0 }}
                                  item
                                  xs={2}
                                  md={2}
                                  key={index}
                                >
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label=""
                                    sx={{
                                      "& .MuiTypography-root": {
                                        fontSize: "6px",
                                      },
                                    }}
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item mb={2} xs={6} md={6}></Grid>
                      <Grid item mb={2} xs={6} md={6}>
                        <Grid
                          container
                          sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                          }}
                          spacing={2}
                          alignItems="center"
                        >
                          {[
                            "Never",
                            "Rarely",
                            "Sometimes",
                            "Often",
                            "Always",
                          ].map((option) => (
                            <Grid item xs={2} md={2} key={option}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "12px",
                                  width: "100%",
                                }}
                              >
                                {option}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    {[
                      "In the past 7 days, how often have you been bothered by emotional problems, such as feeling anxious, depressed or irritable?",
                    ].map((question) => (
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        key={question}
                      >
                        <Grid item xs={12} md={6}>
                          <Typography
                            variant="body1"
                            component="div"
                            sx={{
                              color: "#6B7280",
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              fontSize: "16px",
                              mb: {
                                xs: 1,
                                md: 0,
                              },
                            }}
                          >
                            <span style={{ color: "red" }}>*</span>
                            {question}
                          </Typography>
                        </Grid>
                        <Grid
                          sx={{
                            display: { xs: "flex", sm: "flex", md: "none" },
                          }}
                          item
                          xs={12}
                          sm={10}
                          md={6}
                        >
                          {[
                            "Never",
                            "Rarely",
                            "Sometimes",
                            "Often",
                            "Always",
                          ].map((option) => (
                            <Grid mr={2} item xs={2} md={2} key={option}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "12px",
                                  width: "100%",
                                }}
                              >
                                {option}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <RadioGroup
                            row
                            name="global_10"
                            value={this.state.data?.global_10 || ""}
                            onChange={this.onFieldChange("global_10")}
                          >
                            <Grid container spacing={2} alignItems="center">
                              {[
                                { label: "Always", value: 5 },
                                { label: "Often", value: 4 },
                                { label: "Sometimes", value: 3 },
                                { label: "Rarely", value: 2 },
                                { label: "Never", value: 1 },
                              ].map((option) => (
                                <Grid
                                  mr={{ sx: 1, sm: 2, md: 0 }}
                                  item
                                  xs={2}
                                  md={2}
                                  key={option}
                                >
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label=""
                                    sx={{
                                      "& .MuiTypography-root": {
                                        fontSize: "6px",
                                      },
                                    }}
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item mb={2} xs={6} md={6}></Grid>
                      <Grid item mb={2} xs={6} md={6}>
                        <Grid
                          container
                          sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                          }}
                          spacing={2}
                          alignItems="center"
                        >
                          {[
                            "None",
                            "Mild",
                            "Moderate",
                            "Severe",
                            "Very Severe",
                          ].map((option) => (
                            <Grid item xs={2} md={2} key={option}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "12px",
                                  width: "100%",
                                  fontWeight: 400,
                                }}
                              >
                                {option}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    {[
                      "In the past 7 days, how would you rate your fatigue on average?",
                    ].map((question) => (
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        key={question}
                      >
                        <Grid item xs={12} md={6}>
                          <Typography
                            variant="body1"
                            component="div"
                            sx={{
                              color: "#6B7280",
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              fontSize: "16px",
                              mb: {
                                xs: 1,
                                md: 0,
                              },
                            }}
                          >
                            <span style={{ color: "red" }}>*</span>
                            {question}
                          </Typography>
                        </Grid>
                        <Grid
                          sx={{
                            display: { xs: "flex", sm: "flex", md: "none" },
                          }}
                          item
                          xs={12}
                          sm={10}
                          md={6}
                        >
                          {[
                            "None",
                            "Mild",
                            "Moderate",
                            "Severe",
                            "Very Severe",
                          ].map((option) => (
                            <Grid mr={2} item xs={2} md={2} key={option}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "12px",
                                  width: "100%",
                                }}
                              >
                                {option}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12} sm={10} md={6}>
                          <RadioGroup
                            row
                            name="global_8"
                            value={this.state.data?.global_8 || ""}
                            onChange={this.onFieldChange("global_8")}
                          >
                            <Grid container spacing={2} alignItems="center">
                              {[
                                { label: "None", value: 5 },
                                { label: "Mild", value: 4 },
                                { label: "Moderate", value: 3 },
                                { label: "Severe", value: 2 },
                                { label: "Very Severe", value: 1 },
                              ].map((option) => (
                                <Grid
                                  mr={{ sx: 1, sm: 2, md: 0 }}
                                  item
                                  xs={2}
                                  md={2}
                                  key={option}
                                >
                                  <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label=""
                                    sx={{
                                      "& .MuiTypography-root": {
                                        fontSize: "6px",
                                      },
                                    }}
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>

                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    sx={{ paddingTop: "20px" }}
                  >
                    <Grid item mb={2} xs={12} md={6}>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{
                          color: "#6B7280",
                          fontFamily: "Montserrat",
                          fontWeight: 400,
                          fontSize: "16px",
                          mb: {
                            xs: 1,
                            md: 0,
                          },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        In the past 7 days, how would you rate your pain on
                        average ?
                      </Typography>
                    </Grid>
                    <Grid item mb={2} xs={12} md={6}>
                      <Slider
                        aria-label="Small steps"
                        value={this.state.data?.global_7 || ""}
                        onChange={this.onFieldChange("global_7")}
                        defaultValue={0}
                        step={1}
                        marks={this.marks}
                        min={0}
                        max={10}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => {
                          if (value === 0) return "0 No Pain";
                          if (value === 10) return "10 Worst Pain";
                          return value;
                        }}
                        sx={{
                          width: {
                            xs: "75%",
                            sm: "75%",
                            md: "75%",
                          },
                          marginLeft: 0,
                          paddingRight: "0px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </>
              ) : null}

              {this.state?.data?.fu_status === "2" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Were you attempting to conceive last month ?
                    </Typography>
                    <RadioGroup
                      row
                      value={this.state.data.attempting_last_month || ""}
                      onChange={this.onFieldChange("attempting_last_month")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "2" &&
              this.state?.data?.attempting_last_month === "1" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Can you please advise as to why you are no longer trying
                      to get pregnant ?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      value={this.state.data?.advise_no_longer_trying || ""}
                      onChange={this.onFieldChange("advise_no_longer_trying")}
                      sx={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      <MenuItem value="1">
                        I have been sick from my IBD
                      </MenuItem>
                      <MenuItem value="2">
                        My partner and I decided this is not the right time for
                        us
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">I choose not to respond</MenuItem>
                    </Select>
                  </Box>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Thank you for participating in the study. We appreciate your
                    contribution.
                  </Typography>
                </>
              ) : null}
              {this.state?.data?.fu_status === "2" &&
              this.state?.data?.attempting_last_month === "0" ? (
                <>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Thank you for participating in the study. We will follow up
                    next month.
                  </Typography>
                </>
              ) : null}
              {this.state?.data?.fu_status === "5" ? (
                <>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Our records indicate that you were previously pregnant. We
                    understand that this may be a very difficult time for you
                    but we are hoping you are able to answer the following
                    question:
                  </Typography>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of your pregnancy ?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.outcome_preg || []}
                      onChange={this.onFieldChange("outcome_preg")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = outcomePregOption.find(
                                  (option) => option.response === value
                                );
                                return option ? (
                                  <div
                                    key={value}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      margin: "2px",
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      fontSize: "14px",
                                      border: "1px solid #ccc",
                                    }}
                                  >
                                    {option.label}
                                  </div>
                                ) : null;
                              })
                            : null}
                        </div>
                      )}
                      sx={{
                        width: "286px",
                        minHeight: "46px",
                        maxHeight: "max-content",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "0 10px",
                          height: "100%",
                        },
                        "& .MuiSelect-icon": {
                          right: "10px",
                        },
                      }}
                    >
                      {outcomePregOption.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.outcome_preg?.indexOf(
                                option.response
                              ) > -1
                            }
                          />
                          <ListItemText
                            primary={option.label}
                            sx={{
                              overflow: "visible",
                              whiteSpace: "normal",
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Thank you for participating in the study, we appreciate your
                    contribution. This is the end of your monthly questionnaire.
                  </Typography>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      color: "#6B7280",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    We would be grateful to hear about your experience as a
                    participant in this study.
                  </Typography>
                </>
              ) : null}
              {this.state?.data?.fu_status === "5" &&
              this.state?.data?.outcome_preg?.includes(4) ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please specify the reason for the therapeutic
                      abortion/termination:
                    </Typography>
                    <input
                      value={this.state.data?.for_what_reason}
                      onChange={this.onFieldChange("for_what_reason")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "5" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Please share with us any feedback that you may have:
                      <br />
                      Write NA if you choose not to repsond
                    </Typography>

                    <input
                      value={this.state.data?.please_share_with_us_any_f}
                      onChange={this.onFieldChange(
                        "please_share_with_us_any_f"
                      )}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "6" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 3,
                      display: "flex",
                      justifyContent: "flex-start",
                      width: {
                        xs: "90%",
                        sm: " 100%",
                        md: "100%",
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "24px",
                        color: "#D80C8C",
                      }}
                    >
                      Opt out from study
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
                      },
                      alignItems: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",

                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <RadioGroup
                      value={this.state.data.opt_out_details || ""}
                      onChange={this.onFieldChange("opt_out_details")}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="I would like to opt out of the survey this month. Please send me a survey again next month."
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="I would like to opt out of the study entirely."
                      />
                    </RadioGroup>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.fu_status === "6" &&
              this.state?.data?.opt_out_details === "2" ? (
                <>
                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Thank you for your participation. Can you please advise as
                      to why you are no longer interested in participating in
                      this study ?
                    </Typography>
                    <input
                      value={this.state.data?.thank_you_for_your_partici}
                      onChange={this.onFieldChange(
                        "thank_you_for_your_partici"
                      )}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: 2,
                      mt: 2,
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",
                        sm: "space-between",
                        md: "space-between",
                      },
                      width: {
                        xs: "90%",
                        sm: "100%",
                        md: "100%",
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
                        fontFamily: "Montserrat",
                        fontWeight: 400,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      We would be grateful to hear about your experience as a
                      participant in this study. Please share with us any
                      feedback that you may have:
                    </Typography>
                    <input
                      value={this.state.data?.we_would_be_grateful}
                      onChange={this.onFieldChange("we_would_be_grateful")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                </>
              ) : null}
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              mt: 4,
              paddingLeft: { xs: "16px", sm: "32px" },
              backgroundColor: "rgba(255, 255, 255, 1)",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "30px",
            }}
          >
            <Button
              onClick={() => this.onSubmit()}
              variant="filled"
              sx={{
                backgroundColor: "#D80C8C",
                color: "white",
                "&:hover": {
                  backgroundColor: "#D80C8C",
                },
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </>
      );
    } else {
      return <div>Loading form...</div>;
    }
  }

  onSubmit = () => {
    let errorM = false;
    let errors = {};

    if (!this.state.data?.today_date) {
      errors["Date"] = true;
    }
    if (!this.state.data?.fu_status) {
      errors[""] = true;
    }
    if (
      this.state.data?.fu_status === "1" &&
      !this.state.data?.fu_contraception_past
    ) {
      errors["Section-1"] = true;
    }

    if (
      this.state.data?.fu_contraception_past === "1" &&
      (!this.state.data?.contra ||
        (this.state.data?.contra?.includes(1) &&
          !this.state.data?.stop_contra_date) ||
        (this.state.data?.contra?.includes(2) &&
          !this.state.data?.stop_contra_date_2) ||
        (this.state.data?.contra?.includes(3) &&
          !this.state.data?.stop_contra_date_3) ||
        (this.state.data?.contra?.includes(4) &&
          !this.state.data?.type_pills) ||
        (this.state.data?.contra?.includes(5) &&
          !this.state.data?.stop_contra_date_5) ||
        (this.state.data?.contra?.includes(6) &&
          !this.state.data?.stop_contra_date_6) ||
        (this.state.data?.contra?.includes(7) &&
          !this.state.data?.stop_contra_date_7) ||
        (this.state.data?.contra?.includes(8) &&
          !this.state.data?.stop_contra_date_8) ||
        (this.state.data?.contra?.includes(9) &&
          !this.state.data?.stop_contra_date_9) ||
        (this.state.data?.contra?.includes(10) &&
          !this.state.data?.stop_contra_date_10) ||
        (this.state.data?.contra?.includes(555) &&
          !this.state.data?.stop_contra_date_11))
    ) {
      errors["Section-1"] = true;
    }

    if (
      this.state.data?.fu_status === "1" &&
      (!this.state.data?.last_menst_period ||
        !this.state.data?.period_abnormalities ||
        !this.state.data?.type_pills ||
        !this.state.data?.sex_times ||
        (this.state.data?.type_pills === "1" &&
          (!this.state.data?.ovulation_method_v2 ||
            !this.state.data?.ovulation)) ||
        (this.state.data?.ovulation === "1" &&
          (!this.state.data?.ovulation_strt_rng_1 ||
            !this.state.data?.ovulation_end_rng_1)))
    ) {
      errors["Section-2"] = true;
    }
    if (
      this.state.data?.fu_status === "1" &&
      !this.state.data?.a_is_your_current_partner
    ) {
      errors["Section-3"] = true;
    }

    if (
      this.state.data?.a_is_your_current_partner === "0" &&
      !this.state.data?.curr_part_child_v2
    ) {
      errors["Section-3"] = true;
    }

    if (
      this.state.data?.curr_part_child_v2 === "1" &&
      (!this.state.data?.cur_part_age_v2 ||
        !this.state.data?.part_diag_fer_v2 ||
        !this.state.data?.pelvic_proc_v2 ||
        !this.state.data?.part_dx_infec_v2 ||
        !this.state.data?.part_diag_cond_v2 ||
        !this.state.data?.part_meds_v2 ||
        !this.state.data?.part_surg_proced_v2 ||
        !this.state.data?.part_exposed_v2 ||
        (this.state.data?.pelvic_proc_v2 === "1" &&
          !this.state.data?.surgery_partner_pelvis) ||
        (this.state.data?.part_surg_proced_v2?.includes(3) &&
          !this.state.data?.hernia_type_v2) ||
        (this.state.data?.part_exposed_v2?.includes(1) &&
          !this.state.data?.part_how_many_ct_scans_v2))
    ) {
      errors["Section-3"] = true;
    }

    if (
      this.state.data?.fu_status === "1" &&
      (!this.state.data?.avg_stools ||
        !this.state.data?.normal_stool ||
        !this.state.data?.loose_stools ||
        !this.state.data?.fec_urg ||
        !this.state.data?.rec_bleed ||
        !this.state.data?.day_incont ||
        !this.state.data?.night_incont ||
        !this.state.data?.uc_abd_pain ||
        !this.state.data?.arthralgia ||
        !this.state.data?.uveitis_hbi ||
        !this.state.data?.erythm ||
        !this.state.data?.oral_ulcers ||
        !this.state.data?.pydrm_gngrnsm ||
        !this.state.data?.anal_fissures ||
        !this.state.data?.new_fistula ||
        !this.state.data?.anal_abscess ||
        !this.state.data?.hosp_fu ||
        !this.state.data?.surg_fu ||
        !this.state.data?.started_new_meds ||
        !this.state.data?.stopped_meds ||
        !this.state.data?.sti_since_last_followup)
    ) {
      errors["Section-IBD"] = true;
    }

    if (
      this.state.data?.fu_status === "1" &&
      ((this.state.data?.uc_abd_pain?.includes(1) &&
        !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(2) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(3) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(4) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(5) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.hosp_fu === "1" &&
          (!this.state.data?.for_how_many_days_were_you ||
            !this.state.data?.reason_for_hosp_ibd)) ||
        (this.state.data?.reason_for_hosp_ibd === "0" &&
          !this.state.data?.reason_for_hosp_ibd_explain) ||
        (this.state.data?.reason_for_hosp_ibd === "1" &&
          !this.state.data?.reason_for_hosp_ibd_explain) ||
        (this.state.data?.surg_fu === "1" && !this.state.data?.what_surgery) ||
        (this.state.data?.started_new_meds === "1" &&
          !this.state.data?.start_meds) ||
        (this.state.data?.start_meds?.includes(1) &&
          !this.state.data?.start_date_med_1) ||
        (this.state.data?.start_meds?.includes(2) &&
          !this.state.data?.start_date_med_2) ||
        (this.state.data?.start_meds?.includes(3) &&
          !this.state.data?.start_date_med_3) ||
        (this.state.data?.start_meds?.includes(4) &&
          !this.state.data?.start_date_med_4) ||
        (this.state.data?.start_meds?.includes(6) &&
          !this.state.data?.start_date_med_6) ||
        (this.state.data?.start_meds?.includes(25) &&
          !this.state.data?.start_date_med_skyrizi) ||
        (this.state.data?.start_meds?.includes(7) &&
          !this.state.data?.start_date_med_7) ||
        (this.state.data?.start_meds?.includes(9) &&
          !this.state.data?.start_date_med_9) ||
        (this.state.data?.start_meds?.includes(14) &&
          !this.state.data?.start_date_med_xeljanz) ||
        (this.state.data?.start_meds?.includes(23) &&
          !this.state.data?.start_date_med_rinvoq) ||
        (this.state.data?.start_meds?.includes(24) &&
          !this.state.data?.start_date_med_zeposia) ||
        (this.state.data?.start_meds?.includes(8) &&
          !this.state.data?.start_date_med_tacr_fu) ||
        (this.state.data?.start_meds?.includes(10) &&
          !this.state.data?.start_date_med_cipro) ||
        (this.state.data?.start_meds?.includes(11) &&
          !this.state.data?.start_date_med_flag) ||
        (this.state.data?.start_meds?.includes(20) &&
          !this.state.data?.start_date_med_augment) ||
        (this.state.data?.start_meds?.includes(21) &&
          !this.state.data?.start_date_med_rifx) ||
        (this.state.data?.start_meds?.includes(5) &&
          !this.state.data?.start_date_med_cyclo) ||
        (this.state.data?.start_meds?.includes(12) &&
          !this.state.data?.start_date_med_aza) ||
        (this.state.data?.start_meds?.includes(13) &&
          !this.state.data?.start_date_med_mtx) ||
        (this.state.data?.start_meds?.includes(15) &&
          !this.state.data?.start_date_med_steroids) ||
        (this.state.data?.start_meds?.includes(16) &&
          !this.state.data?.start_date_med_top_steroids) ||
        (this.state.data?.start_meds?.includes(17) &&
          !this.state.data?.start_date_med_asa) ||
        (this.state.data?.start_meds?.includes(18) &&
          !this.state.data?.start_date_med_asa_enema) ||
        (this.state.data?.start_meds?.includes(555) &&
          !this.state.data?.start_date_med_other) ||
        (this.state.data?.stopped_meds === "1" &&
          !this.state.data?.stop_meds) ||
        (this.state.data?.stop_meds?.includes(1) &&
          !this.state.data?.stop_date_med_remi) ||
        (this.state.data?.stop_meds?.includes(2) &&
          !this.state.data?.stop_date_med_ada) ||
        (this.state.data?.stop_meds?.includes(3) &&
          !this.state.data?.stop_date_med_goli) ||
        (this.state.data?.stop_meds?.includes(4) &&
          !this.state.data?.stop_date_med_cert) ||
        (this.state.data?.stop_meds?.includes(5) &&
          !this.state.data?.stop_date_med_stelara) ||
        (this.state.data?.stop_meds?.includes(25) &&
          !this.state.data?.stop_date_med_skyrizi) ||
        (this.state.data?.stop_meds?.includes(6) &&
          !this.state.data?.stop_date_med_nata) ||
        (this.state.data?.stop_meds?.includes(7) &&
          !this.state.data?.stop_date_med_vedo) ||
        (this.state.data?.stop_meds?.includes(14) &&
          !this.state.data?.stop_date_med_tofa) ||
        (this.state.data?.stop_meds?.includes(23) &&
          !this.state.data?.stop_date_med_rinvoq) ||
        (this.state.data?.stop_meds?.includes(24) &&
          !this.state.data?.stop_date_med_zeposia) ||
        (this.state.data?.stop_meds?.includes(8) &&
          !this.state.data?.stop_date_med_tacro) ||
        (this.state.data?.stop_meds?.includes(9) &&
          !this.state.data?.stop_date_med_cipro) ||
        (this.state.data?.stop_meds?.includes(10) &&
          !this.state.data?.stop_date_med_flagyl) ||
        (this.state.data?.stop_meds?.includes(20) &&
          !this.state.data?.stop_date_med_augmentin) ||
        (this.state.data?.stop_meds?.includes(21) &&
          !this.state.data?.stop_date_med_rifax) ||
        (this.state.data?.stop_meds?.includes(11) &&
          !this.state.data?.stop_date_med_cyclo) ||
        (this.state.data?.stop_meds?.includes(12) &&
          !this.state.data?.stop_date_med_aza) ||
        (this.state.data?.stop_meds?.includes(13) &&
          !this.state.data?.stop_date_med_mtx) ||
        (this.state.data?.stop_meds?.includes(15) &&
          !this.state.data?.stop_date_med_orl_strds) ||
        (this.state.data?.stop_meds?.includes(16) &&
          !this.state.data?.stop_date_med_top_strds) ||
        (this.state.data?.stop_meds?.includes(17) &&
          !this.state.data?.stop_date_med_asa_oral) ||
        (this.state.data?.stop_meds?.includes(18) &&
          !this.state.data?.stop_date_med_asa_enema) ||
        (this.state.data?.stop_meds?.includes(555) &&
          !this.state.data?.stop_date_med_other) ||
        (this.state.data?.sti_since_last_followup?.includes(1) &&
          !this.state.data?.treat_sti_1) ||
        (this.state.data?.stop_meds?.includes(2) &&
          !this.state.data?.treat_sti_2) ||
        (this.state.data?.stop_meds?.includes(3) &&
          !this.state.data?.treat_sti_3) ||
        (this.state.data?.stop_meds?.includes(4) &&
          !this.state.data?.treat_sti_4) ||
        (this.state.data?.stop_meds?.includes(5) &&
          !this.state.data?.treat_sti_5) ||
        (this.state.data?.stop_meds?.includes(6) &&
          !this.state.data?.treat_sti_6) ||
        (this.state.data?.stop_meds?.includes(7) &&
          !this.state.data?.treat_sti_7) ||
        (this.state.data?.stop_meds?.includes(8) &&
          !this.state.data?.treat_sti_8))
    ) {
      errors["Section-IBD"] = true;
    }

    if (
      this.state.data?.fu_status === "1" &&
      (!this.state.data?.prom_health ||
        !this.state.data?.prom_qual ||
        !this.state.data?.prom_phys ||
        !this.state.data?.prom_ment_health ||
        !this.state.data?.prom_satis ||
        !this.state.data?.prom_social ||
        !this.state.data?.global_6 ||
        !this.state.data?.global_8 ||
        !this.state.data?.global_10)
    ) {
      errors["Section-5"] = true;
    }

    if (
      (this.state.data?.fu_status === "2" &&
        this.state.data?.fu_status === "2" &&
        !this.state.data?.attempting_last_month) ||
      (this.state.data?.attempting_last_month === "1" &&
        !this.state.data?.advise_no_longer_trying)
    ) {
      errors[""] = true;
    }

    if (
      this.state.data?.fu_status === "3" &&
      (!this.state.data?.infert_treat ||
        (this.state.data?.infert_treat === "1" &&
          !this.state.data?.infertility_treat) ||
        (this.state.data?.infertility_treat?.includes(1) &&
          (!this.state.data?.num_ivf ||
            !this.state.data?.number_embryo_tranfs)) ||
        (this.state.data?.infertility_treat?.includes(2) &&
          !this.state.data?.hormone_type) ||
        (this.state.data?.infertility_treat?.includes(3) &&
          !this.state.data?.num_insemination) ||
        (this.state.data?.infertility_treat?.includes(4) &&
          (!this.state.data?.types_surger ||
            !this.state.data?.where_repro_surg)))
    ) {
      errors["Section 1"] = true;
    }

    if (
      this.state.data?.fu_status === "3" &&
      (!this.state.data?.avg_stools ||
        !this.state.data?.normal_stool ||
        !this.state.data?.loose_stools ||
        !this.state.data?.fec_urg ||
        !this.state.data?.rec_bleed ||
        !this.state.data?.day_incont ||
        !this.state.data?.night_incont ||
        !this.state.data?.uc_abd_pain ||
        !this.state.data?.arthralgia ||
        !this.state.data?.uveitis_hbi ||
        !this.state.data?.erythm ||
        !this.state.data?.oral_ulcers ||
        !this.state.data?.pydrm_gngrnsm ||
        !this.state.data?.anal_fissures ||
        !this.state.data?.new_fistula ||
        !this.state.data?.anal_abscess ||
        !this.state.data?.hosp_fu ||
        !this.state.data?.surg_fu ||
        !this.state.data?.started_new_meds ||
        !this.state.data?.stopped_meds ||
        !this.state.data?.sti_since_last_followup)
    ) {
      errors["Section 2"] = true;
    }

    if (
      this.state.data?.fu_status === "3" &&
      ((this.state.data?.uc_abd_pain?.includes(1) &&
        !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(2) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(3) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(4) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(5) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.hosp_fu === "1" &&
          (!this.state.data?.for_how_many_days_were_you ||
            !this.state.data?.reason_for_hosp_ibd)) ||
        (this.state.data?.reason_for_hosp_ibd === "0" &&
          !this.state.data?.reason_for_hosp_ibd_explain) ||
        (this.state.data?.reason_for_hosp_ibd === "1" &&
          !this.state.data?.reason_for_hosp_ibd_explain) ||
        (this.state.data?.surg_fu === "1" && !this.state.data?.what_surgery) ||
        (this.state.data?.started_new_meds === "1" &&
          !this.state.data?.start_meds) ||
        (this.state.data?.start_meds?.includes(1) &&
          !this.state.data?.start_date_med_1) ||
        (this.state.data?.start_meds?.includes(2) &&
          !this.state.data?.start_date_med_2) ||
        (this.state.data?.start_meds?.includes(3) &&
          !this.state.data?.start_date_med_3) ||
        (this.state.data?.start_meds?.includes(4) &&
          !this.state.data?.start_date_med_4) ||
        (this.state.data?.start_meds?.includes(6) &&
          !this.state.data?.start_date_med_6) ||
        (this.state.data?.start_meds?.includes(25) &&
          !this.state.data?.start_date_med_skyrizi) ||
        (this.state.data?.start_meds?.includes(7) &&
          !this.state.data?.start_date_med_7) ||
        (this.state.data?.start_meds?.includes(9) &&
          !this.state.data?.start_date_med_9) ||
        (this.state.data?.start_meds?.includes(14) &&
          !this.state.data?.start_date_med_xeljanz) ||
        (this.state.data?.start_meds?.includes(23) &&
          !this.state.data?.start_date_med_rinvoq) ||
        (this.state.data?.start_meds?.includes(24) &&
          !this.state.data?.start_date_med_zeposia) ||
        (this.state.data?.start_meds?.includes(8) &&
          !this.state.data?.start_date_med_tacr_fu) ||
        (this.state.data?.start_meds?.includes(10) &&
          !this.state.data?.start_date_med_cipro) ||
        (this.state.data?.start_meds?.includes(11) &&
          !this.state.data?.start_date_med_flag) ||
        (this.state.data?.start_meds?.includes(20) &&
          !this.state.data?.start_date_med_augment) ||
        (this.state.data?.start_meds?.includes(21) &&
          !this.state.data?.start_date_med_rifx) ||
        (this.state.data?.start_meds?.includes(5) &&
          !this.state.data?.start_date_med_cyclo) ||
        (this.state.data?.start_meds?.includes(12) &&
          !this.state.data?.start_date_med_aza) ||
        (this.state.data?.start_meds?.includes(13) &&
          !this.state.data?.start_date_med_mtx) ||
        (this.state.data?.start_meds?.includes(15) &&
          !this.state.data?.start_date_med_steroids) ||
        (this.state.data?.start_meds?.includes(16) &&
          !this.state.data?.start_date_med_top_steroids) ||
        (this.state.data?.start_meds?.includes(17) &&
          !this.state.data?.start_date_med_asa) ||
        (this.state.data?.start_meds?.includes(18) &&
          !this.state.data?.start_date_med_asa_enema) ||
        (this.state.data?.start_meds?.includes(555) &&
          !this.state.data?.start_date_med_other) ||
        (this.state.data?.stopped_meds === "1" &&
          !this.state.data?.stop_meds) ||
        (this.state.data?.stop_meds?.includes(1) &&
          !this.state.data?.stop_date_med_remi) ||
        (this.state.data?.stop_meds?.includes(2) &&
          !this.state.data?.stop_date_med_ada) ||
        (this.state.data?.stop_meds?.includes(3) &&
          !this.state.data?.stop_date_med_goli) ||
        (this.state.data?.stop_meds?.includes(4) &&
          !this.state.data?.stop_date_med_cert) ||
        (this.state.data?.stop_meds?.includes(5) &&
          !this.state.data?.stop_date_med_stelara) ||
        (this.state.data?.stop_meds?.includes(25) &&
          !this.state.data?.stop_date_med_skyrizi) ||
        (this.state.data?.stop_meds?.includes(6) &&
          !this.state.data?.stop_date_med_nata) ||
        (this.state.data?.stop_meds?.includes(7) &&
          !this.state.data?.stop_date_med_vedo) ||
        (this.state.data?.stop_meds?.includes(14) &&
          !this.state.data?.stop_date_med_tofa) ||
        (this.state.data?.stop_meds?.includes(23) &&
          !this.state.data?.stop_date_med_rinvoq) ||
        (this.state.data?.stop_meds?.includes(24) &&
          !this.state.data?.stop_date_med_zeposia) ||
        (this.state.data?.stop_meds?.includes(8) &&
          !this.state.data?.stop_date_med_tacro) ||
        (this.state.data?.stop_meds?.includes(9) &&
          !this.state.data?.stop_date_med_cipro) ||
        (this.state.data?.stop_meds?.includes(10) &&
          !this.state.data?.stop_date_med_flagyl) ||
        (this.state.data?.stop_meds?.includes(20) &&
          !this.state.data?.stop_date_med_augmentin) ||
        (this.state.data?.stop_meds?.includes(21) &&
          !this.state.data?.stop_date_med_rifax) ||
        (this.state.data?.stop_meds?.includes(11) &&
          !this.state.data?.stop_date_med_cyclo) ||
        (this.state.data?.stop_meds?.includes(12) &&
          !this.state.data?.stop_date_med_aza) ||
        (this.state.data?.stop_meds?.includes(13) &&
          !this.state.data?.stop_date_med_mtx) ||
        (this.state.data?.stop_meds?.includes(15) &&
          !this.state.data?.stop_date_med_orl_strds) ||
        (this.state.data?.stop_meds?.includes(16) &&
          !this.state.data?.stop_date_med_top_strds) ||
        (this.state.data?.stop_meds?.includes(17) &&
          !this.state.data?.stop_date_med_asa_oral) ||
        (this.state.data?.stop_meds?.includes(18) &&
          !this.state.data?.stop_date_med_asa_enema) ||
        (this.state.data?.stop_meds?.includes(555) &&
          !this.state.data?.stop_date_med_other) ||
        (this.state.data?.sti_since_last_followup?.includes(1) &&
          !this.state.data?.treat_sti_1) ||
        (this.state.data?.stop_meds?.includes(2) &&
          !this.state.data?.treat_sti_2) ||
        (this.state.data?.stop_meds?.includes(3) &&
          !this.state.data?.treat_sti_3) ||
        (this.state.data?.stop_meds?.includes(4) &&
          !this.state.data?.treat_sti_4) ||
        (this.state.data?.stop_meds?.includes(5) &&
          !this.state.data?.treat_sti_5) ||
        (this.state.data?.stop_meds?.includes(6) &&
          !this.state.data?.treat_sti_6) ||
        (this.state.data?.stop_meds?.includes(7) &&
          !this.state.data?.treat_sti_7) ||
        (this.state.data?.stop_meds?.includes(8) &&
          !this.state.data?.treat_sti_8))
    ) {
      errors["Section 2"] = true;
    }

    if (
      this.state.data?.fu_status === "3" &&
      (!this.state.data?.prom_health ||
        !this.state.data?.prom_qual ||
        !this.state.data?.prom_phys ||
        !this.state.data?.prom_ment_health ||
        !this.state.data?.prom_satis ||
        !this.state.data?.prom_social ||
        !this.state.data?.global_6 ||
        !this.state.data?.global_8 ||
        !this.state.data?.global_10)
    ) {
      errors["Section 3"] = true;
    }

    if (this.state.data?.fu_status === "4" && !this.state.data?.preg_last_fu) {
      errors[""] = true;
    }

    if (
      this.state.data?.fu_status === "4" &&
      this.state.data?.preg_last_fu === "0" &&
      (!this.state.data?.infert_treat ||
        (this.state.data?.infert_treat === "1" &&
          !this.state.data?.infertility_treat) ||
        (this.state.data?.infertility_treat?.includes(1) &&
          (!this.state.data?.num_ivf ||
            !this.state.data?.number_embryo_tranfs)) ||
        (this.state.data?.infertility_treat?.includes(2) &&
          !this.state.data?.hormone_type) ||
        (this.state.data?.infertility_treat?.includes(3) &&
          !this.state.data?.num_insemination) ||
        (this.state.data?.infertility_treat?.includes(4) &&
          (!this.state.data?.types_surger ||
            !this.state.data?.where_repro_surg)))
    ) {
      errors["Section 1"] = true;
    }

    if (
      this.state.data?.fu_status === "4" &&
      this.state.data?.preg_last_fu === "0" &&
      (!this.state.data?.confirm_preg ||
        !this.state.data?.date_menstrual_per_3 ||
        !this.state.data?.weeks_preg ||
        !this.state.data?.days_pregnant)
    ) {
      errors["Section 2"] = true;
    }

    if (
      this.state.data?.fu_status === "4" &&
      this.state.data?.preg_last_fu === "0" &&
      (!this.state.data?.father_fetus ||
        (this.state.data?.father_fetus === "0" &&
          (!this.state.data?.cur_part_age_v2 ||
            !this.state.data?.part_diag_fer_v2 ||
            !this.state.data?.pelvic_proc_v2 ||
            !this.state.data?.part_dx_infec_v2 ||
            !this.state.data?.part_diag_cond_v2 ||
            !this.state.data?.part_meds_v2 ||
            !this.state.data?.part_surg_proced_v2 ||
            !this.state.data?.part_exposed_v2 ||
            (this.state.data?.pelvic_proc_v2 === "1" &&
              !this.state.data?.surgery_partner_pelvis) ||
            (this.state.data?.part_surg_proced_v2?.includes(3) &&
              !this.state.data?.hernia_type_v2) ||
            (this.state.data?.part_exposed_v2?.includes(1) &&
              !this.state.data?.part_how_many_ct_scans_v2))))
    ) {
      errors["Section 3"] = true;
    }

    if (
      this.state.data?.fu_status === "4" &&
      (this.state.data?.preg_last_fu === "0" ||
        this.state.data?.preg_last_fu === "1") &&
      (!this.state.data?.avg_stools ||
        !this.state.data?.normal_stool ||
        !this.state.data?.loose_stools ||
        !this.state.data?.fec_urg ||
        !this.state.data?.rec_bleed ||
        !this.state.data?.day_incont ||
        !this.state.data?.night_incont ||
        !this.state.data?.uc_abd_pain ||
        !this.state.data?.arthralgia ||
        !this.state.data?.uveitis_hbi ||
        !this.state.data?.erythm ||
        !this.state.data?.oral_ulcers ||
        !this.state.data?.pydrm_gngrnsm ||
        !this.state.data?.anal_fissures ||
        !this.state.data?.new_fistula ||
        !this.state.data?.anal_abscess ||
        !this.state.data?.hosp_fu ||
        !this.state.data?.surg_fu ||
        !this.state.data?.started_new_meds ||
        !this.state.data?.stopped_meds ||
        !this.state.data?.sti_since_last_followup ||
        (this.state.data?.uc_abd_pain?.includes(1) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(2) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(3) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(4) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.uc_abd_pain?.includes(5) &&
          !this.state.data?.uc_pain_severity) ||
        (this.state.data?.hosp_fu === "1" &&
          (!this.state.data?.for_how_many_days_were_you ||
            !this.state.data?.reason_for_hosp_ibd)) ||
        (this.state.data?.reason_for_hosp_ibd === "0" &&
          !this.state.data?.reason_for_hosp_ibd_explain) ||
        (this.state.data?.reason_for_hosp_ibd === "1" &&
          !this.state.data?.reason_for_hosp_ibd_explain) ||
        (this.state.data?.surg_fu === "1" && !this.state.data?.what_surgery) ||
        (this.state.data?.started_new_meds === "1" &&
          !this.state.data?.start_meds) ||
        (this.state.data?.start_meds?.includes(1) &&
          !this.state.data?.start_date_med_1) ||
        (this.state.data?.start_meds?.includes(2) &&
          !this.state.data?.start_date_med_2) ||
        (this.state.data?.start_meds?.includes(3) &&
          !this.state.data?.start_date_med_3) ||
        (this.state.data?.start_meds?.includes(4) &&
          !this.state.data?.start_date_med_4) ||
        (this.state.data?.start_meds?.includes(6) &&
          !this.state.data?.start_date_med_6) ||
        (this.state.data?.start_meds?.includes(25) &&
          !this.state.data?.start_date_med_skyrizi) ||
        (this.state.data?.start_meds?.includes(7) &&
          !this.state.data?.start_date_med_7) ||
        (this.state.data?.start_meds?.includes(9) &&
          !this.state.data?.start_date_med_9) ||
        (this.state.data?.start_meds?.includes(14) &&
          !this.state.data?.start_date_med_xeljanz) ||
        (this.state.data?.start_meds?.includes(23) &&
          !this.state.data?.start_date_med_rinvoq) ||
        (this.state.data?.start_meds?.includes(24) &&
          !this.state.data?.start_date_med_zeposia) ||
        (this.state.data?.start_meds?.includes(8) &&
          !this.state.data?.start_date_med_tacr_fu) ||
        (this.state.data?.start_meds?.includes(10) &&
          !this.state.data?.start_date_med_cipro) ||
        (this.state.data?.start_meds?.includes(11) &&
          !this.state.data?.start_date_med_flag) ||
        (this.state.data?.start_meds?.includes(20) &&
          !this.state.data?.start_date_med_augment) ||
        (this.state.data?.start_meds?.includes(21) &&
          !this.state.data?.start_date_med_rifx) ||
        (this.state.data?.start_meds?.includes(5) &&
          !this.state.data?.start_date_med_cyclo) ||
        (this.state.data?.start_meds?.includes(12) &&
          !this.state.data?.start_date_med_aza) ||
        (this.state.data?.start_meds?.includes(13) &&
          !this.state.data?.start_date_med_mtx) ||
        (this.state.data?.start_meds?.includes(15) &&
          !this.state.data?.start_date_med_steroids) ||
        (this.state.data?.start_meds?.includes(16) &&
          !this.state.data?.start_date_med_top_steroids) ||
        (this.state.data?.start_meds?.includes(17) &&
          !this.state.data?.start_date_med_asa) ||
        (this.state.data?.start_meds?.includes(18) &&
          !this.state.data?.start_date_med_asa_enema) ||
        (this.state.data?.start_meds?.includes(555) &&
          !this.state.data?.start_date_med_other) ||
        (this.state.data?.stopped_meds === "1" &&
          !this.state.data?.stop_meds) ||
        (this.state.data?.stop_meds?.includes(1) &&
          !this.state.data?.stop_date_med_remi) ||
        (this.state.data?.stop_meds?.includes(2) &&
          !this.state.data?.stop_date_med_ada) ||
        (this.state.data?.stop_meds?.includes(3) &&
          !this.state.data?.stop_date_med_goli) ||
        (this.state.data?.stop_meds?.includes(4) &&
          !this.state.data?.stop_date_med_cert) ||
        (this.state.data?.stop_meds?.includes(5) &&
          !this.state.data?.stop_date_med_stelara) ||
        (this.state.data?.stop_meds?.includes(25) &&
          !this.state.data?.stop_date_med_skyrizi) ||
        (this.state.data?.stop_meds?.includes(6) &&
          !this.state.data?.stop_date_med_nata) ||
        (this.state.data?.stop_meds?.includes(7) &&
          !this.state.data?.stop_date_med_vedo) ||
        (this.state.data?.stop_meds?.includes(14) &&
          !this.state.data?.stop_date_med_tofa) ||
        (this.state.data?.stop_meds?.includes(23) &&
          !this.state.data?.stop_date_med_rinvoq) ||
        (this.state.data?.stop_meds?.includes(24) &&
          !this.state.data?.stop_date_med_zeposia) ||
        (this.state.data?.stop_meds?.includes(8) &&
          !this.state.data?.stop_date_med_tacro) ||
        (this.state.data?.stop_meds?.includes(9) &&
          !this.state.data?.stop_date_med_cipro) ||
        (this.state.data?.stop_meds?.includes(10) &&
          !this.state.data?.stop_date_med_flagyl) ||
        (this.state.data?.stop_meds?.includes(20) &&
          !this.state.data?.stop_date_med_augmentin) ||
        (this.state.data?.stop_meds?.includes(21) &&
          !this.state.data?.stop_date_med_rifax) ||
        (this.state.data?.stop_meds?.includes(11) &&
          !this.state.data?.stop_date_med_cyclo) ||
        (this.state.data?.stop_meds?.includes(12) &&
          !this.state.data?.stop_date_med_aza) ||
        (this.state.data?.stop_meds?.includes(13) &&
          !this.state.data?.stop_date_med_mtx) ||
        (this.state.data?.stop_meds?.includes(15) &&
          !this.state.data?.stop_date_med_orl_strds) ||
        (this.state.data?.stop_meds?.includes(16) &&
          !this.state.data?.stop_date_med_top_strds) ||
        (this.state.data?.stop_meds?.includes(17) &&
          !this.state.data?.stop_date_med_asa_oral) ||
        (this.state.data?.stop_meds?.includes(18) &&
          !this.state.data?.stop_date_med_asa_enema) ||
        (this.state.data?.stop_meds?.includes(555) &&
          !this.state.data?.stop_date_med_other) ||
        (this.state.data?.sti_since_last_followup?.includes(1) &&
          !this.state.data?.treat_sti_1) ||
        (this.state.data?.stop_meds?.includes(2) &&
          !this.state.data?.treat_sti_2) ||
        (this.state.data?.stop_meds?.includes(3) &&
          !this.state.data?.treat_sti_3) ||
        (this.state.data?.stop_meds?.includes(4) &&
          !this.state.data?.treat_sti_4) ||
        (this.state.data?.stop_meds?.includes(5) &&
          !this.state.data?.treat_sti_5) ||
        (this.state.data?.stop_meds?.includes(6) &&
          !this.state.data?.treat_sti_6) ||
        (this.state.data?.stop_meds?.includes(7) &&
          !this.state.data?.treat_sti_7) ||
        (this.state.data?.stop_meds?.includes(8) &&
          !this.state.data?.treat_sti_8))
    ) {
      errors["Section-IBD"] = true;
    }

    if (
      this.state.data?.fu_status === "4" &&
      (this.state.data?.preg_last_fu === "0" ||
        this.state.data?.preg_last_fu === "1") &&
      (!this.state.data?.prom_health ||
        !this.state.data?.prom_qual ||
        !this.state.data?.prom_phys ||
        !this.state.data?.prom_ment_health ||
        !this.state.data?.prom_satis ||
        !this.state.data?.prom_social ||
        !this.state.data?.global_6 ||
        !this.state.data?.global_8 ||
        !this.state.data?.global_10)
    ) {
      errors["Section-5"] = true;
    }

    if (
      this.state.data?.fu_status === "5" &&
      (!this.state.data.outcome_preg ||
        !this.state.data.please_share_with_us_any_f)
    ) {
      errors[""] = true;
    }
    if (
      this.state.data?.outcome_preg?.includes(4) &&
      !this.state.data.for_what_reason
    ) {
      errors[""] = true;
    }

    if (
      this.state.data?.fu_status === "6" &&
      !this.state.data.opt_out_details
    ) {
      errors[""] = true;
    }

    if (
      this.state.data?.opt_out_details === "2" &&
      (!this.state.data.thank_you_for_your_partici ||
        !this.state.data.we_would_be_grateful)
    ) {
      errors[""] = true;
    }
    {
      errorM = true;
    }
    if (Object.keys(errors)?.length > 0) {
      const name = Object.keys(errors)?.[0];
      if (name === "Date") {
        alert(`Please select the date!`);
      } else {
        alert(
          `Please enter responses for questions marked with * in ${
            Object.keys(errors)?.[0]
          }`
        );
      }
      this.handleScroll(Object.keys(errors)?.[0]);
    } else {
      this.props.onSubmit(this.state.data);
    }
  };

  handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavious: "smooth" });
    }
  };

  // onFieldChange = (field_name) => (e) => {

  //   var data = Object.assign({}, this.state.data);
  //   var selectedDate = new Date(e.target.value);
  //   const todayDate = new Date();
  //   if (selectedDate > todayDate) {
  //     alert("future date is not needed");
  //     data[field_name] = "";
  //     this.setState({ data: data });
  //   } else {
  //     data[field_name] = e.target.value;
  //     this.setState({ data: data });
  //   }
  // };

  onFieldChange =
    (field_name, checked = false) =>
    (e) => {
      let data = { ...this.state.data };

      if (field_name === "outcome_preg") {
        const selectedValues = e.target.value;

        if (selectedValues.includes(999)) {
          data[field_name] = [999];
        } else if (selectedValues.includes(777)) {
          data[field_name] = [777];
        } else if (selectedValues.includes(555)) {
          data[field_name] = [555];
        } else {
          data[field_name] = selectedValues.filter(
            (item) => item !== 999 && item !== 777 && item !== 555
          );
        }
      } else if (
        field_name === "sti_since_last_followup" ||
        field_name === "sti_since_last_followup"
      ) {
        const selectedValues = e.target.value;

        if (selectedValues.includes(9)) {
          data[field_name] = [9];
        } else {
          data[field_name] = selectedValues.filter((item) => item !== 9);
        }
      } else if (
        field_name === "contra" ||
        field_name === "ovulation_method_v2" ||
        field_name === "types_surger" ||
        field_name === "where_repro_surg" ||
        field_name === "confirm_preg" ||
        field_name === "hernia_type_v2" ||
        field_name === "start_meds" ||
        field_name === "stop_meds"
      ) {
        const selectedValues = e.target.value;

        if (selectedValues.includes(555)) {
          data[field_name] = [555];
        } else {
          data[field_name] = selectedValues.filter((item) => item !== 555);
        }
      } else if (field_name === "hormone_type") {
        const selectedValues = e.target.value;

        if (selectedValues.includes(999)) {
          data[field_name] = [999];
        } else {
          data[field_name] = selectedValues.filter((item) => item !== 999);
        }
      } else if (
        field_name === "period_abnormalities" ||
        field_name === "meds_pouch_inflamma"
      ) {
        const selectedValues = e.target.value;

        if (selectedValues.includes(555)) {
          data[field_name] = [555];
        } else if (selectedValues.includes(0)) {
          data[field_name] = [0];
        } else {
          data[field_name] = selectedValues.filter(
            (item) => item !== 555 && item !== 0
          );
        }
      } else if (
        field_name === "part_dx_infec_v2" ||
        field_name === "part_diag_cond_v2" ||
        field_name === "part_surg_proced_v2" ||
        field_name === "part_exposed_v2"
      ) {
        const selectedValues = e.target.value;

        if (selectedValues.includes(999)) {
          data[field_name] = [999];
        } else if (selectedValues.includes(0)) {
          data[field_name] = [0];
        } else {
          data[field_name] = selectedValues.filter(
            (item) => item !== 555 && item !== 0
          );
        }
      } else if (field_name === "date_field") {
        const selectedDate = new Date(e.target.value);
        const todayDate = new Date();

        if (selectedDate > todayDate) {
          alert("Future date is not needed");
          data[field_name] = "";
        } else {
          data[field_name] = e.target.value;
        }
      } else {
        const value = checked ? e.target.checked : e.target.value;
        data[field_name] = checked ? (value ? "1" : "0") : value;
      }

      this.setState({ data });
    };
}

export default Monthly;
