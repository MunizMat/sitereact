import React from "react";
import { Opcao } from "./Opcao";
import { useSelector } from "react-redux";

export function Questao({ numQuestao, arrayOpcoes }) {
    const respostas =  useSelector(state => state.prova.respostas);

    return (
        <div className="form-check d-flex flex-row justify-content-evenly align-items-center mb-2 text-center">
            <p className="mb-0 me-4">{numQuestao + ')'}</p>
            {arrayOpcoes.map(valor => (
                <Opcao letra={valor} numQuestao={numQuestao} isChecked={(respostas && respostas[numQuestao] === valor)} key={`opcao-${numQuestao}-${valor}`}/>
            ))}
        </div>
    )
}