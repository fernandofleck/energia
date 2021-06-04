import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
//import PotenciaInstalada from './potenciaInstalada.json';
import axios from 'axios';
import Tabla from './datos/Tabla.js';

function Potencia(props) {

  const [potenciaInstalada, setPot] = useState([]);

  //alert(Object.entries(potenciaIns));

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/potenciaInstalada");
      //alert(Object.entries(potencias.data));
      setPot(data);
    };
    fetchData();
    return () => {
      //fetchData();
    };
  }, []);

  //alert(Object.entries(potenciaInstalada));

  const anios = potenciaInstalada.map(data => {
    return data.Año;
  });
  //----------------------------------------
  let etiq = anios.filter((value, index, self) => { 
    return self.indexOf(value) === index;
  });

  //etiq=potenciaInstalada.filter(filtradoEmpresa);

  //Filtrado por empresa

  /*function filtradoEmpresa(obj) {
    //alert(Object.entries(obj));
    if (obj.agente_descripcion === 'E.B. YACYRETA') {
      return false;
    } else {
      return true;
    }
  }*/

  //Filtrado de Datos a Mostrar

  /*const potencias = etiq.map(a => {
    let potx=0;
    potenciaInstalada.map(p => {
      if (a===p.Año) {
        potx = potx + parseFloat(p.MW);        
      }
      return (potx);
    });
    return (potx);
  });*/

  const potenciasTermica = etiq.map(a => {
    let potx=0;
    potenciaInstalada.map(p => {
      if (a===p.Año && p.fuente_generacion==='Térmica') {
        potx = potx + parseFloat(p.MW);        
      }
      return (potx);
    });
    return (potx);
  });

  const potenciasHidraulica = etiq.map(a => {
    let potx=0;
    potenciaInstalada.map(p => {
      if (a===p.Año && p.fuente_generacion==='Hidráulica' && p.agente_descripcion!=="E.B. YACYRETA") {
        potx = potx + parseFloat(p.MW);        
      }
      return (potx);
    });
    return (potx);
  });

  //alert(Object.entries(potenciasHidraulica));

  const potenciasBiomasa = etiq.map(a => {
    let potx=0;
    potenciaInstalada.map(p => {
      if (a===p.Año && p.fuente_generacion==='Biomasa') {
        potx = potx + parseFloat(p.MW);        
      }
      return (potx);
    });
    return (potx);
  });

  const potenciasSolar = etiq.map(a => {
    let potx=0;
    potenciaInstalada.map(p => {
      if (a===p.Año && p.fuente_generacion==='Solar') {
        potx = potx + parseFloat(p.MW);        
      }
      return (potx);
    });
    return (potx);
  });

  //alert(Object.entries(potcias));
  //----------------------------------------
  const data = {
    labels: anios.filter((value, index, self) => { 
      return self.indexOf(value) === index;
    }),
    datasets: [
      {
        label: 'Potencia Termica',
        data: potenciasTermica,
        backgroundColor: 'rgb(228, 87, 46, 0.7)',
        stack:1,
      },
      {
        label: 'Potencia Hidráulica',
        data: potenciasHidraulica,
        backgroundColor: 'rgb(168, 198, 134, 0.7)',
        stack:1,
      },
      {
        label: 'Potencia Biomasa',
        data: potenciasBiomasa,
        backgroundColor: 'rgb(157, 156, 98, 0.7)',
        stack:1,
      },
      {
        label: 'Potencia Solar',
        data: potenciasSolar,
        backgroundColor: 'rgb(240, 246, 110, 0.7)',
        stack:1,
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        stacked: true,
          ticks: {
            beginAtZero: true,
          },
        display: true,
        title: { 
          display: true,
          text: 'Potencia (MW)',
          color: 'black',
          font: {
            size: 20,
            style: 'normal',
            lineHeight: 2
          },
          padding: {top: 0, left: 0, right: 0, bottom: 0}
        }
      },
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return(
    <>
      <div className='header mt-4 mb-2'>
        <h1 className='title'>Potencia Instalada</h1>
      </div>
      <Bar data={data} options={options} />
      <div className='header mt-4 mb-2'>
        <h2 className='title'>Datos</h2>
      </div>
      <Tabla potencias={potenciaInstalada} />
    </>
  );
}

export default Potencia;