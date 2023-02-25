import React, { useState, useRef, createRef, useEffect }from "react";
import {Prova} from '../../prova';
import { MyNav } from '../../components/nav/index';
import { FormContainer, HomePage, UserInput, FormButton } from './styled';



const arrayProvas = removeDuplicates(Prova.instances.map(valor => valor.tipoDeProva));

const anoEProva = () => {
    const object = {};
    arrayProvas.forEach(valor => object[valor] = removeDuplicates(Prova.instances.filter(nome => nome.tipoDeProva === valor).map(value => value.ano)));
    return object;
}

function removeDuplicates (array){
    return array.filter((valor, indice, array) => valor !== array[indice + 1]);
};

console.log(anoEProva());


export default function Home (){
    const [prova, setProva] = useState('');
    const [ano, setAno] = useState('');
    const [dia, setDia] = useState('');
    const [errors, setErrors] = useState([]);

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
                        <select name="prova" id="prova" onChange={handleProvaChange}>
                            <option></option>
                            {arrayProvas.map(prova => <option value={prova}>{prova}</option>)}
                        </select>
                    </UserInput>
                    <UserInput>
                        <label htmlFor="ano">Selecione um ano:</label>
                        <select name="ano" id="ano" >
                            <option></option>
                            {prova && anoEProva()[prova].map(ano => <option value={ano}>{ano}</option>)}
                        </select>
                    </UserInput>
                    {prova === 'ENEM' && 
                    <UserInput>
                        <label htmlFor="dia">Selecione um dia:</label>
                        <select name="dia" id="dia" >
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </UserInput>}
                    <FormButton type="submit">Iniciar Avaliação</FormButton>
                </FormContainer>
            </HomePage>
        )
}