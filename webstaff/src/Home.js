import React from 'react';
import $ from 'jquery';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./Home.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import "primeicons/primeicons.css";
import { PageHeader } from './PageHeader';
import { FilledPDF } from './FilledPDF';
import { RTLForm } from './RTLForm';
import { inclusionExclusionElements } from "./InclusionExclusion";
import { consentElements } from "./Consent";
import { baselinePatientElements } from "./BaselinePatient";
import { monthlyFollowUpElements } from "./MonthlyFollowUp";
import { contactInformationAndRegistrationElements } from "./ContactInformationAndRegistration";
import Header from './Header';
import { InputText } from 'primereact/inputtext';
import { Grid, Input, InputLabel, Select, MenuItem, styled } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
    color: "black",
    padding: "10px",
    height: "30px",
}));

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            view: 'Welcome',
            screeningSelectedRecord: null,
            registrantViewVisible: false,
            registrationFormVisible: false,
            registrationFormData: {},
            inclusionExclusionFormVisible: false,
            inclusionExclusionFormData: {},
            consentFormVisible: false,
            consentFormData: {},
            baselinePatientFormVisible: false,
            monthlyFollowUpFormVisible: false,
            searchQuery: '',
            registrants: [],
            institutes: [],
            selectedInstitute: '',
            first: 0,
            rows: 20,
            selectedInstitute: '',
            editMode: false,
            editedRecord: { data: {} },
            selectedSource: '',
            view: 'Site',
            sortField: 'id',
            sortOrder: -1,
        };
    }

    componentDidMount() {
        this.getRegistrants();
        this.fetchInstitutes();
        this.fetchUserData();
    }

    fetchUserData = () => {
        $.post("./api/get_user.php", {}, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.setState({
                        isLoaded: true,
                        username: response.data.username,
                        is_study_coordinator: response.data.is_study_coordinator,
                        is_reviewer: response.data.is_reviewer
                    });
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        this.setState({ searchQuery: query });
    };

    handleInstituteChange = (event) => {
        const selectedInstitute = event.target.value;
        this.setState({ selectedInstitute });
    };

    handleEditClick = (field, value) => {
        this.setState(prevState => {
            let newState = {
                editMode: true,
                editedRecord: {
                    ...prevState.editedRecord,
                    data: {
                        ...prevState.editedRecord.data,
                        [field]: value
                    }
                }
            };
            if (field === 'how_heard') {
                const selectedOption = prevState.sourceOptions.find(option => option.site_name === value);
                if (selectedOption) {
                    newState.selectedSource = selectedOption.site_id;
                }
            }

            return newState;
        });
    };

    handleGetEditClick = () => {
        this.setState((prevState) => ({
            editMode: true,
            editedRecord: { ...prevState.screeningSelectedRecord }
        }));
    };

    handleEditChange = (field, value) => {
        this.setState(prevState => {
            let newState = {
                editMode: true,
                editedRecord: {
                    ...prevState.editedRecord,
                    data: {
                        ...prevState.editedRecord.data,
                        [field]: value,
                    }
                }
            };

            if (field === 'how_heard') {
                if (value === 'Other') {
                    newState.editedRecord.data.how_heard = 'Other';
                } else {
                    const { sourceOptions } = newState;
                    if (sourceOptions && sourceOptions.length > 0) {
                        const selectedOption = sourceOptions.find(option => option.site_id === value);
                        if (selectedOption) {
                            newState.editedRecord.data.how_heard = selectedOption.site_name;
                        } else {
                            console.error('Selected site_id not found in sourceOptions:', value);
                        }
                    } else {
                        console.error('sourceOptions is empty or undefined');
                    }
                }

                if (newState.editedRecord.data.how_heard !== 'Other') {
                    newState.editedRecord.data.other_source = null;
                }

                newState.selectedInstitute = value;
            }

            return newState;
        });
    };


    fetchInstitutes = async () => {
        try {
            const response = await fetch('./api/get_site.php');
            const data = await response.json();

            const { roleId, registrySiteId } = this.props;

            let filteredInstitutes = data;

            if (roleId == 2) {
                filteredInstitutes = data.filter(inst => inst.id === registrySiteId);
            }
            const institutesWithOthers = [
                ...filteredInstitutes,
                { site_name: 'Other', id: 'Other' }
            ];
            
            this.setState({
                institutes: institutesWithOthers,
                sourceOptions: institutesWithOthers.map(inst => ({
                    site_name: inst.site_name,
                    site_id: inst.id
                })),
                selectedInstitute: institutesWithOthers.length > 0 ? institutesWithOthers[0].id : ''
            });
        } catch (error) {
            console.error('Error fetching institutes:', error);
        }
    };

    getFilteredRegistrants() {
        const { registrants, searchQuery, selectedInstitute, institutes } = this.state;
        if (!Array.isArray(institutes) || institutes.length === 0) {
            return [];
        }

        return registrants.filter(registrant => {
            const firstNameMatches = registrant.screening_first_name
                ? registrant.screening_first_name.toLowerCase().includes(searchQuery.toLowerCase())
                : false;

            const lastNameMatches = registrant.screening_last_name
                ? registrant.screening_last_name.toLowerCase().includes(searchQuery.toLowerCase())
                : false;

            const matchesSearch = firstNameMatches || lastNameMatches;
            let matchesInstitute = false;
            if (selectedInstitute == 'Other') {
                matchesInstitute = registrant.how_heard && registrant.how_heard.trim().toLowerCase() === 'other';
            }
            else if (selectedInstitute.endsWith('+ Other')) {
                matchesInstitute = registrant.registry_site_id === selectedInstitute.replace(' + Other', '') ||
                    (registrant.how_heard && registrant.how_heard.trim().toLowerCase() === 'other');
            }
            else if (selectedInstitute !== 'Other' && registrant.registry_site_id == 1) {
                if (registrant.how_heard !== 'Other') {
                    matchesInstitute = registrant.registry_site_id === selectedInstitute;
                }
            }
            else {
                matchesInstitute = registrant.registry_site_id === selectedInstitute;

            }
            return matchesSearch && matchesInstitute;
        });
    }

    handleRowClick = (record) => {
        this.setState({
            screeningSelectedRecord: record,
            editedRecord: { ...record },
            registrantViewVisible: true,
            editMode: false
        });
    };

    handleGetEditClick = () => {
        this.setState((prevState) => ({
            editMode: true,
            editedRecord: { ...prevState.screeningSelectedRecord }
        }));
    };

    // handleEditChange = (field, value) => {
    //     this.setState(prevState => ({
    //         editMode: true,
    //         editedRecord: {
    //             ...prevState.editedRecord, data: {
    //                 ...prevState.editedRecord.data,
    //                 [field]: value
    //             }
    //         }
    //     }));
    // };

    onHide = (field) => () => {
        this.setState({
            [field]: false,
            screeningSelectedRecord: null,
            editMode: false
        });
    };
    validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[0-9]{0,10}$/;
        return phoneRegex.test(phoneNumber);
    };

    handleSave = () => {
        const { editedRecord, registrants, selectedInstitute, sourceOptions } = this.state;
        const { screening_phone_1, screening_phone_2, screening_first_name, screening_last_name, screening_email } = editedRecord.data;
    
        const phoneRegex = /^(?:\(\d{3}\) \d{3}-\d{4}|\d{10})$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!screening_first_name || screening_first_name.trim() === '') {
            alert('First name is required.');
            return;
        }
    
        if (!screening_last_name || screening_last_name.trim() === '') {
            alert('Last name is required.');
            return;
        }
    
        if (!phoneRegex.test(screening_phone_1)) {
            alert('Invalid phone number format for the primary phone number.');
            return;
        }
    
        if (screening_phone_2 && !phoneRegex.test(screening_phone_2)) {
            alert('Invalid phone number format for the optional phone number.');
            return;
        }
    
        if (!screening_email || !emailRegex.test(screening_email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        const updatedData = {
            id: editedRecord.data.id,
            screening_first_name: editedRecord.data.screening_first_name,
            screening_last_name: editedRecord.data.screening_last_name,
            screening_phone_1: editedRecord.data.screening_phone_1,
            screening_phone_2: editedRecord.data.screening_phone_2,
            screening_email: editedRecord.data.screening_email,
        };
    
        updatedData.how_heard = editedRecord.data.how_heard;
    
        if (editedRecord.data.how_heard === 'Other' && editedRecord.data.other_source) {
            updatedData.other_source = editedRecord.data.other_source;
        }
    
        const selectedSite = sourceOptions.find(option => option.site_name === editedRecord.data.how_heard);
        if (selectedSite) {
            updatedData.registry_site_id = selectedSite.site_id;
        }
    
        fetch('./api/save_contact_info.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    const updatedRegistrants = registrants.map(registrant =>
                        registrant.id === updatedData.id ? { ...registrant, ...updatedData } : registrant
                    );
    
                    this.setState({
                        registrants: updatedRegistrants,
                        screeningSelectedRecord: { ...updatedData },
                        editMode: false,
                        registrantViewVisible: false,
                        editedRecord: { data: {} },
                    });
                } else {
                    if (data.message && data.message === 'Email is already taken.') {
                        alert('The email address is already taken. Please use a different one.');
                    } else {
                        alert('Error: ' + data.error);
                    }
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };   

    handlePageChange = (event) => {
        this.setState({
            first: event.first,
            rows: event.rows
        });
    };

    render() {
        const { institutes, view, selectedInstitute, sortField, sortOrder, screeningSelectedRecord, editMode, editedRecord, registrantViewVisible, sourceOptions } = this.state;
        if (this.state.isLoaded) {
            switch (view) {
                case 'Site':

                    return (
                        <div style={{ backgroundColor: "white", textAlign: "left", fontFamily: 'sans-serif', margin: "20px", fontSize: "14pt" }}>
                            <Grid style={{ height: 86, left: 35, top: 138, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}></Grid>
                            <Grid style={{ color: '#666666', fontSize: 18, fontWeight: '300', lineHeight: 5, wordWrap: 'break-word' }}>Dashboard <span> / </span>
                                <span style={{ color: 'rgba(33, 39, 42, 0.70)', fontSize: 18, fontWeight: '600' }}>Participants List</span>
                                <Grid style={{ width: 20, height: 20, paddingLeft: 6, paddingRight: 6, paddingTop: 2, marginLeft: 7, paddingBottom: 2, background: '#221F73', borderRadius: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                    <Tooltip title="Click to register patient" arrow
                                        placement="top"
                                        PopperProps={{
                                            modifiers: [
                                                {
                                                    name: 'offset',
                                                    options: {
                                                        offset: [0, -5]
                                                    }
                                                }
                                            ]
                                        }}
                                    >
                                        <span
                                            style={{ color: 'white', fontSize: 18, fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }}
                                            onClick={this.onClickRegisterPatient}
                                        >
                                            +
                                        </span>
                                    </Tooltip>
                                </Grid>
                                <span style={{ color: 'white', background: 'rgb(34, 31, 115)', fontSize: 20, fontWeight: '500', marginLeft: 6, textTransform: 'capitalize', wordWrap: 'break-word', cursor: 'pointer' }} onClick={this.onClickRegisterPatient}>
                                    Add Participant
                                </span>
                                <Grid style={{ width: 378, height: 46, left: '630px', top: 125, position: 'absolute' }}>
                                    <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                        <InputLabel style={{ color: 'rgba(0, 0, 0, 0.80)', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Institute</InputLabel>
                                        <Select
                                            labelId="institute-select-label"
                                            value={selectedInstitute}
                                            onChange={this.handleInstituteChange}
                                            style={{
                                                marginLeft: '15px',
                                                width: 350,
                                                height: 40,
                                                background: 'white',
                                                boxShadow: '0px 1px 4px rgba(24.73, 32.61, 60.56, 0.08)',
                                                borderRadius: 6,
                                                border: '1px #6D758F solid',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                gap: 10,
                                                display: 'inline-flex'
                                            }}
                                        >
                                            {institutes.map((option) => (
                                                <MenuItem key={option.id} value={option.id}>
                                                    {option.site_name}
                                                </MenuItem>
                                            ))}

                                            {!institutes.some((option) => option.site_name == 'Other') && (
                                                <MenuItem key="Other" value="Other">
                                                    Other
                                                </MenuItem>
                                            )}

                                            {institutes.map((option) => (
                                                option.site_name !== 'Other' && (
                                                    <MenuItem key={`${option.id}-Other`} value={`${option.id} + Other`}>
                                                        {`${option.site_name} + Other`}
                                                    </MenuItem>
                                                )
                                            ))}
                                        </Select>
                                    </Grid>
                                </Grid>
                                <Paper
                                    component="form"
                                    sx={{
                                        p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, border: '2px #C1C7CD', float: 'right',
                                        marginRight: '90px', width: '280px', marginTop: '20px', border: '1px solid #C1C7CD'
                                    }}
                                >
                                    <SearchIcon />
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={this.handleSearchChange}
                                    />
                                </Paper>
                            </Grid>

                            <DataTable className={"p-datatable"}
                                value={this.getFilteredRegistrants()}
                                selection={this.state.screeningSelectedRecord}
                                selectionMode="multiple"
                                onRowSelect={this.handleRowClick}
                                onSelectionChange={this.viewRegistrant}
                                paginator
                                rows={this.state.rows}
                                first={this.state.first}
                                onPage={this.handlePageChange}
                                rowsPerPageOptions={[10, 20, 30]}
                                sortField={sortField}
                                sortOrder={sortOrder}
                            >
                                <Column
                                    className={"p-datatable-thead"}
                                    field="id"
                                    header="ID"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="screening_last_name"
                                    header="Last Name"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="screening_first_name"
                                    header="First Name"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="date_registration"
                                    header="Registration Date"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="is_eligible"
                                    header="Eligible?"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="was_self_registered"
                                    header="Self-registered?"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="date_patient_baseline"
                                    header="Baseline Patient Date"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="date_monthly_followup"
                                    header="Last Follow-Up Date"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                                <Column
                                    field="next_followup_date"
                                    header="Next Follow-Up Date"
                                    sortable={true}
                                    filter={true}
                                    filterMatchMode="contains"
                                />
                            </DataTable>
                            {/* <div><Button className={"p-button"} style={{ backgroundColor: "hotpink", fontSize: "large" }} label="Register Patient" onClick={this.onClickRegisterPatient} /></div>
                            <div><Button className={"p-button"} style={{ backgroundColor: "hotpink", fontSize: "large" }} label="User Management" onClick={this.onClickRedirect} /></div> */}
                            {registrantViewVisible && (
                                <Dialog
                                    header="Registrant"
                                    visible={registrantViewVisible}
                                    onHide={this.onHide('registrantViewVisible')}
                                    closable={true}
                                    baseZIndex={0}>
                                    <table>
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            <tr>
                                                <td className={"question"}>Self-screening on:</td>
                                                <td>
                                                    {new Date(this.getValue('screeningSelectedRecord', 'self_screening_entry_on')).toLocaleDateString()}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            <tr>
                                                <td className={"question"}>Were you assigned female at birth, such as on an original birth certificate?</td>
                                                <td>
                                                    {this.getYesNo('screeningSelectedRecord', 'is_female')}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            <tr>
                                                <td className={"question"}>Are you 18 years of age or older?</td>
                                                <td>
                                                    {this.getYesNo('screeningSelectedRecord', 'is_18_or_older')}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            <tr>
                                                <td className={"question"}>Are you 45 years old or younger?</td>
                                                <td>
                                                    {this.getYesNo('screeningSelectedRecord', 'is_45_or_younger')}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            <tr>
                                                <td className={"question"}>Have you been diagnosed with inflammatory bowel disease (IBD) (like ulcerative colitis or Crohn's disease)?</td>
                                                <td>
                                                    {this.getYesNo('screeningSelectedRecord', 'has_ibd_diagnosis')}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            <tr>
                                                <td className={"question"}>Have you had your uterus surgically removed?</td>
                                                <td>
                                                    {this.getYesNo('screeningSelectedRecord', 'was_uterus_removed')}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            this.getValue('screeningSelectedRecord', 'was_uterus_removed') === '0' &&
                                            <tr>
                                                <td className={"question"}>Are you currently pregnant?</td>
                                                <td>
                                                    {this.getYesNo('screeningSelectedRecord', 'is_currently_pregnant')}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            this.getValue('screeningSelectedRecord', 'was_uterus_removed') === '0' &&
                                            this.getValue('screeningSelectedRecord', 'is_currently_pregnant') === '0' &&
                                            <tr>
                                                <td className={"question"}>Do you have a desire to become pregnant within the next 18 months? </td>
                                                <td>
                                                    {this.getYesNo('screeningSelectedRecord', 'is_planning_pregnancy')}
                                                </td>
                                            </tr>
                                        }
                                        {this.getValue('screeningSelectedRecord', 'was_self_registered') === 'Yes' &&
                                            <tr>
                                                <td className={"question"}>How did you hear about us?</td>
                                                <td>
                                                    {editMode ? (
                                                        <>
                                                            <select
                                                                style={{ height: '46px', border: '1px solid #ced4da', borderRadius: '5px' }}
                                                                value={editedRecord.data.how_heard || ''}  
                                                                onChange={(e) => this.handleEditChange('how_heard', e.target.value)}  
                                                            >
                                                                {sourceOptions.map((option) => (
                                                                    <option key={option.site_id} value={option.site_name}> 
                                                                        {option.site_name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            {editedRecord.data.how_heard === 'Other' && (
                                                                <div style={{ marginTop: '10px' }}>
                                                                    <InputText
                                                                        id="other_source"
                                                                        value={editedRecord.data.other_source || ''}
                                                                        onChange={(e) => this.handleEditChange('other_source', e.target.value)}
                                                                    />
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        this.getValue('screeningSelectedRecord', 'how_heard')
                                                    )}
                                                </td>
                                            </tr>
                                        }
                                        <tr>
                                            <td className={"question"}>First name:</td>
                                            <td>
                                                {editMode ? (
                                                    <InputText
                                                        value={editedRecord.data.screening_first_name || ''}
                                                        onChange={(e) => this.handleEditChange('screening_first_name', e.target.value)}
                                                    />
                                                ) : (
                                                    this.getValue('screeningSelectedRecord', 'screening_first_name')
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"question"}>Last name:</td>
                                            <td>
                                                {editMode ? (
                                                    <InputText
                                                        value={editedRecord.data.screening_last_name || ''}
                                                        onChange={(e) => this.handleEditChange('screening_last_name', e.target.value)}
                                                    />
                                                ) : (
                                                    this.getValue('screeningSelectedRecord', 'screening_last_name')
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"question"}>Phone number:</td>
                                            <td>
                                                {editMode ? (
                                                    <InputText
                                                        value={editedRecord.data.screening_phone_1 || ''}
                                                        onChange={(e) => this.handleEditChange('screening_phone_1', e.target.value)}
                                                    />
                                                ) : (
                                                    this.getValue('screeningSelectedRecord', 'screening_phone_1')
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"question"}>Phone number (optional):</td>
                                            <td>
                                                {editMode ? (
                                                    <InputText
                                                        value={editedRecord.data.screening_phone_2 || ''}
                                                        onChange={(e) => this.handleEditChange('screening_phone_2', e.target.value)}
                                                    />
                                                ) : (
                                                    this.getValue('screeningSelectedRecord', 'screening_phone_2')
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"question"}>Email address:</td>
                                            <td>
                                                {editMode ? (
                                                    <InputText
                                                        value={editedRecord.data.screening_email || ''}
                                                        onChange={(e) => this.handleEditChange('screening_email', e.target.value)}
                                                    />
                                                ) : (
                                                    this.getValue('screeningSelectedRecord', 'screening_email')
                                                )}
                                            </td>
                                        </tr>
                                        {/* {this.getValue('screeningSelectedRecord', 'check_for_non_patient') === 'Yes' &&
                                            <tr>
                                                <td>
                                                    Is this woman a patient at your site? If not, her information will be reassigned to Mount Sinai for further action.
                                                </td>
                                                <td>
                                                    <Button className={"p-button"} style={{ backgroundColor: "hotpink", fontSize: "large" }} label="Yes" onClick={this.onClickIsPatient('f')} />
                                                    <Button className={"p-button"} style={{ backgroundColor: "hotpink", fontSize: "large" }} label="No" onClick={this.onClickIsPatient('t')} />
                                                </td>
                                            </tr>
                                        } */}
                                    </table>
                                    {this.getValue('screeningSelectedRecord', 'check_for_non_patient') === 'No' &&
                                        <table>
                                            {this.getValue('screeningSelectedRecord', 'is_eligible') === 'Pending' &&
                                                <tr>
                                                    <td>Inclusion Exclusion:</td>
                                                    <td>
                                                        <Button className="p-button-sm" label="Start" onClick={this.onClickInclusionExclusionForm} />
                                                    </td>
                                                </tr>
                                            }
                                            {this.getValue('screeningSelectedRecord', 'inclusion_exclusion_date') !== '' &&
                                                <tr>
                                                    <td>Inclusion Exclusion:</td>
                                                    <td>
                                                        Completed {this.getValue('screeningSelectedRecord', 'inclusion_exclusion_date')}
                                                        <Button className="p-button-sm" label="View" link onClick={this.onClickInclusionExclusionForm} />
                                                    </td>
                                                </tr>
                                            }

                                            {this.getValue('screeningSelectedRecord', 'consent_date') === '' &&
                                                <tr>
                                                    <td>Consent:</td>
                                                    <td>
                                                        <Button className="p-button-sm" label="Document" onClick={this.onClickConsentForm} />
                                                    </td>
                                                </tr>
                                            }
                                            {this.getValue('screeningSelectedRecord', 'consent_date') !== '' &&
                                                <tr>
                                                    <td>Consent:</td>
                                                    <td>
                                                        Completed: {this.getValue('screeningSelectedRecord', 'consent_date')}
                                                        <br />
                                                        Method: {this.getValue('screeningSelectedRecord', 'consent_method')}
                                                        <br />
                                                        Version: {this.getValue('screeningSelectedRecord', 'consent_version')}
                                                    </td>
                                                </tr>
                                            }
                                            {this.getValue('screeningSelectedRecord', 'is_eligible') === 'Awaiting review' && this.state.is_reviewer === '1' &&
                                                <tr>
                                                    <td>
                                                        Based on your review, is this woman eligible for the study?
                                                    </td>
                                                    <td>
                                                        <Button className={"p-button"} style={{ backgroundColor: "hotpink", fontSize: "large" }} label="Yes" onClick={this.onClickReview('t')} />
                                                        <Button className={"p-button"} style={{ backgroundColor: "hotpink", fontSize: "large" }} label="No" onClick={this.onClickReview('f')} />
                                                    </td>
                                                </tr>
                                            }
                                            {this.getValue('screeningSelectedRecord', 'reviewed_on') !== '' &&
                                                <tr>
                                                    <td>Reviewed on:</td>
                                                    <td>
                                                        {this.getValue('screeningSelectedRecord', 'reviewed_on')}
                                                    </td>
                                                </tr>
                                            }
                                            {this.getValue('screeningSelectedRecord', 'is_eligible') === 'No' &&
                                                <tr>
                                                    <td colspan="2">
                                                        This woman is not eligible for the study.
                                                    </td>
                                                </tr>
                                            }
                                            {this.getValue('screeningSelectedRecord', 'is_eligible') === 'Yes' &&
                                                <tr>
                                                    <td>Baseline Patient:</td>
                                                    {this.getValue('screeningSelectedRecord', 'baseline_patient_id') === '' &&
                                                        <td>
                                                            Not completed
                                                        </td>
                                                    }
                                                    {this.getValue('screeningSelectedRecord', 'baseline_patient_id') !== '' &&
                                                        <td>
                                                            Completed {this.getValue('screeningSelectedRecord', 'date_patient_baseline')}
                                                            <Button className="p-button-sm" label="View" link onClick={this.onClickBaselinePatientForm} />
                                                        </td>
                                                    }
                                                </tr>
                                            }
                                            {this.state.screeningSelectedRecord.map((res) => {
                                                res['monthly_followup'].map((row) => {
                                                    return (
                                                        <tr key={row.questionnaire_id}>
                                                            <td>Monthly Follow-Up {row.survey_sequence}:</td>
                                                            {row.monthly_followup_id === null &&
                                                                <td>Due {row.due_on}</td>
                                                            }
                                                            {row.monthly_followup_id !== null &&
                                                                <td>
                                                                    Completed {row.completed_on}
                                                                    <Button className="p-button-sm" label="View" link onClick={this.onClickMonthlyFollowUpForm(row.monthly_followup_id)} />
                                                                </td>
                                                            }
                                                        </tr>
                                                    );
                                                });
                                            })}
                                        </table>
                                    }
                                    {editMode ? (
                                        <>
                                            <Button onClick={this.handleSave}>Save</Button>
                                            <Button onClick={() => this.setState({ editMode: false })} style={{ marginLeft: '5px' }}>Cancel</Button>
                                        </>
                                    ) : (
                                        <Button onClick={this.handleEditClick}>Edit</Button>
                                    )}
                                    {this.getValue('screeningSelectedRecord', 'consent_method') === 'Electronic' &&
                                        <div style={{ marginTop: "15px" }}>
                                            <Accordion>
                                                <AccordionTab header="Click here to view signed consent document.">
                                                    <FilledPDF consentFormData={this.getScreeningSelectedRecord(this.state.screeningSelectedRecord)} />
                                                </AccordionTab>
                                            </Accordion>
                                        </div>
                                    }
                                </Dialog>
                            )}
                            {this.state.registrationFormVisible &&
                                <Dialog
                                    header="Registrant"
                                    visible={this.state.registrationFormVisible}
                                    onHide={this.onHide('registrationFormVisible')}
                                    closable={true}
                                    contentStyle={{ maxHeight: 700, overflow: 'scroll' }}
                                    baseZIndex={1}>
                                    <RTLForm
                                        elements={contactInformationAndRegistrationElements}
                                        onSubmit={this.processRegistrationByCoordinator}
                                        data={{}} />
                                </Dialog>
                            }
                            {this.state.inclusionExclusionFormVisible &&
                                <Dialog
                                    header="Inclusion Exclusion"
                                    visible={this.state.inclusionExclusionFormVisible}
                                    onHide={this.onHide('inclusionExclusionFormVisible')}
                                    closable={true}
                                    style={{ width: '1200px' }}
                                    contentStyle={{ maxHeight: '700px', overflow: 'scroll' }}
                                    baseZIndex={2}>
                                    <RTLForm
                                        elements={inclusionExclusionElements}
                                        onSubmit={this.processInclusionExclusion}
                                        data={this.state.inclusionExclusionFormData} />
                                </Dialog>
                            }
                            {this.state.consentFormVisible &&
                                <Dialog
                                    header="Consent"
                                    visible={this.state.consentFormVisible}
                                    onHide={this.onHide('consentFormVisible')}
                                    closable={true}
                                    style={{ width: '1200px' }}
                                    contentStyle={{ maxHeight: '700px', overflow: 'scroll' }}
                                    baseZIndex={3}>
                                    <RTLForm
                                        elements={consentElements}
                                        onSubmit={this.processConsent}
                                        data={this.state.consentFormData}
                                        consentFormVisible={this.state.consentFormVisible}
                                        />
                                </Dialog>
                            }
                            {this.state.baselinePatientFormVisible &&
                                <Dialog
                                    header="Baseline Patient"
                                    visible={this.state.baselinePatientFormVisible}
                                    onHide={this.onHide('baselinePatientFormVisible')}
                                    closable={true}
                                    contentStyle={{ maxHeight: 700, overflow: 'scroll' }}
                                    baseZIndex={4}>
                                    <RTLForm
                                        elements={baselinePatientElements}
                                        viewOnly={true}
                                        data={this.state.formData} />
                                </Dialog>
                            }
                            {this.state.monthlyFollowUpFormVisible &&
                                <Dialog
                                    header="Monthly Follow-Up"
                                    visible={this.state.monthlyFollowUpFormVisible}
                                    onHide={this.onHide('monthlyFollowUpFormVisible')}
                                    closable={true}
                                    contentStyle={{ maxHeight: 700, overflow: 'scroll' }}
                                    baseZIndex={5}>
                                    <RTLForm
                                        elements={monthlyFollowUpElements}
                                        viewOnly={true}
                                        data={this.state.formData} />
                                </Dialog>
                            }
                        </div>
                    );
                // break;
                default:
                    return (
                        <div style={{ backgroundColor: "white", textAlign: "left", margin: "20px", fontSize: "14pt" }}>
                            <PageHeader />
                            <div style={{ marginTop: "15px" }}>
                                Welcome to the <span style={{ color: "#f285b2" }}>Women with IBD and Motherhood (WIsDoM) Study Page</span> for staff.
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                You are currently logged in as {this.state.username}.
                            </div>
                            <div style={{ marginTop: "25px", textAlign: "center" }}>
                                <Button className={"p-button"} style={{ backgroundColor: "hotpink", fontSize: "large" }} label="Enter" onClick={this.onClickSite} />
                            </div>
                        </div>
                    );
            }
        }
        else {
            return (<div>Loading...</div>);
        }
    }

    getRegistrants = () => {
        const { roleId, registrySiteId } = this.props;

        if (!roleId || !registrySiteId) {
            console.log("Role ID or Registry Site ID is missing.");
            return;
        }

        console.log("roleId", roleId);
        console.log("registrySiteId", registrySiteId);

        $.post('./api/get_registrants.php', { roleId, registrySiteId }, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                } else if (response.status === 0) {
                    console.log("Response:", response);

                    const registrant_obj = response.data.map(JSON.stringify);
                    const registrant_set = new Set(registrant_obj);
                    let filteredRegistrants = Array.from(registrant_set).map(JSON.parse);

                    if (roleId == 2) {
                        filteredRegistrants = filteredRegistrants.filter((registrant) => {
                            return registrant.registry_site_id === registrySiteId;
                        });

                        const otherRegistrants = response.data.filter((registrant) => registrant.how_heard === 'Other');
                        filteredRegistrants = [...filteredRegistrants, ...otherRegistrants];
                    }

                    filteredRegistrants = Array.from(new Set(filteredRegistrants.map(a => a.id)))
                        .map(id => filteredRegistrants.find(a => a.id === id));

                    console.log("Filtered Registrants", filteredRegistrants);

                    this.setState({
                        view: 'Site',
                        registrationFormVisible: false,
                        inclusionExclusionFormVisible: false,
                        consentFormVisible: false,
                        registrantViewVisible: false,
                        registrants: filteredRegistrants,
                        screeningSelectedRecord: null
                    });
                } else {
                    this.error_alert(response.error_message);
                }
            } catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    };



    error_alert = (error_message) => {
        if (error_message.indexOf('ERROR:') === 0) {
            error_message = error_message.substr(7);
            if (error_message.indexOf('CONTEXT:') > -1) {
                error_message = error_message.substr(0, error_message.indexOf('CONTEXT:'));
            }
        }
        alert(error_message);
    }

    getValue = (dataSource, fieldName) => {
        var record;
        this.state[dataSource].map((items) => {
            record = items;
            return record;
        })
        if (record === null || record === undefined || record[fieldName] === null || record[fieldName] === undefined) {
            return '';
        }

        return record[fieldName];
    }

    getYesNo = (dataSource, fieldName) => {
        let record = this.state[dataSource];
        if (record === null || record === undefined || record[fieldName] === null || record[fieldName] === undefined) {
            return '';
        }

        switch (record[fieldName]) {
            case '1':
                return 'Yes';
            // break;
            case '0':
                return 'No';
            // break;
            default:
                return '';
        }
    }

    onClickBaselinePatientForm = (e) => {
        $.post('./api/get_baseline_patient.php', { id: this.getValue('screeningSelectedRecord', 'baseline_patient_id') }, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.setState({
                        baselinePatientFormVisible: true,
                        formData: response.data
                    });
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    onClickConsentForm = (e) => {
        let resultItems;
        this.state.screeningSelectedRecord.map((items) => {
            resultItems = items;
            return resultItems;
        });
        let data = {
            id: resultItems.id,
            consent_method: resultItems.consent_method,
            consent_version: resultItems.consent_version
        }
        this.setState({
            consentFormVisible: true,
            consentFormData: data
        });
    }

    onClickInclusionExclusionForm = (e) => {
        let resultItems;
        this.state.screeningSelectedRecord.map((items) => {
            resultItems = items;
            return resultItems;
        });
        let data = {
            id: resultItems.id,
            // inclusion_exclusion_entry_on: this.state.screeningSelectedRecord.inclusion_exclusion_entry_on,
            is_female_rs: resultItems.is_female_rs,
            is_18_or_older_rs: resultItems.is_18_or_older_rs,
            is_45_or_younger_rs: resultItems.is_45_or_younger_rs,
            has_ibd_diagnosis_rs: resultItems.has_ibd_diagnosis_rs,
            was_uterus_removed_rs: resultItems.was_uterus_removed_rs,
            is_currently_pregnant_rs: resultItems.is_currently_pregnant_rs,
            is_planning_pregnancy_rs: resultItems.is_planning_pregnancy_rs,
            any_other_condition_which: resultItems.any_other_condition_which,
            inability_or_unwillingness: resultItems.inability_or_unwillingness
        }
        this.setState({
            inclusionExclusionFormVisible: true,
            inclusionExclusionFormData: data
        });
    }

    getScreeningSelectedRecord = (screeningSelectedRecord) => {
        var result;
        screeningSelectedRecord.map((items) => {
            result = items;
        });
        return result;
    }

    onClickIsPatient = (was_transferred) => (e) => {
        e.preventDefault();
        let postData = {
            id: this.state.screeningSelectedRecord.id,
            was_transferred: was_transferred,
            transferred_from: (was_transferred === 't' ? this.getValue('screeningSelectedRecord', 'registry_site_id') : null),
        };
        $.post("./api/save_is_patient.php", postData, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.getRegistrants();
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    onClickMonthlyFollowUpForm = (id) => (e) => {
        $.post('./api/get_monthly_followup.php', { id: id }, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.setState({
                        monthlyFollowUpFormVisible: true,
                        formData: response.data
                    });
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    onClickRegisterPatient = (e) => {
        this.setState({
            registrationFormVisible: true,
            registrationFormData: {}
        });
    }
    onClickRedirect = (e) => {

    }

    onClickReview = (was_approved) => (e) => {
        e.preventDefault();
        let postData = {
            id: this.state.screeningSelectedRecord.id,
            was_approved: was_approved
        };
        $.post("./api/save_review.php", postData, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.getRegistrants();
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    onClickSite = (e) => {
        e.preventDefault();
        this.getRegistrants();
    }

    processBaselineCoordinator = (formData) => {
        alert('In progress');
    }

    processConsent = (formData) => {
        console.log(formData);
        $.post("./api/save_consent.php", formData, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.getRegistrants();
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    processInclusionExclusion = (formData) => {
        console.log(formData);
        $.post("./api/save_inclusion_exclusion.php", formData, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.getRegistrants();
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    onHide = (prop) => (e) => {
        this.setState({ [prop]: false });
    }

    processRegistrationByCoordinator = (formData) => {
        const { registrySiteId } = this.props;
        const updatedFormData = {
            ...formData,
            registry_site_id: registrySiteId,
        };

        const email = formData.screening_email;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email || !emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        $.post("./api/save_registrant.php", updatedFormData, function (response) {
            try {
                if (typeof response !== 'object' || response === null) {
                    console.log(response);
                    alert('API call failed.');
                }
                else if (response.status === 0) {
                    this.getRegistrants();
                }
                else {
                    this.error_alert(response.error_message);
                }
            }
            catch (err) {
                alert('Error occurred: ' + err);
            }
        }.bind(this), "json");
    }

    viewRegistrant = (e) => {
        this.setState({
            screeningSelectedRecord: e.value,
            registrantViewVisible: true
        });
    }
}
