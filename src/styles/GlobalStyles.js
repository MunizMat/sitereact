import styled, {createGlobalStyle} from 'styled-components';
import { primaryColor } from '../config/colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: white;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
    background: ${primaryColor};
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 500px;
    margin: 0 40px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`
