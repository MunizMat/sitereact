import React, { useState, useRef, createRef, useEffect }from "react";
import {Prova} from '../../prova';
import { MyNav } from '../../components/nav/index';
import { FormContainer, HomePage, UserInput } from './styled';



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
            <HomePage>
                <FormContainer method="POST">
                    <UserInput>
                        <label htmlFor="prova">Selecione uma prova:</label>
                        <select name="prova" id="prova" >
                            <option></option>
                            <option>Enem</option>
                            <option>Fuvest</option>
                            <option>Unicamp</option>
                        </select>
                    </UserInput>
                </FormContainer>
            </HomePage>
        )
}