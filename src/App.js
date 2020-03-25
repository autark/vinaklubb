import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import {Hjem} from './Hjem';
import {D1} from './Lag/D1';
import {D2} from './Lag/D2';
import {H1} from './Lag/H1';
import {H2} from './Lag/H2';
import {Kamp} from './Kamp';
import {Resultat} from './Resultat';
import {Video} from './Video';
import {Bilder} from './Bilder';
import {Kontakt} from './Kontakt';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';





function App() {
  return (
    <React.Fragment>   
      <NavigationBar/>        
      <Jumbotron />     
      <Layout>           
        
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path = "/" component={Hjem}/>
            <Route path = "/D1" component={D1}/>
            <Route path = "/D2" component={D2}/>
            <Route path = "/H1" component={H1}/>
            <Route path = "/H2" component={H2}/>
            <Route path = "/Kamp" component={Kamp}/>
            <Route path = "/Resultat" component={Resultat}/>
            <Route path = "/Bilder" component={Bilder}/>
            <Route path = "/Video" component={Video}/>
            <Route path = "/Kontakt" component={Kontakt}/>           
          </Switch>
        </Router>                
      </header>     
    </div>
    </Layout>
    </React.Fragment>
  );
}

export default App;
