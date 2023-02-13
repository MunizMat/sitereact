import React from "react";
import { selecionarResposta } from '../../../store/modules/prova/actions';
import { useDispatch, useSelector } from "react-redux";

export function Opcao({ letra, numQuestao, isChecked}) {
    const dispatch = useDispatch();
    const provaIniciada =  useSelector(state => state.prova.provaIniciada);

    const handleRadioClick = (e) => {
        const [ questao, letra ] = e.target.id.split('-');
        dispatch(selecionarResposta())
    }
    return (
        <div className="form-check p-0 mx-3">
            <input className="form-check-input" type="radio" name={numQuestao} id={`${numQuestao}-${letra}`} disabled={!provaIniciada} key={numQuestao + letra} onClick={handleRadioClick} checked={isChecked}></input>
            <label className="form-check-label" htmlFor={numQuestao + letra} key={`label-${numQuestao}-${letra}`}>{letra}</label>
        </div>
    )
}
