export const infertilityRelatives = [
    { label: "Mother", response: 1 },
    { label: "Sister", response: 2 },
    { label: "Daughter", response: 4 },
  ];
  
  export const autoImmuneConditions = [
    { label: "Thyroid disease", response: 1 },
    { label: "Rheumatoid arthritis", response: 2 },
    { label: "Psoriatic arthritis", response: 3 },
    { label: "Psoriasis", response: 4 },
    { label: "Systemic lupus erythematosus (SLE or lupus)", response: 5 },
    { label: "Antiphospholipid Antibody Syndrome", response: 6 },
    {
      label:
        "History of blood clots (not due to Antiphospholipid Antibody Syndrome)",
      response: 7,
    },
    { label: "Sjogren's syndrome", response: 8 },
    {
      label:
        "Type 1 (Juvenile) diabetes (diagnosed at a young age, always needs insulin)",
      response: 9,
    },
    { label: "Multiple sclerosis (MS)", response: 10 },
    { label: "Celiac disease", response: 11 },
    { label: "Other", response: 555 },
    { label: "None that I know of", response: 0 },
  ];
  
  export const thyroidList = [
    { label: "Overactive thyroid (e.g., Graves Disease)", response: 1 },
    {
      label: "Underactive thyroid (e.g., hypothyroidism or Hashimoto's)",
      response: 2,
    },
    { label: "Other, please specify:", response: 555 },
    { label: "I don't know", response: 999 },
  ];
  
  export const ibdRelatives = [
    { label: "Mother", response: 1 },
    { label: "Father", response: 2 },
    { label: "Sister", response: 3 },
    { label: "Brother", response: 4 },
    { label: "Daughter", response: 6 },
    { label: "Son", response: 7 },
  ];
  
  export const ibdTypes = [
    { label: "Ulcerative Colitis", response: 1 },
    { label: "Crohn's Disease", response: 2 },
    {
      label:
        "IBD-U (diagnosed with IBD but unsure or unclear if ulcerative colitis or Crohn’s disease)",
      response: 4,
    },
  ];
  
  export const contraceptiveOptions = [
    { label: "Condoms", response: 1 },
    { label: "Birth control injection (Depo Provera)", response: 2 },
    { label: "Birth control patch", response: 3 },
    { label: "Birth control pills", response: 4 },
    { label: "Hormonal implant (Nexplanon)", response: 5 },
    { label: "IUD (copper/10-year)", response: 6 },
    { label: "IUD (hormonal, 3 or 5 year Mirena, Sklya, Liletta or Kyleena)", response: 7 },
    { label: "Nuva-Ring", response: 8 },
    { label: "Rhythm method (having sex only when you think you're not ovulating)", response: 9 },
    { label: "Diaphragm", response: 10 },
  ];

  export const treatmentList = [
    { label: "Ovulation Stimulation", response: 1 },
    { label: "Intrauterine insemination (IUI)", response: 2 },
    { label: "In Vitro Fertilization (IVF)", response: 3 },
    { label: "Reproductive surgeries", response: 4 },
    { label: "Medications", response: 5 },
  ];

  export const infertilityTypes = [
    { label: "Polycystic Ovarian Syndrome (PCOS)", response: 1 },
    { label: "Endometriosis", response: 2 },
    { label: "Fallopian tube blockage", response: 3 },
    { label: "Irregular ovulation/not ovulating", response: 4 },
    { label: "Uterine fibroids or other problems with the uterus", response: 5 },
    { label: "Problem with the cervix", response: 6 },
    { label: "Unexplained/unknown cause", response: 7 },
  ];
  
 export const surgeryList = [
    { label: "Pelvis", response: 1 },
    { label: "Genitals", response: 2 },
    { label: "Urologic system (ureters, urethra, bladder)", response: 3 },
  ];

  export const herinaTypes = [
    { label: "Femoral", response: 1 },
    { label: "Inguinal", response: 2 },
    { label: "Ventral/umbilical", response: 3 },
    { label: "Other", response: 555 },
  ];

 export  const infectionList = [
    {
      label: "Mumps with testicular involvement (also known as orchitis)",
      response: 1,
    },
    { label: "Recurrent sinus and lung infections", response: 2 },
    { label: "Chlamydia", response: 3 },
    { label: "Gonorrhea", response: 4 },
    { label: "Syphilis", response: 5 },
    { label: "Prostatitis (infection of the prostate)", response: 6 },
    { label: "I don't know", response: 999 },
    { label: "None of the above", response: 0 },
  ];

 export const surgicalProcedures = [
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

  export const medicalProcedures = [
    { response: 1, label: "CT scans" },
    { response: 2, label: "Radiation therapy" },
    { response: 3, label: "Chemotherapy" },
    { response: 4, label: "Steroids" },
    { response: 999, label: "I don't know" },
    { response: 0, label: "None of the above" },
  ];

 export const conditionList = [
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

 export const data = {
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

  export const partnerList = [
    { label: "My partner was having difficulty", response: 1 },
    { label: "I was having difficulty", response: 2 },
  ];
  
  export const partnerProblems = [
    { label: "Low sperm count", response: 1 },
    {
      label:
        "Other abnormal sperm characteristics (e.g., low motility, sperm defects)",
      response: 2,
    },
    { label: "Impotence (difficulty getting an erection)", response: 3 },
    { label: "Other male problem", response: 555 },
    { label: "I don't know", response: 999 },
  ];
  
 export const myProbs = [
    { label: "Not ovulating or ovulating irregularly", response: 1 },
    { label: "Abnormal uterus", response: 2 },
    { label: "Blocked fallopian tubes", response: 3 },
    { label: "High prolactin (hormone that prevents ovulation)", response: 4 },
    { label: "Polycystic ovary syndrome (PCOS)", response: 5 },
    { label: "Other female reason", response: 555 },
    { label: "I don't know", response: 999 },
  ];
  
 export  const ovulationConfirmOptions = [
    { label: "Ovulation kit (urine sticks)", response: 1 },
    { label: "Basal body temperature", response: 2 },
    { label: "Cervical discharge", response: 3 },
    { label: "Based on timing of last menstrual period", response: 4 },
  ];

  export const reproductiveConditions = [
    { response: 1, label: "Irregular menstrual periods" },
    { response: 2, label: "Endometriosis" },
    { response: 3, label: "Fibroids in your uterus" },
    { response: 4, label: "PCOS (polycystic ovary syndrome)" },
    { response: 5, label: "CAH (Congenital adrenal hyperplasia)" },
    { response: 6, label: "Thyroid problems" },
    { response: 0, label: "None of the above" },
  ];
  export const surgeriesList = [
    {
      response: 1,
      label: "Surgical reconstruction for blockage in your fallopian tubes",
    },
    { response: 2, label: "Removal of the fallopian tubes" },
    { response: 3, label: "Surgical treatment of endometriosis" },
    { response: 4, label: "Uterine fibroid removal (myomectomy)" },
    { response: 5, label: "Other surgery on your uterus" },
    { response: 6, label: "Surgery for PCOS" },
    { response: 555, label: "Other" },
  ];
 export const stiList = [
    { response: 1, label: "Gonorrhea" },
    { response: 2, label: "Bacterial vaginosis" },
    { response: 3, label: "Genital herpes" },
    { response: 4, label: "HIV" },
    { response: 5, label: "Chlamydia" },
    { response: 6, label: "Yeast infection" },
    { response: 7, label: "Syphilis" },
    { response: 8, label: "Pelvic inflammatory disease" },
    { response: 0, label: "None of the above" },
  ];
 export const scansList = [
    { response: 1, label: "CT scans" },
    { response: 2, label: "Radiation therapy" },
    { response: 3, label: "Chemotherapy" },
    { response: 999, label: "I don't know" },
    { response: 0, label: "None of the above" },
  ];
 export const abnormalList = [
    {
      label: "Atypical Squamous Cells of Undetermined Significance (ASCUS)",
      response: 1,
    },
    { label: "Low-grade squamous intra-epithelial lesions (LSIL)", response: 2 },
    { label: "High-grade squamous intra-epithelial lesions (HSIL)", response: 3 },
    { label: "Human papillomavirus (HPV)", response: 4 },
    { label: "Cervical cancer", response: 5 },
    { label: "Other", response: 555 },
    { label: "I don't remember", response: 999 },
  ];
  
export const global6List=[
  {label :"Completely", response:5},
  {label :"Mostly", response:4},
  {label :"Moderately", response:3},
  {label :"A Little", response:2},
  {label :"Not At All", response:1}
];
export const global10List=[
  {label :"Never", response:5},
  {label :"Rarely", response:4},
  {label :"Sometimes", response:3},
  {label :"Often", response:2},
  {label :"Always", response:1}
];
export const global8List=[
  {label :"None", response:5},
  {label :"Mild", response:4},
  {label :"Moderate", response:3},
  {label :"Severe", response:2},
  {label :"Very Severe", response:1}
];
export const global1List=[
  {label :"Always", response:4},
  {label :"Most times", response:3},
  {label :"Half time", response:2},
  {label :"Few Times", response:1},
  {label :"Never", response:0}
];
  
  
  