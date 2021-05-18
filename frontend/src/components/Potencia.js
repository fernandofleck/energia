import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
//import PotenciaInstalada from './potenciaInstalada.json';
import axios from 'axios';

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
  const etiq = anios.filter((value, index, self) => { 
    return self.indexOf(value) === index;
  });

  const potcias = etiq.map(a => {
    let potx=0;
    potenciaInstalada.map(p => {
      if (a===p.Año) {
        potx = potx + parseFloat(p.MW);        
      }
      return (potx);
    });
    return (potx);
  });

  alert(Object.entries(potcias));
  //----------------------------------------
  const data = {
    labels: anios.filter((value, index, self) => { 
      return self.indexOf(value) === index;
    }),
    datasets: [
      {
        label: '# of Red Votes',
        data: potcias,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return(
    <>
      <div className='header'>
        <h1 className='title'>Potencia Instalada</h1>
      </div>
      <Bar data={data} options={options} />
    </>
  );
}

export default Potencia;