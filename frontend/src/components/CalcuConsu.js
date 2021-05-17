import React from 'react';
import CalcularConsumo from './calculadoraConsumo/CalcularConsumo.js';
import '../selector.css';


function CalcuConsu() {
  return (
    <div className="w-100">
      <h1 className='title'>Calculá tu Consumo</h1>
      <CalcularConsumo/>
    </div>
  );
}

export default CalcuConsu;