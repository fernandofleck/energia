import React from 'react';

function Total(props){
    return(
        <div className="col">
            <div className='col-12'><h2>Consumo Mensual Total: {new Intl.NumberFormat("de-DE").format(props.tot)} kWh</h2></div>
            <div className='col-12'><h2>Equivalen a: {new Intl.NumberFormat("de-DE").format(props.tot/1000)} MWh</h2></div>
        </div>
    );
}

export default Total;