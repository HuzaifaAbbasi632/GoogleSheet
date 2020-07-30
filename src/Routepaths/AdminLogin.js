import React from 'react';
import {withRouter, useHistory} from 'react-router-dom'
import { Typography, Input, Button } from "antd";
import logo from '../images/a-logo.jpg';
import "./adminlogin.scss";

const { Title } = Typography;
const AdminLogin = (props) => {
  const history = useHistory();
  return (
    <div className="SignIn-container">
      <div className="image-container">
        <img src={logo} className="logo-image" alt="rarey" />
        <Title className="logo-text" style={{position:'relative', top:-20}}>Welcome</Title>
        <Title className="logo-text" style={{position:'relative', top:-50}}>to Admin Panel</Title>
      </div>
      <div className="credentials-container">
        <Title className="signIn-text">Sign In</Title>
        <div className="credential-description">
          <p style={{ fontSize: 16, color: "#050505" }}>
            Welcome back! Please login to your account
          </p>
        </div>
        <div className="inputs-container">
          <div>
            <label className="email-label" style={{fontWeight:'bolder'}}>
             YOUR E-MAIL
            </label>
            <Input
              id="email-input"
              name="email"
              placeholder="Please enter your email"
              type="email"
            ></Input>
            <i className="icon-Icon-Mail"></i>
          </div>
          <div>
            <label className="password-label" style={{fontWeight:'bolder'}}>
              PASSWORD
            </label>
            <Input.Password
              name="password"
              placeholder="Please enter your password"
            />
            <i className="icon-Icon-Lock-close"></i>
          </div>
        </div>
        <Button className="SignIn-button" onClick={()=>{history.push("/AdminPanel")}}>
            <p>SIGN IN</p>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(AdminLogin);
