import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../config/colors';



export const HomeAlunoPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1.4em;

    .home-container {
        height: 80%;
        width: 80%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 30px;
    }

    h1 {
        font-size: 8em;
    }

    h2 {
        font-size: 4em;
        font-weight: lighter;
    }
`
export const LoginBtn = styled.div`
    background-color: ${primaryColor};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 15px 20px;
    }
`