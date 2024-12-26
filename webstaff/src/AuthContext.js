import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './Config';

export const pca = new PublicClientApplication(msalConfig);
 