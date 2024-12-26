export const msalConfig = {
    auth: {
      clientId: '43874f05-174d-4f18-afad-c66c6a90b2cd',
      authority: 'https://login.microsoftonline.com/5a6c876c-f971-4b14-91e5-b14f89bb031d',
      redirectUri: '/',
    },
    cache: {
      cacheLocation: 'sessionStorage', 
      storeAuthStateInCookie: false,
    },
  };

  export const loginRequest = {
    scopes : ['user.read']
  };