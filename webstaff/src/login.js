import React, { Component } from 'react';
import { PageHeader } from './PageHeader';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './Config';
import { Button } from 'primereact/button';

export default function Login() {
    const { instance, accounts } = useMsal();

    const fetchUserProfile = async (accessToken) => {
        const response = await fetch("https://graph.microsoft.com/v1.0/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        });
        const profile = await response.json();
        console.log(profile); // This contains the user's email, id, etc.
     
        // Store user profile and roles in your backend via PHP API
        // await storeUserProfile(profile, accessToken);
    };

    const handleLogin = () => {
        instance.loginPopup(loginRequest)
            .then(response => {
                const account = instance.getAccountByHomeId(response.account.homeAccountId);
                instance.acquireTokenSilent({
                    ...loginRequest,
                    account: account
                }).then(tokenResponse => {
                    const accessToken = tokenResponse.accessToken;
                    fetchUserProfile(accessToken);
                });
            })
            .catch(error => {
                console.error(error);
            });
    };
 
    return (
            <div style={{backgroundColor: "white", textAlign: "left", margin: "20px", fontSize: "14pt"}}>
                <PageHeader />
                <div style={{marginTop: "15px"}}>
                    Welcome to the <span style={{color: "#f285b2"}}>Women with IBD and Motherhood (WIsDoM) Study Page</span> for staff.
                </div>
                <div style={{marginTop: "25px", textAlign: "center"}}>
                    <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="Login" onClick={handleLogin} />
                </div>
        </div>
    );
}