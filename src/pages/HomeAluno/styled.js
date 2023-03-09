import styled from 'styled-components';
import { primaryColor } from '../../config/colors';
import image from '../../assets/images/estudos2.jpg';



export const HomeAlunoPage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px;
    padding: 70px;
    width: 100%;
    height: 100%;
    color: white;
    background-color: #BEBEBE;


    .imagem {
        background: url(${image});
        background-size: cover;
        border-radius: 20px;
    }

    .provas-recentes {
        background: white;
        border-radius: 20px;
        color: black;
        padding: 30px;

        a {
            color: ${primaryColor};
            text-decoration: underline;
        }
    }

    .estatisticas {
        background: ${primaryColor};
        border-radius: 20px;
        grid-area: 1 / 2 / span 2 / span 1;
        padding: 30px;
    }

    h2 {
        font-size: 3em;
    }

    p {
        font-size: 1.4em;
        margin: 20px 0;
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