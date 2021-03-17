import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Layout from "./container/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component=""/>
          <Route exact path="/login" component=""/>
          <Route exact path="/home" component=""/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
