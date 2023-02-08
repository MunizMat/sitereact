import React from "react";

export function Opcao({ letra, numQuestao, inProgress, clickHandler, isChecked}) {
    return (
        <div className="form-check p-0 mx-3">
            <input className="form-check-input" type="radio" name={numQuestao} id={`${numQuestao}-${letra}`} disabled={!inProgress} key={numQuestao + letra} onClick={clickHandler} checked={isChecked}></input>
            <label className="form-check-label" htmlFor={numQuestao + letra} key={`label-${numQuestao}-${letra}`}>{letra}</label>
        </div>
    )
}
