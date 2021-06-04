import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import CalcuConsu from './components/CalcuConsu';
import Potencia from './components/Potencia';
import NotFound from './components/NotFound';
import Perfil from './components/admin/Perfil';

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
          <nav class="navbar navbar-expand navbar-light bg-light">
            <div class="container-fluid">
              <Link className="navbar-brand" to='/'>
                <img src="./potencia.svg" alt="" width="40" height="40" className="d-inline-block align-middle m-2"/>
                <h2 className="d-inline-block align-middle">{this.state.titulo}</h2>
              </Link>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav position-relative col-12">
                  <Link className="nav-link active" to='/calculadora'>Calculadora</Link>
                  <Link className="nav-link active" to='/potencia'>Potencia</Link>
                  <Link className="nav-link active align-middle position-absolute end-0 p-0 btn-circle" to='/admin'><i class="btn-circle bi bi-person-circle "></i></Link>
                </div>
              </div>
            </div>
          </nav>
          </div>
          <Switch>
            <Route exact={true} path='/' component={Home}/>
            <Route exact={true} path='/calculadora' component={CalcuConsu}/>
            <Route exact={true} path='/potencia' component={Potencia}/>
            <Route exact path='/admin' component={Perfil}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;