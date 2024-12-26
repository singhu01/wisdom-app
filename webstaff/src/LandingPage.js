import React, { Component } from 'react';
import $ from 'jquery';

import { PageHeader } from './PageHeader';
import { Button } from 'primereact/button';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.msalInstance = props.msalInstance;
  }
 
  handleLoginClick = async () => {
    try {
      const authResponse = await this.msalInstance.loginPopup();
      console.log(authResponse);
      if (authResponse) {
        // console.log("accnt", authResponse.account);
        const email = authResponse.account.userName;
        console.log("email",email);
        const response = await fetch('./api/check_deleted_user.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        console.log("data", data);
        if (data.deleted == true) {
          alert("Your account is deleted. You cannot log in.");
        } else {
          this.props.onLoginSuccess();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  render() {
    return (
        <div style={{backgroundColor: "white", textAlign: "left", margin: "20px", fontSize: "14pt"}}>
                <PageHeader />
                <div style={{marginTop: "15px"}}>
                    Welcome to the <span style={{color: "#f285b2"}}>Women with IBD and Motherhood (WIsDoM) Study Page</span> for staff.
                </div>
                <div style={{marginTop: "25px", textAlign: "center"}}>
                    <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="Login" onClick={this.handleLoginClick} />
                </div>
        </div>
    );
  }
}
 
export default LandingPage;