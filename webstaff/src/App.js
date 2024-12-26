import React, { useEffect, useState } from 'react';
import { AuthenticatedTemplate, MsalProvider, useMsal } from '@azure/msal-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminPanel from './userList.js';
import { Home } from './Home.js';
import RoleBasedAccess from './RoleBasedAccess.js';
import Header from './Header';
import { msalConfig, loginRequest } from './authConfig.js';

const WrapperView = ({ roleId, registrySiteId, setRoleId, setRegistrySiteId }) => {
  const { instance } = useMsal();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeMsal = async () => {
      try {
        await instance.handleRedirectPromise();
        const account = instance.getActiveAccount();
        if (account) {
          const isDeleted = await checkUserDeleted(account.username);
          if (isDeleted) {
            alert('You are no longer part of this system');
            instance.logoutRedirect({
              postLogoutRedirectUri: msalConfig.auth.postLogoutRedirectUrl 
            });
            return;
          } else {
            await fetchUserDetails(account.username);
          }
        } else {
          instance.loginRedirect(loginRequest).catch((error) => console.error("Login error:", error));
          return;
        }
      } catch (error) {
        console.error('Redirect handling error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const checkUserDeleted = async (email) => {
      try {
        const response = await fetch('./api/check_deleted_user.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });

        const data = await response.json();
        return !data.exists;
      } catch (error) {
        console.error('Error checking user status:', error);
        return false;
      }
    };

    const fetchUserDetails = async (email) => {
      try {
        const response = await fetch('./api/check_user_permissions.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        });

        const data = await response.json();
        setRoleId(data.user.role_id);
        setRegistrySiteId(data.user.registry_id);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    initializeMsal();
  }, [instance, setRoleId, setRegistrySiteId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthenticatedTemplate>
      <Switch>
        <Route exact path="/" render={() => 
                <Home roleId={roleId} registrySiteId={registrySiteId} />
             } 
          />
        <Route path="/admin" render={() => {
          if (roleId == '1') {
            return <AdminPanel />;
          } else {
            return <div>You do not have permission to access this page.</div>;
          }
        }} />
        <Route path="/role-access" render={() => {
          if (roleId == '1') {
            return <RoleBasedAccess />;
          } else {
            return <div>You do not have permission to access this page.</div>;
          }
        }} />
      </Switch>
    </AuthenticatedTemplate>
  );
};

const App = ({ instance }) => {
  const [roleId, setRoleId] = useState(null);
  const [registrySiteId, setRegistrySiteId] = useState(null);

  const handleLogout = async () => {
    sessionStorage.clear(); 
    localStorage.clear();   
    
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith("msal_")) {
        sessionStorage.removeItem(key); 
      }
    });
  
    const account = instance.getActiveAccount();
    if (account) {
      instance.removeAccount(account); 
    }
  
    localStorage.setItem('logout', 'true');
  
    instance.logoutRedirect({
      postLogoutRedirectUri: msalConfig.auth.postLogoutRedirectUrl
    });
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'logout' && event.newValue === 'true') {
        instance.logoutRedirect({
          postLogoutRedirectUri: msalConfig.auth.postLogoutRedirectUrl
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [instance]);

  return (
    <Router basename="/webstaff/build">
      <MsalProvider instance={instance}>
        <Header onLogout={handleLogout} roleId={roleId} registrySiteId={registrySiteId}/>
        <main>
          <WrapperView 
            roleId={roleId} 
            registrySiteId={registrySiteId} 
            setRoleId={setRoleId} 
            setRegistrySiteId={setRegistrySiteId} 
          />
        </main>
      </MsalProvider>
    </Router>
  );
};

export default App;
