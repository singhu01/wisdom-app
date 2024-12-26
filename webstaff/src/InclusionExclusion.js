export const inclusionExclusionElements = [
    {
        element_type: 'yes_no',
        field_name: 'is_female_rs',
        label: 'Was the subject assigned female at birth?'
    },
    {
        element_type: 'yes_no',
        field_name: 'is_18_or_older_rs',
        label: 'Is the subject 18 years of age or older?'
    },
    {
        element_type: 'yes_no',
        field_name: 'is_45_or_younger_rs',
        label: 'Is the subject 45 years old or younger?'
    },
    {
        element_type: 'yes_no',
        field_name: 'has_ibd_diagnosis_rs',
        label: 'Has the subject been diagnosed with Inflammatory Bowel Disease (IBD)'
    },
    {
        element_type: 'yes_no',
        field_name: 'was_uterus_removed_rs',
        label: 'Has the subject had her uterus surgically removed?'
    },
    {
        element_type: 'yes_no',
        field_name: 'is_currently_pregnant_rs',
        label: 'Is the subject currently pregnant?',
        show_if: {field_name: 'was_uterus_removed_rs', value: '0'}
    },
    {
        element_type: 'yes_no',
        field_name: 'is_planning_pregnancy_rs',
        label: 'Is the subject planning to become pregnant within the next 18 months',
        show_if_all: [
            {field_name: 'was_uterus_removed_rs', value: '0'},
            {field_name: 'is_currently_pregnant_rs', value: '0'}
        ]
    },
    {
        element_type: 'yes_no',
        field_name: 'any_other_condition_which',
        label: 'Is there any other condition which may compromise appropriate completion of the study, per the investigator\'s judgment?'
    },
    {
        element_type: 'yes_no',
        field_name: 'inability_or_unwillingness',
        label: 'Is there an inability or unwillingness to provide written informed consent?'
    }
]
