const initialState = {
    provaIniciada: false,
    respostas: {},
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case 'INICIAR_PROVA': {
            const newState = {...state};
            newState.provaIniciada = true;
            return newState
        }
        case 'SELECIONAR_RESPOSTA': {
            return state;
        }

        default: {
            return state;
        }
    }
}