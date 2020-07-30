import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'
import './App.css';
import Welcome from './Routepaths/Welcome';
import AdminLogin from './Routepaths/AdminLogin';
import AdminPanel from './Routepaths/AdminPanel';
import Products from './Routepaths/Products';

const App = () => {
  const history = useHistory();
  return (
    < Router history={history} >
      <Route path="/" exact component={Welcome} />
      <Route path="/AdminLogin" exact component={AdminLogin} />
      <Route path="/AdminPanel" exact component={AdminPanel} />
      <Route path="/Products" exact component={Products} />
    </Router >
  );
}

export default App;
