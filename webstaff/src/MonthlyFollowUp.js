export const monthlyFollowUpElements = [
    {
        element_type: 'date',
        label: 'Today\'s date:',
        field_name: 'today_date'
    },
    {
        element_type: 'radio_buttons',
        label: 'Please choose among the following options which best defines your status:',
        instructions: '*Assisted reproductive technologies include IVF, IUI or other treatments with a fertility doctor',
        field_name: 'fu_status',
        options: [
            {label: 'Not pregnant, attempting conception without assisted reproductive technology*', value: '1'},
            {label: 'Not attempting conception', value: '2'},
            {label: 'Not pregnant, have started assisted reproductive technology*', value: '3'},
            {label: 'Currently pregnant', value: '4'},
            {label: 'Recently pregnant, but no longer pregnant', value: '5'},
            {label: 'Opt out from study', value: '6'}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Did you indicate that you were pregnant during your last questionnaire?',
        field_name: 'preg_last_fu',
        show_if: {field_name: 'fu_status', value: '4'}
    },
    {
        element_type: 'header',
        label: 'Section 1: Current Reproductive Status',
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'yes_no',
        label: 'Since your last questionnaire, have you used any type(s) of contraception?',
        field_name: 'fu_contraception_past',
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'checkboxes',
        label: 'What type(s) of contraception did you use?',
        field_start: 'contra',
        options: [
            {response: 1, label: 'Condoms'},
            {response: 2, label: 'Injection birth control (Depo Provera)'},
            {response: 3, label: 'Birth control patch'},
            {response: 4, label: 'Birth control pills'},
            {response: 5, label: 'Hormonal implant (Nexplanon)'},
            {response: 6, label: 'IUD (copper/10-year)'},
            {response: 7, label: 'IUD (hormonal, 3-year / 5 year - Mirena, Skyla, Liletta or Kyleena)'},
            {response: 8, label: 'NuvaRing'},
            {response: 9, label: 'Rhythm method (having sex only when you think you\'re not ovulating)'},
            {response: 10, label: 'Diaphragm'},
            {response: 555, label: 'Other, please specify:'}
        ],
        specify_choice: {response: 555, field_name: 'other_contra_fu_type'},
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ]
    },
    {
        element_type: 'radio_buttons',
        label: 'What type of birth control pills?',
        field_name: 'type_pills',
        options: [
            {label: 'Combined estrogen and progestin', value: '1'},
            {label: 'Progestin only', value: '2'},
            {label: 'Unsure', value: '999'}
        ],
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___4'
    },
    {
        element_type: 'date',
        label: 'When did you last use condoms?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___1'
    },
    {
        element_type: 'date',
        label: 'When did you last use injection birth control (Depo Provera)?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_2',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___2'
    },
    {
        element_type: 'date',
        label: 'When did you last use birth control patch?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_3',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___3'
    },
    {
        element_type: 'date',
        label: 'When did you last use birth control pills?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_4',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___4'
    },
    {
        element_type: 'date',
        label: 'When did you last use hormonal implant (Nexplanon)?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_5',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___5'
    },
    {
        element_type: 'date',
        label: 'When did you last use IUD (copper/10-year)?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_6',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___6'
    },
    {
        element_type: 'date',
        label: 'When did you last use IUD (hormonal, 3-year / 5 year - Mirena, Skyla, Liletta or Kyleena)?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_7',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___7'
    },
    {
        element_type: 'date',
        label: 'When did you last use NuvaRing?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_8',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___8'
    },
    {
        element_type: 'date',
        label: 'When did you last use rhythm method (having sex only when you think you\'re not ovulating)?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_9',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___9'
    },
    {
        element_type: 'date',
        label: 'When did you last use a diaphragm?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_10',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___10'
    },
    {
        element_type: 'date',
        label: 'When did you last use other type(s) of contraception?',
        hint: 'Provide the best estimate',
        field_name: 'stop_contra_date_11',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'fu_contraception_past', value: '1'}
        ],
        show_if_checked: 'contra___555'
    },
    {
        element_type: 'header',
        label: 'Section 1: Assisted Reproductive Technologies',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Since your last questionnaire, have you undergone infertility treatments?',
        field_name: 'infert_treat',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Which of the following infertility treatments have you undergone since your last questionnaire?',
        field_start: 'infertility_treat',
        options: [
            {response: 1, label: 'In-vitro fertilization (IVF)'},
            {response: 2, label: 'Medications'},
            {response: 3, label: 'Intrauterine Insemination (IUI)'},
            {response: 4, label: 'Reproductive surgeries'}
        ],
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if: {field_name: 'infert_treat', value: '1'}
    },
    {
        element_type: 'number',
        label: 'List number of egg retrievals since last follow-up questionnaire:',
        field_name: 'num_ivf',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if: {field_name: 'infert_treat', value: '1'},
        show_if_checked: 'infertility_treat___1'
    },
    {
        element_type: 'date',
        label: 'Date of most recent retrieval',
        field_name: 'date_ivf',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if_all: [
            {field_name: 'infert_treat', value: '1'},
            {field_name: 'num_ivf', value: '0', check: '>'}
        ],
        show_if_checked: 'infertility_treat___1'
    },
    {
        element_type: 'number',
        label: 'List number of embryo transfers since last follow-up questionnaire:',
        field_name: 'number_embryo_tranfs',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if: {field_name: 'infert_treat', value: '1'},
        show_if_checked: 'infertility_treat___1'
    },
    {
        element_type: 'date',
        label: 'Date of most recent transfer',
        field_name: 'date_ivf_transf',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if_all: [
            {field_name: 'infert_treat', value: '1'},
            {field_name: 'number_embryo_tranfs', value: '0', check: '>'}
        ],
        show_if_checked: 'infertility_treat___1'
    },
    {
        element_type: 'checkboxes',
        label: 'Types of medications:',
        field_start: 'hormone_type',
        options: [
            {response: 1, label: 'Clomiphene (Clomid)'},
            {response: 2, label: 'Letrozole (Femara)'},
            {response: 3, label: 'Gonadotropin'},
            {response: 4, label: 'Metformin (Glumetza, Glucophage, Fortamet)'},
            {response: 5, label: 'Bromocriptine (Arlodel, Cycloset)'},
            {response: 6, label: 'Hormones that make you ovulate (not listed above)'},
            {response: 7, label: 'Steroids'},
            {response: 8, label: 'IVIG'},
            {response: 999, label: 'Not sure of which medication'}
        ],
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if: {field_name: 'infert_treat', value: '1'},
        show_if_checked: 'infertility_treat___2'
    },
    {
        element_type: 'number',
        label: 'List number of inseminations since last follow-up questionnaire:',
        field_name: 'num_insemination',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if: {field_name: 'infert_treat', value: '1'},
        show_if_checked: 'infertility_treat___3'
    },
    {
        element_type: 'date',
        label: 'Date of most recent insemination:',
        field_name: 'date_insemination',
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if_all: [
            {field_name: 'infert_treat', value: '1'},
            {field_name: 'num_insemination', value: '0', check: '>'}
        ],
        show_if_checked: 'infertility_treat___3'
    },
    {
        element_type: 'checkboxes',
        label: 'Reproductive surgery types',
        field_start: 'types_surger',
        options: [
            {response: 1, label: 'Surgical repair for blockage of the fallopian tubes'},
            {response: 2, label: 'Removal of the fallopian tubes'},
            {response: 3, label: 'Surgical treatment for endometriosis'},
            {response: 4, label: 'Uterine fibroid removal (myomectomy)'},
            {response: 5, label: 'Other surgery on your uterus'},
            {response: 6, label: 'Surgery for PCOS'},
            {response: 555, label: 'Other surgery, please specify:'}
        ],
        specify_choice: {response: 555, field_name: 'other_repro_surg_fu'},
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if: {field_name: 'infert_treat', value: '1'},
        show_if_checked: 'infertility_treat___4'
    },
    {
        element_type: 'checkboxes',
        label: 'Where was the surgery performed?',
        field_start: 'where_repro_surg',
        options: [
            {response: 1, label: 'Mount Sinai'},
            {response: 2, label: 'University of Minnesota/MHealth Fairview'},
            {response: 555, label: 'Other, please specify:'}
        ],
        specify_choice: {response: 555, field_name: 'other_hospital_surg'},
        show_if_any: [
            {field_name: 'fu_status', value: '3'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ],
        show_if: {field_name: 'infert_treat', value: '1'},
        show_if_checked: 'infertility_treat___4'
    },
    {
        element_type: 'header',
        label: 'Section 2: Menstruation, ovulation and intercourse histories',
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'date',
        label: 'When was the first day of your last menstrual period (please answer as precisely as possible)?',
        hint: 'Provide the best estimate',
        field_name: 'last_menst_period',
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'checkboxes',
        label: 'Please state abnormalities (if any) during last menstrual period:',
        field_start: 'period_abnormalities',
        options: [
            {response: 1, label: 'Started earlier than expected'},
            {response: 2, label: 'Started later than expected'},
            {response: 3, label: 'Shorter duration than usual'},
            {response: 4, label: 'Longer duration than usual'},
            {response: 5, label: 'Heavier than usual'},
            {response: 6, label: 'Lighter than usual'},
            {response: 555, label: 'Other, please specify:'},
            {response: 0, label: 'None of the above'}
        ],
        none_response: 0,
        specify_choice: {response: 555, field_name: 'specify_period_abnormal'},
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'radio_buttons',
        label: 'Regarding your most recent menstrual cycle:',
        field_name: 'ovulation_v2',
        options: [
            {label: 'I checked my ovulation', value: '1'},
            {label: 'I did not check my ovulation', value: '0'}
        ],
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'checkboxes',
        label: 'What method(s) did you use to check ovulation?',
        field_start: 'ovulation_method_v2',
        options: [
            {response: 1, label: 'Ovulation kit (urine sticks)'},
            {response: 2, label: 'Basal body temperature'},
            {response: 3, label: 'Cervical discharge'},
            {response: 4, label: 'Based on the timing of last menstrual period'},
            {response: 555, label: 'Other, please specify:'}
        ],
        specify_choice: {response: 555, field_name: 'specify_method'},
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'ovulation_v2', value: '1'}
        ]
    },
    {
        element_type: 'radio_buttons',
        label: 'When I checked for ovulation I was:',
        field_name: 'ovulation',
        options: [
            {label: 'Ovulating', value: '1'},
            {label: 'Not ovulating', value: '0'}
        ],
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'ovulation_v2', value: '1'}
        ]
    },
    {
        element_type: 'descriptive',
        label: 'Please enter your most recent dates of ovulation:',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'ovulation_v2', value: '1'},
            {field_name: 'ovulation', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Start date:',
        field_name: 'ovulation_strt_rng_1',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'ovulation_v2', value: '1'},
            {field_name: 'ovulation', value: '1'}
        ]
    },
    {
        element_type: 'date_plus_checkbox',
        label: 'End date:',
        field_name: 'ovulation_end_rng_1',
        checkbox: {field_name: 'ovulation_end_rng_1_na', label: 'NA (still ovulating)'},
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'ovulation_v2', value: '1'},
            {field_name: 'ovulation', value: '1'}
        ]
    },
    {
        element_type: 'number',
        label: 'Since your last questionnaire, what was the total number of days you had unprotected sexual intercourse?',
        hint: 'Please use your best estimate',
        field_name: 'sex_times',
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'header',
        label: 'Section 2: Pregnancy Status',
        show_if_all: [
            {field_name: 'fu_status', value: '4'},
            {field_name: 'preg_last_fu', value: '0'}
        ]
    },
    {
        element_type: 'weeks_and_days',
        label: 'pregnant',
        field_name_weeks: 'weeks_preg',
        field_name_days: 'days_pregnant',
        show_if_all: [
            {field_name: 'fu_status', value: '4'},
            {field_name: 'preg_last_fu', value: '0'}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'How did you confirm that you are pregnant?',
        field_start: 'confirm_preg',
        options: [
            {response: 1, label: 'Home pregnancy test'},
            {response: 2, label: 'Blood work at my doctor\'s office'},
            {response: 3, label: 'Urinary test at my doctor\'s office'},
            {response: 4, label: 'Ultrasound'},
            {response: 555, label: 'Other, please specify:'}
        ],
        specify_choice: {response: 555, field_name: 'how_preg_specify'},
        show_if_all: [
            {field_name: 'fu_status', value: '4'},
            {field_name: 'preg_last_fu', value: '0'}
        ]
    },
    {
        element_type: 'date',
        label: 'Date of last menstrual period:',
        field_name: 'date_menstrual_per_3',
        show_if_all: [
            {field_name: 'fu_status', value: '4'},
            {field_name: 'preg_last_fu', value: '0'}
        ]
    },
    {
        element_type: 'header',
        label: 'Section 3: Partner information',
        show_if_any: [
            {field_name: 'fu_status', value: '1'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Is the father of this fetus the same partner from your baseline questionnaire?',
        field_name: 'father_fetus',
        show_if_all: [
            {field_name: 'fu_status', value: '4'},
            {field_name: 'preg_last_fu', value: '0'}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Is your current partner the same partner from your last questionnaire?',
        field_name: 'a_is_your_current_partner',
        show_if: {field_name: 'fu_status', value: '1'}
    },
    {
        element_type: 'yes_no',
        label: 'Is your current partner with whom you plan to have a child?',
        field_name: 'curr_part_child_v2',
        show_if_all: [
            {field_name: 'fu_status', value: '1'},
            {field_name: 'a_is_your_current_partner', value: '0'}
        ]
    },
    {
        element_type: 'radio_buttons',
        label: 'What is your partner\'s current age?',
        field_name: 'cur_part_age_v2',
        options: [
            {label: 'Less than 35', value: '1'},
            {label: '35-45', value: '2'},
            {label: '46-60', value: '3'},
            {label: 'Older than 60', value: '4'}
        ],
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        element_type: 'radio_buttons',
        label: 'Has your partner ever been diagnosed with infertility?',
        field_name: 'part_diag_fer_v2',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        element_type: 'radio_buttons',
        label: 'Has your partner ever had any procedures or surgeries involving his pelvis, genital organs, or urologic system (ureters/urethra/bladder)?',
        field_name: 'pelvic_proc_v2',
        options: [
            {label: 'Yes', value: '1'},
            {label: 'No', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Please specify location of surgery',
        field_start: 'surgery_partner_pelvis',
        options: [
            {label: 'Pelvis', response: 1},
            {label: 'Genitals', response: 2},
            {label: 'Urologic system (ureters, urethra, bladder)', response: 3}
        ],
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ],
        show_if: {field_name: 'pelvic_proc_v2', value: '1'}
    },
    {
        label: 'Has your partner ever been diagnosed with any of the following infections?',
        element_type: 'checkboxes',
        field_start: 'part_dx_infec_v2',
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
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        label: 'Has your partner ever been diagnosed with any of the following conditions?',
        element_type: 'checkboxes',
        field_start: 'part_diag_cond_v2',
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
        specify_choice: {response: 555, field_name: 'please_specify_new_cond_v2'},
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        element_type: 'text',
        label: 'Please list your partner\'s current medications, if you know them',
        instructions: 'Enter "none" for no medications or "UNK" for unknown',
        field_name: 'part_meds_v2',
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Has your partner ever undergone any of the following surgical procedures?',
        field_start: 'part_surg_proced_v2',
        options: [
            {label: 'Vasectomy (sterilization surgery to block sperm from reaching the semen)', response: 1},
            {label: 'Orchiectomy (surgical removal of one or both testes)', response: 2},
            {label: 'Hernia repair', response: 3},
            {label: 'I don\'t know', response: 999},
            {label: 'None of the above', response: 0}
        ],
        unknown_response: 999,
        none_response: 0,
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        label: 'Which hernia type?',
        element_type: 'checkboxes',
        field_start: 'hernia_type_v2',
        options: [
            {label: 'Femoral', response: 1},
            {label: 'Inguinal', response: 2},
            {label: 'Ventral/umbilical', response: 3},
            {label: 'Other, please specify:', response: 555}
        ],
        specify_choice: {response: 555, field_name: 'hernia_type_other_v2'},
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ],
        show_if_checked: 'part_surg_proced_v2___3'
    },
    {
        label: 'Has your partner ever been exposed to any of the following?',
        element_type: 'checkboxes',
        field_start: 'part_exposed_v2',
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
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ]
    },
    {
        label: 'About how many CT scans?',
        element_type: 'radio_buttons',
        field_name: 'part_how_many_ct_scans_v2',
        options: [
            {label: '1 to 5 CT scans', value: '1'},
            {label: 'More than 5 CT scans', value: '2'},
            {label: 'I don\'t know', value: '999'}
        ],
        show_if_any: [
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'},
                {field_name: 'father_fetus', value: '0'}
            ]},
            {all: [
                {field_name: 'fu_status', value: '1'},
                {field_name: 'a_is_your_current_partner', value: '0'},
                {field_name: 'curr_part_child_v2', value: '1'}
            ]}
        ],
        show_if_checked: 'part_exposed_v2___1'
    },
    {
        element_type: 'descriptive',
        label: 'Our records indicate that you were previously pregnant. We understand that this may be a very difficult time for you but we are hoping you are able to answer the following question:',
        show_if: {field_name: 'fu_status', value: '5'}
    },
    {
        element_type: 'checkboxes',
        label: 'What was the outcome of your pregnancy?',
        field_start: 'outcome_preg',
        options: [
            {response: 1, label: 'Ectopic pregnancy'},
            {response: 2, label: 'Molar pregnancy or hydatidiform mole'},
            {response: 3, label: 'Spontaneous miscarriage'},
            {response: 4, label: 'Therapeutic abortion/termination (my doctor recommended an abortion)'},
            {response: 5, label: 'Elective termination (I chose to have an abortion)'},
            {response: 555, label: 'Other, please specify:'},
            {response: 999, label: 'I don\'t know'},
            {response: 777, label: 'I choose not to respond'}
        ],
        specify_choice: {response: 555, field_name: 'please_specify_nolong'},
        unknown_response: 999,
        none_response: 777,
        show_if: {field_name: 'fu_status', value: '5'}
    },
    {
        element_type: 'text',
        label: 'Please specify the reason for the therapeutic abortion/termination:',
        field_name: 'for_what_reason',
        show_if: {field_name: 'fu_status', value: '5'},
        show_if_checked: 'outcome_preg___4'
    },
    {
        element_type: 'descriptive',
        label: 'Thank you for participating in the study, we appreciate your contribution. This is the end of your monthly questionnaire.',
        show_if: {field_name: 'fu_status', value: '5'}
    },
    {
        element_type: 'descriptive',
        label: 'We would be grateful to hear about your experience as a participant in this study.',
        show_if: {field_name: 'fu_status', value: '5'}
    },
    {
        element_type: 'text',
        label: 'Please share with us any feedback that you may have:',
        instructions: 'Write NA if you choose not to repsond',
        field_name: 'please_share_with_us_any_f',
        show_if: {field_name: 'fu_status', value: '5'}
    },
    {
        element_type: 'header',
        label: 'Section 4: IBD Health Status',
        show_if_any: [
            {field_name: 'fu_status', value: '1'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ]
    },
    {
        element_type: 'header',
        label: 'Section 2: IBD Health Status',
        show_if: {field_name: 'fu_status', value: '3'}
    },
    {
        element_type: 'header',
        label: 'Section 1: IBD Health Status',
        show_if_all: [
            {field_name: 'fu_status', value: '4'},
            {field_name: 'preg_last_fu', value: '1'}
        ]
    },
    {
        element_type: 'descriptive',
        label: 'Disease activity',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'number',
        label: 'On average, how many total bowel movements do you currently have over a 24-hour period?',
        field_name: 'avg_stools',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'number',
        field_name: 'normal_stool',
        label: 'What is a normal number of bowel movements per 24-hour period when your IBD is controlled?',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'radio_buttons',
        field_name: 'loose_stools',
        label: 'How often do you have loose bowel movements?',
        options: [
            {label: 'With every bowel movement', value: '1'},
            {label: 'With most bowel movements', value: '2'},
            {label: 'Sometimes', value: '3'},
            {label: 'Rarely', value: '4'},
            {label: 'Never (my stools are always formed)', value: '5'}
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'yes_no',
        field_name: 'fec_urg',
        label: 'Fecal urgency is defined as sudden, irresistible urge to have a bowel movement. Do you have fecal urgency?',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'radio_buttons',
        field_name: 'rec_bleed',
        label: 'Do you have rectal bleeding?',
        options: [
            {label: 'Never', value: '1'},
            {label: 'Visible blood with stool less than 50% of the time', value: '2'},
            {label: 'Visible blood with stool greater than or equal to 50% of the time', value: '3'},
            {label: 'Passing blood alone', value: '4'}
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'yes_no',
        field_name: 'day_incont',
        label: 'Incontinence is defined as inability to hold stool (having an accident). Do you have incontinence during the daytime?',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        label: 'Do you have nighttime incontinence?',
        element_type: 'yes_no',
        field_name: 'night_incont',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
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
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
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
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'uc_abd_pain', values: ['1', '2', '3', '4', '5']}
    },
    {
        element_type: 'descriptive',
        label: 'Complications',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'radio_grid',
        label: 'Since your last questionnaire, have you been newly diagnosed with any of the following?',
        options: [
            {label: 'No', value: '0'},
            {label: 'Yes', value: '1'}
        ],
        questions: [
            {field_name: 'arthralgia', label: 'Joint pains and swelling'},
            {field_name: 'uveitis_hbi', label: 'Inflammation in your eye related to IBD'},
            {field_name: 'erythm', label: 'Erythema nodosum'},
            {field_name: 'oral_ulcers', label: 'Ulcers/sores in your mouth'},
            {field_name: 'pydrm_gngrnsm', label: 'Pyoderma gangrenosum'},
            {field_name: 'anal_fissures', label: 'Anal fissures (small cuts around your anus)'},
            {field_name: 'new_fistula', label: 'New fistula'},
            {field_name: 'anal_abscess', label: 'Abscess'}
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        label: 'Since your last questionnaire, have you been hospitalized?',
        element_type: 'yes_no',
        field_name: 'hosp_fu',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'number',
        label: 'For how many days were you hospitalized?',
        field_name: 'for_how_many_days_were_you',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'hosp_fu', value: '1'}
    },
    {
        element_type: 'yes_no',
        label: 'Was your hospitalization related to IBD?',
        field_name: 'reason_for_hosp_ibd',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'hosp_fu', value: '1'}
    },
    {
        element_type: 'text',
        label: 'Please explain further.',
        field_name: 'reason_for_hosp_ibd_explain',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'hosp_fu', value: '1'},
            {field_name: 'reason_for_hosp_ibd', values: ['1', '0']}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Since your last questionnaire, have you had surgery?',
        field_name: 'surg_fu',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Please select which surgery you have had',
        field_start: 'what_surgery',
        options: [
            {response: 1, label: 'Subtotal colectomy with end ileostomy and Hartmann pouch creation (removal of the colon with creation of ileostomy where stool is coming out, with rectum still in place) - this may be the first surgery when creating a pouch, or could be for Crohn\'s in the colon.'},
            {response: 2, label: 'Removal of rectum, with creation of the ileoanal pouch and diverting loop ileostomy (pouch created but stool coming out of an ostomy not the anus; often the second surgery when creating a pouch)'},
            {response: 3, label: 'Removal of ileostomy such that stool now flows through the GI tract directly to the pouch and comes out of the anus (restoring continuity of the GI tract)'},
            {response: 4, label: 'Total proctocolectomy with creation of the ileoanal pouch and diverting loop ileostomy (removing the whole colon and rectum, creating a pouch, and creating an ostomy where stool is coming out)'},
            {response: 5, label: 'Stricturoplasty (surgical repair of a stricture [narrowed or scarred area of the bowel] without removing any part of the intestine) - this does not include dilation of a stricture during endoscopy or colonoscopy'},
            {response: 6, label: 'Removal of part of the small intestine'},
            {response: 7, label: 'Removal of part of the small intestine and part of the attached colon'},
            {response: 8, label: 'Total proctocolectomy (surgical removal of the colon and rectum) with end ileostomy'},
            {response: 9, label: 'Subtotal colectomy (surgical removal of the colon) with the small bowel attached to the rectum'},
            {response: 10, label: 'Segmental colonic resection (removal of part, but not all, of the colon) with the new ends of the colon attached to each other (no ostomy- colon is in continuity)'},
            {response: 11, label: 'Repair of fistula near your anus or vagina'},
            {response: 12, label: 'Abscess drainage'},
            {response: 13, label: 'Not sure which IBD surgery I had'},
            {response: 14, label: 'Non IBD surgery, please specify:'}
        ],
        specify_choice: {response: 14, field_name: 'describe_other_surg'},
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'surg_fu', value: '1'}
    },
    {
        label: 'Did you experience post-operative complications?',
        element_type: 'yes_no',
        field_name: 'post_op_complications',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'surg_fu', value: '1'}
    },
    {
        label: 'Was this most recent surgery needed to fix a complication from a prior surgery?',
        element_type: 'yes_no',
        field_name: 'reoperation_needed',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'surg_fu', value: '1'}
    },
    {
        element_type: 'checkboxes',
        label: 'Since your last questionnaire, have you been diagnosed with any of the following pouch-related conditions?',
        field_start: 'dx_pouch_since_last',
        options: [
            {response: 1, label: 'Acute Pouchitis (inflammation of the pouch for less than 4 weeks duration that responded to a two-week course of antibiotics)'},
            {response: 2, label: 'Chronic Pouchitis (inflammation of the pouch lasting for 4 weeks or longer, requiring long term antibiotics)'},
            {response: 3, label: 'Cuffitis (inflammation of the remaining rectum, also called the cuff)'},
            {response: 4, label: 'Crohn\'s-like disease of the pouch or Crohn\'s disease in the ileum (small bowel) that connects to the pouch'},
            {response: 5, label: 'Irritable pouch syndrome (symptoms related to the pouch, such as diarrhea, pain, or bloating, but no active inflammation)'},
            {response: 999, label: 'I don\'t know the name'},
            {response: 555, label: 'Other pouch-related conditions, please specify:'},
            {response: 0, label: 'No, I haven\'t been diagnosed with any of the above'}
        ],
        specify_choice: {response: 555, field_name: 'other_pouch_inflammatory'},
        none_response: 0,
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'surg_fu', value: '1'},
            {any_checked: ['what_surgery___2', 'what_surgery___3', 'what_surgery___4']}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'What medications are you currently receiving for any of those pouch-related conditions?',
        field_start: 'meds_pouch_inflamma',
        options: [
            {response: 1, label: 'Topical (rectal) mesalamine or 5-ASA therapy (e.g. enema, suppository)'},
            {response: 2, label: 'Steroid topical therapy (e.g. enema, foam, suppository)'},
            {response: 3, label: 'Oral antibiotic(s), such as metronidazole (Flagyl), ciprofloxacin, amoxicillin - clavulanic acid (Augmentin), rifaximin (Xifaxan)'},
            {response: 4, label: 'Oral probiotics (e.g. VSL #3)'},
            {response: 5, label: 'Oral steroids (budesonide [Entocort or Uceris] or prednisone)'},
            {response: 6, label: 'Biologics or small molecules'},
            {response: 12, label: 'Tacrolimus (Prograf)'},
            {response: 7, label: 'Immunomodulator (eg. 6MP/azathioprine/methotrexate)'},
            {response: 8, label: 'Antidiarrheal medications (e.g. loperamide [Imodium], Atropine / Diphenoxylate [Lomotil], tincture of opium)'},
            {response: 9, label: 'Tricyclic antidepressant (e.g. amitriptyline [Elavil], imipramine [Tofranil], nortriptyline [Pamelor]'},
            {response: 10, label: 'Topical treatment (e.g. lidocaine gel)'},
            {response: 555, label: 'Other, please specify:'},
            {response: 0, label: 'None of the above'}
        ],
        specify_choice: {response: 555, field_name: 'other_inflamm_pouch_trt'},
        none_response: 0,
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'surg_fu', value: '1'},
            {any_checked: ['what_surgery___2', 'what_surgery___3', 'what_surgery___4']},
            {any_checked: ['dx_pouch_since_last___1', 'dx_pouch_since_last___2', 'dx_pouch_since_last___3', 'dx_pouch_since_last___4', 'dx_pouch_since_last___5', 'dx_pouch_since_last___999', 'dx_pouch_since_last___555']}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Please specify which type(s) of biologics or small molecules:',
        field_start: 'biologic_type',
        options: [
            {response: 1, label: 'Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)'},
            {response: 2, label: 'Adalimumab (Humira)'},
            {response: 6, label: 'Golimumab (Simponi)'},
            {response: 7, label: 'Certolizumab pegol (Cimzia)'},
            {response: 4, label: 'Ustekinumab (Stelara)'},
            {response: 11, label: 'Risankizumab (Skyrizi)'},
            {response: 9, label: 'Natalizumab (Tysabri)'},
            {response: 5, label: 'Vedolizumab (Entyvio)'},
            {response: 3, label: 'Tofacitinib (Xeljanz)'},
            {response: 8, label: 'Upadacitinib (Rinvoq)'},
            {response: 10, label: 'Ozanimod (Zeposia)'}
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'surg_fu', value: '1'},
            {any_checked: ['what_surgery___2', 'what_surgery___3', 'what_surgery___4']},
            {any_checked: ['dx_pouch_since_last___1', 'dx_pouch_since_last___2', 'dx_pouch_since_last___3', 'dx_pouch_since_last___4', 'dx_pouch_since_last___5', 'dx_pouch_since_last___999', 'dx_pouch_since_last___555']},
            {field_name: 'meds_pouch_inflamma___6', value: '1'}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Since your last questionnaire, have you started any new medications?',
        field_name: 'started_new_meds',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Which medications have you started since your last questionnaire?',
        field_start: 'start_meds',
        options: [
            {response: 1, label: 'Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)'},
            {response: 2, label: 'Adalimumab (Humira)'},
            {response: 3, label: 'Golimumab (Simponi)'},
            {response: 4, label: 'Certolizumab pegol (Cimzia)'},
            {response: 6, label: 'Ustekinumab (Stelara)'},
            {response: 25, label: 'Risankizumab (Skyrizi)'},
            {response: 7, label: 'Natalizumab (Tysabri)'},
            {response: 9, label: 'Vedolizumab (Entyvio)'},
            {response: 14, label: 'Tofacitinib (Xeljanz)'},
            {response: 23, label: 'Upadacitinib (Rinvoq)'},
            {response: 24, label: 'Ozanimod (Zeposia)'},
            {response: 8, label: 'Tacrolimus (Prograf)'},
            {response: 10, label: 'Ciprofloxacin (Cipro)'},
            {response: 11, label: 'Metronidazole (Flagyl)'},
            {response: 20, label: 'Amoxicillin - Clavulanic acid (Augmentin)'},
            {response: 21, label: 'Rifaximin (Xifaxan)'},
            {response: 5, label: 'Cyclosporine'},
            {response: 12, label: 'Azathioprine or 6MP (Imuran, Azasan, Purinethol, 6-Mercaptopurine)'},
            {response: 13, label: 'Methotrexate'},
            {response: 15, label: 'Oral corticosteroids (Budesonide (Entocort or Uceris), Prednisone)'},
            {response: 16, label: 'Topical (rectal) steroids (Uceris foam, cortifoam, or hydrocortisone enema, suppositories)'},
            {response: 17, label: '5-ASA / Mesalamine Oral (Apriso, Lialda, Pentasa, Asacol, Delzicol)'},
            {response: 18, label: 'Topical (rectal) 5-ASA / Mesalamine Suppositories or enemas (Canasa, Rowasa)'},
            {response: 555, label: 'Other, please specify:'}
        ],
        specify_choice: {response: 555, field_name: 'list_other_medications'},
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'started_new_meds', value: '1'}
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)',
        field_name: 'start_date_med_1',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___1', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Adalimumab (Humira)',
        field_name: 'start_date_med_2',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___2', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Golimumab (Simponi)',
        field_name: 'start_date_med_3',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___3', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Certolizumab pegol (Cimzia)',
        field_name: 'start_date_med_4',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___4', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Ustekinumab (Stelara)',
        field_name: 'start_date_med_6',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___6', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Risankizumab (Skyrizi)',
        field_name: 'start_date_med_skyrizi',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___25', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Natalizumab (Tysabri)',
        field_name: 'start_date_med_7',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___7', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Vedolizumab (Entyvio)',
        field_name: 'start_date_med_9',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___9', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Tofacitinib (Xeljanz)',
        field_name: 'start_date_med_xeljanz',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___14', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Upadacitinib (Rinvoq)',
        field_name: 'start_date_med_rinvoq',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___23', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Ozanimod (Zeposia)',
        field_name: 'start_date_med_zeposia',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___24', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Tacrolimus (Prograf)',
        field_name: 'start_date_med_tacr_fu',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___8', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Ciprofloxacin (Cipro)',
        field_name: 'start_date_med_cipro',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___10', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Metronidazole (Flagyl)',
        field_name: 'start_date_med_flag',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___11', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Amoxicillin - Clavulanic acid (Augmentin)',
        field_name: 'start_date_med_augment',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___20', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Rifaximin (Xifaxan)',
        field_name: 'start_date_med_rifx',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___21', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Cyclosporine',
        field_name: 'start_date_med_cyclo',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___5', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Azathioprine or 6MP (Imuran, Azasan, Purinethol, 6-Mercaptopurine)',
        field_name: 'start_date_med_aza',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___12', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of Methotrexate',
        field_name: 'start_date_med_mtx',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___13', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of oral corticosteroids (Budesonide (Entocort or Uceris), Prednisone)',
        field_name: 'start_date_med_steroids',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___15', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of topical (rectal) steroids (Uceris foam, cortifoam, or hydrocortisone enema, suppositories)',
        field_name: 'start_date_med_top_steroids',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___16', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of 5-ASA / Mesalamine Oral (Apriso, Lialda, Pentasa, Asacol, Delzicol)',
        field_name: 'start_date_med_asa',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___17', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of topical (rectal) 5-ASA / Mesalamine Suppositories or enemas (Canasa, Rowasa)',
        field_name: 'start_date_med_asa_enema',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___18', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate START date of other medications',
        field_name: 'start_date_med_other',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'started_new_meds', value: '1'},
            {field_name: 'start_meds___555', value: '1'}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Since your last questionnaire, have you stopped any medications?',
        field_name: 'stopped_meds',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Which medications have you stopped since your last questionnaire?',
        field_start: 'stop_meds',
        options: [
            {response: 1, label: 'Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)'},
            {response: 2, label: 'Adalimumab (Humira)'},
            {response: 3, label: 'Golimumab (Simponi)'},
            {response: 4, label: 'Certolizumab pegol (Cimzia)'},
            {response: 5, label: 'Ustekinumab (Stelara)'},
            {response: 25, label: 'Risankizumab (Skyrizi)'},
            {response: 6, label: 'Natalizumab (Tysabri)'},
            {response: 7, label: 'Vedolizumab (Entyvio)'},
            {response: 14, label: 'Tofacitinib (Xeljanz)'},
            {response: 23, label: 'Upadacitinib (Rinvoq)'},
            {response: 24, label: 'Ozanimod (Zeposia)'},
            {response: 8, label: 'Tacrolimus (Prograf)'},
            {response: 9, label: 'Ciprofloxacin (Cipro)'},
            {response: 10, label: 'Metronidazole (Flagyl)'},
            {response: 20, label: 'Amoxicillin - Clavulanic acid (Augmentin)'},
            {response: 21, label: 'Rifaximin (Xifaxan)'},
            {response: 11, label: 'Cyclosporine'},
            {response: 12, label: 'Azathioprine or 6MP (Imuran, Azasan, Purinethol, 6-Mercaptopurine)'},
            {response: 13, label: 'Methotrexate'},
            {response: 15, label: 'Oral corticosteroids (Budesonide (Entocort or Uceris), Prednisone)'},
            {response: 16, label: 'Topical (rectal) steroids (Uceris foam, cortifoam, or hydrocortisone enema, suppositories)'},
            {response: 17, label: '5-ASA / Mesalamine Oral (Apriso, Lialda, Pentasa, Asacol, Delzicol)'},
            {response: 18, label: 'Topical (rectal) 5-ASA / Mesalamine Suppositories or enemas (Canasa, Rowasa)'},
            {response: 555, label: 'Other, please specify:'}
        ],
        specify_choice: {response: 555, field_name: 'list_medications_stop_other'},
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if: {field_name: 'stopped_meds', value: '1'}
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Infliximab (Remicade, Renflexis, Inflectra, Avsola, Ixifi)',
        field_name: 'stop_date_med_remi',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___1', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Adalimumab (Humira)',
        field_name: 'stop_date_med_ada',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___2', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Golimumab (Simponi)',
        field_name: 'stop_date_med_goli',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___3', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Certolizumab pegol (Cimzia)',
        field_name: 'stop_date_med_cert',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___4', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Ustekinumab (Stelara)',
        field_name: 'stop_date_med_stelara',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___5', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Risankizumab (Skyrizi)',
        field_name: 'stop_date_med_skyrizi',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___25', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Natalizumab (Tysabri)',
        field_name: 'stop_date_med_nata',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___6', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Vedolizumab (Entyvio)',
        field_name: 'stop_date_med_vedo',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___7', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Tofacitinib (Xeljanz)',
        field_name: 'stop_date_med_tofa',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___14', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Upadacitinib (Rinvoq)',
        field_name: 'stop_date_med_rinvoq',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___23', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Ozanimod (Zeposia)',
        field_name: 'stop_date_med_zeposia',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___24', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Tacrolimus (Prograf)',
        field_name: 'stop_date_med_tacro',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___8', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Ciprofloxacin (Cipro)',
        field_name: 'stop_date_med_cipro',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___9', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Metronidazole (Flagyl)',
        field_name: 'stop_date_med_flagyl',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___10', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Amoxicillin - Clavulanic acid (Augmentin)',
        field_name: 'stop_date_med_augmentin',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___20', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Rifaximin (Xifaxan)',
        field_name: 'stop_date_med_rifax',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___21', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Cyclosporine',
        field_name: 'stop_date_med_cyclo',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___11', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Azathioprine or 6MP (Imuran, Azasan, Purinethol, 6-Mercaptopurine)',
        field_name: 'stop_date_med_aza',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___12', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of Methotrexate',
        field_name: 'stop_date_med_mtx',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___13', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of oral corticosteroids (Budesonide (Entocort or Uceris), Prednisone)',
        field_name: 'stop_date_med_orl_strds',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___15', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of topical (rectal) steroids (Uceris foam, cortifoam, or hydrocortisone enema, suppositories)',
        field_name: 'stop_date_med_top_strds',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___16', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of 5-ASA / Mesalamine Oral (Apriso, Lialda, Pentasa, Asacol, Delzicol)',
        field_name: 'stop_date_med_asa_oral',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___17', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of topical (rectal) 5-ASA / Mesalamine Suppositories or enemas (Canasa, Rowasa)',
        field_name: 'stop_date_med_asa_enema',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___18', value: '1'}
        ]
    },
    {
        element_type: 'date',
        label: 'Please indicate STOP date of other medications',
        field_name: 'stop_date_med_other',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_all: [
            {field_name: 'stopped_meds', value: '1'},
            {field_name: 'stop_meds___555', value: '1'}
        ]
    },
    {
        element_type: 'checkboxes',
        label: 'Since your last questionnaire, has a doctor or healthcare provider told you that you have any of the following?',
        field_start: 'sti_since_last_followup',
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
        none_response: 0,
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for gonorrhea?',
        field_name: 'treat_sti_1',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___1'
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for bacterial vaginosis?',
        field_name: 'treat_sti_2',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___2'
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for genital herpes?',
        field_name: 'treat_sti_3',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___3'
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for HIV?',
        field_name: 'treat_sti_4',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___4'
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for chlamydia?',
        field_name: 'treat_sti_5',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___5'
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for yeast infection?',
        field_name: 'treat_sti_6',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___6'
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for syphilis?',
        field_name: 'treat_sti_7',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___7'
    },
    {
        element_type: 'yes_no',
        label: 'Did you receive treatment for pelvic inflammatory disease?',
        field_name: 'treat_sti_8',
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ],
        show_if_checked: 'sti_since_last_followup___8'
    },
    {
        element_type: 'header',
        label: 'Section 5: NIH PROMIS Global Health Questionnaire',
        show_if_any: [
            {field_name: 'fu_status', value: '1'},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', value: '0'}
            ]}
        ]
    },
    {
        element_type: 'header',
        label: 'Section 3: NIH PROMIS Global Health Questionnaire',
        show_if: {field_name: 'fu_status', value: '3'}
    },
    {
        element_type: 'header',
        label: 'Section 2: NIH PROMIS Global Health Questionnaire',
        show_if_all: [
            {field_name: 'fu_status', value: '4'},
            {field_name: 'preg_last_fu', value: '1'}
        ]
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
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
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
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
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
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
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
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
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
        ],
        show_if_any: [
            {field_name: 'fu_status', values: ['1', '3']},
            {all: [
                {field_name: 'fu_status', value: '4'},
                {field_name: 'preg_last_fu', values: ['0', '1']}
            ]}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Were you attempting to conceive last month?',
        field_name: 'attempting_last_month',
        show_if: {field_name: 'fu_status', value: '2'}
    },
    {
        element_type: 'radio_buttons',
        label: 'Can you please advise as to why you are no longer trying to get pregnant?',
        field_name: 'advise_no_longer_trying',
        options: [
            {label: 'I have been sick from my IBD', value: '1'},
            {label: 'My partner and I decided this is not the right time for us', value: '2'},
            {label: 'Other, please describe reason:', value: '555'},
            {label: 'I choose not to respond', value: '777'}
        ],
        specify_choice: {response: '555', field_name: 'reason_no_longer_trying'},
        show_if_all: [
            {field_name: 'fu_status', value: '2'},
            {field_name: 'attempting_last_month', value: '1'}
        ]
    },
    {
        element_type: 'descriptive',
        label: 'Thank you for participating in the study. We appreciate your contribution.',
        show_if_all: [
            {field_name: 'fu_status', value: '2'},
            {field_name: 'attempting_last_month', value: '1'}
        ]
    },
    {
        element_type: 'descriptive',
        label: 'Thank you for participating in the study. We will follow up next month.',
        show_if_all: [
            {field_name: 'fu_status', value: '2'},
            {field_name: 'attempting_last_month', value: '0'}
        ]
    },
    {
        element_type: 'header',
        label: 'Opt out from study',
        show_if: {field_name: 'fu_status', value: '6'}
    },
    {
        element_type: 'radio_buttons',
        label: '',
        field_name: 'opt_out_details',
        options: [
            {label: 'I would like to opt out of the survey this month. Please send me a survey again next month.', value: '1'},
            {label: 'I would like to opt out of the study entirely.', value: '2'}
        ],
        show_if: {field_name: 'fu_status', value: '6'}
    },
    {
        element_type: 'text',
        label: 'Thank you for your participation. Can you please advise as to why you are no longer interested in participating in this study?',
        instructions: 'Write NA if you choose not to repsond',
        field_name: 'thank_you_for_your_partici',
        show_if_all: [
            {field_name: 'fu_status', value: '6'},
            {field_name: 'opt_out_details', value: '2'}
        ]
    },
    {
        element_type: 'text',
        label: 'We would be grateful to hear about your experience as a participant in this study. Please share with us any feedback that you may have:',
        instructions: 'Write NA if you choose not to repsond',
        field_name: 'we_would_be_grateful',
        show_if_all: [
            {field_name: 'fu_status', value: '6'},
            {field_name: 'opt_out_details', value: '2'}
        ]
    }
]
