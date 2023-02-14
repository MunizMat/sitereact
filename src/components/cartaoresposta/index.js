import React from "react";
import { provas } from "../../prova";
import { Secao } from "./subcomponents/Secao";
import Col from "react-bootstrap/Col";


export default function Cartaoresposta (props) {
    const [tipoDeProva, ano, dia] = props.nomeProva.split('-');
    const prova = provas[props.nomeProva];
    const numerosQuestoes = Object.keys(prova.gabarito);
    
    return (
        <>
             <Col>
                        <Secao 
                            sliceBegin={0}
                            sliceEnd={prova.numQuestoes / 3}
                            numerosQuestoes={numerosQuestoes}
                            prova={prova}
                        />
                    </Col>

                    <Col>
                        <Secao 
                            sliceBegin={prova.numQuestoes / 3}
                            sliceEnd={prova.numQuestoes / 3 * 2}
                            numerosQuestoes={numerosQuestoes}
                            prova={prova}
                        />
                    </Col>

                    <Col>
                        <Secao 
                            sliceBegin={prova.numQuestoes / 3 * 2}
                            sliceEnd={prova.numQuestoes}
                            numerosQuestoes={numerosQuestoes}
                            prova={prova}
                        />
                    </Col>
        </>
    )
};