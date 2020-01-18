import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Newuser from "./pages/Newuser";
import Create from "./pages/Create";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Websites from "./pages/Websites";
import Welcome from "./pages/Welcome"
import "./App.css"

function App() {
//  const onSetUserInfo = userInfo 
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/newUser" component={Newuser}/>
            <Route exact path="/create" component={Create}/>
            <Route exact path="/websites/:title" component={Websites}/>
            <Route component={NoMatch}/>
          </Switch>
      </div>
    </Router>
  )
}

export default App;
