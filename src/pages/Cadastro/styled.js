import styled from 'styled-components';
import bgImage from '../../assets/images/estudos.jpg';
import { secondaryColor } from '../../config/colors';




export const CadastroPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    background: url(${bgImage});
    background-size: cover;
    font-size: 1.4em;

    h2 {
        text-align: center;
    }


    .criar-conta {
        background: ${secondaryColor};
        border: none;
        font-size: 1.1em;
        padding: 10px 0;
        margin: 0 20px;
        border-radius: 10px;
        color: white;
    }

`

