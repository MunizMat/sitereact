import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import {provas} from '../../prova';
import { Secao } from "../../components/cartaoresposta/Secao";
import Countdown from "react-countdown";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const nomeProva = 'FUVEST-2019';
const [tipoDeProva, ano, dia] = nomeProva.split('-');
const prova = provas[nomeProva];
const numerosQuestoes = Object.keys(prova.gabarito);


export default function Prova(){
    const firstrRender = useRef(true);
    const startDate = useRef();
    const endDate = useRef();

    // States 
    const [inProgress, setInProgress] = useState(false);
    const [respostas, setRespostas] = useState({});
    const [show, setShow] = useState(false);
    
 

    // Effects 
    useEffect(()=>{
        localStorage.setItem('inProgress', JSON.stringify(inProgress));
    }, [inProgress])

    useEffect(()=>{
        localStorage.setItem('respostas', JSON.stringify(respostas));
    }, [respostas])

   


    useLayoutEffect(()=>{
        firstrRender.current = false;
        const inProgress = JSON.parse(localStorage.getItem('inProgress'));
        if(inProgress) {
            const respostas = JSON.parse(localStorage.getItem('respostas'));
            const inProgress = JSON.parse(localStorage.getItem('inProgress'));
            endDate.current = JSON.parse(localStorage.getItem('endDate'));
            setInProgress(inProgress);
            setRespostas(respostas);
        }
    }, [])
    

    // Functions
    const handleModalShow = () => setShow(true);

    const handleModalClose = () => setShow(false);
    

    const handleBtnClick = function() {
        createDate();
        setInProgress(true);
        localStorage.setItem('respostas', JSON.stringify(respostas));
    }

    const handleRadioClick = (e) => {
        const [ questao, letra ] = e.target.id.split('-');
        setRespostas({
            ...respostas,
            [questao]: letra,
        })
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
        
                    {!inProgress && 
                    <>
                        <span className="text-center fs-1">{`${getDuration()}`}</span>
                        <div className="text-center"> 
                            <Button as="input" onClick={handleBtnClick} className="btn btn-info my-3 rounded-2 w-100" variant="info" value="Iniciar Avaliação" />
                        </div>
                    </>}

                    {inProgress && <Countdown className="text-center fs-1" autoStart={true} daysInHours={true} date={new Date(endDate.current)} />}

                </Row>
                <Row>

                    <Col>
                        <Secao 
                            sliceBegin={0}
                            sliceEnd={prova.numQuestoes / 3}
                            numerosQuestoes={numerosQuestoes}
                            inProgress={inProgress}
                            clickHandler={handleRadioClick}
                            respostas={respostas}
                            prova={prova}
                        />
                    </Col>

                    <Col>
                        <Secao 
                            sliceBegin={prova.numQuestoes / 3}
                            sliceEnd={prova.numQuestoes / 3 * 2}
                            numerosQuestoes={numerosQuestoes}
                            inProgress={inProgress}
                            clickHandler={handleRadioClick}
                            respostas={respostas}
                            prova={prova}
                            
                        />
                         {inProgress && <Button as="input" onClick={handleModalShow} className="btn btn-info my-3 rounded-2 w-100" variant="info" value="Finalizar Avaliação" />}
                    </Col>

                    <Col>
                        <Secao 
                            sliceBegin={prova.numQuestoes / 3 * 2}
                            sliceEnd={prova.numQuestoes}
                            numerosQuestoes={numerosQuestoes}
                            inProgress={inProgress}
                            clickHandler={handleRadioClick}
                            respostas={respostas}
                            prova={prova}
                        />
                    </Col>
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

