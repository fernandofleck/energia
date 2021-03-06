import React from 'react';
import Total from './Total';

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            total: null
        };
    }
    
    handleSubmit(event){
        //alert(Object.entries(event.target));
        //alert(Object.entries(this.props));
        event.preventDefault();
        let calculo = 0;
        let j=0;
        let prov = this.props.sels[j].consumoWh;
        for (let i = 0; i < this.props.sels.length*4; i++) {
            if (((i+1)%4)===0) {
                calculo = calculo + prov;
                j++;
                if (this.props.sels.length>j) {
                    prov = this.props.sels[j].consumoWh;
                }
            } else {
                prov = prov * event.target[i].value;
            };
        };
        this.setState({
            total: calculo
        });
    }

    showTotal(){
        if (this.state.total!==null) {
            return(<Total tot={this.state.total}/>);
        } else {
            return (null);
        };
    }

    render(){
        return(
            <div className="row justify-content-center">
                <form className="col-12 w-100 m-3 mb-5" onSubmit={this.handleSubmit}>
                    <table className="table table-striped">
                        <thead className='align-middle'>
                            <tr>
                                <th scope="col col-md-2" className="text-center">Electrodoméstico</th>
                                <th scope="col col-md-2" className="text-center">Potencia Wh</th>
                                <th scope="col col-md-2" className="text-center">Cantidad</th>
                                <th scope="col col-md-2" className="text-center">Horas de uso por día</th>
                                <th scope="col col-md-2" className="text-center">Días al mes</th>
                                <th scope="col" className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody className='align-middle'>
                            {this.props.show()}
                        </tbody>
                    </table>
                    <div className="position-relative">
                    <button className="btn btn-dark position-absolute top-0 start-50 translate-middle-x" type="submit">Calcular</button>
                    </div>
                </form>
                {this.showTotal()}
            </div>
        );
    }
};

export default Calculator;