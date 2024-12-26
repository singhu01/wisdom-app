import React, { useEffect, useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Modal, Typography, InputAdornment, ListSubheader, Select, TextField, styled } from '@mui/material';
const ListSubheaderStyled = styled(ListSubheader)(({ theme }) => ({
    backgroundColor: "white",
    borderBottom: "1px solid #e0e0e0",
    paddingLeft: "0px",
    height: "30px",
}));

const SearchInputStyled = styled(TextField)(({ theme }) => ({
    paddingLeft: "0px",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
}));

const EditUser = ({ isOpen, onClose, onUserEdited, editUserData }) => {
    const [institutes, setInstitutes] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [selectedInstitute, setSelectedInstitute] = useState('');
    const [selectedInstituteId, setSelectedInstituteId] = useState('');
    const [selectedRoles, setSelectedRoles] = useState('');
    const [selectedRoleId, setSelectedRoleId] = useState('');
    const [roles, setRoles] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(editUserData.username || '');
    const [selectedName, setSelectedName] = useState('');
    const [isUpdated, setIsUpdated] = useState(false);

    const containsText = (text, searchText) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

    useEffect(() => {
        if (isOpen && editUserData) {
            fetchInstitutes();
            setSelectedEmail(editUserData.username || '');
            setSelectedInstitute(editUserData.registry_site_name || '');
            setSelectedRoles(editUserData.role_name || '');
            setSelectedName(editUserData.name || '');
            setSelectedRoleId(editUserData.role_id || '');
            setSelectedInstituteId(editUserData.registry_id || '');
            setIsUpdated(false);
        }
    }, [isOpen, editUserData]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedEmail(value);
        setSearchText(value);
        if (value.length >= 3) {
            fetchInstitutes(value);
        } else {
            setSuggestions([]);
            setShowDropdown(false);
        }
        const selectedUser = suggestions.users.find((user) => user.userPrincipalName === value);
        if (selectedUser) {
            setSelectedName(selectedUser.givenName);
        } else {
            setSelectedName('');
        }
    };

    const handleInputClick = (event) => {
        event.stopPropagation();
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);
        setSearchTerm(value);

        if (value.length >= 3) {
            fetchInstitutes(value);
        } else {
            setSuggestions([]);
            setShowDropdown(false);
        }
    };

    const fetchInstitutes = async () => {
        try {
            const response = await fetch('./api/get_users_on_search.php');
            const data = await response.json();
            setSuggestions(data);
            setInstitutes(data.registry_site);
            setRoles(data.roles);
        } catch (error) {
            console.error('Error fetching institutes:', error);
        }
    };

    const handleUpdateUser = async () => {
        const data = {
            role_id: selectedRoleId,
            registry_id: selectedInstituteId,
            id: editUserData.id
        };

        try {
            const result = await fetch('./api/update_user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const userResult = await result.json();
            if (userResult.success) {
                alert('User updated successfully!');
                onUserEdited();
                onClose();
            } else {
                alert(userResult.message || 'Failed to update user.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    
    };

    const handleRoleChange = (event) => {
        const selectedRole = roles.find(role => role.name === event.target.value);
        if (selectedRole) {
            setSelectedRoles(selectedRole.name);
            setSelectedRoleId(selectedRole.id);
            setIsUpdated(true);
        }
    };

    const handleInstituteChange = (event) => {
        const selectedInstitute = institutes.find(institute => institute.site_name === event.target.value);
        if (selectedInstitute) {
            setSelectedInstitute(selectedInstitute.site_name);
            setSelectedInstituteId(selectedInstitute.id);
            setIsUpdated(true);
        }
    };

    const selectRoles = roles.filter((item) => {
        return item.name;
    });

    if (suggestions && Array.isArray(suggestions.users)) {
        var displayedOptions = suggestions.users.filter((option) =>
            containsText(option.userPrincipalName, searchText)
        );
    } else {
        console.error("suggestion is undefined or not an array:", suggestions);
    }

    if (!isOpen || !editUserData) return null;

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Grid
                style={{
                    width: "76%", height: 400, marginTop: "130px", fontFamily: 'sans-serif', marginLeft: "220px", padding: 56, background: "white", borderRadius: 10, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 24, display: "inline-flex",
                }}
            >
                <Grid style={{ color: "black", fontSize: 20,  fontWeight: "600", width: "100px", wordWrap: "break-word", }}>
                    Edit User
                </Grid>

                <Grid style={{ width: "100px", height: 46, position: "relative" }}>
                    <Grid
                        style={{ left: 0, top: 0, position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: 24, display: "inline-flex", }}
                    >
                        <Grid
                            style={{
                                color: "rgba(0, 0, 0, 0.90)", fontSize: 16,  fontWeight: "400", wordWrap: "break-word",
                            }}
                        >
                            Email ID
                        </Grid>
                        <Grid style={{
                            width: 205, height: 46, position: "relative",
                        }}>
                            <Grid style={{
                                width: 260, height: 46, paddingLeft: 16, paddingRight: 16, paddingTop: 18, paddingBottom: 18, left: 0, top: 0, position: "absolute", background: "white", boxShadow: "0px 1px 4px rgba(24.73, 32.61, 60.56, 0.08)", borderRadius: 6, border: "1px #6D758F solid",
                            }} />
                            <Grid style={{ left: 19, top: 15, position: "absolute", color: "black", fontSize: 16,  fontWeight: "400", letterSpacing: 0.5, wordWrap: "break-word", }}>
                                {selectedEmail}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid style={{ left: "390px", top: 0, position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: 24, display: "inline-flex", }}>
                        <Grid
                            style={{ color: "rgba(0, 0, 0, 0.90)", fontSize: 16,  fontWeight: "400", wordWrap: "break-word", }}
                        >
                            Name/ ID
                        </Grid>

                        <Grid style={{
                            width: 235, height: 46, position: "relative",
                        }}>
                            <Grid style={{
                                width: 230, height: 46, paddingLeft: 16, paddingRight: 16, paddingTop: 18, paddingBottom: 18, left: 0, top: 0, position: "absolute", background: "white", boxShadow: "0px 1px 4px rgba(24.73, 32.61, 60.56, 0.08)", borderRadius: 6, border: "1px #6D758F solid",
                            }} />
                            <Grid style={{ left: 19, top: 15, position: "absolute", color: "black", fontSize: 16,  fontWeight: "400", letterSpacing: 0.5, wordWrap: "break-word", }}>
                                {selectedName}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid style={{
                        width: 378, height: 46, left: "740px", top: 0, position: "absolute",
                    }}>
                        <Grid style={{
                            justifyContent: "flex-start", alignItems: "center", gap: 4, display: "inline-flex",
                        }}>
                            <Grid style={{
                                color: "rgba(0, 0, 0, 0.90)", fontSize: 16,  fontWeight: "400", wordWrap: "break-word",
                            }}>
                                Institute
                            </Grid>
                            <FormControl>
                                <Select
                                    labelId={selectedInstituteId}
                                    value={selectedInstitute}
                                    onChange={handleInstituteChange}
                                    placeholder="select institutes"
                                    style={{
                                        width: 365, height: 46, background: "white", boxShadow: "0px 1px 4px rgba(24.73, 32.61, 60.56, 0.08)", borderRadius: 6, border: "1px #6D758F solid",
                                    }}
                                >
                                    {institutes.map((institute) => (
                                        <MenuItem key={institute.id} value={institute.site_name}>
                                            {institute.site_name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid style={{
                    width: "75%", height: 116, left: "150px", position: "relative", background: "linear-gradient(90deg, #FDD6EE 0%, #FBF6FF 51%, #DCE6FB 100%)", borderRadius: 20, backdropFilter: "blur(20px)",
                }}>
                    <Grid style={{
                        left: 24, top: 24, position: "absolute", justifyContent: "center", alignItems: "center", gap: 20, display: "inline-flex",
                    }}>
                        <Grid style={{ width: 52, height: 49, position: "relative" }}>
                            <Grid style={{
                                width: 52, height: 49, left: 0, top: 0, position: "absolute", background: "#221F73", borderRadius: 9999,
                            }} />
                            <Grid style={{
                                width: 32, height: 15, left: 10, top: 17, position: "absolute", textAlign: "center", color: "white", fontSize: 20,  fontWeight: "500", letterSpacing: 0.5, wordWrap: "break-word",
                            }}></Grid>
                        </Grid>

                        <Grid style={{
                            flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 4, display: "inline-flex",
                        }}>
                            <Grid style={{
                                color: "#221F73", fontSize: 18,  fontWeight: "500", letterSpacing: 0.5, wordWrap: "break-word",
                            }}>
                                <Typography>{selectedEmail}</Typography>
                            </Grid>

                            <Grid style={{
                                color: "black", fontSize: 14,  fontWeight: "400", letterSpacing: 0.5, wordWrap: "break-word",
                            }}></Grid>
                        </Grid>
                    </Grid>

                    <Grid style={{
                        width: 403, height: 44, left: 439, top: 36, position: "absolute",
                    }}>
                        <FormControl>
                            <InputLabel
                                id="role_id"
                                style={{
                                    left: 0, top: 16.5, position: "absolute", color: "rgba(0, 0, 0, 0.90)", fontSize: 16,  fontWeight: "400", wordWrap: "break-word",
                                }}
                            >
                                Assign Role
                            </InputLabel>
                            <Select
                                labelId={selectedRoleId}
                                value={selectedRoles}
                                onChange={handleRoleChange}
                                style={{
                                    marginLeft: "100px", width: 260, height: 46, background: "white", boxShadow: "0px 1px 4px rgba(24.73, 32.61, 60.56, 0.08)", borderRadius: 6, border: "1px #6D758F solid",
                                }}
                            >
                                {roles.map((option) => (
                                    <MenuItem key={option.id} value={option.name}>{option.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid style={{ width: 254, height: 56, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                    <Grid style={{
                        width: 101, padding: 4, background: '#D80C8C', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'flex',
                    }}>
                        <Grid style={{
                            paddingLeft: 16, paddingRight: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex',
                        }}>
                            <Button
                                style={{
                                    color: '#E9E9F1', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word'
                                }}
                                onClick={handleUpdateUser}
                                disabled={!isUpdated}  // Disable button if not updated
                            >
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid style={{
                        width: 129, padding: 4, borderRadius: 10, border: '1px solid', justifyContent: 'center', alignItems: 'center', display: 'flex',
                    }}>
                        <Grid style={{
                            paddingLeft: 16, paddingRight: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex',
                        }}>
                            <Button
                                style={{
                                    color: '#221F73', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word'
                                }}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
};

export default EditUser;
