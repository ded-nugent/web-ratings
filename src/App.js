import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Newuser from "./pages/Newuser";
import Create from "./pages/Create";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Websites from "./pages/Websites";
import Welcome from "./pages/Welcome";

import "./App.css"

// d3
import Homeview from './views/homeview';
import BarChart from './views/bar-chart';
import AnimatedBarChart from './views/bar-chart/animated-chart';
import DonutChart from './views/donut-chart';
import MultiSeriesLineChart from './views/multi-series-line-chart';
import AnimatedMultiSeriesLineChart from './views/multi-series-line-chart/animated-chart';

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
            <Route exact path="/Websites/:_id" component={Websites}/>
            <Route exact path="/homeview" component={Homeview} />
            <Route exact path="/bar-chart" component={BarChart} />
            <Route exact path="/bar-chart/animated"component={AnimatedBarChart} />
            <Route exact path="/donut-chart" component={DonutChart} />
            <Route exact path="/multi-series-line-chart" component={MultiSeriesLineChart} />
            <Route exact path="/multi-series-line-chart/animated"component={AnimatedMultiSeriesLineChart} />
            <Route component={NoMatch}/>
          </Switch>
      </div>
    </Router>
  )
}

export default App;
