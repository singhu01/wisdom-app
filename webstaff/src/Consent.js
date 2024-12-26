export const consentElements = [
    {
        element_type: 'hidden',
        field_name: 'consent_method',
        value: 'Paper'
    },
    {
        element_type: 'hidden',
        field_name: 'agree_to_take_part',
        value: '1'
    },
    {
        element_type: 'descriptive',
        label: 'This form is used to document consent provided via paper. Electronic consent is captured automatically.',
    },
    {
        element_type: 'date',
        label: 'Consent date:',
        field_name: 'consent_date'
    },
    {
        element_type: 'radio_buttons',
        label: 'Consent version:',
        field_name: 'consent_version',
        options: [
            {label: '2023-09-11', value: '2023-09-11'},
            {label: '2022-09-22', value: '2022-09-22'}
        ]
    },
    {
        element_type: 'yes_no',
        label: 'Will you allow the researchers to store your data to use in current or future research studies?',
        field_name: 'allow_data_use'
    },
    {
        element_type: 'yes_no',
        label: 'Do you give the researchers permission to contact you in the future to collect additional information about you, discuss how your data might be used, or to discuss possible participation in another research project?',
        field_name: 'permission_to_contact',
        show_if: {field_name: 'allow_data_use', value: '1'}
    },
    {
        element_type: 'yes_no',
        label: 'Do you give the researchers permission to keep the data indefinitely and use them for future studies that are directly related to the purpose of the current study?',
        field_name: 'permission_to_use_data_directly_related',
        show_if: {field_name: 'allow_data_use', value: '1'}
    },
    {
        element_type: 'yes_no',
        label: 'Do you give the researchers permission to keep the data indefinitely and use them for future studies that are not related to the purpose of the current study (for example, a different area of research)?',
        field_name: 'permission_to_use_data_not_related',
        show_if: {field_name: 'allow_data_use', value: '1'}
    },
    {
        element_type: 'yes_no',
        label: 'Do you give permission to have portions of the data given to other researchers at Mount Sinai or other institutions for use in research that is either related or not related to the purpose of this study?',
        field_name: 'permission_to_give_data',
        show_if: {field_name: 'allow_data_use', value: '1'}
    }
]
