import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectSummary from './components/projects/ProjectSummary';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/pro' component={ProjectSummary}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
