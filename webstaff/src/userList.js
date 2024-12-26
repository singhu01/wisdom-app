import React, { useEffect, useState } from 'react';
import AddUser from './AddUser';

import { Button, Grid, Paper, InputBase } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import EditUser from './EditUser';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import wisdomImage from './assets/wisdom-image 1.png';
import profile from './assets/profile.png';
import Header from './Header';
import Tooltip from '@mui/material/Tooltip';

function AdminPanel() {
    const [users, setUsers] = useState([]);
    const [isAddUserOpen, setIsAddUserOpen] = useState(false);
    const [isEditUserOpen, setIsEditUserOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [editUserData, setEditUserData] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortField, setSortField] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await fetch('./api/get_staff.php');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const user = await response.json();
            setUsers(user.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const openAddUserModal = () => {
        setIsAddUserOpen(true);
        setEditUserData('');
    };

    const closeAddUserModal = () => {
        setIsAddUserOpen(false);
    };

    const closeEditUserModal = () => {
        setIsEditUserOpen(false);
        setEditUserData('');
    };

    const handleSort = (field) => {
        const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(direction);

        const sortedUsers = [...users].sort((a, b) => {
            if (direction === 'asc') {
                return a[field] > b[field] ? 1 : -1;
            } else {
                return a[field] < b[field] ? 1 : -1;
            }
        });

        setUsers(sortedUsers);
    };

    const handleAddUser = async () => {
        await fetchUsers();
    };

    const handleEditUser = async (id) => {
        const response = await fetch(`./api/get_edit_user.php?id=${id}`);
        const userData = await response.json();
        setEditUserData(userData);
        setIsEditUserOpen(true);
    };

    const handleFetchEditUser = async () => {
        await fetchUsers();
        closeEditUserModal();
    };

    const handleDeleteUser = async (userId) => {
        if (!userId) return;

        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (!confirmed) return;

        try {
            const response = await fetch('./api/delete_user.php', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: userId }),
            });

            const data = await response.json();
            if (response.ok) {
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            alert(`Fetch error: ${error.message}`);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
     
       <Grid style={{ width: '100%', height: 1024, position: 'relative', fontFamily: 'sans-serif', background: 'white' }}>
                <Grid style={{ width: 1381, height: 69, left: 65, top: 57, position: 'absolute' }}>
                    <Grid style={{ width: 1381, left: 0, top: 0, position: 'absolute' }}><span style={{ color: 'black', fontSize: 14,  fontWeight: '400', wordWrap: 'break-word' }}></span><span style={{ color: 'black', fontSize: 18,  fontWeight: '600', wordWrap: 'break-word' }}></span></Grid>
                </Grid>
                <Grid style={{ width: 1381, height: 40, left: 55, top: 92, position: 'absolute' }}>
                    <Grid style={{ left: 0, top: 9, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                        <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                            <Grid style={{ width: 15, height: 15, position: 'relative', transformOrigin: '0 0', paddingBottom:"22px" }}>
                               {/* <NavigateBeforeSharpIcon  style={{color:"#6D758F"}}/> */}
                            </Grid>
                            <Grid style={{ color: '#666666', fontSize: 18,  fontWeight: '300', wordWrap: 'break-word'}}>Dashboard </Grid>
                            <Grid style={{ color: '#666666', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>/</Grid>
                            <Grid style={{ color: 'rgba(33, 39, 42, 0.70)', fontSize: 18,  fontWeight: '500', wordWrap: 'break-word' }}>Users</Grid>
                        </Grid>
                        <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                            <Grid style={{ background: 'white', justifyContent: 'flex-end', alignItems: 'center', gap: 5, display: 'flex' }}>
                                <Grid style={{ width: 20, height: 20, paddingLeft: 6, paddingRight: 6, paddingTop: 2, paddingBottom: 2, background: '#221F73', borderRadius: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <Tooltip title="Click to add user" arrow 
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
                                    <Button onClick={openAddUserModal} style={{ color: 'white', fontSize: 18, fontWeight: '500', wordWrap: 'break-word' }}>+</Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid style={{ justifyContent: 'flex-start', background: 'rgb(34, 31, 115)',  alignItems: 'center', gap: 4, display: 'flex' }}>
                                <Grid style={{ color: '#666666',fontSize: 14, color:"white",  fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word', cursor: 'pointer'}} onClick={openAddUserModal}>New Users</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ left: 1050, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
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
                </Grid>
                <Grid style={{ height: 38, left: 62, top: 136, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex' }}>
                    <Grid style={{ padding: 10, borderBottom: '1px black solid', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                        <Grid style={{ color: 'black', fontSize: 16, marginRight:11,  fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.50, wordWrap: 'break-word' }}>staff</Grid>
                    </Grid>
                    
                </Grid>
                <Grid style={{ width: 1392, left: 60, top: 180, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <Grid style={{ width: 264, height: 86, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <Grid onClick={() => handleSort('id')} style={{ alignSelf: 'stretch', height: 44, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#221F73', borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }} >
                            <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                <Grid style={{ color: 'white', fontSize: 16,  fontWeight: '500', wordWrap: 'break-word' }}>Employee ID</Grid>
                                <Grid style={{ width: 16, height: 16, position: 'relative' }}>
                                    <SwapVertOutlinedIcon style={{ color: "#FFFFFF" }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    {filteredUsers?.map((user) => <Grid style={{ alignSelf: 'stretch', height: 42, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }} >
                            <Grid style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <Grid style={{ color: '#666666', fontSize: 14,fontWeight: '400', wordWrap: 'break-word' }}>{user.id}</Grid>
                            </Grid>
                        </Grid>)}
                    </Grid>
                    <Grid style={{ width: 310, height: 86, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <Grid style={{ alignSelf: 'stretch', height: 44, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#221F73', borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }} onClick={() => handleSort('id')}>
                            <Grid onClick={() => handleSort('id')} style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                <Grid style={{ color: 'white', fontSize: 16, fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word' }}>Full Name</Grid>
                                <Grid style={{ width: 16, height: 16, position: 'relative' }}>
                                    <SwapVertOutlinedIcon style={{ color: "#FFFFFF" }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    {filteredUsers?.map((user) => <Grid style={{ alignSelf: 'stretch', height: 42, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                            <Grid style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <Grid style={{ color: '#666666', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>{user.name}</Grid>
                            </Grid>
                        </Grid>)}
                    </Grid>
                    <Grid style={{ width: 264, height: 86, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <Grid onClick={() => handleSort('id')} style={{ alignSelf: 'stretch', height: 44, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#221F73', borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }} >
                            <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                <Grid style={{ color: 'white', fontSize: 16, fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>Email</Grid>
                                <Grid style={{ width: 16, height: 16, position: 'relative' }}>
                                    <SwapVertOutlinedIcon style={{ color: "#FFFFFF" }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    {filteredUsers?.map((user) => <Grid style={{ alignSelf: 'stretch', height: 42, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                            <Grid style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <Grid style={{ color: '#666666', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>{user.username}</Grid>
                            </Grid>
                        </Grid>)}
                    </Grid>
                    <Grid style={{ width: 255, height: 86, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <Grid style={{ alignSelf: 'stretch', height: 44, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#221F73', borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                            <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                <Grid style={{ color: 'white', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>Role</Grid>
                                <Grid style={{ width: 16, height: 16, position: 'relative' }}>
                                    <SwapVertOutlinedIcon style={{ color: "#FFFFFF" }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    {filteredUsers?.map((user) => <Grid style={{ alignSelf: 'stretch', height: 42, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                            <Grid style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <Grid style={{ color: '#666666', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>{user.role_name}</Grid>
                            </Grid>
                        </Grid>)}
                    </Grid>
                    <Grid style={{ width: 297, height: 86, background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <Grid style={{ alignSelf: 'stretch', height: 44, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#221F73', borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex' }}>
                            <Grid style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                <Grid style={{ color: '#221F73', fontSize: 16, fontWeight: '500', wordWrap: 'break-word' }}>Assigned Date</Grid>
                                <Grid style={{ width: 16, height: 16, position: 'relative' }}>
                                </Grid>
                            </Grid>
                        </Grid>
                    {filteredUsers?.map((user) => <Grid style={{ alignSelf: 'stretch', height: 42, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: 'white', borderBottom: '1px #EAECF0 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex' }}>
                            <Grid>
                                <Button onClick={() => handleEditUser(user.id)}><DriveFileRenameOutlineOutlinedIcon style={{ color: "#353E5C" }} /></Button>
                                <Button onClick={() => handleDeleteUser(user.id)}><DeleteOutlineIcon style={{ color: "#FF0000" }} /></Button>

                            </Grid>
                        </Grid>)}
                    </Grid>
                </Grid>
            <AddUser isOpen={isAddUserOpen} onClose={closeAddUserModal} onUserAdded={handleAddUser} />
                <EditUser isOpen={isEditUserOpen} onClose={closeEditUserModal} onUserEdited={handleFetchEditUser} editUserData={editUserData}  />
            </Grid>
    );
}

export default AdminPanel;