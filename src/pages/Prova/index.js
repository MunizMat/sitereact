import React, {useState, useRef, useLayoutEffect} from "react";
import {provas} from '../../prova';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/modules/prova/actions";
import { ProvaPage } from './styled';
import { CartaoResposta } from '../../components/cartaoresposta/index';


const nomeProva = 'FUVEST-2019';
const [tipoDeProva, ano, dia] = nomeProva.split('-');
const prova = provas[nomeProva];


export default function Prova(){
    const firstrRender = useRef(true);
    const startDate = useRef();
    const endDate = useRef();

    // States 
    const provaIniciada = useSelector(state => state.prova.provaIniciada);
    const respostas = useSelector(state => state.prova.respostas);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();



    useLayoutEffect(()=>{
        firstrRender.current = false;
        const provaIniciada = JSON.parse(localStorage.getItem('provaIniciada'));
        if(provaIniciada) {
            const respostas = JSON.parse(localStorage.getItem('respostas'));
            const provaIniciada = JSON.parse(localStorage.getItem('provaIniciada'));
            endDate.current = JSON.parse(localStorage.getItem('endDate'));
        }
    }, [])
    

    // Functions
    const handleModalShow = () => setShow(true);

    const handleModalClose = () => setShow(false);
    

    const handleBtnClick = function() {
        createDate();
        localStorage.setItem('respostas', JSON.stringify(respostas));
    }

    const handleRadioClick = (e) => {
        const [ questao, letra ] = e.target.id.split('-');
        dispatch(actions.selecionarResposta())
    }

    const getDuration = () => new Date(prova.tempoDeProva * 3600 * 1000).toLocaleTimeString('pt-BR', { timeZone: 'UTC'})
    
    
    function createDate(){
        startDate.current = Date.now();
        endDate.current = Date.now() + prova.tempoDeProva * 60 * 60 * 1000;
        localStorage.setItem('startDate', JSON.stringify(startDate.current));
        localStorage.setItem('endDate', JSON.stringify(endDate.current));
    }


    return (
        <ProvaPage>
            <h1>Prova FUVEST 2019</h1>
            <h2>05:00:00</h2>
            <CartaoResposta nomeProva={nomeProva}/>
        </ProvaPage>
        )
}

