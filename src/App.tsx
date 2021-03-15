import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './components/pages/Header';
import HomePage from './components/pages/HomePage';
import Login from './components/login/Login';
import Dashboard from './components/pages/Dashboard';
import NavBar from './components/VerticalNavBar/NavBar';
import Sync from './components/pages/Sync';
import Mapping from './components/pages/Mapping';
import SelectiveSync from './components/pages/SelectiveSync';
import History from './components/pages/History';
function App() {
  return (
    <div >
      <Router>
        <Header />
        <div className="wrapper">
        <div><NavBar /></div>
        <div className="container">
          <Switch>
            <Route  path="/" exact component={HomePage}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/sync" component={Sync}></Route>
            <Route path="/mapping" component={Mapping}></Route>
            <Route path="/selectivesync" component={SelectiveSync}></Route>
            <Route path="/history" component={History}></Route>
            
        </Switch>
      </div>
      </div>
      {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
