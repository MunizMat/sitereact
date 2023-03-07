import React, { useState, useRef }from "react";
import {Prova} from '../../prova';
import { FormContainer, ObsContainer, HomePage, UserInput, FormButton } from './styled';
import { useNavigate } from "react-router-dom";

// Manipulating recieved data
function removeDuplicates (array){
    return array.filter((valor, indice, array) => valor !== array[indice + 1]);
};

const arrayProvas = removeDuplicates(Prova.instances.map(valor => valor.tipoDeProva));

const anoEProva = () => {
    const object = {};
    arrayProvas.forEach(valor => object[valor] = removeDuplicates(Prova.instances.filter(nome => nome.tipoDeProva === valor).map(value => value.ano)));
    return object;
}

export default function SelectProva () {

    //Hooks 
    const navigate = useNavigate();

    // States
    const [prova, setProva] = useState('');
    const [formSubmited, setFormSubmited] = useState(false);

    // Refs
    const provaRef = useRef(null);
    const anoRef = useRef(null);
    const diaRef = useRef(null);

    // Handlers and Functions
    const handleProvaChange = (e) => {
        setProva(e.target.value);
    }
    const handleBtnClick = (e) => {
        setFormSubmited(true);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isEnem = provaRef.current.value === 'ENEM' ? true : false;
        if (!isValid(provaRef) || !isValid(anoRef)) return console.log('FORMULÁRIO INVÁLIDO');
        if (isEnem && (!isValid(provaRef) || !isValid(anoRef) || !isValid(diaRef))) return console.log('FORMULÁRIO INVÁLIDO');
        navigate('/prova');
    }

    const isValid = (field) => {
        if (!formSubmited) return true;
        return (field.current && field.current.value);
    }

        return(
            <HomePage>
                <ObsContainer>
                    <h1>Observações</h1>
                    <ul>
                        <li><p>Após dar início à sua avaliação, <b> não será possível recomeçar ou pausar a prova! </b></p></li>
                        <li><p>Fechou a aba ou o navegador sem querer? Não se preocupe! <b> Suas respostas ficam salvas </b>e você pode voltar à realização de sua prova normalmente!</p></li>
                    </ul>
                </ObsContainer>
                <FormContainer onSubmit={handleFormSubmit} action="/" method="POST" className="form">
                    <UserInput valid={isValid(provaRef)}>
                        <label htmlFor="prova">Selecione uma prova:</label>
                        <select name="prova" id="prova" onChange={handleProvaChange} ref={provaRef}>
                            <option></option>
                            {arrayProvas.map(prova => <option value={prova}>{prova}</option>)}
                        </select>
                        {!isValid(provaRef) && <p>É necessário escolher uma prova</p>}
                    </UserInput>
                    <UserInput valid={isValid(anoRef)}>
                        <label htmlFor="ano">Selecione um ano:</label>
                        <select name="ano" id="ano" ref={anoRef}>
                            <option></option>
                            {prova && anoEProva()[prova].map(ano => <option value={ano}>{ano}</option>)}
                        </select>
                        {!isValid(anoRef) && <p>É necessário escolher um ano</p>}
                    </UserInput>
                    {prova === 'ENEM' && 
                    <UserInput valid={isValid(diaRef)}>
                        <label htmlFor="dia">Selecione um dia:</label>
                        <select name="dia" id="dia" ref={diaRef}>
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        {!isValid(diaRef) && <p>É necessário escolher um dia</p>}
                    </UserInput>}
                    <FormButton type="submit" onClick={handleBtnClick}>Iniciar Avaliação</FormButton>
                </FormContainer>
            </HomePage>
        )
}