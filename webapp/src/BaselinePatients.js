import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Dropdown } from 'primereact/dropdown';
import ListItemText from "@mui/material/ListItemText";
import {
  infertilityRelatives,
  autoImmuneConditions,
  thyroidList,
  ibdRelatives,
  ibdTypes,
  contraceptiveOptions,
  treatmentList,
  infertilityTypes,
  surgeryList,
  herinaTypes,
  infectionList,
  surgicalProcedures,
  medicalProcedures,
  conditionList,
  data,
  partnerList,
  myProbs,
  ovulationConfirmOptions,
  reproductiveConditions,
  surgeriesList,
  stiList,
  scansList,
  abnormalList,
  partnerProblems,
  global6List,
  global10List,
  global8List,
  global1List,
} from "./BaselineConstants";
import { Slider } from "@mui/material";

class BaselinePatients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {
        ...this.props.data,
        // date_patient_baseline: "",
        // contra_past_stop_month: null,
        // contra_past_stop_year: null,
        // dob: "",
        // race: "",
        // hispanic: "",
        // jewish_2: "",
        // ancestry_detail: [],
        // edu: "",
        // income: "",
        // marital_status: "",
        // smoking: "",
        // currentsmoking: "",
        // alcohol: "",
        date_patient_baseline:null,
        dob:null,
        race:null,
        hispanic:null,
        jewish_2:null,
        edu:null,
        income:null,
        marital_status:null,
        smoking:null,
        alcohol: null,
        contraception_past: null,
        consec_mon_preg: null,
        attempting: null,
        ovulate: null,
        age_menstrual_period: null,
        cycle_length: null,
        rprdctv_conditions___0: null,
        rprdctv_conditions___1: null,
        rprdctv_conditions___2: null,
        rprdctv_conditions___3: null,
        rprdctv_conditions___4: null,
        rprdctv_conditions___5: null,
        rprdctv_conditions___6: null,
        sti___0: null,
        sti___1: null,
        sti___2: null,
        sti___3: null,
        sti___4: null,
        sti___5: null,
        sti___6: null,
        sti___7: null,
        sti___8: null,
        exposed_rad___0: null,
        exposed_rad___1: null,
        exposed_rad___2: null,
        exposed_rad___3: null,
        exposed_rad___999: null,
        pain_sex: null,
        ab_pap: null,
        past_preg:null, 
        doc_diff_preg: null,
        curr_part_child: null,
        infertility: null,
        history_2: null,
        history_3: null,
        ibd: null,
        autoimmune___0: null,
        autoimmune___1: null,
        autoimmune___2: null,
        autoimmune___3: null,
        autoimmune___4: null,
        autoimmune___5: null,
        autoimmune___6: null,
        autoimmune___7: null,
        autoimmune___8: null,
        autoimmune___9: null,
        autoimmune___10: null,
        autoimmune___11: null,
        autoimmune___555: null,
        avg_stools: null,
        normal_stool: null,
        loose_stools: null,
        fec_urg: null,
        rec_bleed: null,
        day_incont: null,
        night_incont: null,
        uc_abd_pain: null,
        prom_health: null,
        prom_qual: null,
        prom_phys: null,
        prom_ment_health: null,
        prom_satis: null,
        prom_social: null,
        global_6: null,
        global_10: null,
        global_8: null,
        global_7: "0",
        ibd_fsds_1: null,
        ibd_fsds_2: null,
        ibd_fsds_3: null,
        ibd_fsds_4: null,
        ibd_fsds_5: null,
        ibd_fsds_6: null,
        ibd_fsds_7: null,
        ibd_fsds_8: null,
        ibd_fsds_9: null,
        ibd_fsds_10: null,
        ibd_fsds_11: null,
        ibd_fsds_12: null,
        ibd_fsds_13: null,
        ibd_fsds_14: null,
        ibd_fsds_15: null,
        entry_method: "web",
        ancestry_detail___1:[],
        ancestry_detail___2:[],
        currentsmoking:null,
        contra_past_type___1:[],
        contra_past_type___2:[],
        contra_past_type___3:[],
        contra_past_type___4:[],
        contra_past_type___5:[],
        contra_past_type___6:[],
        contra_past_type___7:[],
        contra_past_type___8:[],
        contra_past_type___9:[],
        contra_past_type___10:[],
        contra_past_type___555:[],
        contra_past_type_other:[],
        contra_past_pills:null,
        contra_past_stop_month:null,
        contra_past_stop_year:null,
        contra_cur_type___1:[],
        contra_cur_type___2:[],
        contra_cur_type___3:[],
        contra_cur_type___4:[],
        contra_cur_type___5:[],
        contra_cur_type___6:[],
        contra_cur_type___7:[],
        contra_cur_type___8:[],
        contra_cur_type___9:[],
        contra_cur_type___10:[],
        contra_cur_type___555:[],
        contra_cur_type_other:[],
        contra_cur_pills:null,
        long_attempting:null,
        ovulation_past:null,
        ovulation_confirm_method_past___1:[],
        ovulation_confirm_method_past___2:[],
        ovulation_confirm_method_past___3:[],
        ovulation_confirm_method_past___4:[],
        ovulation_confirm_method_past___555:[],
        ovulation_confirm_other_past:null,
        oftn_ovlatn_cnfrm:null,
        attempt_ov_test:null,
        first_confirmed_ovulation:null,
        last_confirmed_ovulation:null,
        ovulation_method___1:null,
        ovulation_method___2:null,
        ovulation_method___3:null,
        ovulation_method___4:null,
        ovulation_method___555:null,
        ovulation_method_other:null,
        post_ovulation:null,
        date_ovulation:null,
        repro_surg_ever:null,
        types_surger_baseline___1:[],
        types_surger_baseline___2:[],
        types_surger_baseline___3:[],
        types_surger_baseline___4:[],
        types_surger_baseline___5:[],
        types_surger_baseline___6:[],
        types_surger_baseline___555:[],
        other_repro_surg:null,
        repro_open_surg:null,
        sti_times_gonorrhea:null,
        treat_gonorrhea:null,
        gonorrhea_month:null,
        gonorrhea_year:null,
        treat_bacterial_vaginosis:null,
        bacterial_vaginosis_month:null,
        bacterial_vaginosis_year:null,
        treat_herpes:null,
        herpes_month:null,
        herpes_year:null,
        treat_hiv:null,
        hiv_month:null,
        hiv_year:null,
        sti_times_chlamydia:null,
        treat_chlamydia:null,
        chlamydia_month:null,
        chlamydia_year:null,
        treat_yeast:null,
        yeast_month:null,
        yeast_year:null,
        treat_syphilis:null,
        syphilis_month:null,
        syphilis_year:null,
        sti_times_pid:null,
        treat_pid:null,
        pid_month:null,
        pid_year:null,
        d_about_how_many_ct_scans:null,
        ab_pap_spec___1:[],
        ab_pap_spec___2:[],
        ab_pap_spec___3:[],
        ab_pap_spec___4:[],
        ab_pap_spec___5:[],
        ab_pap_spec___555:[],
        ab_pap_spec___999:[],
        ab_pap_other_spec:null,
        under_20_weeks:null,
        num_preg_less_20:null,
        preg_less_20_age_1:null,
        preg_less_20_outcome_1:null,
        preg_less_20_age_2:null,
        preg_less_20_outcome_2:null,
        preg_less_20_age_3:null,
        preg_less_20_outcome_3:null,
        preg_less_20_age_4:null,
        preg_less_20_outcome_4:null,
        preg_less_20_age_5:null,
        preg_less_20_outcome_5:null,
        preg_more_20:null,
        g20w_total:null,
        preg_g20w_age_01:null,
        preg_g20w_outcome_01:null,
        preg_g20w_type_01:null,
        preg_g20w_delivery_01:null,
        preg_g20w_delivery_other_01:null,
        preg_g20w_congenital_01:null,
        preg_g20w_congenital_desc_01:null,
        preg_g20w_preterm_01:null,
        preg_g20w_lbweight_01:null,
        preg_g20w_sgestage_01:null,
        preg_g20w_nicu_01:null,
        preg_g20w_nicu_desc_01:null,
        preg_g20w_age_02:null,
        preg_g20w_outcome_02:null,
        preg_g20w_type_02:null,
        preg_g20w_delivery_02:null,
        preg_g20w_delivery_other_02:null,
        preg_g20w_congenital_02:null,
        preg_g20w_congenital_desc_02:null,
        preg_g20w_preterm_02:null,
        preg_g20w_lbweight_02:null,
        preg_g20w_sgestage_02:null,
        preg_g20w_nicu_02:null,
        preg_g20w_nicu_desc_02:null,
        preg_g20w_age_03:null,
        preg_g20w_outcome_03:null,
        preg_g20w_type_03:null,
        preg_g20w_delivery_03:null,
        preg_g20w_delivery_other_03:null,
        preg_g20w_congenital_03:null,
        preg_g20w_congenital_desc_03:null,
        preg_g20w_preterm_03:null,
        preg_g20w_lbweight_03:null,
        preg_g20w_sgestage_03:null,
        preg_g20w_nicu_03:null,
        preg_g20w_nicu_desc_03:null,
        preg_g20w_age_04:null,
        preg_g20w_outcome_04:null,
        preg_g20w_type_04:null,
        preg_g20w_delivery_04:null,
        preg_g20w_delivery_other_04:null,
        preg_g20w_congenital_04:null,
        preg_g20w_congenital_desc_04:null,
        preg_g20w_preterm_04:null,
        preg_g20w_lbweight_04:null,
        preg_g20w_sgestage_04:null,
        preg_g20w_nicu_04:null,
        preg_g20w_nicu_desc_04:null,
        preg_g20w_age_05:null,
        preg_g20w_outcome_05:null,
        preg_g20w_type_05:null,
        preg_g20w_delivery_05:null,
        preg_g20w_delivery_other_05:null,
        preg_g20w_congenital_05:null,
        preg_g20w_congenital_desc_05:null,
        preg_g20w_preterm_05:null,
        preg_g20w_lbweight_05:null,
        preg_g20w_sgestage_05:null,
        preg_g20w_nicu_05:null,
        preg_g20w_nicu_desc_05:null,
        current_infertlty:null,
        infertiltiy_times:null,
        age_eval_fertility_1:null,
        control_ibd:null,
        age_eval_fertility_2:null,
        age_eval_fertility_3:null,
        doc_why_diff_preg:null,
        decreased_fertility_who___1:[],
        decreased_fertility_who___2:[],
        problem_partner___1:[],
        problem_partner___2:[],
        problem_partner___3:[],
        problem_partner___555:[],
        problem_partner___999:[],
        problem_partner_other:[],
        prob_me___1:[],
        prob_me___2:[],
        prob_me___3:[],
        prob_me___4:[],
        prob_me___5:[],
        prob_me___555:[],
        prob_me___999:[],
        prob_me_spec:[],
        infer_treat:null,
        infert_treat_spec___1:[],
        infert_treat_spec___2:[],
        infert_treat_spec___3:[],
        infert_treat_spec___4:[],
        infert_treat_spec___5:[],
        any_art_spec:null,
        infertility_meds_spec:null,
        preg_part:null,
        cur_part_age:null,
        part_diag_fer:null,
        pelvic_proc:null,
        surgery_partner_pelvis___1:null,
        surgery_partner_pelvis___2:null,
        surgery_partner_pelvis___3:null,
        part_dx_infec___1:null,
        part_dx_infec___2:null,
        part_dx_infec___3:null,
        part_dx_infec___4:null,
        part_dx_infec___5:null,
        part_dx_infec___6:null,
        part_dx_infec___999:null,
        part_dx_infec___0:null,
        part_diag_cond___1:null,
        part_diag_cond___2:null,
        part_diag_cond___3:null,
        part_diag_cond___4:null,
        part_diag_cond___5:null,
        part_diag_cond___6:null,
        part_diag_cond___555:null,
        part_diag_cond___999:null,
        part_diag_cond___0:null,
        please_specify_new_cond:null,
        part_meds:null,
        part_surg_proced___1:null,
        part_surg_proced___2:null,
        part_surg_proced___3:null,
        part_surg_proced___999:null,
        part_surg_proced___0:null,
        hernia_type___1:null,
        hernia_type___2:null,
        hernia_type___3:null,
        hernia_type___555:null,
        hernia_type_other:null,
        part_exposed_2___1:null,
        part_exposed_2___2:null,
        part_exposed_2___3:null,
        part_exposed_2___4:null,
        part_exposed_2___999:null,
        part_exposed_2___0:null,
        part_how_many_ct_scans:null,
        infertility_type___1:null,
        infertility_type___2:null,
        infertility_type___3:null,
        infertility_type___4:null,
        infertility_type___5:null,
        infertility_type___6:null,
        infertility_type___7:null,
        infertility_relative_1___1:null,
        infertility_relative_1___2:null,
        infertility_relative_1___4:null,
        infertility_relative_2___1:null,
        infertility_relative_2___2:null,
        infertility_relative_2___4:null,
        infertility_relative_3___1:null,
        infertility_relative_3___2:null,
        infertility_relative_3___4:null,
        infertility_relative_4___1:null,
        infertility_relative_4___2:null,
        infertility_relative_4___4:null,
        infertility_relative_5___1:null,
        infertility_relative_5___2:null,
        infertility_relative_5___4:null,
        infertility_relative_6___1:null,
        infertility_relative_6___2:null,
        infertility_relative_6___4:null,
        infertility_relative_7___1:null,
        infertility_relative_7___2:null,
        infertility_relative_7___4:null,
        infertility_2_relatives___1:null,
        infertility_2_relatives___2:null,
        infertility_2_relatives___4:null,
        infertility_2_relatives_2___1:null,
        infertility_2_relatives_2___2:null,
        infertility_2_relatives_2___4:null,
        ibd_type___1:null,
        ibd_type___2:null,
        ibd_type___4:null,
        relative_uc___1:null,
        relative_uc___2:null,
        relative_uc___3:null,
        relative_uc___4:null,
        relative_uc___6:null,
        relative_uc___7:null,
        relative_cd___1:null,
        relative_cd___2:null,
        relative_cd___3:null,
        relative_cd___4:null,
        relative_cd___6:null,
        relative_cd___7:null,
        relative_ibd_u___1:null,
        relative_ibd_u___2:null,
        relative_ibd_u___3:null,
        relative_ibd_u___4:null,
        relative_ibd_u___6:null,
        relative_ibd_u___7:null,
        other_autoimmune:null,
        thyroid_condition_specific___1:[],
        thyroid_condition_specific___2:[],
        thyroid_condition_specific___555:[],
        thyroid_condition_specific___999:[],
        thyroid_other_condition:[],
        relative_thyroid_overactive___1:null,
        relative_thyroid_overactive___2:null,
        relative_thyroid_overactive___3:null,
        relative_thyroid_overactive___4:null,
        relative_thyroid_overactive___6:null,
        relative_thyroid_overactive___7:null,
        relative_thyroid_underactive___1:null,
        relative_thyroid_underactive___2:null,
        relative_thyroid_underactive___3:null,
        relative_thyroid_underactive___4:null,
        relative_thyroid_underactive___6:null,
        relative_thyroid_underactive___7:null,
        relative_thyroid_other___1:null,
        relative_thyroid_other___2:null,
        relative_thyroid_other___3:null,
        relative_thyroid_other___4:null,
        relative_thyroid_other___6:null,
        relative_thyroid_other___7:null,
        relative_thyroid_unknown___1:null,
        relative_thyroid_unknown___2:null,
        relative_thyroid_unknown___3:null,
        relative_thyroid_unknown___4:null,
        relative_thyroid_unknown___6:null,
        relative_thyroid_unknown___7:null,
        relative_autoimmune2___1:[],
        relative_autoimmune2___2:[],
        relative_autoimmune2___3:[],
        relative_autoimmune2___4:[],
        relative_autoimmune2___6:[],
        relative_autoimmune2___7:[],
        relative_autoimmune3___1:[],
        relative_autoimmune3___2:[],
        relative_autoimmune3___3:[],
        relative_autoimmune3___4:[],
        relative_autoimmune3___6:[],
        relative_autoimmune3___7:[],
        relative_autoimmune4___1:[],
        relative_autoimmune4___2:[],
        relative_autoimmune4___3:[],
        relative_autoimmune4___4:[],
        relative_autoimmune4___6:[],
        relative_autoimmune4___7:[],
        relative_autoimmune5___1:[],
        relative_autoimmune5___2:[],
        relative_autoimmune5___3:[],
        relative_autoimmune5___4:[],
        relative_autoimmune5___6:[],
        relative_autoimmune5___7:[],
        relative_autoimmune6___1:[],
        relative_autoimmune6___2:[],
        relative_autoimmune6___3:[],
        relative_autoimmune6___4:[],
        relative_autoimmune6___6:[],
        relative_autoimmune6___7:[],
        relative_autoimmune7___1:[],
        relative_autoimmune7___2:[],
        relative_autoimmune7___3:[],
        relative_autoimmune7___4:[],
        relative_autoimmune7___6:[],
        relative_autoimmune7___7:[],
        relative_autoimmune8___1:[],
        relative_autoimmune8___2:[],
        relative_autoimmune8___3:[],
        relative_autoimmune8___4:[],
        relative_autoimmune8___6:[],
        relative_autoimmune8___7:[],
        relative_autoimmune9___1:[],
        relative_autoimmune9___2:[],
        relative_autoimmune9___3:[],
        relative_autoimmune9___4:[],
        relative_autoimmune9___6:[],
        relative_autoimmune9___7:[],
        relative_autoimmune10___1:[],
        relative_autoimmune10___2:[],
        relative_autoimmune10___3:[],
        relative_autoimmune10___4:[],
        relative_autoimmune10___6:[],
        relative_autoimmune10___7:[],
        relative_autoimmune11___1:[],
        relative_autoimmune11___2:[],
        relative_autoimmune11___3:[],
        relative_autoimmune11___4:[],
        relative_autoimmune11___6:[],
        relative_autoimmune11___7:[],
        relative_autoimmune_other___1:[],
        relative_autoimmune_other___2:[],
        relative_autoimmune_other___3:[],
        relative_autoimmune_other___4:[],
        relative_autoimmune_other___6:[],
        relative_autoimmune_other___7:[],
        uc_pain_severity:[],
      },
      errors: { },
  };
    this.monthOptions = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];
  }

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

  componentDidMount() {
    const getTodayDate = () => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const dd = String(today.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    };
  
    this.setState({
      isLoaded: true,
      data: {
        ...this.state.data,
        date_patient_baseline: getTodayDate(),
      },
    });
  }

  componentDidUpdate() {
    console.log("State Updated -->", this.state.data);
  }

  render() {
    if (this.state.isLoaded) {
      const getTodayDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
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
                  fontSize: { xs: "24px", sm: "28px", md: "46px" },
                }}
              >
                BASELINE PATIENT
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: "#363738",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  fontSize: { xs: "16px", sm: "18px", md: "24px" }, // Adjusted font size for clarity
                  mt: { xs: 1, sm: 2, md: 2 },
                }}
              >
                Please review it and the options at the bottom.
              </Typography>
              <Box
                id="Date"
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
                    fontWeight: 500,
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
                  value={getTodayDate()} 
                  disabled
                  max={getTodayDate()}
                />
              </Box>
              <Box
                id="Section-1"
                sx={{
                  mb: 2,
                  mt: 3,
                  display: "flex",
                  justifyContent: "flex-start",
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 1: Demographics
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
                  Date of Birth
                </Typography>
                <input
                  type="Date"
                  style={{
                    width: "286px",
                    height: "46px",
                    borderRadius: "6px",
                    boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                    border: "1px solid rgba(109, 117, 143, 1)",
                    padding: "0 10px",
                    boxSizing: "border-box",
                  }}
                  value={this.state.data?.dob}
                  onChange={this.onFieldChange("dob")}
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
                  Which of the following best describes you?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.race}
                  onChange={this.onFieldChange("race")}
                >
                  <MenuItem value="1">White</MenuItem>
                  <MenuItem value="2">Black/African American</MenuItem>
                  <MenuItem value="3">Asian</MenuItem>
                  <MenuItem value="4">
                    Native Hawaiian or Other Pacific Islander
                  </MenuItem>
                  <MenuItem value="5">
                    American Indian or Alaskan Native
                  </MenuItem>
                  <MenuItem value="6">More than one race</MenuItem>
                  <MenuItem value="555">Other</MenuItem>
                  <MenuItem value="777">I choose not to respond</MenuItem>
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  Do you consider yourself to be of Hispanic or Latino
                  ethnicity?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
                  value={this.state.data?.hispanic}
                  onChange={this.onFieldChange("hispanic")}
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
                  <MenuItem value="0">No</MenuItem>
                  <MenuItem value="777">I choose not to respond</MenuItem>
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  Do you consider yourself to be of Ashkenazi Jewish or Eastern
                  European descent?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.jewish_2}
                  onChange={this.onFieldChange("jewish_2")}
                >
                  <MenuItem value="1">Yes</MenuItem>
                  <MenuItem value="0">No</MenuItem>
                  <MenuItem value="999">Not Sure</MenuItem>
                  <MenuItem value="777">I choose not to respond</MenuItem>
                </Select>
              </Box>
              {this.state?.data?.jewish_2 === "1" ? (
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
                    Of what descent are you?
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
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
                    value={this.state.data?.ancestry_detail}
                    onChange={this.onFieldChange("ancestry_detail")}
                  >
                    <MenuItem value="1">Ashkenazi Jewish</MenuItem>
                    <MenuItem value="2">Eastern European</MenuItem>
                  </Select>
                </Box>
              ) : null}
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
                  What is the highest grade of school that you completed?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
                  sx={{
                    width: "286px",
                    minWidth: "286px",
                    // flexBasis:"30%",
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
                  value={this.state.data?.edu}
                  onChange={this.onFieldChange("edu")}
                >
                  <MenuItem value="1">Less than 12th grade</MenuItem>
                  <MenuItem value="2">12th grade/high school diploma</MenuItem>
                  <MenuItem value="3">
                    Some college/Associate\'s degree
                  </MenuItem>
                  <MenuItem value="4">
                    All of college (Bachelor\'s degree)
                  </MenuItem>
                  <MenuItem value="5">
                    Graduate school (advanced degree)
                  </MenuItem>
                  <MenuItem value="777">I choose not to respond</MenuItem>
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
                  What is your annual household income range?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.income}
                  onChange={this.onFieldChange("income")}
                >
                  <MenuItem value="1">Less than $30,000</MenuItem>
                  <MenuItem value="2">$30,000 to $49,999</MenuItem>
                  <MenuItem value="3">$50,000 to $99,999</MenuItem>
                  <MenuItem value="4">$100,000 to $249,999</MenuItem>
                  <MenuItem value="5">$250,000 or more</MenuItem>
                  <MenuItem value="777">I choose not to respond</MenuItem>
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
                  What is your marital status?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.marital_status}
                  onChange={this.onFieldChange("marital_status")}
                >
                  <MenuItem value="1">Single</MenuItem>
                  <MenuItem value="2">Married/domestic partner</MenuItem>
                  <MenuItem value="3">Committed relationship</MenuItem>
                  <MenuItem value="4">Divorced/separated</MenuItem>
                  <MenuItem value="777">I choose not to respond</MenuItem>
                </Select>
              </Box>
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
                  Section 2: Exposure Information
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
                  Have you ever smoked?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("smoking")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("smoking")}
                  />
                </RadioGroup>
              </Box>
              {this.state?.data?.smoking === "1" ? (
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
                    Do you currently smoke cigarettes or use other tobacco
                    containing substances (including a vape pen)?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("currentsmoking")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("currentsmoking")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              <Box
                sx={{
                  width: {
                    xs: "90%",
                    sm: "100%",
                    md: "100%",
                  },
                  mb: 2,
                  mt: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                    textWrap: "revert",
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  How many servings of alcohol (e.g., can of beer, glass of
                  wine, or shot of hard liquor) do you have during a usual week?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.alcohol}
                  onChange={this.onFieldChange("alcohol")}
                >
                  <MenuItem value="1">None</MenuItem>
                  <MenuItem value="2">1-7</MenuItem>
                  <MenuItem value="3">More than 7</MenuItem>
                  <MenuItem value="999">I don't know</MenuItem>
                </Select>
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
                  Section 3: Current Fertility Tracking
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
                  Have you ever used contraception?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.contraception_past}
                  onChange={this.onFieldChange("contraception_past")}
                >
                  <MenuItem value="0">
                    No, I have never used contraception
                  </MenuItem>
                  <MenuItem value="1">
                    Yes, I was using contraception but have now stopped
                  </MenuItem>
                  <MenuItem value="2">
                    Yes, I am currently using contraception
                  </MenuItem>
                </Select>
              </Box>
              {this.state.data?.contraception_past === "1" ||
              this.state.data?.contraception_past === "2" ? (
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
                    What type(s) of contraception did you use in the past?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.contra_past_type || []}
                    onChange={this.onFieldChange("contra_past_type")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = contraceptiveOptions.find(
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
                    {contraceptiveOptions.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.contra_past_type?.indexOf(
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
              ) : null}
              {(this.state.data?.contraception_past === "1" ||
                this.state.data?.contraception_past === "2") &&
              this.state.data?.contra_past_type?.includes(4) ? (
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
                    Please specify type of birth control pills:
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
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
                    value={this.state.data?.contra_past_pills}
                    onChange={this.onFieldChange("contra_past_pills")}
                  >
                    <MenuItem value="1">
                      Combined estrogen and progestin
                    </MenuItem>
                    <MenuItem value="2">Progestin only</MenuItem>
                    <MenuItem value="999">Unsure</MenuItem>
                  </Select>
                </Box>
              ) : null}
              {this.state.data?.contraception_past === "1" ? (
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
                    When did you stop contraception? hint: Use your best
                    estimate
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                  value={this.state.data?.contra_past_stop}
                  onChange={this.onFieldChange("contra_past_stop")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.contraception_past === "2" ? (
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
                    What type(s) of contraception are you currently using?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.contra_cur_type || []}
                    onChange={this.onFieldChange("contra_cur_type")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = contraceptiveOptions.find(
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
                    {contraceptiveOptions.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.contra_cur_type?.indexOf(
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
              ) : null}
              {this.state.data?.contraception_past === "2" &&
              this.state.data?.contra_cur_type?.includes(4) ? (
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
                    Please specify type of birth control pills:
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
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
                    value={this.state.data?.contra_cur_pills}
                    onChange={this.onFieldChange("contra_cur_pills")}
                  >
                    <MenuItem value="1">
                      Combined estrogen and progestin
                    </MenuItem>
                    <MenuItem value="2">Progestin only</MenuItem>
                    <MenuItem value="999">Unsure</MenuItem>
                  </Select>
                </Box>
              ) : null}
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  What was the greatest number of consecutive months that you
                  ever tried to get pregnant (whether successful or not)
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.consec_mon_preg}
                  onChange={this.onFieldChange("consec_mon_preg")}
                >
                  <MenuItem value="1">0 months</MenuItem>
                  <MenuItem value="2">1-3 months</MenuItem>
                  <MenuItem value="3">4-6 months</MenuItem>
                  <MenuItem value="4">7-11 months</MenuItem>
                  <MenuItem value="5">12-24 months</MenuItem>
                  <MenuItem value="6">More than 24 months</MenuItem>
                </Select>
              </Box>
              {this.state.data?.contraception_past === "0" ||
              this.state.data?.contraception_past === "1" ? (
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
                    Are you currently attempting to become pregnant?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("attempting")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("attempting")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {(this.state.data?.contraception_past === "0" ||
                this.state.data?.contraception_past === "1") &&
              this.state.data?.attempting === "1" ? (
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
                    How long have you been currently trying to conceive (in
                    months)?
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
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
                    value={this.state.data?.long_attempting}
                    onChange={this.onFieldChange("long_attempting")}
                  >
                    <MenuItem value="1">0-3 months</MenuItem>
                    <MenuItem value="2">4-6 months</MenuItem>
                    <MenuItem value="3">7-9 months</MenuItem>
                    <MenuItem value="4">10-12 months</MenuItem>
                    <MenuItem value="5">More than 12 months</MenuItem>
                    <MenuItem value="6">More than 24 months</MenuItem>
                  </Select>
                </Box>
              ) : null}
              {(this.state.data?.contraception_past === "0" ||
                this.state.data?.contraception_past === "1") &&
              this.state.data?.attempting === "1" ? (
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
                    For any of the above months, have you tried to confirm the
                    timing of your ovulation?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("ovulation_past")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("ovulation_past")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}

              {(this.state.data?.contraception_past === "0" ||
                this.state.data?.contraception_past === "1") &&
              this.state.data?.attempting === "1" &&
              this.state.data?.ovulation_past === "1" ? (
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
                    What method(s) did you use to try to confirm ovulation?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.ovulation_confirm_method_past || []}
                    onChange={this.onFieldChange(
                      "ovulation_confirm_method_past"
                    )}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ovulationConfirmOptions.find(
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
                    {ovulationConfirmOptions.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.ovulation_confirm_method_past?.indexOf(
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
              ) : null}

              {(this.state.data?.contraception_past === "0" ||
                this.state.data?.contraception_past === "1") &&
              this.state.data?.attempting === "1" &&
              this.state.data?.ovulation_past === "1" ? (
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
                    How often have you tried to confirm ovulation?
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
                    value={this.state.data?.oftn_ovlatn_cnfrm}
                    onChange={this.onFieldChange("oftn_ovlatn_cnfrm")}
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
                    <MenuItem value="1">Every Month</MenuItem>
                    <MenuItem value="2">Most Months</MenuItem>
                    <MenuItem value="3">Occasionally</MenuItem>
                  </Select>
                </Box>
              ) : null}

              {(this.state.data?.contraception_past === "0" ||
                this.state.data?.contraception_past === "1") &&
              this.state.data?.attempting === "1" &&
              this.state.data?.ovulation_past === "1" ? (
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
                    Have you ever had a positive ovulation test?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("attempt_ov_test")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("attempt_ov_test")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}

              {(this.state.data?.contraception_past === "0" ||
                this.state.data?.contraception_past === "1") &&
              this.state.data?.attempting === "1" &&
              this.state.data?.ovulation_past === "1" ? (
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
                    When is the first date you tried to confirm ovulation since
                    you have started attempting to conceive? hint: If you do not
                    know the exact date, please estimate
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.first_confirmed_ovulation}
                    onChange={this.onFieldChange("first_confirmed_ovulation")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {(this.state.data?.contraception_past === "0" ||
                this.state.data?.contraception_past === "1") &&
              this.state.data?.attempting === "1" &&
              this.state.data?.ovulation_past === "1" ? (
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
                    When is the most recent date you tried to confirm ovulation?
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.last_confirmed_ovulation}
                    onChange={this.onFieldChange("last_confirmed_ovulation")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}

              {this.state.data?.contraception_past === "2" ||
              this.state.data?.attempting === "0" ? (
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
                    Have you ever tried to confirm the timing of your ovulation?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("ovulate")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("ovulate")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}

              {(this.state.data?.contraception_past === "2" ||
                this.state.data?.attempting === "0") &&
              this.state.data?.ovulate === "1" ? (
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
                    Have you ever had a positive ovulation test?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("post_ovulation")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("post_ovulation")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}

              {(this.state.data?.contraception_past === "2" ||
                this.state.data?.attempting === "0") &&
              this.state.data?.ovulate === "1" ? (
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
                    When was the last time you tried to confirm ovulation?
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.date_ovulation}
                    onChange={this.onFieldChange("date_ovulation")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}

              <Box
                id="Section-4"
                sx={{
                  mb: 2,
                  mt: 3,
                  display: "flex",
                  justifyContent: "flex-start",
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 4: Gynecological History
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  At what age (in years) was your first menstrual period?
                </Typography>
                <input
                  type="Number"
                  value={this.state.data?.age_menstrual_period}
                  onChange={this.onFieldChange("age_menstrual_period")}
                  min={1}
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  On average, what is the length of your menstrual cycle (i.e.,
                  how often do you get your period)?
                </Typography>
                <input
                  type="Number"
                  value={this.state.data?.cycle_length}
                  onChange={this.onFieldChange("cycle_length")}
                  min={1}
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                   Have you ever had any of the following conditions?(Select all
                  that apply)
                </Typography>
                <Select
                  labelId="multi-select-label"
                  multiple
                  value={this.state.data?.rprdctv_conditions || []}
                  onChange={this.onFieldChange("rprdctv_conditions")}
                  renderValue={(selected) => (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {selected?.length
                        ? selected.map((value) => {
                            const option = reproductiveConditions.find(
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
                  {reproductiveConditions.map((option) => (
                    <MenuItem
                      sx={{ width: "286px" }}
                      key={option.response}
                      value={option.response}
                    >
                      <Checkbox
                        checked={
                          this.state.data?.rprdctv_conditions?.indexOf(
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
              {this.state.data?.rprdctv_conditions?.includes(1) ||
              this.state.data?.rprdctv_conditions?.includes(2) ||
              this.state.data?.rprdctv_conditions?.includes(3) ||
              this.state.data?.rprdctv_conditions?.includes(4) ||
              this.state.data?.rprdctv_conditions?.includes(5) ||
              this.state.data?.rprdctv_conditions?.includes(6) ? (
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
                    Have you ever had any reproductive surgeries?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("repro_surg_ever")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("repro_surg_ever")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {(this.state.data?.rprdctv_conditions?.includes(1) ||
                this.state.data?.rprdctv_conditions?.includes(2) ||
                this.state.data?.rprdctv_conditions?.includes(3) ||
                this.state.data?.rprdctv_conditions?.includes(4) ||
                this.state.data?.rprdctv_conditions?.includes(5) ||
                this.state.data?.rprdctv_conditions?.includes(6)) &&
              this.state.data?.repro_surg_ever === "1" ? (
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
                    Which of the following surgeries?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.types_surger_baseline || []}
                    onChange={this.onFieldChange("types_surger_baseline")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = surgeriesList.find(
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
                    {surgeriesList.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.types_surger_baseline?.indexOf(
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
              ) : null}
              {(this.state.data?.rprdctv_conditions?.includes(1) ||
                this.state.data?.rprdctv_conditions?.includes(2) ||
                this.state.data?.rprdctv_conditions?.includes(3) ||
                this.state.data?.rprdctv_conditions?.includes(4) ||
                this.state.data?.rprdctv_conditions?.includes(5) ||
                this.state.data?.rprdctv_conditions?.includes(6)) &&
              this.state.data?.repro_surg_ever === "1" ? (
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
                    Were any of the reproductive surgeries open (abdomen or
                    pelvis was opened; usually you have a larger scar)?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("repro_open_surg")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("repro_open_surg")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  Has a doctor or health care provider ever told you that you
                  have any of the following?
                </Typography>
                <Select
                  labelId="multi-select-label"
                  multiple
                  value={this.state.data?.sti || []}
                  onChange={this.onFieldChange("sti")}
                  renderValue={(selected) => (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {selected?.length
                        ? selected.map((value) => {
                            const option = stiList.find(
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
                  {stiList.map((option) => (
                    <MenuItem
                      sx={{ width: "286px" }}
                      key={option.response}
                      value={option.response}
                    >
                      <Checkbox
                        checked={
                          this.state.data?.sti?.indexOf(option.response) > -1
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
              {this.state.data?.sti?.includes(1) ? (
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
                    How many times have you been told by a doctor or health care
                    provider that you had gonorrhea?{" "}
                  </Typography>
                  <input
                    type="Number"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.sti_times_gonorrhea}
                    onChange={this.onFieldChange("sti_times_gonorrhea")}
                    min={1}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(1) ? (
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
                    Were you ever treated for gonorrhea?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_gonorrhea")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_gonorrhea")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_gonorrhea")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(1) &&
              this.state.data?.treat_gonorrhea === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for gonorrhea:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.gonorrhea}
                    onChange={this.onFieldChange("gonorrhea")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(2) ? (
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
                    Were you ever treated for bacterial vaginosis?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_bacterial_vaginosis")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_bacterial_vaginosis")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_bacterial_vaginosis")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(2) &&
              this.state.data?.treat_bacterial_vaginosis === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for bacterial vaginosis:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.bacterial_vaginosis}
                    onChange={this.onFieldChange("bacterial_vaginosis")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(3) ? (
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
                    Were you ever treated for genital herpes?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_herpes")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_herpes")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_herpes")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(3) &&
              this.state.data?.treat_herpes === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for genital herpes:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.herpes}
                    onChange={this.onFieldChange("herpes")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(4) ? (
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
                    Were you ever treated for HIV?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_hiv")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_hiv")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_hiv")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(4) &&
              this.state.data?.treat_hiv === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for HIV:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.hiv}
                    onChange={this.onFieldChange("hiv")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(5) ? (
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
                    How many times have you been told by a doctor or health care
                    provider that you had chlamydia?{" "}
                  </Typography>
                  <input
                    type="Number"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.sti_times_chlamydia}
                    onChange={this.onFieldChange("sti_times_chlamydia")}
                    min={1}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(5) ? (
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
                    Were you ever treated for chlamydia?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_chlamydia")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_chlamydia")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_chlamydia")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(5) &&
              this.state.data?.treat_chlamydia === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for chlamydia:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.chlamydia}
                    onChange={this.onFieldChange("chlamydia")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(6) ? (
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
                    Were you ever treated for yeast infection?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_yeast")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_yeast")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_yeast")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(6) &&
              this.state.data?.treat_yeast === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for yeast infection:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.yeast}
                    onChange={this.onFieldChange("yeast")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(7) ? (
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
                    Were you ever treated for syphilis?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_syphilis")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_syphilis")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_syphilis")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(7) &&
              this.state.data?.treat_syphilis === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for syphilis:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.syphilis}
                    onChange={this.onFieldChange("syphilis")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(8) ? (
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
                    How many times have you been told by a doctor or health care
                    provider that you had pelvic inflammatory disease?{" "}
                  </Typography>
                  <input
                    type="Number"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.sti_times_pid}
                    onChange={this.onFieldChange("sti_times_pid")}
                    min={1}
                  />
                </Box>
              ) : null}
              {this.state.data?.sti?.includes(8) ? (
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
                    Were you ever treated for pelvic inflammatory disease?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("treat_pid")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("treat_pid")}
                    />
                    <FormControlLabel
                      value="999"
                      control={<Radio />}
                      label="I dont remember"
                      onChange={this.onFieldChange("treat_pid")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state.data?.treat_pid === "1" ? (
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
                    Please indicate the most recent date that you were treated
                    for pelvic inflammatory disease:
                  </Typography>
                  <input
                    type="Date"
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    value={this.state.data?.pid}
                    onChange={this.onFieldChange("pid")}
                    max={getTodayDate()}
                  />
                </Box>
              ) : null}

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
                    width: {
                      xs: "90%",
                      sm: "60%",
                      md: "70%",
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  Have you ever been exposed to any of the following?(Select all
                  that apply)
                </Typography>
                <Select
                  labelId="multi-select-label"
                  multiple
                  value={this.state.data?.exposed_rad || []}
                  onChange={this.onFieldChange("exposed_rad")}
                  renderValue={(selected) => (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {selected?.length
                        ? selected.map((value) => {
                            const option = scansList.find(
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
                  {scansList.map((option) => (
                    <MenuItem
                      sx={{ width: "286px" }}
                      key={option.response}
                      value={option.response}
                    >
                      <Checkbox
                        checked={
                          this.state.data?.exposed_rad?.indexOf(
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
              {this.state.data?.exposed_rad?.includes(1) ? (
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
                    About how many CT scans?
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
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
                    value={this.state.data?.d_about_how_many_ct_scans}
                    onChange={this.onFieldChange("d_about_how_many_ct_scans")}
                  >
                    <MenuItem value="1">1 to 5 CT scans</MenuItem>
                    <MenuItem value="2">More than 5 CT scans</MenuItem>
                    <MenuItem value="999">I don't know</MenuItem>
                  </Select>
                </Box>
              ) : null}

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
                   Do you have pain with sexual intercourse?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.pain_sex}
                  onChange={this.onFieldChange("pain_sex")}
                >
                  <MenuItem value="1">Always</MenuItem>
                  <MenuItem value="2">Sometime</MenuItem>
                  <MenuItem value="3">Rarely</MenuItem>
                  <MenuItem value="4">Never</MenuItem>
                  <MenuItem value="5">N/A, I am not sexually active</MenuItem>
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
                  Have you ever had an abnormal pap smear?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("ab_pap")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("ab_pap")}
                  />
                </RadioGroup>
              </Box>
              {this.state?.data?.ab_pap === "1" ? (
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
                    What was the abnormality?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.ab_pap_spec || []}
                    onChange={this.onFieldChange("ab_pap_spec")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = abnormalList.find(
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
                    {abnormalList.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.ab_pap_spec?.indexOf(
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
              ) : null}
              <Box
                id="Section-5"
                sx={{
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 5: Reproductive History
                </Typography>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    color: "#1A1756",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    fontSize: { xs: "16px", sm: "18px", md: "24px" }, // Adjusted font size for clarity
                  }}
                >
                  We understand that these questions can be challenging and
                  triggering for some patients. Please answer to the best of
                  your ability.
                </Typography>
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
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Have you ever been pregnant?
                  <span style={{ display: "block", mt: 2, fontSize: "12px" }}>
                    This would include having a positive pregnancy test if
                    you're currently trying to get pregnant. (Please include all
                    pregnancies, including miscarriages/terminations/live
                    births, etc.)
                  </span>
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("past_preg")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("past_preg")}
                  />
                </RadioGroup>
              </Box>
              {this.state?.data?.past_preg === "1" ? (
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
                    Did you have any pregnancies that were not carried beyond 20
                    weeks?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("under_20_weeks")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("under_20_weeks")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.under_20_weeks === "1" ? (
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
                    How many total pregnancies did you carry for 20 weeks or
                    less
                  </Typography>
                  <input
                    type="number"
                    value={this.state.data?.num_preg_less_20}
                    onChange={this.onFieldChange("num_preg_less_20")}
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    min={1}
                  />
                </Box>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.under_20_weeks === "1" &&
              this.state?.data?.num_preg_less_20 > 0 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      What was the outcome of each pregnancy not carried beyond
                      20 weeks?
                      <span
                        style={{ display: "block", mt: 2, fontSize: "12px" }}
                      >
                        Please describe in chronological order. If more than 5
                        pregnancies, please answer for the five most recent.
                      </span>
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 1
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_less_20_age_1}
                      onChange={this.onFieldChange("preg_less_20_age_1")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy not carried beyond
                      20 weeks?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_less_20_outcome_1}
                      onChange={this.onFieldChange("preg_less_20_outcome_1")}
                    >
                      <MenuItem value="1">Ectopic pregnancy</MenuItem>
                      <MenuItem value="2">
                        Molar pregnancy or hydatidiform mole
                      </MenuItem>
                      <MenuItem value="3">Miscarriage</MenuItem>
                      <MenuItem value="4">
                        Therapeutic abortion/termination (other than for still
                        birth, miscarriage, ectopic or molar pregnancy) per
                        advice from your medical provider
                      </MenuItem>
                      <MenuItem value="5">
                        Elective abortion/termination (your personal decision)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">Prefer not to answer</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.under_20_weeks === "1" &&
              this.state?.data?.num_preg_less_20 > 1 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 2
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_less_20_age_2}
                      onChange={this.onFieldChange("preg_less_20_age_2")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy not carried beyond
                      20 weeks?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_less_20_outcome_2}
                      onChange={this.onFieldChange("preg_less_20_outcome_2")}
                    >
                      <MenuItem value="1">Ectopic pregnancy</MenuItem>
                      <MenuItem value="2">
                        Molar pregnancy or hydatidiform mole
                      </MenuItem>
                      <MenuItem value="3">Miscarriage</MenuItem>
                      <MenuItem value="4">
                        Therapeutic abortion/termination (other than for still
                        birth, miscarriage, ectopic or molar pregnancy) per
                        advice from your medical provider
                      </MenuItem>
                      <MenuItem value="5">
                        Elective abortion/termination (your personal decision)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">Prefer not to answer</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.under_20_weeks === "1" &&
              this.state?.data?.num_preg_less_20 > 2 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 3
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_less_20_age_3}
                      onChange={this.onFieldChange("preg_less_20_age_3")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy not carried beyond
                      20 weeks?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_less_20_outcome_3}
                      onChange={this.onFieldChange("preg_less_20_outcome_3")}
                    >
                      <MenuItem value="1">Ectopic pregnancy</MenuItem>
                      <MenuItem value="2">
                        Molar pregnancy or hydatidiform mole
                      </MenuItem>
                      <MenuItem value="3">Miscarriage</MenuItem>
                      <MenuItem value="4">
                        Therapeutic abortion/termination (other than for still
                        birth, miscarriage, ectopic or molar pregnancy) per
                        advice from your medical provider
                      </MenuItem>
                      <MenuItem value="5">
                        Elective abortion/termination (your personal decision)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">Prefer not to answer</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.under_20_weeks === "1" &&
              this.state?.data?.num_preg_less_20 > 3 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 4
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_less_20_age_4}
                      onChange={this.onFieldChange("preg_less_20_age_4")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy not carried beyond
                      20 weeks?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_less_20_outcome_4}
                      onChange={this.onFieldChange("preg_less_20_outcome_4")}
                    >
                      <MenuItem value="1">Ectopic pregnancy</MenuItem>
                      <MenuItem value="2">
                        Molar pregnancy or hydatidiform mole
                      </MenuItem>
                      <MenuItem value="3">Miscarriage</MenuItem>
                      <MenuItem value="4">
                        Therapeutic abortion/termination (other than for still
                        birth, miscarriage, ectopic or molar pregnancy) per
                        advice from your medical provider
                      </MenuItem>
                      <MenuItem value="5">
                        Elective abortion/termination (your personal decision)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">Prefer not to answer</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.under_20_weeks === "1" &&
              this.state?.data?.num_preg_less_20 > 4 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 5
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_less_20_age_5}
                      onChange={this.onFieldChange("preg_less_20_age_5")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy not carried beyond
                      20 weeks?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_less_20_outcome_5}
                      onChange={this.onFieldChange("preg_less_20_outcome_5")}
                    >
                      <MenuItem value="1">Ectopic pregnancy</MenuItem>
                      <MenuItem value="2">
                        Molar pregnancy or hydatidiform mole
                      </MenuItem>
                      <MenuItem value="3">Miscarriage</MenuItem>
                      <MenuItem value="4">
                        Therapeutic abortion/termination (other than for still
                        birth, miscarriage, ectopic or molar pregnancy) per
                        advice from your medical provider
                      </MenuItem>
                      <MenuItem value="5">
                        Elective abortion/termination (your personal decision)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">Prefer not to answer</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" ? (
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
                    Have you had at least one pregnancy that was carried beyond
                    20 weeks?
                  </Typography>
                  <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Yes"
                      onChange={this.onFieldChange("preg_more_20")}
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="No"
                      onChange={this.onFieldChange("preg_more_20")}
                    />
                  </RadioGroup>
                </Box>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" ? (
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
                    How many total pregnancies have you carried beyond 20 weeks?
                  </Typography>
                  <input
                    type="number"
                    value={this.state.data?.g20w_total}
                    onChange={this.onFieldChange("g20w_total")}
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    min={1}
                  />
                </Box>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 0 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      What was the outcome of each pregnancy carried beyond 20
                      weeks? Please describe in chronological order. If more
                      than 5 pregnancies, please answer for the five most
                      recent.
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 1
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_age_01}
                      onChange={this.onFieldChange("preg_g20w_age_01")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy carried beyond 20
                      weeks?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_outcome_01}
                      onChange={this.onFieldChange("preg_g20w_outcome_01")}
                    >
                      <MenuItem value="6">Live birth</MenuItem>
                      <MenuItem value="7">Stillbirth</MenuItem>
                      <MenuItem value="8">
                        Live birth and stillbirth or miscarriage (e.g.,
                        multiples pregnancy [twins, triplets, etc] where not all
                        babies were live births)
                      </MenuItem>
                      <MenuItem value="4">
                        Therapeutic abortion/termination for reason other than
                        stillbirth (per advice from your medical provider),
                        please specify for what reason (i.e., congenital
                        abnormality):
                      </MenuItem>
                      <MenuItem value="5">
                        Elective abortion/termination (per your personal
                        decision){" "}
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">Prefer not to answer</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 0 &&
              (this.state?.data?.preg_g20w_outcome_01 === "6" ||
                this.state?.data?.preg_g20w_outcome_01 === "8") ? (
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
                      Please select the kind of pregnancy you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_type_01}
                      onChange={this.onFieldChange("preg_g20w_type_01")}
                    >
                      <MenuItem value="1">Single child pregnancy</MenuItem>
                      <MenuItem value="2">
                        Multiples pregnancy (e.g., twins, triplets, etc.)
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
                      Please select the type of delivery you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_delivery_01}
                      onChange={this.onFieldChange("preg_g20w_delivery_01")}
                    >
                      <MenuItem value="1">Vaginal delivery</MenuItem>
                      <MenuItem value="2">
                        C-section (Caesarean section)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
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
                      Did the child/children have any congenital abnormalities
                      (birth defects)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_congenital_01}
                      onChange={this.onFieldChange("preg_g20w_congenital_01")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                    </Select>
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
                      mt: 2,

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
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Was the child/children preterm (born before 37 weeks
                      pregnancy)?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("preg_g20w_preterm_01")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("preg_g20w_preterm_01")}
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
                      Did the child/children have low birth weight (low birth
                      weight is defined as birth weight less than 5 lbs 8 ounces
                      or 2,500 grams)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_lbweight_01}
                      onChange={this.onFieldChange("preg_g20w_lbweight_01")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Was the child/children small for gestational age? This
                      refers to babies who were below the 10th percentile for
                      their gestational age at the time of birth.
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_sgestage_01}
                      onChange={this.onFieldChange("preg_g20w_sgestage_01")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Did the child/children have to be admitted to a neonatal
                      intensive care unit (NICU) within 28 days of birth?{" "}
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_nicu_01}
                      onChange={this.onFieldChange("preg_g20w_nicu_01")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 1 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 2
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_age_02}
                      onChange={this.onFieldChange("preg_g20w_age_02")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy carried beyond 20
                      weeks?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_outcome_02}
                      onChange={this.onFieldChange("preg_g20w_outcome_02")}
                    >
                      <MenuItem value="6">Live birth</MenuItem>
                      <MenuItem value="7">Stillbirth</MenuItem>
                      <MenuItem value="8">
                        Live birth and stillbirth or miscarriage (e.g.,
                        multiples pregnancy [twins, triplets, etc] where not all
                        babies were live births)
                      </MenuItem>
                      <MenuItem value="4">
                        Therapeutic abortion/termination for reason other than
                        stillbirth (per advice from your medical provider),
                        please specify for what reason (i.e., congenital
                        abnormality):
                      </MenuItem>
                      <MenuItem value="5">
                        Elective abortion/termination (per your personal
                        decision){" "}
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
                      <MenuItem value="777">Prefer not to answer</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 0 &&
              (this.state?.data?.preg_g20w_outcome_02 === "6" ||
                this.state?.data?.preg_g20w_outcome_02 === "8") ? (
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
                      Please select the kind of pregnancy you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_type_02}
                      onChange={this.onFieldChange("preg_g20w_type_02")}
                    >
                      <MenuItem value="1">Single child pregnancy</MenuItem>
                      <MenuItem value="2">
                        Multiples pregnancy (e.g., twins, triplets, etc.)
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
                      Please select the type of delivery you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_delivery_02}
                      onChange={this.onFieldChange("preg_g20w_delivery_02")}
                    >
                      <MenuItem value="1">Vaginal delivery</MenuItem>
                      <MenuItem value="2">
                        C-section (Caesarean section)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
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
                      Did the child/children have any congenital abnormalities
                      (birth defects)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_congenital_02}
                      onChange={this.onFieldChange("preg_g20w_congenital_02")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                    </Select>
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
                      mt: 2,

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
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Was the child/children preterm (born before 37 weeks
                      pregnancy)?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("preg_g20w_preterm_02")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("preg_g20w_preterm_02")}
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
                      Did the child/children have low birth weight (low birth
                      weight is defined as birth weight less than 5 lbs 8 ounces
                      or 2,500 grams)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_lbweight_02}
                      onChange={this.onFieldChange("preg_g20w_lbweight_02")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Was the child/children small for gestational age? This
                      refers to babies who were below the 10th percentile for
                      their gestational age at the time of birth.
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      sx={{
                        width: "286px",
                        minWidth: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        flexBasis: "30%",
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
                      value={this.state.data?.preg_g20w_sgestage_02}
                      onChange={this.onFieldChange("preg_g20w_sgestage_02")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Did the child/children have to be admitted to a neonatal
                      intensive care unit (NICU) within 28 days of birth?{" "}
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_nicu_02}
                      onChange={this.onFieldChange("preg_g20w_nicu_02")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 2 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 3
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_age_03}
                      onChange={this.onFieldChange("preg_g20w_age_03")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy carried beyond 20
                      weeks?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_outcome_03}
                      onChange={this.onFieldChange("preg_g20w_outcome_03")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 2 &&
              (this.state.data.preg_g20w_outcome_03 === "6" ||
                this.state.data.preg_g20w_outcome_03 === "8") ? (
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
                      Please select the type of pregnancy you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_type_03}
                      onChange={this.onFieldChange("preg_g20w_type_03")}
                    >
                      <MenuItem value="1">Single child pregnancy</MenuItem>
                      <MenuItem value="2">
                        Multiples pregnancy (e.g., twins, triplets, etc.)
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
                      Please select the type of delivery you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_delivery_03}
                      onChange={this.onFieldChange("preg_g20w_delivery_03")}
                    >
                      <MenuItem value="1">Vaginal delivery</MenuItem>
                      <MenuItem value="2">
                        C-section (Caesarean section)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
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
                      Did the child/children have any congenital abnormalities
                      (birth defects)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_congenital_03}
                      onChange={this.onFieldChange("preg_g20w_congenital_03")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                    </Select>
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
                      mt: 2,

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
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Was the child/children preterm (born before 37 weeks
                      pregnancy)?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("preg_g20w_preterm_03")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("preg_g20w_preterm_03")}
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
                      Did the child/children have low birth weight (low birth
                      weight is defined as birth weight less than 5 lbs 8 ounces
                      or 2,500 grams)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_lbweight_03}
                      onChange={this.onFieldChange("preg_g20w_lbweight_03")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Was the child/children small for gestational age? This
                      refers to babies who were below the 10th percentile for
                      their gestational age at the time of birth.
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_sgestage_03}
                      onChange={this.onFieldChange("preg_g20w_sgestage_03")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Did the child/children have to be admitted to a neonatal
                      intensive care unit (NICU) within 28 days of birth?{" "}
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_nicu_03}
                      onChange={this.onFieldChange("preg_g20w_nicu_03")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 3 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 4
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_age_04}
                      onChange={this.onFieldChange("preg_g20w_age_04")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy carried beyond 20
                      weeks?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_outcome_04}
                      onChange={this.onFieldChange("preg_g20w_outcome_04")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 3 &&
              (this.state.data.preg_g20w_outcome_03 === "6" ||
                this.state.data.preg_g20w_outcome_03 === "8") ? (
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
                      Please select the type of pregnancy you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_type_04}
                      onChange={this.onFieldChange("preg_g20w_type_04")}
                    >
                      <MenuItem value="1">Single child pregnancy</MenuItem>
                      <MenuItem value="2">
                        Multiples pregnancy (e.g., twins, triplets, etc.)
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
                      Please select the type of delivery you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_delivery_04}
                      onChange={this.onFieldChange("preg_g20w_delivery_04")}
                    >
                      <MenuItem value="1">Vaginal delivery</MenuItem>
                      <MenuItem value="2">
                        C-section (Caesarean section)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
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
                      Did the child/children have any congenital abnormalities
                      (birth defects)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_congenital_04}
                      onChange={this.onFieldChange("preg_g20w_congenital_04")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                    </Select>
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
                      mt: 2,

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
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Was the child/children preterm (born before 37 weeks
                      pregnancy)?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("preg_g20w_preterm_04")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("preg_g20w_preterm_04")}
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
                      Did the child/children have low birth weight (low birth
                      weight is defined as birth weight less than 5 lbs 8 ounces
                      or 2,500 grams)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_lbweight_04}
                      onChange={this.onFieldChange("preg_g20w_lbweight_04")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Was the child/children small for gestational age? This
                      refers to babies who were below the 10th percentile for
                      their gestational age at the time of birth.
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_sgestage_04}
                      onChange={this.onFieldChange("preg_g20w_sgestage_04")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Did the child/children have to be admitted to a neonatal
                      intensive care unit (NICU) within 28 days of birth?{" "}
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_nicu_04}
                      onChange={this.onFieldChange("preg_g20w_nicu_04")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 4 ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Pregnancy 5
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
                      How old were you at the time of pregnancy?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_age_05}
                      onChange={this.onFieldChange("preg_g20w_age_05")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      What was the outcome of the pregnancy carried beyond 20
                      weeks?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.preg_g20w_outcome_05}
                      onChange={this.onFieldChange("preg_g20w_outcome_05")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
                    />
                  </Box>
                </>
              ) : null}
              {this.state?.data?.past_preg === "1" &&
              this.state?.data?.preg_more_20 === "1" &&
              this.state?.data?.g20w_total > 4 &&
              (this.state.data.preg_g20w_outcome_03 === "6" ||
                this.state.data.preg_g20w_outcome_03 === "8") ? (
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
                      Please select the type of pregnancy you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_type_05}
                      onChange={this.onFieldChange("preg_g20w_type_05")}
                    >
                      <MenuItem value="1">Single child pregnancy</MenuItem>
                      <MenuItem value="2">
                        Multiples pregnancy (e.g., twins, triplets, etc.)
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
                      Please select the type of delivery you had:
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_delivery_05}
                      onChange={this.onFieldChange("preg_g20w_delivery_05")}
                    >
                      <MenuItem value="1">Vaginal delivery</MenuItem>
                      <MenuItem value="2">
                        C-section (Caesarean section)
                      </MenuItem>
                      <MenuItem value="555">Other</MenuItem>
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
                      Did the child/children have any congenital abnormalities
                      (birth defects)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_congenital_05}
                      onChange={this.onFieldChange("preg_g20w_congenital_05")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                    </Select>
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
                      mt: 2,

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
                        width: {
                          xs: "90%",
                          sm: "60%",
                          md: "70%",
                        },
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      Was the child/children preterm (born before 37 weeks
                      pregnancy)?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("preg_g20w_preterm_05")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("preg_g20w_preterm_05")}
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
                      Did the child/children have low birth weight (low birth
                      weight is defined as birth weight less than 5 lbs 8 ounces
                      or 2,500 grams)?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_lbweight_05}
                      onChange={this.onFieldChange("preg_g20w_lbweight_05")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Was the child/children small for gestational age? This
                      refers to babies who were below the 10th percentile for
                      their gestational age at the time of birth.
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_sgestage_05}
                      onChange={this.onFieldChange("preg_g20w_sgestage_05")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
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
                      Did the child/children have to be admitted to a neonatal
                      intensive care unit (NICU) within 28 days of birth?{" "}
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.preg_g20w_nicu_05}
                      onChange={this.onFieldChange("preg_g20w_nicu_05")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">I don't know</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              <Box
                id="Section-6"
                sx={{
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 6: Fertility Services
                </Typography>
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
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Have you ever visited a doctor or other health professional
                  because you or your partner had difficulty becoming pregnant?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("doc_diff_preg")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("doc_diff_preg")}
                  />
                </RadioGroup>
              </Box>
              {this.state?.data?.doc_diff_preg === "1" && (
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
                      How many times have you been evaluated for infertility?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.infertiltiy_times}
                      onChange={this.onFieldChange("infertiltiy_times")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      Was a doctor or health professional ever able to tell you
                      why you and your partner were having difficulty?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.doc_why_diff_preg}
                      onChange={this.onFieldChange("doc_why_diff_preg")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="0">No</MenuItem>
                      <MenuItem value="999">Not Sure</MenuItem>
                    </Select>
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
                      mt: 2,

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
                      Have you ever undergone infertility treatments?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("infer_treat")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("infer_treat")}
                      />
                    </RadioGroup>
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
                      mt: 2,

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
                      Are you currently seeing a doctor or other health
                      professional due to difficulty getting pregnant?{" "}
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("current_infertlty")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("current_infertlty")}
                      />
                    </RadioGroup>
                  </Box>
                </>
              )}
              {this.state.data.doc_diff_preg === "1" &&
              this.state.data.infertiltiy_times > 3 ? (
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
                      fontWeight: 600,
                      fontSize: "16px",
                      mb: {
                        xs: 1,
                        md: 0,
                      },
                    }}
                  >
                    Answer the following for the 3 most recent evaluations
                  </Typography>
                </Box>
              ) : null}

              {this.state.data.doc_diff_preg === "1" &&
              this.state.data.infertiltiy_times > 0 ? (
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
                      What was your age at the time of the most recent
                      evaluation for infertility?
                    </Typography>
                    <input
                      type="number"
                      value={this.state.data?.age_eval_fertility_1}
                      onChange={this.onFieldChange("age_eval_fertility_1")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      }}
                    >
                      <span style={{ color: "red" }}>*</span>
                      At your most recent evaluation, how would you describe
                      your IBD disease activity?{" "}
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.control_ibd}
                      onChange={this.onFieldChange("control_ibd")}
                    >
                      <MenuItem value="1">
                        Active, required hospitalization within 6 months before
                        trying to get pregnant but did not require surgery
                      </MenuItem>
                      <MenuItem value="2">
                        Active, required surgery for active disease within 6
                        months before trying to get pregnant
                      </MenuItem>
                      <MenuItem value="3">
                        Active, managed as an outpatient (no need for
                        hospitalization or surgery)
                      </MenuItem>
                      <MenuItem value="4">
                        Recent activity, but was improving
                      </MenuItem>
                      <MenuItem value="5">
                        In sustained remission (no IBD related symptoms)
                      </MenuItem>
                      <MenuItem value="6">
                        Inactive, but underwent elective surgery (i.e., second
                        or third J pouch surgery) within 6 months before trying
                        to get pregnant
                      </MenuItem>
                      <MenuItem value="999">I don\'t remember</MenuItem>
                    </Select>
                  </Box>
                </>
              ) : null}
              {this.state.data.doc_diff_preg === "1" &&
              this.state.data.infertiltiy_times > 1 ? (
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
                    What was your age at the time of the second most recent
                    evaluation for infertility?
                  </Typography>
                  <input
                    type="number"
                    value={this.state.data?.age_eval_fertility_2}
                    onChange={this.onFieldChange("age_eval_fertility_2")}
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    min={1}
                  />
                </Box>
              ) : null}
              {this.state.data.doc_diff_preg === "1" &&
              this.state.data.infertiltiy_times > 2 ? (
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
                    What was your age at the time of the third most recent
                    evaluation for infertility?
                  </Typography>
                  <input
                    type="number"
                    value={this.state.data?.age_eval_fertility_3}
                    onChange={this.onFieldChange("age_eval_fertility_3")}
                    style={{
                      width: "286px",
                      height: "46px",
                      borderRadius: "6px",
                      boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                      border: "1px solid rgba(109, 117, 143, 1)",
                      padding: "0 10px",
                      boxSizing: "border-box",
                    }}
                    min={1}
                  />
                </Box>
              ) : null}
              {this.state.data.doc_diff_preg === "1" &&
              this.state.data.doc_why_diff_preg === "1" ? (
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
                    What was the cause of decreased fertility?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.decreased_fertility_who || []}
                    onChange={this.onFieldChange("decreased_fertility_who")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = partnerList.find(
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
                    {partnerList.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.decreased_fertility_who?.indexOf(
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
              ) : null}
              {this.state.data.doc_diff_preg === "1" &&
              this.state.data.doc_why_diff_preg === "1" &&
              this.state.data?.decreased_fertility_who?.includes(1) ? (
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
                    Please specify your partner's difficulty:{" "}
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.problem_partner || []}
                    onChange={this.onFieldChange("problem_partner")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = partnerProblems.find(
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
                    {partnerProblems.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.problem_partner?.indexOf(
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
              ) : null}
              {this.state.data.doc_diff_preg === "1" &&
              this.state.data.doc_why_diff_preg === "1" &&
              this.state.data?.decreased_fertility_who?.includes(2) ? (
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
                    Please specify your your difficulty:{" "}
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.prob_me || []}
                    onChange={this.onFieldChange("prob_me")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = myProbs.find(
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
                    {myProbs.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.prob_me?.indexOf(option.response) >
                            -1
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
              ) : null}

              {this.state.data?.doc_diff_preg === "1" &&
              this.state.data?.infer_treat === "1" ? (
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
                      What infertility treatments have you undergone?{" "}
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.infert_treat_spec || []}
                      onChange={this.onFieldChange("infert_treat_spec")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = treatmentList.find(
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
                      {treatmentList.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.infert_treat_spec?.indexOf(
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

              {this.state.data?.doc_diff_preg === "1" &&
              this.state.data?.infer_treat === "1" &&
              this.state.data?.infert_treat_spec?.includes(4) ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Please specify any reproductive surgeries:
                    </Typography>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      value={this.state.data?.any_art_spec}
                      onChange={this.onFieldChange("any_art_spec")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
                    />
                  </Box>
                </>
              ) : null}

              {this.state.data?.doc_diff_preg === "1" &&
              this.state.data?.infer_treat === "1" &&
              this.state.data?.infert_treat_spec?.includes(5) ? (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      Please specify medications:
                    </Typography>
                    <input
                      type="text"
                      value={this.state.data?.infertility_meds_spec}
                      onChange={this.onFieldChange("infertility_meds_spec")}
                      style={{
                        width: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
                    />
                  </Box>
                </>
              ) : null}

              <Box
                id="Section-7"
                sx={{
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 7: Partner Information
                </Typography>
              </Box>
              {this.state.data?.past_preg === "1" && (
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
                        fontWeight: 600,
                        fontSize: "16px",
                        mb: {
                          xs: 1,
                          md: 0,
                        },
                      }}
                    >
                      If you were previously pregnant, did you get pregnant with
                      your current sexual partner?
                    </Typography>
                    <RadioGroup row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        onChange={this.onFieldChange("preg_part")}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        onChange={this.onFieldChange("preg_part")}
                      />
                    </RadioGroup>
                  </Box>
                </>
              )}
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
                  },
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Do you currently have a sexual partner with whom you plan to
                  have a child?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("curr_part_child")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("curr_part_child")}
                  />
                </RadioGroup>
              </Box>
              {this.state.data?.curr_part_child === "1" && (
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
                      What is your partner's current age?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.cur_part_age}
                      onChange={this.onFieldChange("cur_part_age")}
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
                      Has your partner ever been diagnosed with infertility?
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
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
                      value={this.state.data?.part_diag_fer}
                      onChange={this.onFieldChange("part_diag_fer")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="2">No</MenuItem>
                      <MenuItem value="999">I don't Know</MenuItem>
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
                      Has your partner ever had any procedures or surgeries
                      involving his pelvis, genital organs, or urologic system
                      (ureters/urethra/bladder)?{" "}
                    </Typography>
                    <Select
                      placeholder="Select"
                      defaultValue="Placeholder"
                      sx={{
                        minWidth: "286px",
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
                      value={this.state.data?.pelvic_proc}
                      onChange={this.onFieldChange("pelvic_proc")}
                    >
                      <MenuItem value="1">Yes</MenuItem>
                      <MenuItem value="2">No</MenuItem>
                      <MenuItem value="999">I don't Know</MenuItem>
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
                      following infections?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                    value={this.state.data?.part_dx_infec || []}
                      onChange={this.onFieldChange("part_dx_infec")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = infectionList.find(
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
                      {infectionList.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_dx_infec?.indexOf(
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
                      following conditions?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.part_diag_cond || []}
                      onChange={this.onFieldChange("part_diag_cond")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = conditionList.find(
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
                      {conditionList.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_diag_cond?.indexOf(
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
                      Please list your partner's current medications, if you
                      know them'
                    </Typography>
                    <input
                      type="text"
                      value={this.state.data?.part_meds}
                      onChange={this.onFieldChange("part_meds")}
                      style={{
                        minWidth: "286px",
                        height: "46px",
                        borderRadius: "6px",
                        boxShadow: "0px 1px 4px 0px rgba(25, 33, 61, 0.08)",
                        border: "1px solid rgba(109, 117, 143, 1)",
                        padding: "0 10px",
                        boxSizing: "border-box",
                      }}
                      min={1}
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
                      surgical procedures?{" "}
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.part_surg_proced || []}
                      onChange={this.onFieldChange("part_surg_proced")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = surgicalProcedures.find(
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
                      {surgicalProcedures.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_surg_proced?.indexOf(
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
                      Has your partner ever been exposed to any of the
                      following?
                    </Typography>
                    <Select
                      labelId="multi-select-label"
                      multiple
                      value={this.state.data?.part_exposed_2 || []}
                      onChange={this.onFieldChange("part_exposed_2")}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {selected?.length
                            ? selected.map((value) => {
                                const option = medicalProcedures.find(
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
                      {medicalProcedures.map((option) => (
                        <MenuItem
                          sx={{ width: "286px" }}
                          key={option.response}
                          value={option.response}
                        >
                          <Checkbox
                            checked={
                              this.state.data?.part_exposed_2?.indexOf(
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
              )}
              {this.state.data?.curr_part_child === "1" &&
              this.state.data?.pelvic_proc === "1" ? (
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
                    Please specify location of surgery{" "}
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
                              const option = surgeryList.find(
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
                    {surgeryList.map((option) => (
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
              ) : null}
              {this.state.data?.curr_part_child === "1" &&
              this.state.data?.part_surg_proced?.includes(3) ? (
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
                    Which hernia type?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.hernia_type || []}
                    onChange={this.onFieldChange("hernia_type")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = herinaTypes.find(
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
                    {herinaTypes.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.hernia_type?.indexOf(
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
              ) : null}
              {this.state.data?.curr_part_child === "1" &&
              this.state.data?.part_exposed_2?.includes(1) ? (
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
                    About how many CT scans?
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
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
                    value={this.state.data?.part_how_many_ct_scans}
                    onChange={this.onFieldChange("part_how_many_ct_scans")}
                  >
                    <MenuItem value="1">1 to 5 CT scans</MenuItem>
                    <MenuItem value="2">More than 5 CT scans</MenuItem>
                    <MenuItem value="999">I don't know</MenuItem>
                  </Select>
                </Box>
              ) : null}

              <Box
                id="Section-8"
                sx={{
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 8: Family History
                </Typography>
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
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Do you have at least one first-degree relative with any of the
                  following conditions? First-degree relatives are parents,
                  siblings, and children. Please do not include half-siblings as
                  first-degree relatives.
                </Typography>
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
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Difficulty getting pregnant or inability to get pregnant?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.infertility}
                  onChange={this.onFieldChange("infertility")}
                >
                  <MenuItem value="1">Yes</MenuItem>
                  <MenuItem value="2">No</MenuItem>
                  <MenuItem value="999">I don't know</MenuItem>
                </Select>
              </Box>
              {this.state.data.infertility === "1" && (
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
                    Select reason for infertility
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                  value={this.state.data?.infertility_type || []}
                    onChange={this.onFieldChange("infertility_type")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityTypes.find(
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
                    {infertilityTypes.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_type?.indexOf(
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
              )}
              {this.state.data.infertility === "1" &&
              this.state?.data?.infertility_type?.includes(1) ? (
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
                    Which relative(s) have Polycystic Ovarian Syndrome (PCOS)?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_relative_1 || []}
                    onChange={this.onFieldChange("infertility_relative_1")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_relative_1?.indexOf(
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
              ) : null}
              {this.state.data.infertility === "1" &&
              this.state?.data?.infertility_type?.includes(2) ? (
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
                    Which relative(s) have endometriosis?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_relative_2 || []}
                    onChange={this.onFieldChange("infertility_relative_2")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_relative_2?.indexOf(
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
              ) : null}
              {this.state.data.infertility === "1" &&
              this.state?.data?.infertility_type?.includes(3) ? (
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
                    Which relative(s) have fallopian tube blockage?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_relative_3 || []}
                    onChange={this.onFieldChange("infertility_relative_3")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_relative_3?.indexOf(
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
              ) : null}
              {this.state.data.infertility === "1" &&
              this.state?.data?.infertility_type?.includes(4) ? (
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
                    Which relative(s) have irregular ovulation/not ovulating?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_relative_4 || []}
                    onChange={this.onFieldChange("infertility_relative_4")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_relative_4?.indexOf(
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
              ) : null}
              {this.state.data.infertility === "1" &&
              this.state?.data?.infertility_type?.includes(5) ? (
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
                    Which relative(s) have uterine fibroids or other problems
                    with the uterus?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_relative_5 || []}
                    onChange={this.onFieldChange("infertility_relative_5")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_relative_5?.indexOf(
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
              ) : null}
              {this.state.data.infertility === "1" &&
              this.state?.data?.infertility_type?.includes(6) ? (
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
                    Which relative(s) have problem with the cervix?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_relative_6 || []}
                    onChange={this.onFieldChange("infertility_relative_6")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_relative_6?.indexOf(
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
              ) : null}
              {this.state.data.infertility === "1" &&
              this.state?.data?.infertility_type?.includes(7) ? (
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
                    Which relative(s) have unexplained/unknown cause?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_relative_7 || []}
                    onChange={this.onFieldChange("infertility_relative_7")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_relative_7?.indexOf(
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
              ) : null}

              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
                  },
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Did any of your first-degree relatives require hormones or
                  procedures to help get pregnant (such as medications to help
                  with ovulation or for PCOS; surgery to treat PCOS, fibroids or
                  endometriosis; assisted reproductive therapy such as
                  intrauterine insemination [IUI] or in vitro fertilization
                  [IVF])?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.history_2}
                  onChange={this.onFieldChange("history_2")}
                >
                  <MenuItem value="1">Yes</MenuItem>
                  <MenuItem value="2">No</MenuItem>
                  <MenuItem value="999">I don't know</MenuItem>
                </Select>
              </Box>
              {this.state.data.history_2 === "1" && (
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
                    Which relative(s)?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_2_relatives || []}
                    onChange={this.onFieldChange("infertility_2_relatives")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_2_relatives?.indexOf(
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
              )}
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
                  },
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Has any first-degree relative had multiple
                  miscarriages/spontaneous abortions?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.history_3}
                  onChange={this.onFieldChange("history_3")}
                >
                  <MenuItem value="1">Yes</MenuItem>
                  <MenuItem value="2">No</MenuItem>
                  <MenuItem value="999">I don't know</MenuItem>
                </Select>
              </Box>
              {this.state.data.history_3 === "1" && (
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
                    Which relative(s)?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.infertility_2_relatives_2 || []}
                    onChange={this.onFieldChange("infertility_2_relatives_2")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = infertilityRelatives.find(
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
                    {infertilityRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.infertility_2_relatives_2?.indexOf(
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
              )}

              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
                  },
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                  Do you have any first-degree relatives with inflammatory bowel
                  disease (Crohn's Disease, Ulcerative Colitis)?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
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
                  value={this.state.data?.ibd}
                  onChange={this.onFieldChange("ibd")}
                >
                  <MenuItem value="1">Yes</MenuItem>
                  <MenuItem value="2">No</MenuItem>
                  <MenuItem value="999">I don't know</MenuItem>
                </Select>
              </Box>
              {this.state.data.ibd === "1" && (
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
                    What kind of inflammatory bowel disease?
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.ibd_type || []}
                    onChange={this.onFieldChange("ibd_type")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdTypes.find(
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
                    {ibdTypes.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.ibd_type?.indexOf(
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
              )}
              {this.state.data.ibd === "1" &&
              this.state?.data?.ibd_type?.includes(1) ? (
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
                    Specify which relative(s) have Ulcerative Colitis:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_uc || []}
                    onChange={this.onFieldChange("relative_uc")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_uc?.indexOf(
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
              ) : null}
              {this.state.data.ibd === "1" &&
              this.state?.data?.ibd_type?.includes(2) ? (
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
                    Specify which relative(s) have Crohn\'s Disease:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_cd || []}
                    onChange={this.onFieldChange("relative_cd")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_cd?.indexOf(
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
              ) : null}
              {this.state.data.ibd === "1" &&
              this.state?.data?.ibd_type?.includes(4) ? (
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
                    Specify which relative(s) have IBD-U:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_ibd_u || []}
                    onChange={this.onFieldChange("relative_ibd_u")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_ibd_u?.indexOf(
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
              ) : null}
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    sm: "space-between",
                    md: "space-between",
                  },
                  mt: 2,

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
                    fontFamily: "Inter",
                    fontWeight: 500,
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
                   Do you have first-degree relatives with other autoimmune
                  conditions?(Select all that apply)
                </Typography>
                <Select
                  labelId="multi-select-label"
                  multiple
                  value={this.state.data?.autoimmune || []}
                  onChange={this.onFieldChange("autoimmune")}
                  renderValue={(selected) => (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {selected?.length
                        ? selected.map((value) => {
                            const option = autoImmuneConditions.find(
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
                  {autoImmuneConditions.map((option) => (
                    <MenuItem
                      sx={{ width: "286px" }}
                      key={option.response}
                      value={option.response}
                    >
                      <Checkbox
                        checked={
                          this.state.data?.autoimmune?.indexOf(
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
              {this.state?.data?.autoimmune?.includes(1) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                     Type of thyroid disease
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.thyroid_condition_specific || []}
                    onChange={this.onFieldChange("thyroid_condition_specific")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = thyroidList.find(
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
                    {thyroidList.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.thyroid_condition_specific?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(1) &&
              this.state?.data?.thyroid_condition_specific?.includes(1) ? (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for overactive thyroid (e.g.,
                    Graves Disease):{" "}
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_thyroid_overactive || []}
                    onChange={this.onFieldChange("relative_thyroid_overactive")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_thyroid_overactive?.indexOf(
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
              ) : null}
              {this.state?.data?.autoimmune?.includes(1) &&
              this.state?.data?.thyroid_condition_specific?.includes(2) ? (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for underactive thyroid (e.g.,
                    hypothyroidism or Hashimoto\'s):
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_thyroid_underactive || []}
                    onChange={this.onFieldChange(
                      "relative_thyroid_underactive"
                    )}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_thyroid_underactive?.indexOf(
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
              ) : null}
              {this.state?.data?.autoimmune?.includes(1) &&
              this.state?.data?.thyroid_condition_specific?.includes(555) ? (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for other thyroid disease:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_thyroid_other || []}
                    onChange={this.onFieldChange("relative_thyroid_other")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_thyroid_other?.indexOf(
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
              ) : null}
              {this.state?.data?.autoimmune?.includes(1) &&
              this.state?.data?.thyroid_condition_specific?.includes(999) ? (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for unknown thyroid disease:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_thyroid_unknown || []}
                    onChange={this.onFieldChange("relative_thyroid_unknown")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_thyroid_unknown?.indexOf(
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
              ) : null}
              {this.state?.data?.autoimmune?.includes(2) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for Rheumatoid arthritis:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune2 || []}
                    onChange={this.onFieldChange("relative_autoimmune2")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune2?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(3) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for Rheumatoid arthritis:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune3 || []}
                    onChange={this.onFieldChange("relative_autoimmune3")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune3?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(4) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for Psoriasis:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune4 || []}
                    onChange={this.onFieldChange("relative_autoimmune4")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune4?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(5) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for systemic lupus erythematosus
                    (SLE or lupus):
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune5 || []}
                    onChange={this.onFieldChange("relative_autoimmune5")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune5?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(6) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for Antiphospholipid Antibody
                    syndrome:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune6 || []}
                    onChange={this.onFieldChange("relative_autoimmune6")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune6?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(7) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for history of blood clots (not
                    due to Antiphospholipid Antibody Syndrome):
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune7 || []}
                    onChange={this.onFieldChange("relative_autoimmune7")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune7?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(8) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for Sjogren\'s syndrome:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune8 || []}
                    onChange={this.onFieldChange("relative_autoimmune8")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune8?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(9) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for Type 1 (Juvenile) diabetes
                    (diagnosed at a young age, always needs insulin):
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune9 || []}
                    onChange={this.onFieldChange("relative_autoimmune9")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune9?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(10) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for multiple sclerosis (MS):
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune10 || []}
                    onChange={this.onFieldChange("relative_autoimmune10")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune10?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(11) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for celiac disease:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune11 || []}
                    onChange={this.onFieldChange("relative_autoimmune11")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune11?.indexOf(
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
              )}
              {this.state?.data?.autoimmune?.includes(555) && (
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "space-between",
                    },
                    mt: 2,

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
                      width: {
                        xs: "90%",
                        sm: "60%",
                        md: "70%",
                      },
                    }}
                  >
                    <span style={{ color: "red" }}>*</span>
                    Specify which relative(s) for other autoimmune conditions:
                  </Typography>
                  <Select
                    labelId="multi-select-label"
                    multiple
                    value={this.state.data?.relative_autoimmune_other || []}
                    onChange={this.onFieldChange("relative_autoimmune_other")}
                    renderValue={(selected) => (
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {selected?.length
                          ? selected.map((value) => {
                              const option = ibdRelatives.find(
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
                    {ibdRelatives.map((option) => (
                      <MenuItem
                        sx={{ width: "286px" }}
                        key={option.response}
                        value={option.response}
                      >
                        <Checkbox
                          checked={
                            this.state.data?.relative_autoimmune_other?.indexOf(
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
              )}
              <Box
                id="Section-9"
                sx={{
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 9: Patient Reported Outcomes
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
                  On average, how many total bowel movements do you currently
                  have over a 24-hour period?
                </Typography>
                <input
                  type="number"
                  value={this.state.data?.avg_stools}
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
                  What is a normal number of bowel movements per 24-hour period
                  when your IBD is controlled?{" "}
                </Typography>
                <input
                  type="number"
                  value={this.state.data?.normal_stool}
                  onChange={this.onFieldChange("normal_stool")}
                  min={1}
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
                    fontWeight: 500,
                    fontSize: "16px",
                    mb: {
                      xs: 1,
                      md: 0,
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  How often do you have loose bowel movements?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
                  value={this.state.data?.loose_stools}
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
                  <MenuItem value="5">Never</MenuItem>
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
                  Fecal urgency is defined as sudden, irresistible urge to have
                  a bowel movement. Do you have fecal urgency?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("fec_urg")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("fec_urg")}
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
                    fontWeight: 500,
                    fontSize: "16px",
                    mb: {
                      xs: 1,
                      md: 0,
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  Do you have rectal bleeding?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
                  value={this.state.data?.rec_bleed}
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
                    Visible blood with stool greater than or equal to 50% of the
                    time
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
                  Incontinence is defined as inability to hold stool (having an
                  accident). Do you have incontinence during the daytime?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("day_incont")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("day_incont")}
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
                   Do you have nighttime incontinence?
                </Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Yes"
                    onChange={this.onFieldChange("night_incont")}
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="No"
                    onChange={this.onFieldChange("night_incont")}
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
                    fontWeight: 500,
                    fontSize: "16px",
                    mb: {
                      xs: 1,
                      md: 0,
                    },
                  }}
                >
                  <span style={{ color: "red" }}>*</span>
                  How often do you have abdominal pain?
                </Typography>
                <Select
                  placeholder="Select"
                  defaultValue="Placeholder"
                  value={this.state.data?.uc_abd_pain}
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
              {this.state.data?.uc_abd_pain?.includes(1) ||
              this.state.data?.uc_abd_pain?.includes(2) ||
              this.state.data?.uc_abd_pain?.includes(3) ||
              this.state.data?.uc_abd_pain?.includes(4) ||
              this.state.data?.uc_abd_pain?.includes(5) ? (
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
                    When you have abdominal pain, how would you describe the
                    severity?
                  </Typography>
                  <Select
                    placeholder="Select"
                    defaultValue="Placeholder"
                    value={this.state.data?.uc_pain_severity}
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
              ) : null}

              <Box
                id="Section-10"
                sx={{
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 10: NIH PROMIS Global Health Questionnaire
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item mb={2} xs={6} md={6}></Grid>
                  <Grid item mb={2} xs={6} md={6}>
                    <Grid
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                      container
                      spacing={2}
                      alignItems="center"
                    >
                      {data.options.map((option) => (
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

                {data.questions.map((question) => (
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
                          fontWeight: 500,
                          fontSize: "16px",
                          mb: { xs: 1, md: 0 },
                        }}
                      >
                        <span style={{ color: "red" }}>*</span>
                        {question.label}
                      </Typography>
                    </Grid>
                    <Grid
                      sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                      item
                      xs={12}
                      sm={10}
                      md={6}
                    >
                      {data.options.map((option) => (
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
                        value={this.state.data?.[question.field_name] || ""} // Dynamically bind the value
                        onChange={this.onFieldChange(question.field_name)}
                      >
                        <Grid container spacing={2} alignItems="center">
                          {data.options.map((option) => (
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
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                      spacing={2}
                      alignItems="center"
                    >
                      {global6List.map((option) => (
                        <Grid item xs={2} md={2} key={option.label}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              width: "100%",
                            }}
                          >
                            {option.label}
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
                      sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                      item
                      xs={12}
                      sm={10}
                      md={6}
                    >
                      {global6List.map((option) => (
                        <Grid mr={2} item xs={2} md={2} key={option.label}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              width: "100%",
                            }}
                          >
                            {option.label}
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
                          {global6List.map((option, index) => (
                            <Grid
                              mr={{ sx: 1, sm: 2, md: 0 }}
                              item
                              xs={2}
                              md={2}
                              key={index}
                            >
                              <FormControlLabel
                                value={option.response}
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
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                      spacing={2}
                      alignItems="center"
                    >
                      {global10List.map((option) => (
                        <Grid item xs={2} md={2} key={option.label}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              width: "100%",
                            }}
                          >
                            {option.label}
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
                      sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                      item
                      xs={12}
                      sm={10}
                      md={6}
                    >
                      {global10List.map((option) => (
                        <Grid mr={2} item xs={2} md={2} key={option.label}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              width: "100%",
                            }}
                          >
                            {option.label}
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
                          {global10List.map((option) => (
                            <Grid
                              mr={{ sx: 1, sm: 2, md: 0 }}
                              item
                              xs={2}
                              md={2}
                              key={option.label}
                            >
                              <FormControlLabel
                                value={option.response}
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
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                      spacing={2}
                      alignItems="center"
                    >
                      {global8List.map((option) => (
                        <Grid item xs={2} md={2} key={option.label}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              width: "100%",
                            }}
                          >
                            {option.label}
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
                      sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                      item
                      xs={12}
                      sm={10}
                      md={6}
                    >
                      {global8List.map((option) => (
                        <Grid mr={2} item xs={2} md={2} key={option.label}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              width: "100%",
                            }}
                          >
                            {option.label}
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
                          {global8List.map((option) => (
                            <Grid
                              mr={{ sx: 1, sm: 2, md: 0 }}
                              item
                              xs={2}
                              md={2}
                              key={option.label}
                            >
                              <FormControlLabel
                                value={option.response}
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
                      average?
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
              </Box>

              <Box
                id="Section-11"
                sx={{
                  mb: 2,
                  mt: 3,
                  display: "flex",
                  justifyContent: "flex-start",
                  width: {
                    xs: "90%",
                    sm: "100%",
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
                  Section 11: Validated IBD-Specific Female Sexual Dysfunction
                  Scale
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item mb={2} xs={6} md={6}></Grid>
                  <Grid item mb={2} xs={6} md={6}>
                    <Grid
                      container
                      sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                      spacing={2}
                      alignItems="center"
                    >
                      {global1List.map((option) => (
                        <Grid item xs={2} md={2} key={option.label}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              width: "100%",
                            }}
                          >
                            {option.label}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>

                {[
                  "Do you feel that your Crohn's or UC disease contributed to distress in your sex life?",
                  "Has your Crohn's or UC disease prevented you from starting a sexual relationship?",
                  "Has your Crohn's or UC disease delayed starting a sexual relationship?",
                  "Did your Crohn's or UC diagnosis prevent you from having sex?",
                  "Did your Crohn's or UC diagnosis cause problems during sex?",
                  "Have you been conscious of your Crohn's or UC during intercourse?",
                  "Did you have abdominal or pelvic pain during intercourse?",
                  "Did you have rectal/anal pain during intercourse?",
                  "Do you fear experiencing abdominal/pelvic pain during sexual activity?",
                  "Did you have a reduced desire or interest, or did you have trouble getting aroused during intercourse due to your Crohn's or UC?",
                  "Does your Crohn's or UC make you feel too tired to participate in sexual activities?",
                  "How often do you feel that your UC or Crohn's has negatively affected your sexual life?",
                  "Do you feel guilty about UC and Crohn's and its effect on your partner?",
                  "How much has anal bleeding or discharge affected your satisfaction with your sex life?",
                  "How much has abdominal or pelvic pain affected your satisfaction with your sex life?",
                ].map((question, index) => {
                  const field_name = `ibd_fsds_${index + 1}`; // Dynamically assigning field_name from provided data

                  return (
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      key={question}
                      sx={{ mb: 2 }}
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
                        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
                        item
                        xs={12}
                        sm={10}
                        md={6}
                      >
                        {global1List.map((option) => (
                          <Grid mr={2} item xs={2} md={2} key={option.label}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              {option.label}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>

                      <Grid item xs={12} sm={10} md={6}>
                        <RadioGroup
                          row
                          name={field_name}
                          value={this.state.data?.[field_name] || ""}
                          onChange={this.onFieldChange(field_name)}
                        >
                          <Grid container spacing={2} alignItems="center">
                            {global1List.map((option, idx) => (
                              <Grid
                                mr={{ sx: 1, sm: 2, md: 0 }}
                                item
                                xs={2}
                                md={2}
                                key={idx}
                              >
                                <FormControlLabel
                                  value={option.response}
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
                  );
                })}
              </Box>
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
              alignItems: "center",
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
    let error = false;
    let errors = {};
    if (
      !this.state.data.dob ||
      !this.state.data.race ||
      !this.state.data.hispanic ||
      !this.state.data.jewish_2 ||
      (this.state.data.jewish_2 === "1" &&
        this.state.data.ancestry_detail.length < 1) ||
      !this.state.data.edu ||
      !this.state.data.income ||
      !this.state.data.marital_status
    ) {
      errors["Section-1"] = true;
    }

    if (
      !this.state.data.smoking ||
      (this.state.data.smoking === "1" && !this.state.data.currentsmoking) ||
      !this.state.data.alcohol
    ) {
      errors["Section-2"] = true;
    }

    if (
      !this.state.data.contraception_past ||
      ((this.state.data.contraception_past === "1" ||
        this.state.data.contraception_past === "2") &&
        this.state.data.contra_past_type.length < 1) ||
      ((this.state.data.contraception_past === "1" ||
        this.state.data.contraception_past === "2" &&
        this.state.data?.contra_past_type?.includes(4)) &&
        !this.state.data.contra_past_pills) ||
      (this.state.data.contraception_past === "1" &&
        !this.state.data.contra_past_stop) ||
      (this.state.data.contraception_past === "2" &&
        !this.state.data.contra_cur_type) ||
      (this.state.data.contraception_past === "2" &&
        this.state.data.contra_cur_type?.includes(4) &&
        !this.state.data.contra_cur_pills) ||
      !this.state.data.consec_mon_preg ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        !this.state.data.attempting) ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        this.state.data.attempting === "1" &&
        !this.state.data.long_attempting) ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        this.state.data.attempting === "1" &&
        !this.state.data.ovulation_past) ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        this.state.data.attempting === "1" &&
        this.state.data.ovulation_past === "1" &&
        this.state.data.ovulation_confirm_method_past.length < 1) ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        this.state.data.attempting === "1" &&
        this.state.data.ovulation_past === "1" &&
        !this.state.data.oftn_ovlatn_cnfrm) ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        this.state.data.attempting === "1" &&
        this.state.data.ovulation_past === "1" &&
        !this.state.data.attempt_ov_test) ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        this.state.data.attempting === "1" &&
        this.state.data.ovulation_past === "1" &&
        !this.state.data.first_confirmed_ovulation) ||
      ((this.state.data.contraception_past === "0" ||
        this.state.data.contraception_past === "1") &&
        this.state.data.attempting === "1" &&
        this.state.data.ovulation_past === "1" &&
        !this.state.data.last_confirmed_ovulation) ||
      ((this.state.data.contraception_past === "2" ||
        this.state.data.attempting === "0") &&
        !this.state.data.ovulate) ||
      ((this.state.data.contraception_past === "2" ||
        this.state.data.attempting === "0") &&
        this.state.data.ovulate === "1" &&
        !this.state.data.post_ovulation) ||
      ((this.state.data.contraception_past === "2" ||
        this.state.data.attempting === "0") &&
        this.state.data.ovulate === "1" &&
        !this.state.data.date_ovulation)
    ) {
      errors["Section-3"] = true;
    }
    if (
      !this.state.data.age_menstrual_period ||
      !this.state.data.cycle_length ||
      this.state.data.rprdctv_conditions?.length < 1 ||
      ((this.state.data?.rprdctv_conditions?.includes(1) ||
        this.state.data?.rprdctv_conditions?.includes(2) ||
        this.state.data?.rprdctv_conditions?.includes(3) ||
        this.state.data?.rprdctv_conditions?.includes(4) ||
        this.state.data?.rprdctv_conditions?.includes(5) ||
        this.state.data?.rprdctv_conditions?.includes(6)) &&
        !this.state.data.repro_surg_ever) ||
      ((this.state.data?.rprdctv_conditions?.includes(1) ||
        this.state.data?.rprdctv_conditions?.includes(2) ||
        this.state.data?.rprdctv_conditions?.includes(3) ||
        this.state.data?.rprdctv_conditions?.includes(4) ||
        this.state.data?.rprdctv_conditions?.includes(5) ||
        this.state.data?.rprdctv_conditions?.includes(6)) &&
        this.state.data?.repro_surg_ever === "1" &&
        this.state.data.types_surger_baseline?.length < 1) ||
      ((this.state.data?.rprdctv_conditions?.includes(1) ||
        this.state.data?.rprdctv_conditions?.includes(2) ||
        this.state.data?.rprdctv_conditions?.includes(3) ||
        this.state.data?.rprdctv_conditions?.includes(4) ||
        this.state.data?.rprdctv_conditions?.includes(5) ||
        this.state.data?.rprdctv_conditions?.includes(6)) &&
        this.state.data?.repro_surg_ever === "1" &&
        !this.state.data.repro_open_surg) ||
      this.state.data.sti.length < 1 ||
      (this.state.data.sti.includes(1) &&
        !this.state.data.sti_times_gonorrhea) ||
      (this.state.data.sti.includes(1) && !this.state.data.treat_gonorrhea) ||
      (this.state.data.sti.includes(1) && this.state.data.treat_gonorrhea ==="1" && !this.state.data.gonorrhea) ||
      (this.state.data.sti.includes(2) &&
        !this.state.data.treat_bacterial_vaginosis) ||
        (this.state.data.sti.includes(2) && this.state.data.treat_bacterial_vaginosis ==="1" && !this.state.data.bacterial_vaginosis) ||

      (this.state.data?.sti?.includes(3) && !this.state.data.treat_herpes) ||
      (this.state.data.sti.includes(3) && this.state.data.treat_herpes ==="1" && !this.state.data.herpes) ||
      (this.state.data?.sti?.includes(4) && !this.state.data.treat_hiv) ||
      (this.state.data.sti.includes(4) && this.state.data.treat_hiv ==="1" && !this.state.data.hiv) ||
      (this.state.data?.sti?.includes(5) &&
        !this.state.data.sti_times_chlamydia) ||
      (this.state.data?.sti?.includes(5) && !this.state.data.treat_chlamydia) ||
      (this.state.data.sti.includes(5) && this.state.data.treat_chlamydia ==="1" && !this.state.data.chlamydia) ||

      (this.state.data?.sti?.includes(6) && !this.state.data.treat_yeast) ||
      (this.state.data.sti.includes(6) && this.state.data.treat_yeast ==="1" && !this.state.data.yeast) ||

      (this.state.data?.sti?.includes(7) && !this.state.data.treat_syphilis) ||
      (this.state.data.sti.includes(7) && this.state.data.treat_syphilis ==="1" && !this.state.data.syphilis) ||

      (this.state.data?.sti?.includes(8) && !this.state.data.sti_times_pid) ||
      (this.state.data?.sti?.includes(8) && !this.state.data.treat_pid) ||
      (this.state.data.sti.includes(8) && this.state.data.treat_pid ==="1" && !this.state.data.pid) ||

      this.state.data.exposed_rad.length < 1 ||
      (this.state.data?.exposed_rad?.includes(1) &&
        !this.state.data.d_about_how_many_ct_scans) ||
      !this.state.data.pain_sex ||
      !this.state.data.ab_pap ||
      (this.state.data?.ab_pap === "1" &&
        this.state.data.ab_pap_spec.length < 1)
    ) {
      errors["Section-4"] = true;
    }

    if (
      !this.state.data.past_preg ||
      (this.state.data?.past_preg === "1" && !this.state.data.under_20_weeks) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 0 &&
        !this.state.data.preg_less_20_age_1) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 0 &&
        !this.state.data.preg_less_20_outcome_1) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 1 &&
        !this.state.data.preg_less_20_age_2) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 1 &&
        !this.state.data.preg_less_20_outcome_2) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 2 &&
        !this.state.data.preg_less_20_age_3) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 2 &&
        !this.state.data.preg_less_20_outcome_3) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 3 &&
        !this.state.data.preg_less_20_age_4) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 3 &&
        !this.state.data.preg_less_20_outcome_4) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 4 &&
        !this.state.data.preg_less_20_age_5) ||
      (this.state.data?.past_preg === "1" &&
        this.state.data?.under_20_weeks === "1" &&
        this.state.data.num_preg_less_20 > 4 &&
        !this.state.data.preg_less_20_outcome_5) ||
      (this.state.data.past_preg === "1" && !this.state.data.preg_more_20) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        !this.state.data.g20w_total) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        !this.state.data.preg_g20w_age_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        !this.state.data.preg_g20w_outcome_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        (this.state.data.preg_g20w_outcome_01 === "6" ||
          this.state.data.preg_g20w_outcome_01 === "8") &&
        !this.state.data.preg_g20w_type_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        (this.state.data.preg_g20w_outcome_01 === "6" ||
          this.state.data.preg_g20w_outcome_01 === "8") &&
        !this.state.data.preg_g20w_delivery_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        (this.state.data.preg_g20w_outcome_01 === "6" ||
          this.state.data.preg_g20w_outcome_01 === "8") &&
        !this.state.data.preg_g20w_congenital_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        (this.state.data.preg_g20w_outcome_01 === "6" ||
          this.state.data.preg_g20w_outcome_01 === "8") &&
        !this.state.data.preg_g20w_preterm_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        (this.state.data.preg_g20w_outcome_01 === "6" ||
          this.state.data.preg_g20w_outcome_01 === "8") &&
        !this.state.data.preg_g20w_lbweight_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        (this.state.data.preg_g20w_outcome_01 === "6" ||
          this.state.data.preg_g20w_outcome_01 === "8") &&
        !this.state.data.preg_g20w_sgestage_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 0 &&
        (this.state.data.preg_g20w_outcome_01 === "6" ||
          this.state.data.preg_g20w_outcome_01 === "8") &&
        !this.state.data.preg_g20w_nicu_01) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        !this.state.data.preg_g20w_age_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        !this.state.data.preg_g20w_outcome_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        (this.state.data.preg_g20w_outcome_02 === "6" ||
          this.state.data.preg_g20w_outcome_02 === "8") &&
        !this.state.data.preg_g20w_type_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        (this.state.data.preg_g20w_outcome_02 === "6" ||
          this.state.data.preg_g20w_outcome_02 === "8") &&
        !this.state.data.preg_g20w_delivery_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        (this.state.data.preg_g20w_outcome_02 === "6" ||
          this.state.data.preg_g20w_outcome_02 === "8") &&
        !this.state.data.preg_g20w_congenital_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        (this.state.data.preg_g20w_outcome_02 === "6" ||
          this.state.data.preg_g20w_outcome_02 === "8") &&
        !this.state.data.preg_g20w_preterm_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        (this.state.data.preg_g20w_outcome_02 === "6" ||
          this.state.data.preg_g20w_outcome_02 === "8") &&
        !this.state.data.preg_g20w_lbweight_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        (this.state.data.preg_g20w_outcome_02 === "6" ||
          this.state.data.preg_g20w_outcome_02 === "8") &&
        !this.state.data.preg_g20w_sgestage_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 1 &&
        (this.state.data.preg_g20w_outcome_02 === "6" ||
          this.state.data.preg_g20w_outcome_02 === "8") &&
        !this.state.data.preg_g20w_nicu_02) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        !this.state.data.preg_g20w_age_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        !this.state.data.preg_g20w_outcome_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        (this.state.data.preg_g20w_outcome_03 === "6" ||
          this.state.data.preg_g20w_outcome_03 === "8") &&
        !this.state.data.preg_g20w_type_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        (this.state.data.preg_g20w_outcome_03 === "6" ||
          this.state.data.preg_g20w_outcome_03 === "8") &&
        !this.state.data.preg_g20w_delivery_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        (this.state.data.preg_g20w_outcome_03 === "6" ||
          this.state.data.preg_g20w_outcome_03 === "8") &&
        !this.state.data.preg_g20w_congenital_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        (this.state.data.preg_g20w_outcome_03 === "6" ||
          this.state.data.preg_g20w_outcome_03 === "8") &&
        !this.state.data.preg_g20w_preterm_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        (this.state.data.preg_g20w_outcome_03 === "6" ||
          this.state.data.preg_g20w_outcome_03 === "8") &&
        !this.state.data.preg_g20w_lbweight_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        (this.state.data.preg_g20w_outcome_03 === "6" ||
          this.state.data.preg_g20w_outcome_03 === "8") &&
        !this.state.data.preg_g20w_sgestage_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 2 &&
        (this.state.data.preg_g20w_outcome_03 === "6" ||
          this.state.data.preg_g20w_outcome_03 === "8") &&
        !this.state.data.preg_g20w_nicu_03) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        !this.state.data.preg_g20w_age_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        !this.state.data.preg_g20w_outcome_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        (this.state.data.preg_g20w_outcome_04 === "6" ||
          this.state.data.preg_g20w_outcome_04 === "8") &&
        !this.state.data.preg_g20w_type_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        (this.state.data.preg_g20w_outcome_04 === "6" ||
          this.state.data.preg_g20w_outcome_04 === "8") &&
        !this.state.data.preg_g20w_delivery_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        (this.state.data.preg_g20w_outcome_04 === "6" ||
          this.state.data.preg_g20w_outcome_04 === "8") &&
        !this.state.data.preg_g20w_congenital_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        (this.state.data.preg_g20w_outcome_04 === "6" ||
          this.state.data.preg_g20w_outcome_04 === "8") &&
        !this.state.data.preg_g20w_preterm_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        (this.state.data.preg_g20w_outcome_04 === "6" ||
          this.state.data.preg_g20w_outcome_04 === "8") &&
        !this.state.data.preg_g20w_lbweight_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        (this.state.data.preg_g20w_outcome_04 === "6" ||
          this.state.data.preg_g20w_outcome_04 === "8") &&
        !this.state.data.preg_g20w_sgestage_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 3 &&
        (this.state.data.preg_g20w_outcome_04 === "6" ||
          this.state.data.preg_g20w_outcome_04 === "8") &&
        !this.state.data.preg_g20w_nicu_04) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        !this.state.data.preg_g20w_age_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        !this.state.data.preg_g20w_outcome_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        (this.state.data.preg_g20w_outcome_05 === "6" ||
          this.state.data.preg_g20w_outcome_05 === "8") &&
        !this.state.data.preg_g20w_type_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        (this.state.data.preg_g20w_outcome_05 === "6" ||
          this.state.data.preg_g20w_outcome_05 === "8") &&
        !this.state.data.preg_g20w_delivery_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        (this.state.data.preg_g20w_outcome_05 === "6" ||
          this.state.data.preg_g20w_outcome_05 === "8") &&
        !this.state.data.preg_g20w_congenital_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        (this.state.data.preg_g20w_outcome_05 === "6" ||
          this.state.data.preg_g20w_outcome_05 === "8") &&
        !this.state.data.preg_g20w_preterm_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        (this.state.data.preg_g20w_outcome_05 === "6" ||
          this.state.data.preg_g20w_outcome_05 === "8") &&
        !this.state.data.preg_g20w_lbweight_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        (this.state.data.preg_g20w_outcome_05 === "6" ||
          this.state.data.preg_g20w_outcome_05 === "8") &&
        !this.state.data.preg_g20w_sgestage_05) ||
      (this.state.data.past_preg === "1" &&
        this.state.data.preg_more_20 === "1" &&
        this.state.data.g20w_total > 4 &&
        (this.state.data.preg_g20w_outcome_05 === "6" ||
          this.state.data.preg_g20w_outcome_05 === "8") &&
        !this.state.data.preg_g20w_nicu_05)
    ) {
      errors["Section-5"] = true;
    }
    if (
      !this.state.data.doc_diff_preg ||
      (this.state.data.doc_diff_preg === "1" &&
        !this.state.data.current_infertlty) ||
      (this.state.data.doc_diff_preg === "1" &&
        !this.state.data.infertiltiy_times) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.infertiltiy_times > 0 &&
        !this.state.data.age_eval_fertility_1) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.infertiltiy_times > 0 &&
        !this.state.data.control_ibd) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.infertiltiy_times > 1 &&
        !this.state.data.age_eval_fertility_2) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.infertiltiy_times > 2 &&
        !this.state.data.age_eval_fertility_3) ||
      (this.state.data.doc_diff_preg === "1" &&
        !this.state.data.doc_why_diff_preg) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.doc_why_diff_preg === "1" &&
        this.state.data.decreased_fertility_who.length < 1) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.doc_why_diff_preg === "1" &&
        this.state.data.decreased_fertility_who.includes(1) &&
        this.state.data.problem_partner.length < 1) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.doc_why_diff_preg === "1" &&
        this.state.data.decreased_fertility_who.includes(2) &&
        this.state.data.prob_me.length < 1) ||
      (this.state.data.doc_diff_preg === "1" && !this.state.data.infer_treat) ||
      (this.state.data.doc_diff_preg === "1" &&
        this.state.data.infer_treat === "1" &&
        this.state.data.infert_treat_spec.length < 1)
    ) {
      errors["Section-6"] = true;
    }
    if (
      (this.state.data.past_preg === "1" && !this.state.data.preg_part) ||
      !this.state.data.curr_part_child ||
      (this.state.data.curr_part_child === "1" &&
        !this.state.data.cur_part_age) ||
      (this.state.data.curr_part_child === "1" &&
        !this.state.data.part_diag_fer) ||
      (this.state.data.curr_part_child === "1" &&
        !this.state.data.pelvic_proc) ||
      (this.state.data.curr_part_child === "1" &&
        this.state.data.pelvic_proc === "1" &&
        this.state.data.surgery_partner_pelvis.length < 1) ||
      (this.state.data.curr_part_child === "1" &&
        this.state.data.part_dx_infec.length < 1) ||
      (this.state.data.curr_part_child === "1" &&
        this.state.data.part_diag_cond.length < 1) ||
      (this.state.data.curr_part_child === "1" && !this.state.data.part_meds) ||
      (this.state.data.curr_part_child === "1" &&
        this.state.data.part_surg_proced.length < 1) ||
      (this.state.data.curr_part_child === "1" &&
        this.state.data.part_surg_proced.includes(3) &&
        this.state.data.hernia_type.length < 1) ||
      (this.state.data.curr_part_child === "1" &&
        this.state.data.part_exposed_2.length < 1) ||
      (this.state.data.curr_part_child === "1" &&
        this.state.data.part_exposed_2.includes(1) &&
        !this.state.data.part_how_many_ct_scans)
    ) {
      errors["Section-7"] = true;
    }
    if (
      !this.state.data.infertility ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.length < 1) ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.includes(1) &&
        this.state.data.infertility_relative_1.length < 1) ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.includes(2) &&
        this.state.data.infertility_relative_2.length < 1) ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.includes(3) &&
        this.state.data.infertility_relative_3.length < 1) ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.includes(4) &&
        this.state.data.infertility_relative_4.length < 1) ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.includes(5) &&
        this.state.data.infertility_relative_5.length < 1) ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.includes(6) &&
        this.state.data.infertility_relative_6.length < 1) ||
      (this.state.data.infertility === "1" &&
        this.state.data.infertility_type.includes(7) &&
        this.state.data.infertility_relative_7.length < 1) ||
      !this.state.data.history_2 ||
      (this.state.data.history_2 === "1" &&
        this.state.data.infertility_2_relatives.length < 1) ||
      !this.state.data.history_3 ||
      (this.state.data.history_3 === "1" &&
        this.state.data.infertility_2_relatives_2.length < 1) ||
      !this.state.data.ibd ||
      (this.state.data.ibd === "1" && this.state.data.ibd_type.length < 1) ||
      (this.state.data.ibd === "1" &&
        this.state.data.ibd_type.includes(1) &&
        this.state.data.relative_uc.length < 1) ||
      (this.state.data.ibd === "1" &&
        this.state.data.ibd_type.includes(2) &&
        this.state.data.relative_cd.length < 1) ||
      (this.state.data.ibd === "1" &&
        this.state.data.ibd_type.includes(4) &&
        this.state.data.relative_ibd_u.length < 1) ||
      this.state.data.autoimmune.length < 1 ||
      (this.state.data.autoimmune.includes(1) &&
        this.state.data.thyroid_condition_specific.length < 1) ||
      (this.state.data.autoimmune.includes(1) &&
        this.state.data.thyroid_condition_specific.includes(1) &&
        this.state.data.relative_thyroid_overactive.length < 1) ||
      (this.state.data.autoimmune.includes(1) &&
        this.state.data.thyroid_condition_specific.includes(2) &&
        this.state.data.relative_thyroid_underactive.length < 1) ||
      (this.state.data.autoimmune.includes(1) &&
        this.state.data.thyroid_condition_specific.includes(555) &&
        this.state.data.relative_thyroid_other.length < 1) ||
      (this.state.data.autoimmune.includes(1) &&
        this.state.data.thyroid_condition_specific.includes(999) &&
        this.state.data.relative_thyroid_unknown.length < 1) ||
      (this.state.data.autoimmune.includes(2) &&
        this.state.data.relative_autoimmune2.length < 1) ||
      (this.state.data.autoimmune.includes(3) &&
        this.state.data.relative_autoimmune3.length < 1) ||
      (this.state.data.autoimmune.includes(4) &&
        this.state.data.relative_autoimmune4.length < 1) ||
      (this.state.data.autoimmune.includes(5) &&
        this.state.data.relative_autoimmune5.length < 1) ||
      (this.state.data.autoimmune.includes(6) &&
        this.state.data.relative_autoimmune6.length < 1) ||
      (this.state.data.autoimmune.includes(7) &&
        this.state.data.relative_autoimmune7.length < 1) ||
      (this.state.data.autoimmune.includes(8) &&
        this.state.data.relative_autoimmune8.length < 1) ||
      (this.state.data.autoimmune.includes(9) &&
        this.state.data.relative_autoimmune9.length < 1) ||
      (this.state.data.autoimmune.includes(10) &&
        this.state.data.relative_autoimmune10.length < 1) ||
      (this.state.data.autoimmune.includes(11) &&
        this.state.data.relative_autoimmune11.length < 1) ||
      (this.state.data.autoimmune.includes(555) &&
        this.state.data.relative_autoimmune_other.length < 1)
    ) {
      {
        errors["Section-8"] = true;
      }
    }
    if (
      !this.state.data.avg_stools ||
      !this.state.data.normal_stool ||
      !this.state.data.loose_stools ||
      !this.state.data.fec_urg ||
      !this.state.data.rec_bleed ||
      !this.state.data.day_incont ||
      !this.state.data.night_incont ||
      !this.state.data.uc_abd_pain ||
      ((this.state.data.uc_abd_pain === "1" ||
        this.state.data.uc_abd_pain === "2" ||
        this.state.data.uc_abd_pain === "3" ||
        this.state.data.uc_abd_pain === "4" ||
        this.state.data.uc_abd_pain === "5") &&
        !this.state.data.uc_pain_severity)
    ) {
      errors["Section-9"] = true;
    }
    if (
      !this.state.data.prom_health ||
      !this.state.data.prom_qual ||
      !this.state.data.prom_phys ||
      !this.state.data.prom_ment_health ||
      !this.state.data.prom_satis ||
      !this.state.data.prom_social ||
      !this.state.data.global_6 ||
      !this.state.data.global_10 ||
      !this.state.data.global_8
    ) {
      {
        errors["Section-10"] = true;
      }
    }
    if (
      !this.state.data?.ibd_fsds_1 ||
      !this.state.data?.ibd_fsds_2 ||
      !this.state.data?.ibd_fsds_3 ||
      !this.state.data?.ibd_fsds_4 ||
      !this.state.data?.ibd_fsds_5 ||
      !this.state.data?.ibd_fsds_6 ||
      !this.state.data?.ibd_fsds_7 ||
      !this.state.data?.ibd_fsds_8 ||
      !this.state.data?.ibd_fsds_9 ||
      !this.state.data?.ibd_fsds_10 ||
      !this.state.data?.ibd_fsds_11 ||
      !this.state.data?.ibd_fsds_12 ||
      !this.state.data?.ibd_fsds_13 ||
      !this.state.data?.ibd_fsds_14 ||
      !this.state.data?.ibd_fsds_15
    ) {
      errors["Section-11"] = true;
    }
    {
      error = true;
    }

    if (Object.keys(errors)?.length > 0) {
      const name = Object.keys(errors)?.[0];
      if (name === "Date") {
        alert(`Please select the date!`);
      } else {
        alert(
        `Please enter responses for questions marked with * in ${Object.keys(errors)?.[0]
          }`
        );
      }
      this.handleScroll(Object.keys(errors)?.[0]);
    } else {
      this.props.onSubmit(this.state.data);
    }

    // if (error) {
    //   alert("Please enter responses for questions marked with *");
    // } else {
    //   this.props.onSubmit(this.state.data);
    // }
  };

  handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavious: "smooth" });
    }
  };

  // onFieldChange =
  //   (field_name, checked = false) =>
  //   (e) => {
  //     var data = Object.assign({}, this.state.data);
  //     var selectedDate = new Date(e.target.value);
  //     const todayDate = new Date();
  //     if (selectedDate > todayDate) {
  //       alert("future date is not needed");
  //       data[field_name] = "";
  //       this.setState({ data: data });
  //     } else {
  //       const value = checked ? e.target.checked : e.target.value;
  //       if (checked) {
  //         data[field_name] = value ? "1" : "0";
  //       } else {
  //         data[field_name] = value;
  //       }
  //       this.setState({ data: data });
  //     }
  //   };

  onFieldChange =
  (field_name, checked = false) =>
  (e) => {
    let data = { ...this.state.data };

    if (
      field_name === "rprdctv_conditions" ||
      field_name === "sti" ||
      field_name === "exposed_rad" ||
      field_name === "part_dx_infec" ||
      field_name === "part_diag_cond" ||
      field_name === "part_surg_proced" ||
      field_name === "part_exposed_2" ||
      field_name === "autoimmune"
    ) {
      const selectedValues = e.target.value;

      if (selectedValues.includes(0)) {
        data[field_name] = [0];  
      } else if (selectedValues.includes(555)) {
        data[field_name] = [555]; 
      } else if (selectedValues.includes(999)) {
        data[field_name] = [999];  
      } else {
        
        data[field_name] = selectedValues.filter((item) => item !== 0 && item !== 999);
      }
    } else {
      const value = checked ? e.target.checked : e.target.value;
      data[field_name] = checked ? (value ? "1" : "0") : value;
    }

    this.setState({ data });
  };
}

export default BaselinePatients;
