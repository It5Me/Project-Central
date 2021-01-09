import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail'
const App =() =>  {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path ='/project/:id' component={ProjectDetail}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
  } 


export default App;
