import React from 'react';
import { withRouter } from 'react-router-dom';
import './adminpanel.scss';
import BaseContainer from './BaseContainer';
const AdminPanel = () => {
    return(
        <div>
            <BaseContainer />
        </div>
    )
}

export default withRouter(AdminPanel);