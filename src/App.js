import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import User from "./components/User";
import About from "./components/About";
import NotFound from "./components/404";
import {Route, Switch} from "react-router-dom";
import Layout from './Layout';


function App() {
  return (
    <div className="App"> 
    <Layout>  
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/user" exact component={User} />
      <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
    </div>
  );
}

export default App;
