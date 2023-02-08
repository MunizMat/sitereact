import React, { useState, useRef, createRef, useEffect }from "react";
import {Prova} from '../../prova';
import { MyNav } from '../../components/nav/index';
import { } from './styled';



const arrayProvas = removeDuplicados(Prova.instances.map(valor => valor.tipoDeProva));

const anoEProva = () => {
    const object = {};
    arrayProvas.forEach(valor => object[valor] = removeDuplicados(Prova.instances.filter(nome => nome.tipoDeProva === valor).map(value => value.ano)));
    return object;
}

function removeDuplicados (array){
    return array.filter((valor, indice, array) => valor !== array[indice + 1]);
};


export default function Home (){
    const [prova, setProva] = useState('');
    const [ano, setAno] = useState('');
    const [dia, setDia] = useState('');
    const [errors, setErrors] = useState([]);
    console.log('teste');


    const fields = {
        prova: {
            required: true,
            message: 'É necessário escolher uma prova'
        },
        ano: {
            required: true,
            message: 'É necessário escolher um ano'
        },
        dia: {
            required: prova === 'ENEM' ? true : false,
            message: 'É necessário escolher um dia'
        }
    }

    useEffect(() => {
        firstRender.current = false;
    }, [])

    const provaRef = useRef(null);
    const anoRef = useRef(null);
    const diaRef = useRef(null);
    const firstRender = useRef(true);

    const onSubmit = data => console.log(data);

    const handleProvaChange = (e) => {
        setProva(e.target.value);
    }

    const handleAnoChange = (e) => {
        setAno(e.target.value);
    }

    const handleDiaChange = (e) => {
        setDia(e.target.value);
    }

    const isValid = (field) => {
        return (field.current && field.current.value);
    }




        return(
            <div className="row">
                <div className="col lg-3"></div>
                <div className="col lg-5 mt-5">
                    <form action="/prova" >
                        <div className="mb-3">
                            <label className="form-label">Selecione uma Prova:</label>
                            <select className="form-select" name="prova" onChange={handleProvaChange} ref={provaRef}>
                                <option></option>
                                {arrayProvas.map(prova => (
                                <option key={prova} value={prova}>{prova}</option>
                                ))}
                            </select>
                            
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Selecione um Ano:</label>
                            <select className="form-select" name="ano" ref={anoRef} onChange={handleAnoChange}>
                                <option></option>
                                {prova &&
                                    anoEProva()[prova].map(ano => (
                                        <option key={ano} value={ano}>{ano}</option>
                                    ))
                                }
                            </select>
                        </div>
                            {(prova === 'ENEM' || prova === '') &&
                            <div className="mb-3">
                                <label className="form-label">Selecione um Dia:</label>
                                <select className="form-select" name="dia" ref={diaRef} onChange={handleDiaChange}>
                                    <option></option>
                                    <option key="1" value="1">1</option>
                                    <option key="2" value="2">2</option>
                                </select>
                                
                            </div>}
                        <button type="submit" className="btn btn-info w-100">Enviar</button>
                    </form>
                </div>
                <div className="col lg-3"></div>
            </div>
        )
}