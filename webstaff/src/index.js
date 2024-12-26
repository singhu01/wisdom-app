import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { EventType, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig.js';

const initializeMsalInstance = async () => {
    const msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
    if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
        msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    }
    
    msalInstance.addEventCallback((event) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
            const account = event.payload.account;
            msalInstance.setActiveAccount(account);
        }
    });

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App instance={msalInstance} />);

    serviceWorker.unregister();
};

initializeMsalInstance();
