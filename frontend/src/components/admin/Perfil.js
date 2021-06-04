import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Carga from '../datos/Carga';

function Perfil() {
  return (
    <>
      <Router>
        <div class="list-group col-3">
          <Link className="list-group-item list-group-item-action" to='/carga'>Carga</Link>
          <button type="button" class="list-group-item list-group-item-action" disabled>Eliminar</button>
        </div>
        <Switch>
          <Route exact={true} path='/carga' component={Carga}/>
        </Switch>
      </Router>
    </>
  );
}

export default Perfil;