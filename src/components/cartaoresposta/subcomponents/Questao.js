import React from "react";
import { Opcao } from "./Opcao";

export function Questao({ numQuestao, arrayOpcoes, inProgress, clickHandler, respostas }) {
    return (
        <div className="form-check d-flex flex-row justify-content-evenly align-items-center mb-2 text-center">
            <p className="mb-0 me-4">{numQuestao + ')'}</p>
            {arrayOpcoes.map(valor => (
                <Opcao letra={valor} numQuestao={numQuestao} inProgress={inProgress} clickHandler={clickHandler} isChecked={(respostas && respostas[numQuestao] === valor)} key={`opcao-${numQuestao}-${valor}`}/>
            ))}
           
        </div>
    )
}