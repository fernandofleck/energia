import React from 'react';
import Calculator from './Calculator';
import Selector from'./Selector.js';
import Electrodomesticos from './electrodomesticos.json';

class CalcularConsumo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            seleccionado: "",
            seleccionados: [],
            i: 0,
            lista: Electrodomesticos
        };
        //Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.handleShow = this.handleShow.bind(this);
    };

    handleDelete(borrar){
        //alert(borrar);
        let tempo = this.state.lista;
        tempo.splice(borrar.id-1,1,borrar);
        let ind = this.state.seleccionados.findIndex(i => i.id === borrar.id);
        let tempo2 = this.state.seleccionados;
        tempo2.splice(ind,1);
        this.setState({
            seleccionados: tempo2,
            lista: tempo
        });
    };

    handleSelected(eId){
        //alert(eId);
        let electrodomestico = this.state.lista.find(p => p.id === eId);;
        let tempo = this.state.lista;
        let tempo2 = this.state.seleccionados;
        tempo2.push(electrodomestico);
        for (let i = 0; i < tempo.length; i++) {
            if (tempo[i].id===electrodomestico.id) {
                tempo = tempo.splice(i, 1,{id: null, nombre: null, consumoWh: null});
            }
        }
        //alert(Object.entries(tempo2));
        this.setState({
            seleccionado: electrodomestico.nombre,
            seleccionados: tempo2,
            i: this.state.i+1,
        });
    };

    handleShow(){
        let element = this.state.seleccionados.map(i=>{
            return(
                <tr><td>{i.nombre}</td><td>{i.consumoWh}</td><td><input type='number' className='form-control' required/></td><td><input type='text' className='form-control' required/></td><td><input type='number' className='form-control' required/></td><td><button type='button' onClick={()=>{this.handleDelete(i)}} class='btn-close form-control' aria-label='Eliminar'></button></td></tr>
            );
        });
        return(element);
    }

    render(){
        return(
            <div className="row mt-3">
                <div className="col"></div>
                <Selector lista={this.state.lista} selectd={this.handleSelected}/>
                <div className="col"></div>
                <div className="col-12">
                    <Calculator sels={this.state.seleccionados} delete={this.handleDelete} show={this.handleShow}/>
                </div>
            </div>
        );
    };
};

export default CalcularConsumo;