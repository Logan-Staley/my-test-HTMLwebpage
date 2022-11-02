
import './App.css';
import React, {component } from "react";
import navbar from "./components/navbar"
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import Goats from "./pages/Goats"
import Sheeps from "./pages/Sheeps"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>

    <div className='App-background'>
      <navbar />
      <Switch>
        <Route path = "/" exact component ={Dogs}/>
        <Route path = "/" exact component ={Sheeps}/>
        <Route path = "/" exact component ={Goats}/>
        <Route path = "/" exact component ={Cats}/>
      </Switch>

      
      <header>
        <p>
          Edit and save to reload.
        </p>
      </header>
    </div>
    </Router>
  );
}

export default App;
