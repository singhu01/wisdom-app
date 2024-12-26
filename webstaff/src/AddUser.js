import React, { useState, useEffect } from 'react';
import { Button, Grid, Input, InputLabel, Modal, Typography, styled } from '@mui/material';
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    ListSubheader,
    TextField,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";

const FormControlStyled = styled(FormControl)(({ theme }) => ({
    width: "280px",
    height: "34px",
    marginTop: "6px",
}));

const SearchInputStyled = styled(TextField)(({ theme }) => ({
    paddingLeft: "0px",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
}));
const ListSubheaderStyled = styled(ListSubheader)(({ theme }) => ({
    backgroundColor: "white",
    borderBottom: "1px solid #e0e0e0",
    paddingLeft: "0px",
    height: "30px",
}));

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
    color: "black",
    padding: "10px",
    height: "30px",
}));

const Placeholder = styled("span")(({ theme }) => ({
    color: "#9e9e9e",
}));

const bikeOptions = [
    { id: 1, name: "KTM" },
    { id: 2, name: "Yamaha" },
    { id: 3, name: "Bajaj" },
];

const containsText = (text, searchText) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const AddUser = ({ isOpen, onClose, onUserAdded, value, onSelectChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [name, setName] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedOption, setSelectedOption] = useState(value || "");
    const [selectedInstitute, setSelectedInstitute] = useState('');
    const [institutes, setInstitutes] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState('');
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        if (isOpen) {
            resetForm();
        }
    }, [isOpen]);

    const resetForm = () => {
        setName('');
        setSelectedOption('');
        setSelectedRoles('');
        setSelectedInstitute('');
        setSearchText('');
        setSuggestions([]);
    };
    
    const handleChange = (event) => {
        setSelectedInstitute(event.target.value);
    };

    const handleRoleChange = (event) => {
        setSelectedRoles(event.target.value);
    }
    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);

        setSearchTerm(value);

        if (value.length >= 3) {
            fetchSuggestions(value);
        } else {
            setSuggestions([]);
            setShowDropdown(false);
        }
    };

    const handleSelectChange = (event) => {
        const value = event.target.value.userPrincipalName;
        const name = event.target.value.givenName;
        setName(name);
        setSelectedOption(value);
        if (onSelectChange) {
            onSelectChange(value);
        }
    };

    const handleInputClick = (event) => {
        event.stopPropagation();
    };

    const fetchSuggestions = async () => {
        try {
            
            const response = await fetch(`./api/get_users_on_search.php`);
            const res = await response.json();
            setSuggestions(res);
            setInstitutes(res.registry_site);
            setRoles(res.roles);
            setShowDropdown(true);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setShowDropdown(false);
        }
    };

    let displayedOptions = [];
    if (suggestions && Array.isArray(suggestions.users)) {
        displayedOptions = suggestions.users.filter((option) => {
            return option.userPrincipalName && containsText(option.userPrincipalName.toLowerCase(), searchText.toLowerCase());
        });

    } else {
        console.error("suggestion is undefined or not an array:", suggestions);
    }

    const selectRoles = roles.filter((option) => {
        return option.name;
    })

    const selectInsitutes = institutes.filter((item) => {
        return item.site_name;
    })

    const handleAddUser = async () => {
        const data = {
            'username': selectedOption,
            'roles': selectedRoles,
            'name': name,
            'registry_id': selectedInstitute
        };

        try {
            const result = await fetch('./api/add_user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const userResult = await result.json();
            console.log(userResult);
    
            if (userResult.success) {
                alert('User added successfully!');
                onUserAdded(); 
                onClose();
            } else {
                if (userResult.message === 'All fields are required') {
                    alert('Please fill in all required fields.');
                } else if (userResult.message === 'Username already exists') {
                    alert('Username already exists!');
                } else {
                    alert('Error: ' + userResult.message);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred.');
        }
    };
    


return (
    <Modal open={isOpen} >
        <Grid style={{ width: '76%', height: 400, marginTop: '130px', fontFamily: 'sans-serif', marginLeft: '220px', padding: 56, background: 'white', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
            <Grid style={{ color: 'black', fontSize: 20, fontWeight: '600', width: '200px', wordWrap: 'break-word' }}>Select User</Grid>
            <Grid style={{ width: '100px', height: 46, position: 'relative' }}>
                <Grid style={{ left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                    <Grid style={{ color: 'rgba(0, 0, 0, 0.90)', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Email ID</Grid>
                    <FormControlStyled variant="outlined" fullWidth>
                        <Select
                            displayEmpty
                            size="small"
                            MenuProps={{ autoFocus: false }}
                            id="search-select"
                            label="Select"
                            onChange={handleSelectChange}
                            onClose={() => setSearchText("")}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected === "") {
                                    return <Placeholder>Select</Placeholder>;
                                }
                                return selected?.userPrincipalName;
                            }}
                        >
                            <ListSubheaderStyled>
                                <SearchInputStyled
                                    size="small"
                                    autoFocus
                                    placeholder="Search..."
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        ),
                                    }}
                                    onClick={handleInputClick}
                                    onChange={handleInputChange}
                                    onKeyDown={(e) => {
                                        if (e.key !== "Escape") {
                                            e.stopPropagation();
                                        }
                                    }}
                                />
                            </ListSubheaderStyled>
                            {displayedOptions?.map((option) => (
                                <MenuItemStyled key={option.id} value={option}>
                                    {option.userPrincipalName}
                                </MenuItemStyled>
                            ))}
                        </Select>
                    </FormControlStyled>
                </Grid>
                <Grid style={{ left: '390px', top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
                    <Grid style={{ color: 'rgba(0, 0, 0, 0.90)', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Name/ ID</Grid>
                    <Grid style={{ width: 285, height: 46, position: 'relative' }}>
                        <Grid style={{ width: 235, height: 46, paddingLeft: 16, paddingRight: 16, paddingTop: 18, paddingBottom: 18, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 1px 4px rgba(24.73, 32.61, 60.56, 0.08)', borderRadius: 6, border: '1px #6D758F solid' }} />
                        <Grid style={{ left: 19, top: 15, position: 'absolute', color: 'black', fontSize: 16, fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }} value={name}>{name}</Grid>
                    </Grid>
                </Grid>
                <Grid style={{ width: 378, height: 46, left: '740px', top: 0, position: 'absolute' }}>
                    <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                        <InputLabel style={{ color: 'rgba(0, 0, 0, 0.80)', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Institute</InputLabel>
                        <Select
                            value={selectedInstitute}
                            onChange={handleChange}
                            style={{
                                marginLeft: '15px',
                                width: 340,
                                height: 46,
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
                            {selectInsitutes?.map((option) => (
                                <MenuItemStyled value={option.id}>
                                    {option.site_name}
                                </MenuItemStyled>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ width: '75%', height: 116, left: '150px', position: 'relative', background: 'linear-gradient(90deg, #FDD6EE 0%, #FBF6FF 51%, #DCE6FB 100%)', borderRadius: 20, backdropFilter: 'blur(20px)' }}>
                <Grid style={{ left: 24, top: 22, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
                    <Grid style={{ width: 52, height: 49, position: 'relative' }}>
                        <Grid style={{ width: 52, height: 49, left: 0, top: 0, position: 'absolute', background: '#221F73', borderRadius: 9999 }} />
                        <Grid style={{ width: 32, height: 15, left: 10, top: 17, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>PP</Grid>
                    </Grid>
                    <Grid style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <Grid style={{ color: '#221F73', fontSize: 18, fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}><Typography>{name}</Typography></Grid>
                        <Grid style={{ color: 'black', fontSize: 14, fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>{selectedOption}</Grid>
                    </Grid>
                </Grid>
                <Grid style={{ width: 403, height: 44, left: 439, top: 25, position: 'absolute' }}>
                    <InputLabel style={{ left: 0, top: 12, position: 'absolute', color: 'rgba(0, 0, 0, 0.90)', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}>Assign Role</InputLabel>
                    <Select
                        value={selectedRoles}
                        onChange={handleRoleChange}
                        style={{
                            marginLeft: '100px',
                            width: 260,
                            height: 46,
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
                        {selectRoles?.map((option) => (
                            <MenuItemStyled value={option.id}>
                                {option.name}
                            </MenuItemStyled>
                        ))}
                    </Select>
                </Grid>
            </Grid>
            <Grid style={{ width: 254, height: 56, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                <Grid style={{ width: 101, padding: 4, background: '#D80C8C', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Grid style={{ paddingLeft: 16, paddingRight: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                        <Button style={{ color: '#E9E9F1', fontSize: 20, fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }} onClick={handleAddUser}>Add</Button>
                    </Grid>
                </Grid>
                <Grid style={{ width: 129, padding: 4, borderRadius: 10, border: '1px solid', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Grid style={{ paddingLeft: 16, paddingRight: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                        <Button style={{ color: '#221F73', fontSize: 20, fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }} onClick={onClose}>Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Modal>
);
}
export default AddUser;