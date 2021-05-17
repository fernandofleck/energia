import React from 'react';
import './App.css';
import Home from './components/Home';
import './selector.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import CalcuConsu from './components/CalcuConsu';
import Potencia from './components/Potencia';
import NotFound from './components/NotFound';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: "Inicio"
    };
  }

  render(){
    return (
      <div className="container-md">
        <Router>
          <div className="App w-100">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <Link className="navbar-brand" to='/'>
                <img src="./potencia.svg" alt="" width="40" height="40" className="d-inline-block align-middle m-2"/>
                <h2 className="d-inline-block align-middle">{this.state.titulo}</h2>
              </Link>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <Link className="nav-link active" to='/calculadora'>Calculadora</Link>
                  <Link className="nav-link active" to='/potencia'>Potencia</Link>
                </div>
              </div>
            </div>
          </nav>
          </div>
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/calculadora' component={CalcuConsu}/>
            <Route exact={true} path='/potencia' component={Potencia}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;