import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Layout from "./container/Layout"
import Welcome from "./component/Welcome"
import Home from './component/Home';
import Login from './component/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
