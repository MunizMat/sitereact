import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { Questao } from "./Questao";

export function Secao({sliceBegin, sliceEnd, numerosQuestoes, respostas, prova}) {
    return (
        <div className="col lg-3 bg-info rounded-2  d-flex justify-content-evenly flex-column pt-3 p-0">
            {numerosQuestoes.slice(sliceBegin, sliceEnd ).map(valor => {return (<Questao numQuestao={valor} arrayOpcoes={prova.opcoes} respostas={respostas} key={`questao-${valor}`}/>)})}
        </div>
    )
}