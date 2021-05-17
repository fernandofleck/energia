import React from 'react';
import { Bar } from 'react-chartjs-2';
import PotenciaInstalada from './potenciaInstalada.json';

const años = PotenciaInstalada.map(p => {
  return p.Año;
});

const data = {
  labels: años.filter((value, index, self) => { 
    return self.indexOf(value) === index;
  }),
  datasets: [
    {
      label: '# of Red Votes',
      data: PotenciaInstalada.map(p => {
        return p.MW;
      }),
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

const Potencia = () => (
  <>
    <div className='header'>
      <h1 className='title'>Potencia Instalada</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default Potencia;