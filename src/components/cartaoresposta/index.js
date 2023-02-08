import React from "react";
import { provas } from "../../prova";
import { Secao } from "./subcomponents/Secao";
import { useSelector } from "react-redux";

export default function cartaoresposta (nomeProva) {
    const [tipoDeProva, ano, dia] = nomeProva.split('-');
    const prova = provas[nomeProva];
    const numerosQuestoes = Object.keys(prova.gabarito);

    const inProgress =  useSelector(state => state.progress.value);
    
    return (
        <>
            <Secao 
                sliceBegin={0}
                sliceEnd={prova.numQuestoes / 3}
                numerosQuestoes={numerosQuestoes}
                inProgress={inProgress}
                clickHandler={handleRadioClick}
                respostas={respostas}
                prova={prova}
            />
            <Secao 
                sliceBegin={prova.numQuestoes / 3}
                sliceEnd={prova.numQuestoes / 3 * 2}
                numerosQuestoes={numerosQuestoes}
                inProgress={inProgress}
                clickHandler={handleRadioClick}
                respostas={respostas}
                prova={prova}
            />
            <Secao 
                sliceBegin={prova.numQuestoes / 3 * 2}
                sliceEnd={prova.numQuestoes}
                numerosQuestoes={numerosQuestoes}
                inProgress={inProgress}
                clickHandler={handleRadioClick}
                respostas={respostas}
                prova={prova}
            />
        </>
    )
};