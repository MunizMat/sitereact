import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import {provas} from '../../prova';
import { Secao } from "../../components/cartaoresposta/subcomponents/Secao";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as actions from "../../store/modules/prova/actions";
import Cartaoresposta from "../../components/cartaoresposta";

const nomeProva = 'FUVEST-2019';
const [tipoDeProva, ano, dia] = nomeProva.split('-');
const prova = provas[nomeProva];
const numerosQuestoes = Object.keys(prova.gabarito);


export default function Prova(){
    const firstrRender = useRef(true);
    const startDate = useRef();
    const endDate = useRef();

    // States 
    const provaIniciada = useSelector(state => state.prova.provaIniciada);
    const respostas = useSelector(state => state.prova.respostas);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    // Effects 
    useEffect(()=>{
        localStorage.setItem('provaIniciada', JSON.stringify(provaIniciada));
    }, [provaIniciada])

    useEffect(()=>{
        localStorage.setItem('respostas', JSON.stringify(respostas));
    }, [respostas])

   


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
        <Container>
            <Form id="formprova" action="#">
                <Row>
                    <h1 className="text-center my-4 fs-1">Prova {`${tipoDeProva} ${ano}`}{tipoDeProva === 'ENEM' && ` Dia ${dia}`}</h1>
        
                    {!provaIniciada && 
                    <>
                        <span className="text-center fs-1">{`${getDuration()}`}</span>
                        <div className="text-center"> 
                            <Button as="input" onClick={() => dispatch(actions.iniciarProva())} className="btn btn-info my-3 rounded-2 w-100" variant="info" value="Iniciar Avaliação" />
                        </div>
                    </>}

                    {provaIniciada && <Countdown className="text-center fs-1" autoStart={true} daysInHours={true} date={new Date(endDate.current)} />}

                </Row>
                <Row>
                    <Cartaoresposta nomeProva={nomeProva} />
                </Row>
                <Modal show={show} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Desejas finalizar sua prova?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleModalClose}>Cancelar</Button>
                    <Button variant="primary" form="formprova" type="submit">Finalizar Prova</Button>
                </Modal.Footer>
            </Modal>
            </Form>

        </Container>)
}

