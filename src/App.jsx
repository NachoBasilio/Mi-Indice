import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "./container/Layout"
import Welcome from "./component/Welcome"
import Home from './component/Home';
import Login from './component/Login'
import {auth} from "./firebase"

const App = () => {
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() =>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setFirebaseUser(user)
      }else {
        setFirebaseUser(null)
      }
    })
  },[])

  return firebaseUser !== false ? (
    <Router>
      <Layout firebaseUser={firebaseUser}>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Layout>
    </Router>
  )
  : (<div>Cargando...</div>)
}

export default App;
