import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../config/colors';

export const HomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1.4em;
`

export const FormContainer = styled.form`
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
export const UserInput = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;

    select {
        border-radius: 10px;
        padding: 10px;
        border: ${props => props.valid ? 'none' : 'solid 2px'};
        border-color: rgba(180, 0, 0, 0.8);
    }

    p {
        color: rgba(180, 0, 0, 0.8);
    }
`
export const FormButton = styled.button`
    background: ${secondaryColor};
    border: none;
    border-radius: 10px;
    color: white;
    height: 60px;
    margin: 10px 20px;
`


