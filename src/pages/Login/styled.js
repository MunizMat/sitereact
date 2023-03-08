import styled from 'styled-components';
import bgImage from '../../assets/images/estudos.jpg';
import { secondaryColor } from '../../config/colors';




export const LoginPage = styled.div`
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

    .btn-group {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 20px;
    }

    .criar-conta {
        background: white;
    }

    .entrar {
        background: ${secondaryColor};
        color: white;
    }

    .btn {
        border: none;
        font-size: 1.1em;
        padding: 10px 20px;
        border-radius: 10px;
        width: 100%;
    }
`

