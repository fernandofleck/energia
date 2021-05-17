import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import CalcuConsu from './CalcuConsu';
import Potencia from './Potencia';
import NotFound from './NotFound';
import App from '../App';

class Nav extends React.Component{
    
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="http://localhost:3000/">
                            <img src="./potencia.svg" alt="" width="40" height="40" className="d-inline-block align-middle m-2"/>
                            {/* <h2 className="d-inline-block align-middle">{this.props.titulo}</h2> */}
                        </a>
                        <Router>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/'>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/calculadora'>Calculadora</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/potencia'>Potencia</Link>
                                </li>
                            </ul>
                            <Switch>
                                <Route exact path='/' component={App}/>
                                <Route exact path='/calculadora' component={CalcuConsu}/>
                                <Route exact path='/potencia' component={Potencia}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Router>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;