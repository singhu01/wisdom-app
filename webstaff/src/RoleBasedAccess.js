import React, { useEffect, useState } from 'react';
import { Grid, InputLabel, Select, MenuItem, FormControl, Paper, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ToggleSwitch from './RadioButton'; 

const RoleBasedAccess = () => {
    const [roles, setRoles] = useState([]);
    const [screens, setScreens] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [toggleStates, setToggleStates] = useState({});
    const [adminToggleState, setAdminToggleState] = useState(false);

    const disabledScreens = ["2", "5"]
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await fetch('./api/get_roles.php');
                const rolesData = await response.json();
                setRoles(rolesData);
                if (rolesData.length > 0) {
                    setSelectedRole(rolesData[0].id);
                }
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };

        fetchRoles();
    }, []);

    useEffect(() => {
        const fetchScreens = async () => {
            if (selectedRole) {
                try {
                    const response = await fetch(`./api/get_role_permissions.php?role_id=${selectedRole}`);
                    const screensData = await response.json();
                    setScreens(screensData);

                    const initialToggleStates = {};
                    screensData.forEach(screen => {
                        initialToggleStates[`${selectedRole}-${screen.screen_id}`] = screen.has_permission === 't';
                    });
                    setToggleStates(initialToggleStates);

                } catch (error) {
                    console.error('Error fetching screens:', error);
                }
            }
        };

        fetchScreens();
    }, [selectedRole]);

    useEffect(() => {
        if (selectedRole === 'admin') {
            const allChecked = adminToggleState;
            const updatedStates = {};
            screens.forEach((screen, index) => {
                updatedStates[`${selectedRole}-${screen.screen_id}`] = allChecked;
                if (index === 0) {
                    updatedStates[`${selectedRole}-${screen.screen_id}`] = allChecked;
                }
            });
            setToggleStates(updatedStates);
        }
    }, [adminToggleState, selectedRole, screens]);

    const handleRoleChange = (event) => {
        const newRole = event.target.value;
        setSelectedRole(newRole);

        if (newRole === 'admin') {
            setAdminToggleState(true);
        } else {
            setAdminToggleState(false);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredScreens = screens.filter(item =>
        item.screen_title && item.screen_title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleToggleSwitchChange = (roleId, screenId) => (event) => {
        const isChecked = event.target.checked;
        setToggleStates(prev => ({
            ...prev,
            [`${roleId}-${screenId}`]: isChecked
        }));
    };

    const handleAdminToggleChange = (event) => {
        const isChecked = event.target.checked;
        setAdminToggleState(isChecked);
    };

    const handleSubmit = () => {
        const permissionsToUpdate = Object.keys(toggleStates).map(key => {
            const [roleId, screenId] = key.split('-');
            const isChecked = toggleStates[key];

        return {
            roleId: roleId,
            screenId: screenId,
            isChecked: isChecked,
        };
    });

        fetch('./api/role_permissions.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(permissionsToUpdate), 
        })
            .then(response => response.json())
            .then(results => {
                alert("Permissions updated successfully");
                console.log('All API requests successful:', results);
            })
            .catch(error => {
                console.error('Error with API requests:', error);
                alert('Failed to update. Please try again.');
            });
    };

    return (
        <Grid style={{ width: 1512, height: 1024, position: 'relative', background: 'white' }}>
            <Grid style={{ height: 86, left: 35, top: 138, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}></Grid>
            <Grid style={{ alignSelf: 'stretch', marginTop: '42px', marginLeft: 42 }}>
                <span style={{ color: 'black', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}></span>
                <span style={{ color: 'black', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600', wordWrap: 'break-word' }}></span>
            </Grid>
            <Grid style={{ marginLeft: 42, color: '#666666', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '300', lineHeight: 5, wordWrap: 'break-word' }}>Dashboard <span> / </span>
                <span style={{ color: 'rgba(33, 39, 42, 0.70)', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '600' }}>Roles</span>
                <Grid style={{ width: 403, height: 44, left: 800, top: 19, position: 'absolute' }}>
                    {/* <FormControl fullWidth>
                        <InputLabel style={{ left: 34, top: 20, position: 'absolute', color: 'rgba(0, 0, 0, 0.90)', fontSize: 23, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word' }}>Roles</InputLabel>
                        <Select
                            value={selectedRole}
                            onChange={handleRoleChange}
                            style={{
                                marginLeft: '100px',
                                width: 260,
                                height: 41,
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
                            {roles.map((role) => (
                                <MenuItem key={role.id} value={role.id}>
                                    {role.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> */}
                </Grid>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, border: '2px #C1C7CD', float: 'right',
                        marginRight: '47px', width: '280px', marginTop: '20px', border: '1px solid #C1C7CD'
                    }}
                >
                    <SearchIcon />
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </Paper>
            </Grid>
            <Grid style={{ width: 1441, left: 35, top: 85, position: 'absolute', borderRadius: 10, overflow: 'hidden', border: '1px #EAECF0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <Grid style={{ alignSelf: 'stretch', height: 48, background: '#1A1756', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>

                    <Grid style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <Grid style={{ alignSelf: 'stretch', height: 48, paddingLeft: 10, paddingRight: 10, paddingTop: 12, paddingBottom: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex' }}>
                                <Grid style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 20, letterSpacing: 0.28, wordWrap: 'break-word' }}>Screens</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <Grid style={{ alignSelf: 'stretch', height: 48, paddingLeft: 10, paddingRight: 10, paddingTop: 12, paddingBottom: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex' }}>
                                <Grid style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 20, letterSpacing: 0.28, wordWrap: 'break-word' }}> Research Staff</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {filteredScreens.length > 0 ? (
                    filteredScreens.map((item) => (
                        <Grid key={item.screen_id} style={{ alignSelf: 'stretch', height: 48, background: 'white', borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <Grid style={{ width: '665px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <Grid style={{ height: 48, paddingLeft: 10, paddingRight: 10, paddingTop: 12, paddingBottom: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                                    <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', marginRight: 252, gap: 6, display: 'inline-flex' }}>
                                        <Grid style={{ color: 'rgba(0, 0, 0, 0.70)', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '500', lineHeight: 20, letterSpacing: 0.28, wordWrap: 'break-word' }}>{item.screen_title}</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid style={{ width: 224, height: 48, paddingLeft: 80, paddingRight: 80, justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                                <Grid style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <Grid style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                        <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                            <Grid style={{ padding: 2, background: '#E9E9F1', borderRadius: 999, overflow: 'hidden', border: '1px #DEDDEA solid', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                                <ToggleSwitch
                                                    checked={toggleStates[`${selectedRole}-${item.screen_id}`] || false}
                                                    onChange={handleToggleSwitchChange(selectedRole, item.screen_id)}
                                                    disabled={disabledScreens.includes(item.screen_id)}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    ))
                ) : (
                    <Grid>No screens found</Grid>
                )}
            </Grid>
            <Button
                onClick={handleSubmit}
                style={{ marginTop: '228px', marginLeft: '36px' }}
                variant="contained"
                sx={{
                    backgroundColor: '#1A1756', 
                    color: 'white', 
                    '&:hover': {
                        backgroundColor: '#1A1756',
                    },
                }}
                disabled={adminToggleState}
            >
                Submit
            </Button>
        </Grid>
    );
};

export default RoleBasedAccess;
