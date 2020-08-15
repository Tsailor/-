import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'; 
import { urlRoutelist } from './route';
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
            {urlRoutelist.map((v,i) =>{
                 return <Route key={i}  path = {v.path } exact = {v.exact} render={(props)=>v.render(props)}/>
            })}
        </Switch>
    </Router>
  );
}

export default App;
