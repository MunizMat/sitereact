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
        color: white;
    }

    ul {
        list-style: none;
    }
`;

const baseContainerStyles = `
  background: ${primaryColor};
  border-radius: 20px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 500px;
  margin: 0 40px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

const createContainer = (type) => styled[type]`${baseContainerStyles}`;

export const FormContainer = createContainer('form');
export const Container = createContainer('section');


export const UserInput = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    border-style: none;
    
    select, input {
        border-radius: 10px;
        padding: 10px;
        border: none;
        font-size: 1em;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
