import React from "react";
import { Questao } from "./Questao";
import { Container } from '../../../styles/GlobalStyles';

export function Secao({sliceBegin, sliceEnd, numerosQuestoes, prova}) {
    return (
        <Container>
            {numerosQuestoes.slice(sliceBegin, sliceEnd ).map(valor => {return (<Questao numQuestao={valor} arrayOpcoes={prova.opcoes} key={`questao-${valor}`}/>)})}
        </Container>
    )
}