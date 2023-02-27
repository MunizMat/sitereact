import React from "react";
import { provas } from "../../prova";
import { Secao } from "./subcomponents/Secao";
import {CartaoContainer} from "./styled";


export function CartaoResposta (props) {
    const [tipoDeProva, ano, dia] = props.nomeProva.split('-');
    const prova = provas[props.nomeProva];
    const numerosQuestoes = Object.keys(prova.gabarito);
    
    return (
        <CartaoContainer>
            <Secao 
                sliceBegin={0}
                sliceEnd={prova.numQuestoes / 3}
                numerosQuestoes={numerosQuestoes}
                prova={prova}
            />
            <Secao 
                sliceBegin={prova.numQuestoes / 3}
                sliceEnd={prova.numQuestoes / 3 * 2}
                numerosQuestoes={numerosQuestoes}
                prova={prova}
            />
            <Secao 
                sliceBegin={prova.numQuestoes / 3 * 2}
                sliceEnd={prova.numQuestoes}
                numerosQuestoes={numerosQuestoes}
                prova={prova}
            />
        </CartaoContainer>
    )
};