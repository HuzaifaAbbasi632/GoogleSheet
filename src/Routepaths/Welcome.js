import React from 'react';
import './welcome.scss';
import logo from '../images/a-logo.jpg';
import { Typography } from 'antd'
import { useHistory, withRouter } from 'react-router-dom';
const { Paragraph } = Typography;

const Welcome = () => {
    const history = useHistory();
    return (
        <div className="main-container">
            <div className="welcome-note-container">
                <img style={{alignSelf:"center"}} src={logo} alt="wrong"></img>
                <Paragraph className="note">
                    Select View Website to see available products from Amazon
                </Paragraph>
                <div className="end-note">
                    <Paragraph style={{marginLeft:10}} onClick={()=>{history.push("/AdminLogin")}}>
                        Are you an Admin?
                    </Paragraph>
                    <Paragraph style={{marginRight:10}} onClick={()=>{history.push("/Products")}}>
                        View Website
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Welcome);