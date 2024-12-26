export const baselinePatientElements = [
    {
        element_type: 'hidden',
        field_name: 'entry_method',
        value: 'web'
    },
    {
        label: 'Today\'s date:',
        element_type: 'date',
        field_name: 'date_patient_baseline'
    },
    {label: 'Section 1: Demographics', element_type: 'header'},
    {
        label: 'Date of birth:',
        element_type: 'date',
        field_name: 'dob'
    },
    {
        label: 'Which of the following best describes you?',
        element_type: 'radio_buttons',
        field_name: 'race',
        options: [
            {label: 'White', value: '1'},
            {label: 'Black/African American', value: '2'},
            {label: 'Asian', value: '3'},
            {label: 'Native Hawaiian or Other Pacific Islander', value: '4'},
            {label: 'American Indian or Alaskan Native', value: '5'},
            {label: 'More than one race', value: '6'},
            {label: 'Other', value: '555'},
            {label: 'I choose not to respond', value: '777'}
        ]
    },
    {
        label: 'Do you consider yourself to be of Hispanic or Latino ethnicity?',
        element_type: 'radio_buttons',
        field_name: 'hispanic',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I choose not to respond', value: '777'}
        ]
    },
    {
        label: 'Do you consider yourself to be of Ashkenazi Jewish or Eastern European descent?',
        element_type: 'radio_buttons',
        field_name: 'jewish_2',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'Not sure', value: '999'},
            {label: 'I choose not to respond', value: '777'}
        ]
    },
    {
        label: 'Of what descent are you?',
        element_type: 'checkboxes',
        field_start: 'ancestry_detail',
        options: [
            {label: 'Ashkenazi Jewish', response: 1},
            {label: 'Eastern European', response: 2}
        ],
        show_if: {field_name: 'jewish_2', value: '1'}
    },
    {
        label: 'What is the highest grade of school that you completed?',
        element_type: 'radio_buttons',
        field_name: 'edu',
        options: [
            {label: 'Less than 12th grade', value: '1'},
            {label: '12th grade/high school diploma', value: '2'},
            {label: 'Some college/Associate\'s degree', value: '3'},
            {label: 'All of college (Bachelor\'s degree)', value: '4'},
            {label: 'Graduate school (advanced degree)', value: '5'},
            {label: 'I choose not to respond', value: '777'}
        ]
    },
    {
        label: 'What is your annual household income range?',
        element_type: 'radio_buttons',
        field_name: 'income',
        options: [
            {label: 'Less than $30,000', value: '1'},
            {label: '$30,000 to $49,999', value: '2'},
            {label: '$50,000 to $99,999', value: '3'},
            {label: '$100,000 to $249,999', value: '4'},
            {label: '$250,000 or more', value: '5'},
            {label: 'I choose not to respond', value: '777'}
        ]
    },
    {
        label: 'What is your marital status?',
        element_type: 'radio_buttons',
        field_name: 'marital_status',
        options: [
            {label: 'Single', value: '1'},
            {label: 'Married/domestic partner', value: '2'},
            {label: 'Committed relationship', value: '3'},
            {label: 'Divorced/separated', value: '4'},
            {label: 'I choose not to respond', value: '777'}
        ]
    },
    {label: 'Section 2: Exposure Information', element_type: 'header'},
    {
        label: 'Have you ever smoked?',
        element_type: 'yes_no',
        field_name: 'smoking'
    },
    {
        label: 'Do you currently smoke cigarettes or use other tobacco containing substances (including a vape pen)?',
        element_type: 'yes_no',
        field_name: 'currentsmoking',
        show_if: {field_name: 'smoking', value: '1'}
    },
    {
        label: 'How many servings of alcohol (e.g., can of beer, glass of wine, or shot of hard liquor) do you have during a usual week?',
        element_type: 'radio_buttons',
        field_name: 'alcohol',
        options: [
            {label: 'None', value: '1'},
            {label: '1-7', value: '2'},
            {label: 'More than 7', value: '3'},
            {label: 'I don\'t know', value: '999'}
        ]
    },
    {label: 'Section 3: Current Fertility Tracking', element_type: 'header'},
    {
        label: 'Have you ever used contraception?',
        element_type: 'radio_buttons',
        field_name: 'contraception_past',
        options: [
            {label: 'No, I have never used contraception', value: '0'},
            {label: 'Yes, I was using contraception but have now stopped', value: '1'},
            {label: 'Yes, I am currently using contraception', value: '2'}
        ]
    },
    {
        label: 'What type(s) of contraception did you use in the past?',
        element_type: 'checkboxes',
        field_start: 'contra_past_type',
        options: [
            {label: 'Condoms', response: 1},
            {label: 'Birth control injection (Depo Provera)', response: 2},
            {label: 'Birth control patch', response: 3},
            {label: 'Birth control pills', response: 4},
            {label: 'Hormonal implant (Nexplanon)', response: 5},
            {label: 'IUD (copper/10-year)', response: 6},
            {label: 'IUD (hormonal, 3 or 5 year Mirena, Sklya, Liletta or Kyleena)', response: 7},
            {label: 'Nuva-Ring', response: 8},
            {label: 'Rhythm method (having sex only when you think you\'re not ovulating)', response: 9},
            {label: 'Diaphragm', response: 10},
            {label: 'Other, please specify:', response: 555},
        ],
        show_if: {field_name: 'contraception_past', values: ['1', '2']},
        specify_choice: {response: 555, field_name: 'contra_past_type_other'}
    },
    {
        label: 'Please specify type of birth control pills:',
        element_type: 'radio_buttons',
        field_name: 'contra_past_pills',
        options: [
            {label: 'Combined estrogen and progestin', value: '1'},
            {label: 'Progestin only', value: '2'},
            {label: 'Unsure', value: '999'}
        ],
        show_if: {field_name: 'contraception_past', values: ['1', '2']},
        show_if_checked: 'contra_past_type___4'
    },
    {
        element_type: 'month_year',
        label: 'When did you stop contraception?',
        field_start: 'contra_past_stop',
        show_if: {field_name: 'contraception_past', value: '1'},
        hint: 'Use your best estimate'
    },
    {
        label: 'What type(s) of contraception are you currently using?',
        element_type: 'checkboxes',
        field_start: 'contra_cur_type',
        options: [
            {label: 'Condoms', response: 1},
            {label: 'Birth control injection (Depo Provera)', response: 2},
            {label: 'Birth control patch', response: 3},
            {label: 'Birth control pills', response: 4},
            {label: 'Hormonal implant (Nexplanon)', response: 5},
            {label: 'IUD (copper/10-year)', response: 6},
            {label: 'IUD (hormonal, 3 or 5 year Mirena, Sklya, Liletta or Kyleena)', response: 7},
            {label: 'Nuva-Ring', response: 8},
            {label: 'Rhythm method (having sex only when you think you\'re not ovulating)', response: 9},
            {label: 'Diaphragm', response: 10},
            {label: 'Other, please specify:', response: 555}
        ],
        specify_choice: {response: 555, field_name: 'contra_cur_type_other'},
        show_if: {field_name: 'contraception_past', value: '2'}
    },
    {
        element_type: 'radio_buttons',
        label: 'Please specify type of birth control pills:',
        field_name: 'contra_cur_pills',
        options: [
            {label: 'Combined estrogen and progestin', value: '1'},
            {label: 'Progestin only', value: '2'},
            {label: 'Unsure', value: '999'}
        ],
        show_if: {field_name: 'contraception_past', value: '2'},
        show_if_checked: 'contra_cur_type___4'
    },
    {
        label: 'What was the greatest number of consecutive months that you ever tried to get pregnant (whether successful or not)?',
        element_type: 'radio_buttons',
        field_name: 'consec_mon_preg',
        options: [
            {label: '0 months', value: '1'},
            {label: '1-3 months', value: '2'},
            {label: '4-6 months', value: '3'},
            {label: '7-11 months', value: '4'},
            {label: '12-24 months', value: '5'},
            {label: 'More than 24 months', value: '6'}
        ]
    },
    {
        label: 'Are you currently attempting to become pregnant?',
        element_type: 'yes_no',
        field_name: 'attempting',
        show_if: {field_name: 'contraception_past', values: ['0', '1']}
    },
    {
        label: 'How long have you been currently trying to conceive (in months)?',
        element_type: 'radio_buttons',
        field_name: 'long_attempting',
        options: [
            {label: '0-3 months', value: '1'},
            {label: '4-6 months', value: '2'},
            {label: '7-9 months', value: '3'},
            {label: '10-12 months', value: '4'},
            {label: 'More than 12 months', value: '5'},
            {label: 'More than 24 months', value: '6'}
        ],
        show_if_all: [
            {field_name: 'contraception_past', values: ['0', '1']},
            {field_name: 'attempting', value: '1'}
        ]
    },
    {
        label: 'For any of the above months, have you tried to confirm the timing of your ovulation?',
        element_type: 'yes_no',
        field_name: 'ovulation_past',
        show_if_all: [
            {field_name: 'contraception_past', values: ['0', '1']},
            {field_name: 'attempting', value: '1'}
        ]
    },
    {
        label: 'What method(s) did you use to try to confirm ovulation?',
        element_type: 'checkboxes',
        field_start: 'ovulation_confirm_method_past',
        options: [
            {label: 'Ovulation kit (urine sticks)', response: 1},
            {label: 'Basal body temperature', response: 2},
            {label: 'Cervical discharge', response: 3},
            {label: 'Based on timing of last menstrual period', response: 4},
            {label: 'Other, please specify:', response: 555}
        ],
        show_if_all: [
            {field_name: 'contraception_past', values: ['0', '1']},
            {field_name: 'attempting', value: '1'},
            {field_name: 'ovulation_past', value: '1'}
        ],
        specify_choice: {response: 555, field_name: 'ovulation_confirm_other_past'}
    },
    {
        label: 'How often have you tried to confirm ovulation?',
        element_type: 'radio_buttons',
        field_name: 'oftn_ovlatn_cnfrm',
        options: [
            {label: 'Every month', value: '1'},
            {label: 'Most months, please describe', value: '2'},
            {label: 'Occasionally, please describe', value: '3'}
        ],
        show_if_all: [
            {field_name: 'contraception_past', values: ['0', '1']},
            {field_name: 'attempting', value: '1'},
            {field_name: 'ovulation_past', value: '1'}
        ],
        specify_choices: [
            {response: '2', field_name: 'oftn_ovlatn_describe_most'},
            {response: '3', field_name: 'oftn_ovlatn_describe_occasionally'}
        ]
    },
    {
        label: 'Have you ever had a positive ovulation test?',
        element_type: 'yes_no',
        field_name: 'attempt_ov_test',
        show_if_all: [
            {field_name: 'contraception_past', values: ['0', '1']},
            {field_name: 'attempting', value: '1'},
            {field_name: 'ovulation_past', value: '1'}
        ]
    },
    {
        label: 'When is the first date you tried to confirm ovulation since you have started attempting to conceive?',
        element_type: 'date',
        field_name: 'first_confirmed_ovulation',
        hint: 'If you do not know the exact date, plase estimate',
        show_if_all: [
            {field_name: 'contraception_past', values: ['0', '1']},
            {field_name: 'attempting', value: '1'},
            {field_name: 'ovulation_past', value: '1'}
        ]
    },
    {
        label: 'When is the most recent date you tried to confirm ovulation?',
        element_type: 'date',
        field_name: 'last_confirmed_ovulation',
        hint: 'If you do not know the exact date, plase estimate',
        show_if_all: [
            {field_name: 'contraception_past', values: ['0', '1']},
            {field_name: 'attempting', value: '1'},
            {field_name: 'ovulation_past', value: '1'}
        ]
    },
    {
        label: 'Have you ever tried to confirm the timing of your ovulation? ',
        element_type: 'yes_no',
        field_name: 'ovulate',
        show_if_any: [
            {field_name: 'contraception_past', value: '2'},
            {field_name: 'attempting', value: '0'}
        ]
    },
    {
        label: 'What method(s) did you use to try to confirm ovulation?',
        element_type: 'checkboxes',
        field_start: 'ovulation_method',
        options: [
            {label: 'Ovulation kit (urine sticks)', response: 1},
            {label: 'Basal body temperature', response: 2},
            {label: 'Cervical discharge', response: 3},
            {label: 'Based on timing of last menstrual period', response: 4},
            {label: 'Other, please describe:', response: 555}
        ],
        show_if_any: [
            {field_name: 'contraception_past', value: '2'},
            {field_name: 'attempting', value: '0'}
        ],
        show_if: {field_name: 'ovulate', value: '1'},
        specify_choice: {response: 555, field_name: 'ovulation_method_other'}
    },
    {
        label: 'Have you ever had a positive ovulation test?',
        element_type: 'yes_no',
        field_name: 'post_ovulation',
        show_if_any: [
            {field_name: 'contraception_past', value: '2'},
            {field_name: 'attempting', value: '0'}
        ],
        show_if: {field_name: 'ovulate', value: '1'}
    },
    {
        label: 'When was the last time you tried to confirm ovulation?',
        element_type: 'date',
        field_name: 'date_ovulation',
        hint: 'If you do not know the exact date, please estimate',
        show_if_any: [
            {field_name: 'contraception_past', value: '2'},
            {field_name: 'attempting', value: '0'}
        ],
        show_if: {field_name: 'ovulate', value: '1'}
    },
    {label: 'Section 4: Gynecological History', element_type: 'header'},
    {
        element_type: 'number',
        label: 'At what age (in years) was your first menstrual period?',
        field_name: 'age_menstrual_period',
        hint: 'Use your best estimate',
        max: '99'
    },
    {
        element_type: 'number',
        label: 'On average, what is the length of your menstrual cycle (i.e., how often do you get your period)?',
        instructions: 'For example, if you get your period once every four weeks, your cycle length would be 28 days.',
        field_name: 'cycle_length',
        hint: 'days',
        max: '999'
    },
    {
        element_type: 'checkboxes',
        label: 'Have you ever had any of the following conditions?',
        field_start: 'rprdctv_conditions',
        options: [
            {response: 1, label: 'Irregular menstrual periods'},
            {response: 2, label: 'Endometriosis'},
            {response: 3, label: 'Fibroids in your uterus'},
            {response: 4, label: 'PCOS (polycystic ovary syndrome)'},
            {response: 5, label: 'CAH (Congenital adrenal hyperplasia)'},
            {response: 6, label: 'Thyroid problems'},
            {response: 0, label: 'None of the above'}
        ],
        none_response: 0
    },
    {
        label: 'Have you ever had any reproductive surgeries?',
        element_type: 'yes_no',
        field_name: 'repro_surg_ever',
        show_if_any: [
            {field_name: 'rprdctv_conditions___1', value: '1'},
            {field_name: 'rprdctv_conditions___2', value: '1'},
            {field_name: 'rprdctv_conditions___3', value: '1'},
            {field_name: 'rprdctv_conditions___4', value: '1'},
            {field_name: 'rprdctv_conditions___5', value: '1'},
            {field_name: 'rprdctv_conditions___6', value: '1'}
        ]
    },
    {
        label: 'Which of the following surgeries?',
        element_type: 'checkboxes',
        field_start: 'types_surger_baseline',
        options: [
            {response: 1, label: 'Surgical reconstruction for blockage in your fallopian tubes'},
            {response: 2, label: 'Removal of the fallopian tubes'},
            {response: 3, label: 'Surgical treatment of endometriosis'},
            {response: 4, label: 'Uterine fibroid removal (myomectomy)'},
            {response: 5, label: 'Other surgery on your uterus'},
            {response: 6, label: 'Surgery for PCOS'},
            {response: 555, label: 'Other, please specify:'}
        ],
        show_if_any: [
            {field_name: 'rprdctv_conditions___1', value: '1'},
            {field_name: 'rprdctv_conditions___2', value: '1'},
            {field_name: 'rprdctv_conditions___3', value: '1'},
            {field_name: 'rprdctv_conditions___4', value: '1'},
            {field_name: 'rprdctv_conditions___5', value: '1'},
            {field_name: 'rprdctv_conditions___6', value: '1'}
        ],
        show_if: {field_name: 'repro_surg_ever', value: '1'},
        specify_choice: {response: 555, field_name: 'other_repro_surg'}
    },
    {
        label: 'Were any of the reproductive surgeries open (abdomen or pelvis was opened; usually you have a larger scar)?',
        element_type: 'radio_buttons',
        field_name: 'repro_open_surg',
        options: [
            {label: 'Yes, had at least one open (abdomen or pelvis was opened; usually you have a larger scar)', value: '1'},
            {label: 'No, any and all surgeries were laparoscopic (a few small incisions made to look inside with long tools)', value: '0'}
        ],
        show_if: {field_name: 'repro_surg_ever', value: '1'},
        show_if_any: [
            {field_name: 'rprdctv_conditions___1', value: '1'},
            {field_name: 'rprdctv_conditions___2', value: '1'},
            {field_name: 'rprdctv_conditions___3', value: '1'},
            {field_name: 'rprdctv_conditions___4', value: '1'},
            {field_name: 'rprdctv_conditions___5', value: '1'},
            {field_name: 'rprdctv_conditions___6', value: '1'}
        ]
    },
    {
        label: 'Has a doctor or health care provider ever told you that you have any of the following?',
        element_type: 'checkboxes',
        field_start: 'sti',
        options: [
            {response: 1, label: 'Gonorrhea'},
            {response: 2, label: 'Bacterial vaginosis'},
            {response: 3, label: 'Genital herpes'},
            {response: 4, label: 'HIV'},
            {response: 5, label: 'Chlamydia'},
            {response: 6, label: 'Yeast infection'},
            {response: 7, label: 'Syphilis'},
            {response: 8, label: 'Pelvic inflammatory disease'},
            {response: 0, label: 'None of the above'}
        ],
        none_response: 0
    },
    {
        label: 'How many times have you been told by a doctor or health care provider that you had gonorrhea?',
        element_type: 'number',
        field_name: 'sti_times_gonorrhea',
        hint: 'Use your best estimate',
        min: '1',
        show_if_checked: 'sti___1'
    },
    {
        label: 'Were you ever treated for gonorrhea?',
        element_type: 'radio_buttons',
        field_name: 'treat_gonorrhea',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___1'
    },
    {
        label: 'Please indicate the most recent date that you were treated for gonorrhea:',
        element_type: 'month_year',
        field_start: 'gonorrhea',
        show_if_checked: 'sti___1',
        show_if: {field_name: 'treat_gonorrhea', value: '1'}
    },
    {
        label: 'Were you ever treated for bacterial vaginosis?',
        element_type: 'radio_buttons',
        field_name: 'treat_bacterial_vaginosis',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___2'
    },
    {
        label: 'Please indicate the most recent date that you were treated for bacterial vaginosis:',
        element_type: 'month_year',
        field_start: 'bacterial_vaginosis',
        show_if_checked: 'sti___2',
        show_if: {field_name: 'treat_bacterial_vaginosis', value: '1'}
    },
    {
        label: 'Were you ever treated for genital herpes?',
        element_type: 'radio_buttons',
        field_name: 'treat_herpes',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___3'
    },
    {
        label: 'Please indicate the most recent date that you were treated for genital herpes:',
        element_type: 'month_year',
        field_start: 'herpes',
        show_if_checked: 'sti___3',
        show_if: {field_name: 'treat_herpes', value: '1'}
    },
    {
        label: 'Were you ever treated for HIV?',
        element_type: 'radio_buttons',
        field_name: 'treat_hiv',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___4'
    },
    {
        label: 'Please indicate the most recent date that you were treated for HIV:',
        element_type: 'month_year',
        field_start: 'hiv',
        show_if_checked: 'sti___4',
        show_if: {field_name: 'treat_hiv', value: '1'}
    },
    {
        label: 'How many times have you been told by a doctor or health care provider that you had chlamydia?',
        element_type: 'number',
        field_name: 'sti_times_chlamydia',
        hint: 'Use your best estimate',
        min: '1',
        show_if_checked: 'sti___5'
    },
    {
        label: 'Were you ever treated for chlamydia?',
        element_type: 'radio_buttons',
        field_name: 'treat_chlamydia',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___5'
    },
    {
        label: 'Please indicate the most recent date that you were treated for chlamydia:',
        element_type: 'month_year',
        field_start: 'chlamydia',
        show_if_checked: 'sti___5',
        show_if: {field_name: 'treat_chlamydia', value: '1'}
    },
    {
        label: 'Were you ever treated for yeast infection?',
        element_type: 'radio_buttons',
        field_name: 'treat_yeast',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___6'
    },
    {
        label: 'Please indicate the most recent date that you were treated for yeast infection:',
        element_type: 'month_year',
        field_start: 'yeast',
        show_if_checked: 'sti___6',
        show_if: {field_name: 'treat_yeast', value: '1'}
    },
    {
        label: 'Were you ever treated for syphilis?',
        element_type: 'radio_buttons',
        field_name: 'treat_syphilis',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___7'
    },
    {
        label: 'Please indicate the most recent date that you were treated for syphilis:',
        element_type: 'month_year',
        field_start: 'syphilis',
        show_if_checked: 'sti___7',
        show_if: {field_name: 'treat_syphilis', value: '1'}
    },
    {
        label: 'How many times have you been told by a doctor or health care provider that you had pelvic inflammatory disease?',
        element_type: 'number',
        field_name: 'sti_times_pid',
        hint: 'Use your best estimate',
        min: '1',
        show_if_checked: 'sti___8'
    },
    {
        label: 'Were you ever treated for pelvic inflammatory disease?',
        element_type: 'radio_buttons',
        field_name: 'treat_pid',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don’t remember', value: '999'}
        ],
        show_if_checked: 'sti___8'
    },
    {
        label: 'Please indicate the most recent date that you were treated for pelvic inflammatory disease:',
        element_type: 'month_year',
        field_start: 'pid',
        show_if_checked: 'sti___8',
        show_if: {field_name: 'treat_pid', value: '1'}
    },
    {
        label: 'Have you ever been exposed to any of the following?',
        element_type: 'checkboxes',
        field_start: 'exposed_rad',
        options: [
            {response: 1, label: 'CT scans'},
            {response: 2, label: 'Radiation therapy'},
            {response: 3, label: 'Chemotherapy'},
            {response: 999, label: 'I don\'t know'},
            {response: 0, label: 'None of the above'}
        ],
        unknown_response: 999,
        none_response: 0
    },
    {
        label: 'About how many CT scans?',
        element_type: 'radio_buttons',
        field_name: 'd_about_how_many_ct_scans',
        options: [
            {label: '1 to 5 CT scans', value: '1'},
            {label: 'More than 5 CT scans', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_checked: 'exposed_rad___1'
    },
    {
        label: 'Do you have pain with sexual intercourse?',
        element_type: 'radio_buttons',
        field_name: 'pain_sex',
        options: [
            {label: 'Always', value: '1'},
            {label: 'Sometimes', value: '2'},
            {label: 'Rarely', value: '3'},
            {label: 'Never', value: '4'},
            {label: 'N/A, I am not sexually active', value: '5'}
        ]
    },
    {
        label: 'Have you ever had an abnormal pap smear?',
        element_type: 'yes_no',
        field_name: 'ab_pap'
    },
    {
        label: 'What was the abnormality?',
        element_type: 'checkboxes',
        field_start: 'ab_pap_spec',
        options: [
            {label: 'Atypical Squamous Cells of Undetermined Significance (ASCUS)', response: 1},
            {label: 'Low-grade squamous intra-epithelial lesions (LSIL)', response: 2},
            {label: 'High-grade squamous intra-epithelial lesions (HSIL)', response: 3},
            {label: 'Human papillomavirus (HPV)', response: 4},
            {label: 'Cervical cancer', response: 5},
            {label: 'Other, please specify:', response: 555},
            {label: 'I don\'t remember', response: 999}
        ],
        show_if: {field_name: 'ab_pap', value: '1'},
        specify_choice: {response: 555, field_name: 'ab_pap_other_spec'},
        unknown_response: 999
    },
    {
        label: 'Section 5: Reproductive History',
        element_type: 'header',
        instructions: 'We understand that these questions can be challenging and triggering for some patients. Please answer to the best of your ability.'
    },
    {
        label: 'Have you ever been pregnant?',
        instructions: 'This would include having a positive pregnancy test if you\'re currently trying to get pregnant. (Please include all pregnancies, including miscarriages/terminations/live births, etc.)',
        element_type: 'yes_no',
        field_name: 'past_preg'
    },
    {
        label: 'Did you have any pregnancies that were not carried beyond 20 weeks?',
        element_type: 'yes_no',
        field_name: 'under_20_weeks',
        show_if: {field_name: 'past_preg', value: '1'}
    },
    {
        label: 'How many total pregnancies did you carry for 20 weeks or less',
        element_type: 'number',
        field_name: 'num_preg_less_20',
        min: '1',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'}]
    },
    {
        label: 'What was the outcome of each pregnancy not carried beyond 20 weeks?',
        instructions: 'Please describe in chronological order. If more than 5 pregnancies, please answer for the five most recent.',
        element_type: 'descriptive',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '0', check: '>'}
        ]
    },
    {
        label: 'Pregnancy 1',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '0', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_less_20_age_1',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '0', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy not carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_less_20_outcome_1',
        options: [
            {label: 'Ectopic pregnancy', value: '1'},
            {label: 'Molar pregnancy or hydatidiform mole', value: '2'},
            {label: 'Miscarriage', value: '3'},
            {label: 'Therapeutic abortion/termination (other than for still birth, miscarriage, ectopic or molar pregnancy) per advice from your medical provider, please specify reason:', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '0', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_less_20_abortion_1'},
            {response: '555', field_name: 'preg_less_20_other_1'}
        ]
    },
    {
        label: 'Pregnancy 2',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '1', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_less_20_age_2',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '1', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy not carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_less_20_outcome_2',
        options: [
            {label: 'Ectopic pregnancy', value: '1'},
            {label: 'Molar pregnancy or hydatidiform mole', value: '2'},
            {label: 'Miscarriage', value: '3'},
            {label: 'Therapeutic abortion/termination (other than for still birth, miscarriage, ectopic or molar pregnancy) per advice from your medical provider, please specify reason:', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '1', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_less_20_abortion_2'},
            {response: '555', field_name: 'preg_less_20_other_2'}
        ]
    },
    {
        label: 'Pregnancy 3',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '2', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_less_20_age_3',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '2', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy not carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_less_20_outcome_3',
        options: [
            {label: 'Ectopic pregnancy', value: '1'},
            {label: 'Molar pregnancy or hydatidiform mole', value: '2'},
            {label: 'Miscarriage', value: '3'},
            {label: 'Therapeutic abortion/termination (other than for still birth, miscarriage, ectopic or molar pregnancy) per advice from your medical provider, please specify reason:', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '2', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_less_20_abortion_3'},
            {response: '555', field_name: 'preg_less_20_other_3'}
        ]
    },
    {
        label: 'Pregnancy 4',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '3', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_less_20_age_4',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '3', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy not carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_less_20_outcome_4',
        options: [
            {label: 'Ectopic pregnancy', value: '1'},
            {label: 'Molar pregnancy or hydatidiform mole', value: '2'},
            {label: 'Miscarriage', value: '3'},
            {label: 'Therapeutic abortion/termination (other than for still birth, miscarriage, ectopic or molar pregnancy) per advice from your medical provider, please specify reason:', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '3', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_less_20_abortion_4'},
            {response: '555', field_name: 'preg_less_20_other_4'}
        ]
    },
    {
        label: 'Pregnancy 5',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '4', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_less_20_age_5',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '4', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy not carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_less_20_outcome_5',
        options: [
            {label: 'Ectopic pregnancy', value: '1'},
            {label: 'Molar pregnancy or hydatidiform mole', value: '2'},
            {label: 'Miscarriage', value: '3'},
            {label: 'Therapeutic abortion/termination (other than for still birth, miscarriage, ectopic or molar pregnancy) per advice from your medical provider, please specify reason:', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'under_20_weeks', value: '1'},
            {field_name: 'num_preg_less_20', value: '4', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_less_20_abortion_5'},
            {response: '555', field_name: 'preg_less_20_other_5'}
        ]
    },
    {
        label: 'Have you had at least one pregnancy that was carried beyond 20 weeks? ',
        element_type: 'yes_no',
        field_name: 'preg_more_20',
        show_if: {field_name: 'past_preg', value: '1'}
    },
    {
        label: 'How many total pregnancies have you carried beyond 20 weeks?',
        element_type: 'number',
        field_name: 'g20w_total',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'}]
    },
    {
        label: 'What was the outcome of each pregnancy carried beyond 20 weeks? Please describe in chronological order. If more than 5 pregnancies, please answer for the five most recent.',
        element_type: 'descriptive',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'}]
    },
    {
        label: 'Pregnancy 1',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_g20w_age_01',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_outcome_01',
        options: [
            {label: 'Live birth', value: '6'},
            {label: 'Stillbirth', value: '7'},
            {label: 'Live birth and stillbirth or miscarriage (e.g., multiples pregnancy [twins, triplets, etc] where not all babies were live births)', value: '8'},
            {label: 'Therapeutic abortion/termination for reason other than stillbirth (per advice from your medical provider), please specify for what reason (i.e., congenital abnormality):', value: '4'},
            {label: 'Elective abortion/termination (per your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_g20w_abort_01'},
            {response: '555', field_name: 'preg_g20w_outcome_other_01'}
        ]
    },
    {
        label: 'Please select the kind of pregnancy you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_type_01',
        options: [
            {label: 'Single child pregnancy', value: '1'},
            {label: 'Multiples pregnancy (e.g., twins, triplets, etc.)', value: '2'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'},
            {field_name: 'preg_g20w_outcome_01', values: ['6', '8']}
        ]
    },
    {
        label: 'Please select the type of delivery you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_delivery_01',
        options: [
            {label: 'Vaginal delivery', value: '1'},
            {label: 'C-section (Caesarean section)', value: '2'},
            {label: 'Other, please describe (e.g., multiples pregnancy where not all babies were live births; multiples pregnancy with two different modes of delivery):', value: '555'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'},
            {field_name: 'preg_g20w_outcome_01', values: ['6', '8']}
        ],
        specify_choice: {response: '555', field_name: 'preg_g20w_delivery_other_01'}
    },
    {
        label: 'Did the child/children have any congenital abnormalities (birth defects)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_congenital_01',
        options: [
            {label: 'Yes, please describe', value: '1'},
            {label: 'No', value: '0'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'},
            {field_name: 'preg_g20w_outcome_01', values: ['6', '8']}
        ],
        specify_choice: {response: '1', field_name: 'preg_g20w_congenital_desc_01'}
    },
    {
        label: 'Was the child/children preterm (born before 37 weeks pregnancy)?',
        element_type: 'yes_no',
        field_name: 'preg_g20w_preterm_01',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'},
            {field_name: 'preg_g20w_outcome_01', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have low birth weight (low birth weight is defined as birth weight less than 5 lbs 8 ounces or 2,500 grams)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_lbweight_01',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'},
            {field_name: 'preg_g20w_outcome_01', values: ['6', '8']}
        ]
    },
    {
        label: 'Was the child/children small for gestational age? This refers to babies who were below the 10th percentile for their gestational age at the time of birth.',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_sgestage_01',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'},
            {field_name: 'preg_g20w_outcome_01', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have to be admitted to a neonatal intensive care unit (NICU) within 28 days of birth?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_nicu_01',
        options: [
            {label: 'Yes, for what reason?', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '0', check: '>'},
            {field_name: 'preg_g20w_outcome_01', values: ['6', '8']}
        ],
        specify_choice: {response: '1', field_name: 'preg_g20w_nicu_desc_01'}
    },
    {
        label: 'Pregnancy 2',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_g20w_age_02',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_outcome_02',
        options: [
            {label: 'Live birth', value: '6'},
            {label: 'Stillbirth', value: '7'},
            {label: 'Live birth and stillbirth or miscarriage (e.g., multiples pregnancy [twins, triplets, etc] where not all babies were live births)', value: '8'},
            {label: 'Therapeutic abortion/termination for reason other than stillbirth (per advice from your medical provider), please specify for what reason (i.e., congenital abnormality):', value: '4'},
            {label: 'Elective abortion/termination (per your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_g20w_abort_02'},
            {response: '555', field_name: 'preg_g20w_outcome_other_02'}
        ]
    },
    {
        label: 'Please select the kind of pregnancy you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_type_02',
        options: [
            {label: 'Single child pregnancy', value: '1'},
            {label: 'Multiples pregnancy (e.g., twins, triplets, etc.)', value: '2'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'},
            {field_name: 'preg_g20w_outcome_02', values: ['6', '8']}
        ]
    },
    {
        label: 'Please select the type of delivery you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_delivery_02',
        options: [
            {label: 'Vaginal delivery', value: '1'},
            {label: 'C-section (Caesarean section)', value: '2'},
            {label: 'Other, please describe (e.g., multiples pregnancy where not all babies were live births; multiples pregnancy with two different modes of delivery):', value: '555'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'},
            {field_name: 'preg_g20w_outcome_02', values: ['6', '8']}
        ],
        specify_choice: {response: '555', field_name: 'preg_g20w_delivery_other_02'}
    },
    {
        label: 'Did the child/children have any congenital abnormalities (birth defects)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_congenital_02',
        options: [
            {label: 'Yes, please describe', value: '1'},
            {label: 'No', value: '0'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'},
            {field_name: 'preg_g20w_outcome_02', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_congenital_desc_02'}
    },
    {
        label: 'Was the child/children preterm (born before 37 weeks pregnancy)?',
        element_type: 'yes_no',
        field_name: 'preg_g20w_preterm_02',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'},
            {field_name: 'preg_g20w_outcome_02', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have low birth weight (low birth weight is defined as birth weight less than 5 lbs 8 ounces or 2,500 grams)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_lbweight_02',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'},
            {field_name: 'preg_g20w_outcome_02', values: ['6', '8']}
        ]
    },
    {
        label: 'Was the child/children small for gestational age? This refers to babies who were below the 10th percentile for their gestational age at the time of birth.',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_sgestage_02',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'},
            {field_name: 'preg_g20w_outcome_02', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have to be admitted to a neonatal intensive care unit (NICU) within 28 days of birth?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_nicu_02',
        options: [
            {label: 'Yes, for what reason?', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '1', check: '>'},
            {field_name: 'preg_g20w_outcome_02', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_nicu_desc_02'}
    },
    {
        label: 'Pregnancy 3',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_g20w_age_03',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_outcome_03',
        options: [
            {label: 'Live birth', value: '6'},
            {label: 'Stillbirth', value: '7'},
            {label: 'Live birth and stillbirth or miscarriage (e.g., multiples pregnancy [twins, triplets, etc] where not all babies were live births)', value: '8'},
            {label: 'Therapeutic abortion/termination for reason other that stillbirth (per advice from your medical provider), please specify for what reason (i.e., congenital abnormality):', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_g20w_abort_03'},
            {response: '555', field_name: 'preg_g20w_outcome_other_03'}
        ]
    },
    {
        label: 'Please select the kind of pregnancy you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_type_03',
        options: [
            {label: 'Single child pregnancy', value: '1'},
            {label: 'Multiples pregnancy (e.g., twins, triplets, etc.)', value: '2'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'},
            {field_name: 'preg_g20w_outcome_03', values: ['6', '8']}
        ]
    },
    {
        label: 'Please select the type of delivery you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_delivery_03',
        options: [
            {label: 'Vaginal delivery', value: '1'},
            {label: 'C-section (Caesarean section)', value: '2'},
            {label: 'Other, please describe (e.g., multiples pregnancy where not all babies were live births; multiples pregnancy with two different modes of delivery):', value: '555'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'},
            {field_name: 'preg_g20w_outcome_03', values: ['6', '8']}
        ],
        specify_choice: {response: '555', field_name: 'preg_g20w_delivery_other_03'}
    },
    {
        label: 'Did the child/children have any congenital abnormalities (birth defects)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_congenital_03',
        options: [
            {label: 'Yes, please describe', value: '1'},
            {label: 'No', value: '0'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'},
            {field_name: 'preg_g20w_outcome_03', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_congenital_desc_03'}
    },
    {
        label: 'Was the child/children preterm (born before 37 weeks pregnancy)?',
        element_type: 'yes_no',
        field_name: 'preg_g20w_preterm_03',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'},
            {field_name: 'preg_g20w_outcome_03', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have low birth weight (low birth weight is defined as birth weight less than 5 lbs 8 ounces or 2,500 grams)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_lbweight_03',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'},
            {field_name: 'preg_g20w_outcome_03', values: ['6', '8']}
        ]
    },
    {
        label: 'Was the child/children small for gestational age? This refers to babies who were below the 10th percentile for their gestational age at the time of birth.',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_sgestage_03',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'},
            {field_name: 'preg_g20w_outcome_03', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have to be admitted to a neonatal intensive care unit (NICU) within 28 days of birth?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_nicu_03',
        options: [
            {label: 'Yes, for what reason?', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '2', check: '>'},
            {field_name: 'preg_g20w_outcome_03', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_nicu_desc_03'}
    },
    {
        label: 'Pregnancy 4',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_g20w_age_04',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_outcome_04',
        options: [
            {label: 'Live birth', value: '6'},
            {label: 'Stillbirth', value: '7'},
            {label: 'Live birth and stillbirth or miscarriage (e.g., multiples pregnancy [twins, triplets, etc] where not all babies were live births)', value: '8'},
            {label: 'Therapeutic abortion/termination for reason other that stillbirth (per advice from your medical provider), please specify for what reason (i.e., congenital abnormality):', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_g20w_abort_04'},
            {response: '555', field_name: 'preg_g20w_outcome_other_04'}
        ]
    },
    {
        label: 'Please select the kind of pregnancy you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_type_04',
        options: [
            {label: 'Single child pregnancy', value: '1'},
            {label: 'Multiples pregnancy (e.g., twins, triplets, etc.)', value: '2'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'},
            {field_name: 'preg_g20w_outcome_04', values: ['6', '8']}
        ]
    },
    {
        label: 'Please select the type of delivery you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_delivery_04',
        options: [
            {label: 'Vaginal delivery', value: '1'},
            {label: 'C-section (Caesarean section)', value: '2'},
            {label: 'Other, please describe (e.g., multiples pregnancy where not all babies were live births; multiples pregnancy with two different modes of delivery):', value: '555'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'},
            {field_name: 'preg_g20w_outcome_04', values: ['6', '8']}
        ],
        specify_choice: {response: '555', field_name: 'preg_g20w_delivery_other_04'}
    },
    {
        label: 'Did the child/children have any congenital abnormalities (birth defects)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_congenital_04',
        options: [
            {label: 'Yes, please describe', value: '1'},
            {label: 'No', value: '0'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'},
            {field_name: 'preg_g20w_outcome_04', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_congenital_desc_04'}
    },
    {
        label: 'Was the child/children preterm (born before 37 weeks pregnancy)?',
        element_type: 'yes_no',
        field_name: 'preg_g20w_preterm_04',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'},
            {field_name: 'preg_g20w_outcome_04', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have low birth weight (low birth weight is defined as birth weight less than 5 lbs 8 ounces or 2,500 grams)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_lbweight_04',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'},
            {field_name: 'preg_g20w_outcome_04', values: ['6', '8']}
        ]
    },
    {
        label: 'Was the child/children small for gestational age? This refers to babies who were below the 10th percentile for their gestational age at the time of birth.',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_sgestage_04',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'},
            {field_name: 'preg_g20w_outcome_04', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have to be admitted to a neonatal intensive care unit (NICU) within 28 days of birth?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_nicu_04',
        options: [
            {label: 'Yes, for what reason?', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '3', check: '>'},
            {field_name: 'preg_g20w_outcome_04', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_nicu_desc_04'}
    },
    {
        label: 'Pregnancy 5',
        element_type: 'header',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'}
        ]
    },
    {
        label: 'How old were you at the time of pregnancy?',
        element_type: 'number',
        field_name: 'preg_g20w_age_05',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'}
        ]
    },
    {
        label: 'What was the outcome of the pregnancy carried beyond 20 weeks?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_outcome_05',
        options: [
            {label: 'Live birth', value: '6'},
            {label: 'Stillbirth', value: '7'},
            {label: 'Live birth and stillbirth or miscarriage (e.g., multiples pregnancy [twins, triplets, etc] where not all babies were live births)', value: '8'},
            {label: 'Therapeutic abortion/termination for reason other that stillbirth (per advice from your medical provider), please specify for what reason (i.e., congenital abnormality):', value: '4'},
            {label: 'Elective abortion/termination (your personal decision)', value: '5'},
            {label: 'Other, please specify:', value: '555'},
            {label: 'Prefer not to answer', value: '777'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'}
        ],
        specify_choices: [
            {response: '4', field_name: 'preg_g20w_abort_05'},
            {response: '555', field_name: 'preg_g20w_outcome_other_05'}
        ]
    },
    {
        label: 'Please select the kind of pregnancy you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_type_05',
        options: [
            {label: 'Single child pregnancy', value: '1'},
            {label: 'Multiples pregnancy (e.g., twins, triplets, etc.)', value: '2'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'},
            {field_name: 'preg_g20w_outcome_05', values: ['6', '8']}
        ]
    },
    {
        label: 'Please select the type of delivery you had:',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_delivery_05',
        options: [
            {label: 'Vaginal delivery', value: '1'},
            {label: 'C-section (Caesarean section)', value: '2'},
            {label: 'Other, please describe (e.g., multiples pregnancy where not all babies were live births; multiples pregnancy with two different modes of delivery):', value: '555'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'},
            {field_name: 'preg_g20w_outcome_05', values: ['6', '8']}
        ],
        specify_choice: {response: '555', field_name: 'preg_g20w_delivery_other_05'}
    },
    {
        label: 'Did the child/children have any congenital abnormalities (birth defects)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_congenital_05',
        options: [
            {label: 'Yes, please describe', value: '1'},
            {label: 'No', value: '0'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'},
            {field_name: 'preg_g20w_outcome_05', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_congenital_desc_05'}
    },
    {
        label: 'Was the child/children preterm (born before 37 weeks pregnancy)?',
        element_type: 'yes_no',
        field_name: 'preg_g20w_preterm_05',
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'},
            {field_name: 'preg_g20w_outcome_05', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have low birth weight (low birth weight is defined as birth weight less than 5 lbs 8 ounces or 2,500 grams)?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_lbweight_05',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'},
            {field_name: 'preg_g20w_outcome_05', values: ['6', '8']}
        ]
    },
    {
        label: 'Was the child/children small for gestational age? This refers to babies who were below the 10th percentile for their gestational age at the time of birth.',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_sgestage_05',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'},
            {field_name: 'preg_g20w_outcome_05', values: ['6', '8']}
        ]
    },
    {
        label: 'Did the child/children have to be admitted to a neonatal intensive care unit (NICU) within 28 days of birth?',
        element_type: 'radio_buttons',
        field_name: 'preg_g20w_nicu_05',
        options: [
            {label: 'Yes, for what reason?', value: '1'},
            {label: 'No', value: '0'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_all: [
            {field_name: 'past_preg', value: '1'},
            {field_name: 'preg_more_20', value: '1'},
            {field_name: 'g20w_total', value: '4', check: '>'},
            {field_name: 'preg_g20w_outcome_05', values: ['6', '8']}
        ],
        specify_choice: {response: 1, field_name: 'preg_g20w_nicu_desc_05'}
    },
    {
        label: 'Section 6: Fertility Services',
        element_type: 'header'
    },
    {
        label: 'Have you ever visited a doctor or other health professional because you or your partner had difficulty becoming pregnant?',
        element_type: 'yes_no',
        field_name: 'doc_diff_preg'
    },
    {
        label: 'Are you currently seeing a doctor or other health professional due to difficulty getting pregnant?',
        element_type: 'yes_no',
        field_name: 'current_infertlty',
        show_if: {field_name: 'doc_diff_preg', value: '1'}
    },
    {
        label: 'How many times have you been evaluated for infertility?',
        element_type: 'number',
        field_name: 'infertiltiy_times',
        show_if: {field_name: 'doc_diff_preg', value: '1'}
    },
    {
        element_type: 'descriptive',
        label: 'Answer the following for the 3 most recent evaluations',
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infertiltiy_times', value: '3', check: '>'}
        ]
    },
    {
        label: 'What was your age at the time of the most recent evaluation for infertility?',
        element_type: 'number',
        field_name: 'age_eval_fertility_1',
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infertiltiy_times', value: '0', check: '>'}
        ]
    },
    {
        label: 'At your most recent evaluation, how would you describe your IBD disease activity?',
        element_type: 'radio_buttons',
        field_name: 'control_ibd',
        options: [
            {label: 'Active, required hospitalization within 6 months before trying to get pregnant but did not require surgery', value: '1'},
            {label: 'Active, required surgery for active disease within 6 months before trying to get pregnant', value: '2'},
            {label: 'Active, managed as an outpatient (no need for hospitalization or surgery)', value: '3'},
            {label: 'Recent activity, but was improving', value: '4'},
            {label: 'In sustained remission (no IBD related symptoms)', value: '5'},
            {label: 'Inactive, but underwent elective surgery (i.e., second or third J pouch surgery) within 6 months before trying to get pregnant', value: '6'},
            {label: 'I don\'t remember', value: '999'}
        ],
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infertiltiy_times', value: '0', check: '>'}
        ]
    },
    {
        label: 'What was your age at the time of the second most recent evaluation for infertility?',
        element_type: 'number',
        field_name: 'age_eval_fertility_2',
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infertiltiy_times', value: '1', check: '>'}
        ]
    },
    {
        label: 'What was your age at the time of the third most recent evaluation for infertility?',
        element_type: 'number',
        field_name: 'age_eval_fertility_3',
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infertiltiy_times', value: '2', check: '>'}
        ]
    },
    {
        label: 'Was a doctor or health professional ever able to tell you why you and your partner were having difficulty?',
        element_type: 'radio_buttons',
        field_name: 'doc_why_diff_preg',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '0'},
            {label: 'Not sure', value: '999'}
        ],
        show_if: {field_name: 'doc_diff_preg', value: '1'}
    },
    {
        label: 'What was the cause of decreased fertility?',
        element_type: 'checkboxes',
        field_start: 'decreased_fertility_who',
        options: [
            {label: 'My partner was having difficulty', response: 1},
            {label: 'I was having difficulty', response: 2}
        ],
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'doc_why_diff_preg', value: '1'}
        ]
    },
    {
        label: 'Please specify your partner\'s difficulty:',
        element_type: 'checkboxes',
        field_start: 'problem_partner',
        options: [
            {label: 'Low sperm count', response: 1},
            {label: 'Other abnormal sperm characteristics (e.g., low motility, sperm defects)', response: 2},
            {label: 'Impotence (difficulty getting an erection)', response: 3},
            {label: 'Other male problem, please specify:', response: 555},
            {label: 'I don\'t know', response: 999}
        ],
        unknown_response: 999,
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'doc_why_diff_preg', value: '1'}
        ],
        show_if_checked: 'decreased_fertility_who___1',
        specify_choice: {response: 555, field_name: 'problem_partner_other'}
    },
    {
        label: 'Please specify your difficulty:',
        element_type: 'checkboxes',
        field_start: 'prob_me',
        options: [
            {label: 'Not ovulating or ovulating irregularly', response: 1},
            {label: 'Abnormal uterus', response: 2},
            {label: 'Blocked fallopian tubes', response: 3},
            {label: 'High prolactin (hormone that prevents ovulation)', response: 4},
            {label: 'Polycystic ovary syndrome (PCOS)', response: 5},
            {label: 'Other female reason, please specify:', response: 555},
            {label: 'I don\'t know', response: 999}
        ],
        unknown_response: 999,
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'doc_why_diff_preg', value: '1'}
        ],
        show_if_checked: 'decreased_fertility_who___2',
        specify_choice: {response: 555, field_name: 'prob_me_spec'}
    },
    {
        label: 'Have you ever undergone infertility treatments?',
        element_type: 'yes_no',
        field_name: 'infer_treat',
        show_if: {field_name: 'doc_diff_preg', value: '1'}
    },
    {
        label: 'What infertility treatments have you undergone?',
        element_type: 'checkboxes',
        field_start: 'infert_treat_spec',
        options: [
            {label: 'Ovulation Stimulation', response: 1},
            {label: 'Intrauterine insemination (IUI)', response: 2},
            {label: 'In Vitro Fertilization (IVF)', response: 3},
            {label: 'Reproductive surgeries', response: 4},
            {label: 'Medications', response: 5}
        ],
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infer_treat', value: '1'}
        ]
    },
    {
        element_type: 'text',
        label: 'Please specify any reproductive surgeries:',
        field_name: 'any_art_spec',
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infer_treat', value: '1'}
        ],
        show_if_checked: 'infert_treat_spec___4'
    },
    {
        element_type: 'text',
        label: 'Please specify medications:',
        field_name: 'infertility_meds_spec',
        show_if_all: [
            {field_name: 'doc_diff_preg', value: '1'},
            {field_name: 'infer_treat', value: '1'}
        ],
        show_if_checked: 'infert_treat_spec___5'
    },
    {
        label: 'Section 7: Partner Information',
        element_type: 'header'
    },
    {
        label: 'If you were previously pregnant, did you get pregnant with your current sexual partner?',
        element_type: 'yes_no',
        field_name: 'preg_part',
        show_if: {field_name: 'past_preg', value: '1'}
    },
    {
        label: 'Do you currently have a sexual partner with whom you plan to have a child?',
        element_type: 'yes_no',
        field_name: 'curr_part_child'
    },
    {
        label: 'What is your partner\'s current age?',
        element_type: 'radio_buttons',
        field_name: 'cur_part_age',
        options: [
            {label: 'Less than 35', value: '1'},
            {label: '35-45', value: '2'},
            {label: '46-60', value: '3'},
            {label: 'Older than 60', value: '4'}
        ],
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'Has your partner ever been diagnosed with infertility?',
        element_type: 'radio_buttons',
        field_name: 'part_diag_fer',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'Has your partner ever had any procedures or surgeries involving his pelvis, genital organs, or urologic system (ureters/urethra/bladder)?',
        element_type: 'radio_buttons',
        field_name: 'pelvic_proc',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'Please specify location of surgery',
        element_type: 'checkboxes',
        field_start: 'surgery_partner_pelvis',
        options: [
            {label: 'Pelvis', response: 1},
            {label: 'Genitals', response: 2},
            {label: 'Urologic system (ureters, urethra, bladder)', response: 3}
        ],
        show_if_all: [
            {field_name: 'curr_part_child', value: '1'},
            {field_name: 'pelvic_proc', value: '1'}
        ]
    },
    {
        label: 'Has your partner ever been diagnosed with any of the following infections?',
        element_type: 'checkboxes',
        field_start: 'part_dx_infec',
        options: [
            {label: 'Mumps with testicular involvement (also known as orchitis)', response: 1},
            {label: 'Recurrent sinus and lung infections', response: 2},
            {label: 'Chlamydia', response: 3},
            {label: 'Gonorrhea', response: 4},
            {label: 'Syphilis', response: 5},
            {label: 'Prostatitis (infection of the prostate)', response: 6},
            {label: 'I don\'t know', response: 999},
            {label: 'None of the above', response: 0}
        ],
        unknown_response: 999,
        none_response: 0,
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'Has your partner ever been diagnosed with any of the following conditions?',
        element_type: 'checkboxes',
        field_start: 'part_diag_cond',
        options: [
            {label: 'Obesity (BMI>30)', response: 1},
            {label: 'High blood pressure and/or high cholesterol', response: 2},
            {label: 'Diabetes type 1', response: 3},
            {label: 'Diabetes type 2', response: 4},
            {label: 'Sleep apnea', response: 5},
            {label: 'Klinefelter syndrome', response: 6},
            {label: 'Other, please specify:', response: 555},
            {label: 'I don\'t know', response: 999},
            {label: 'None of the above', response: 0}
        ],
        unknown_response: 999,
        none_response: 0,
        specify_choice: {response: 555, field_name: 'please_specify_new_cond'},
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'Please list your partner\'s current medications, if you know them',
        element_type: 'text',
        instructions: 'Enter "none" for no medications or "UNK" for unknown',
        field_name: 'part_meds',
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'Has your partner ever undergone any of the following surgical procedures?',
        element_type: 'checkboxes',
        field_start: 'part_surg_proced',
        options: [
            {label: 'Vasectomy (sterilization surgery to block sperm from reaching the semen)', response: 1},
            {label: 'Orchiectomy (surgical removal of one or both testes)', response: 2},
            {label: 'Hernia repair', response: 3},
            {label: 'I don\'t know', response: 999},
            {label: 'None of the above', response: 0}
        ],
        unknown_response: 999,
        none_response: 0,
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'Which hernia type?',
        element_type: 'checkboxes',
        field_start: 'hernia_type',
        options: [
            {label: 'Femoral', response: 1},
            {label: 'Inguinal', response: 2},
            {label: 'Ventral/umbilical', response: 3},
            {label: 'Other, please specify:', response: 555}
        ],
        show_if: {field_name: 'curr_part_child', value: '1'},
        show_if_checked: 'part_surg_proced___3',
        specify_choice: {response: 555, field_name: 'hernia_type_other'}
    },
    {
        label: 'Has your partner ever been exposed to any of the following?',
        element_type: 'checkboxes',
        field_start: 'part_exposed_2',
        options: [
            {response: 1, label: 'CT scans'},
            {response: 2, label: 'Radiation therapy'},
            {response: 3, label: 'Chemotherapy'},
            {response: 4, label: 'Steroids'},
            {response: 999, label: 'I don\'t know'},
            {response: 0, label: 'None of the above'}
        ],
        unknown_response: 999,
        none_response: 0,
        show_if: {field_name: 'curr_part_child', value: '1'}
    },
    {
        label: 'About how many CT scans?',
        element_type: 'radio_buttons',
        field_name: 'part_how_many_ct_scans',
        options: [
            {label: '1 to 5 CT scans', value: '1'},
            {label: 'More than 5 CT scans', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if: {field_name: 'curr_part_child', value: '1'},
        show_if_checked: 'part_exposed_2___1'
    },
    {
        element_type: 'header',
        label: 'Section 8: Family History'
    },
    {
        element_type: 'descriptive',
        label: 'Do you have at least one first-degree relative with any of the following conditions?',
        instructions: 'First-degree relatives are parents, siblings, and children. Please do not include half-siblings as first-degree relatives.'
    },
    {
        label: 'Difficulty getting pregnant or inability to get pregnant?',
        element_type: 'radio_buttons',
        field_name: 'infertility',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ]
    },
    {
        label: 'Select reason for infertility',
        element_type: 'checkboxes',
        field_start: 'infertility_type',
        options: [
            {label: 'Polycystic Ovarian Syndrome (PCOS)', response: 1},
            {label: 'Endometriosis', response: 2},
            {label: 'Fallopian tube blockage', response: 3},
            {label: 'Irregular ovulation/not ovulating', response: 4},
            {label: 'Uterine fibroids or other problems with the uterus', response: 5},
            {label: 'Problem with the cervix', response: 6},
            {label: 'Unexplained/unknown cause', response: 7}
        ],
        show_if: {field_name: 'infertility', value: '1'}
    },
    {
        label: 'Which relative(s) have Polycystic Ovarian Syndrome (PCOS)?',
        element_type: 'checkboxes',
        field_start: 'infertility_relative_1',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'infertility', value: '1'},
        show_if_checked: 'infertility_type___1'
    },
    {
        label: 'Which relative(s) have endometriosis?',
        element_type: 'checkboxes',
        field_start: 'infertility_relative_2',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'infertility', value: '1'},
        show_if_checked: 'infertility_type___2'
    },
    {
        label: 'Which relative(s) have fallopian tube blockage?',
        element_type: 'checkboxes',
        field_start: 'infertility_relative_3',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'infertility', value: '1'},
        show_if_checked: 'infertility_type___3'
    },
    {
        label: 'Which relative(s) have irregular ovulation/not ovulating?',
        element_type: 'checkboxes',
        field_start: 'infertility_relative_4',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'infertility', value: '1'},
        show_if_checked: 'infertility_type___4'
    },
    {
        label: 'Which relative(s) have uterine fibroids or other problems with the uterus?',
        element_type: 'checkboxes',
        field_start: 'infertility_relative_5',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'infertility', value: '1'},
        show_if_checked: 'infertility_type___5'
    },
    {
        label: 'Which relative(s) have problem with the cervix?',
        element_type: 'checkboxes',
        field_start: 'infertility_relative_6',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'infertility', value: '1'},
        show_if_checked: 'infertility_type___6'
    },
    {
        label: 'Which relative(s) have unexplained/unknown cause?',
        element_type: 'checkboxes',
        field_start: 'infertility_relative_7',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'infertility', value: '1'},
        show_if_checked: 'infertility_type___7'
    },
    {
        label: 'Did any of your first-degree relatives require hormones or procedures to help get pregnant (such as medications to help with ovulation or for PCOS; surgery to treat PCOS, fibroids or endometriosis; assisted reproductive therapy such as intrauterine insemination [IUI] or in vitro fertilization [IVF])?',
        element_type: 'radio_buttons',
        field_name: 'history_2',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ]
    },
    {
        label: 'Which relative(s)?',
        element_type: 'checkboxes',
        field_start: 'infertility_2_relatives',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'history_2', value: '1'}
    },
    {
        label: 'Has any first-degree relative had multiple miscarriages/spontaneous abortions?',
        element_type: 'radio_buttons',
        field_name: 'history_3',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ]
    },
    {
        label: 'Which relative(s)?',
        element_type: 'checkboxes',
        field_start: 'infertility_2_relatives_2',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Sister', response: 2},
            {label: 'Daughter', response: 4}
        ],
        show_if: {field_name: 'history_3', value: '1'}
    },
    {
        label: 'Do you have any first-degree relatives with inflammatory bowel disease (Crohn\'s Disease, Ulcerative Colitis)?',
        element_type: 'radio_buttons',
        field_name: 'ibd',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ]
    },
    {
        label: 'What kind of inflammatory bowel disease?',
        element_type: 'checkboxes',
        field_start: 'ibd_type',
        options: [
            {label: 'Ulcerative Colitis', response: 1},
            {label: 'Crohn\'s Disease', response: 2},
            {label: 'IBD-U (diagnosed with IBD but unsure or unclear if ulcerative colitis or Crohn’s disease)', response: 4}
        ],
        show_if: {field_name: 'ibd', value: '1'}
    },
    {
        label: 'Specify which relative(s) have Ulcerative Colitis:',
        element_type: 'checkboxes',
        field_start: 'relative_uc',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if: {field_name: 'ibd', value: '1'},
        show_if_checked: 'ibd_type___1'
    },
    {
        label: 'Specify which relative(s) have Crohn\'s Disease:',
        element_type: 'checkboxes',
        field_start: 'relative_cd',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if: {field_name: 'ibd', value: '1'},
        show_if_checked: 'ibd_type___2'
    },
    {
        label: 'Specify which relative(s) have IBD-U:',
        element_type: 'checkboxes',
        field_start: 'relative_ibd_u',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if: {field_name: 'ibd', value: '1'},
        show_if_checked: 'ibd_type___4'
    },
    {
        label: 'Do you have first-degree relatives with other autoimmune conditions?',
        element_type: 'checkboxes',
        field_start: 'autoimmune',
        options: [
            {label: 'Thyroid disease', response: 1},
            {label: 'Rheumatoid arthritis', response: 2},
            {label: 'Psoriatic arthritis', response: 3},
            {label: 'Psoriasis', response: 4},
            {label: 'Systemic lupus erythematosus (SLE or lupus)', response: 5},
            {label: 'Antiphospholipid Antibody Syndrome', response: 6},
            {label: 'History of blood clots (not due to Antiphospholipid Antibody Syndrome)', response: 7},
            {label: 'Sjogren\'s syndrome', response: 8},
            {label: 'Type 1 (Juvenile) diabetes (diagnosed at a young age, always needs insulin)', response: 9},
            {label: 'Multiple sclerosis (MS)', response: 10},
            {label: 'Celiac disease', response: 11},
            {label: 'Other, please specify:', response: 555},
            {label: 'None that I know of', response: 0}
        ],
        none_response: 0,
        specify_choice: {response: 555, field_name: 'other_autoimmune'}
    },
    {
        label: 'Type of thyroid disease',
        element_type: 'checkboxes',
        field_start: 'thyroid_condition_specific',
        options: [
            {label: 'Overactive thyroid (e.g., Graves Disease)', response: 1},
            {label: 'Underactive thyroid (e.g., hypothyroidism or Hashimoto\'s)', response: 2},
            {label: 'Other, please specify:', response: 555},
            {label: 'I don\'t know', response: 999}
        ],
        unknown_response: 999,
        specify_choice: {response: 555, field_name: 'thyroid_other_condition'},
        show_if_checked: 'autoimmune___1'
    },
    {
        label: 'Specify which relative(s) for overactive thyroid (e.g., Graves Disease):',
        element_type: 'checkboxes',
        field_start: 'relative_thyroid_overactive',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_all: [
            {field_name: 'autoimmune___1', value: '1'},
            {field_name: 'thyroid_condition_specific___1', value: '1'}
        ]
    },
    {
        label: 'Specify which relative(s) for underactive thyroid (e.g., hypothyroidism or Hashimoto\'s):',
        element_type: 'checkboxes',
        field_start: 'relative_thyroid_underactive',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_all: [
            {field_name: 'autoimmune___1', value: '1'},
            {field_name: 'thyroid_condition_specific___2', value: '1'}
        ]
    },
    {
        label: 'Specify which relative(s) for other thyroid disease:',
        element_type: 'checkboxes',
        field_start: 'relative_thyroid_other',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_all: [
            {field_name: 'autoimmune___1', value: '1'},
            {field_name: 'thyroid_condition_specific___555', value: '1'}
        ]
    },
    {
        label: 'Specify which relative(s) for unknown thyroid disease:',
        element_type: 'checkboxes',
        field_start: 'relative_thyroid_unknown',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_all: [
            {field_name: 'autoimmune___1', value: '1'},
            {field_name: 'thyroid_condition_specific___999', value: '1'}
        ]
    },
    {
        label: 'Specify which relative(s) for Rheumatoid arthritis:',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune2',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___2'
    },
    {
        label: 'Specify which relative(s) for Psoriatic arthritis:',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune3',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___3'
    },
    {
        label: 'Specify which relative(s) for Psoriasis:',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune4',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___4'
    },
    {
        label: 'Specify which relative(s) for systemic lupus erythematosus (SLE or lupus):',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune5',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___5'
    },
    {
        label: 'Specify which relative(s) for Antiphospholipid Antibody syndrome:',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune6',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___6'
    },
    {
        label: 'Specify which relative(s) for history of blood clots (not due to Antiphospholipid Antibody Syndrome):',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune7',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___7'
    },
    {
        label: 'Specify which relative(s) for Sjogren\'s syndrome:',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune8',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___8'
    },
    {
        label: 'Specify which relative(s) for Type 1 (Juvenile) diabetes (diagnosed at a young age, always needs insulin):',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune9',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___9'
    },
    {
        label: 'Specify which relative(s) for multiple sclerosis (MS):',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune10',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___10'
    },
    {
        label: 'Specify which relative(s) for celiac disease:',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune11',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___11'
    },
    {
        label: 'Specify which relative(s) for other autoimmune conditions:',
        element_type: 'checkboxes',
        field_start: 'relative_autoimmune_other',
        options: [
            {label: 'Mother', response: 1},
            {label: 'Father', response: 2},
            {label: 'Sister', response: 3},
            {label: 'Brother', response: 4},
            {label: 'Daughter', response: 6},
            {label: 'Son', response: 7}
        ],
        show_if_checked: 'autoimmune___555'
    },
    {
        label: 'Section 9: Patient Reported Outcomes',
        element_type: 'header'
    },
    {
        label: 'On average, how many total bowel movements do you currently have over a 24-hour period?',
        element_type: 'number',
        field_name: 'avg_stools'
    },
    {
        label: 'What is a normal number of bowel movements per 24-hour period when your IBD is controlled?',
        element_type: 'number',
        field_name: 'normal_stool'
    },
    {
        label: 'How often do you have loose bowel movements?',
        element_type: 'radio_buttons',
        field_name: 'loose_stools',
        options: [
            {label: 'With every bowel movement', value: '1'},
            {label: 'With most bowel movements', value: '2'},
            {label: 'Sometimes', value: '3'},
            {label: 'Rarely', value: '4'},
            {label: 'Never (my stools are always formed)', value: '5'}
        ]
    },
    {
        label: 'Fecal urgency is defined as sudden, irresistible urge to have a bowel movement. Do you have fecal urgency?',
        element_type: 'yes_no',
        field_name: 'fec_urg'
    },
    {
        label: 'Do you have rectal bleeding?',
        element_type: 'radio_buttons',
        field_name: 'rec_bleed',
        options: [
            {label: 'Never', value: '1'},
            {label: 'Visible blood with stool less than 50% of the time', value: '2'},
            {label: 'Visible blood with stool greater than or equal to 50% of the time', value: '3'},
            {label: 'Passing blood alone', value: '4'}
        ]
    },
    {
        label: 'Incontinence is defined as inability to hold stool (having an accident). Do you have incontinence during the daytime?',
        element_type: 'yes_no',
        field_name: 'day_incont'
    },
    {
        label: 'Do you have nighttime incontinence?',
        element_type: 'yes_no',
        field_name: 'night_incont'
    },
    {
        label: 'How often do you have abdominal pain?',
        element_type: 'radio_buttons',
        field_name: 'uc_abd_pain',
        options: [
            {label: 'Every day', value: '1'},
            {label: 'Most days', value: '2'},
            {label: '1-2 days per week', value: '3'},
            {label: '1-2 times per month', value: '4'},
            {label: 'Rarely', value: '5'},
            {label: 'Never', value: '6'}
        ]
    },
    {
        element_type: 'radio_buttons',
        label: 'When you have abdominal pain, how would you describe the severity?',
        instructions: 'We understand this may vary - please select what occurs most often for you.',
        field_name: 'uc_pain_severity',
        options: [
            {label: 'Mild', value: '1'},
            {label: 'Moderate', value: '2'},
            {label: 'Severe (but can still do my daily activities)', value: '3'},
            {label: 'Severe (interferes with my daily activities)', value: '4'}
        ],
        show_if: {field_name: 'uc_abd_pain', values: ['1', '2', '3', '4', '5']}
    },
    {
        label: 'Section 10: NIH PROMIS Global Health Questionnaire',
        element_type: 'header'
    },
    {
        label: '',
        element_type: 'radio_grid',
        options: [
            {label: 'Excellent', value: '5'},
            {label: 'Very Good', value: '4'},
            {label: 'Good', value: '3'},
            {label: 'Fair', value: '2'},
            {label: 'Poor', value: '1'}
        ],
        questions: [
            {field_name: 'prom_health', label: 'In general, would you say your health is:'},
            {field_name: 'prom_qual', label: 'In general, would you say your quality of life is:'},
            {field_name: 'prom_phys', label: 'In general, how would you rate your physical health?'},
            {field_name: 'prom_ment_health', label: 'In general, how would you rate your mental health, including your mood and your ability to think?'},
            {field_name: 'prom_satis', label: 'In general, how would you rate your satisfaction with your social activities and relationships?'},
            {field_name: 'prom_social', label: 'In general, please rate how well you carry out your usual social activities and roles. (This includes activities at home, at work and in your community, and responsibilities as a parent, child, spouse, friend, etc.)'}
        ]
    },
    {
        label: '',
        element_type: 'radio_grid',
        options: [
            {label: 'Completely', value: '5'},
            {label: 'Mostly', value: '4'},
            {label: 'Moderately', value: '3'},
            {label: 'A Little', value: '2'},
            {label: 'Not At All', value: '1'}
        ],
        questions: [
            {field_name: 'global_6', label: 'To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?'}
        ]
    },
    {
        label: '',
        element_type: 'radio_grid',
        options: [
            {label: 'Never', value: '5'},
            {label: 'Rarely', value: '4'},
            {label: 'Sometimes', value: '3'},
            {label: 'Often', value: '2'},
            {label: 'Always', value: '1'}
        ],
        questions: [
            {field_name: 'global_10', label: 'In the past 7 days, how often have you been bothered by emotional problems, such as feeling anxious, depressed or irritable?'}
        ]
    },
    {
        label: '',
        element_type: 'radio_grid',
        options: [
            {label: 'None', value: '5'},
            {label: 'Mild', value: '4'},
            {label: 'Moderate', value: '3'},
            {label: 'Severe', value: '2'},
            {label: 'Very Severe', value: '1'}
        ],
        questions: [
            {field_name: 'global_8', label: 'In the past 7 days, how would you rate your fatigue on average?'}
        ]
    },
    {
        label: '',
        element_type: 'radio_grid',
        options: [
            {label: '0 No Pain', value: '0'},
            {label: '1', value: '1'},
            {label: '2', value: '2'},
            {label: '3', value: '3'},
            {label: '4', value: '4'},
            {label: '5', value: '5'},
            {label: '6', value: '6'},
            {label: '7', value: '7'},
            {label: '8', value: '8'},
            {label: '9', value: '9'},
            {label: '10 Worst Pain Imaginable', value: '10'}
        ],
        questions: [
            {field_name: 'global_7', label: 'In the past 7 days, how would you rate your pain on average?'}
        ]
    },
    {
        label: 'Section 11: Validated IBD-Specific Female Sexual Dysfunction Scale',
        element_type: 'header'
    },
    {
        label: 'In the past year:',
        element_type: 'radio_grid',
        options: [
            {label: 'Always or almost always', value: '4'},
            {label: 'Most times (more than half of the time)', value: '3'},
            {label: 'About half the time', value: '2'},
            {label: 'A few times', value: '1'},
            {label: 'Never or very rarely', value: '0'}
        ],
        questions: [
            {field_name: 'ibd_fsds_1', label: 'Do you feel that your Crohn\'s or UC disease contributed to distress in your sex life?'},
            {field_name: 'ibd_fsds_2', label: 'Has your Crohn\'s or UC disease prevented you from starting a sexual relationship?'},
            {field_name: 'ibd_fsds_3', label: 'Has your Crohn\'s or UC disease delayed starting a sexual relationship?'},
            {field_name: 'ibd_fsds_4', label: 'Did your Crohn\'s or UC diagnosis prevent you from having sex?'},
            {field_name: 'ibd_fsds_5', label: 'Did your Crohn\'s or UC diagnosis cause problems during sex?'},
            {field_name: 'ibd_fsds_6', label: 'Have you been conscious of your Crohn\'s or UC during intercourse?'},
            {field_name: 'ibd_fsds_7', label: 'Did you have abdominal or pelvic pain during intercourse?'},
            {field_name: 'ibd_fsds_8', label: 'Did you have rectal/anal pain during intercourse?'},
            {field_name: 'ibd_fsds_9', label: 'Do you fear experiencing abdominal/pelvic pain during sexual activity?'},
            {field_name: 'ibd_fsds_10', label: 'Did you have a reduced desire or interest, or did you have trouble getting aroused during intercourse due to your Crohn\'s or UC?'},
            {field_name: 'ibd_fsds_11', label: 'Does your Crohn\'s or UC make you feel too tired to participate in sexual activities?'},
            {field_name: 'ibd_fsds_12', label: 'How often do you feel that your UC or Crohn\'s has negatively affected your sexual life?'},
            {field_name: 'ibd_fsds_13', label: 'Do you feel guilty about UC and Crohn\'s and its effect on your partner?'},
            {field_name: 'ibd_fsds_14', label: 'How much has anal bleeding or discharge affected your satisfaction with your sex life?'},
            {field_name: 'ibd_fsds_15', label: 'How much has abdominal or pelvic pain affected your satisfaction with your sex life?'}
        ]
    }
];
