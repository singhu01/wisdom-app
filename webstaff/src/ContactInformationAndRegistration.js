export const contactInformationAndRegistrationElements = [
    {label: 'Registration date', element_type: 'date', field_name: 'date_registration'},
    {label: 'First name:', element_type: 'text', field_name: 'screening_first_name'},
    {label: 'Last name:', element_type: 'text', field_name: 'screening_last_name'},
    {label: 'Phone number:', element_type: 'phone', field_name: 'screening_phone_1'},
    {label: 'Phone number (optional):', element_type: 'phone', field_name: 'screening_phone_2', optional: true},
    {label: 'Email', element_type: 'text', field_name: 'screening_email'},
    {label: 'Preferred method of contact:', element_type: 'radio_buttons', field_name: 'screening_prefermethod',
            options: [
                {label: 'Email', value: '1'},
                {label: 'Phone', value: '2'}
            ]
    }
]
