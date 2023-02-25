import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../config/colors';

export const HomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
`

export const FormContainer = styled.form`
    background: ${primaryColor};
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
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
    font-size: 1.4em;

    select {
        border-radius: 10px;
        padding: 10px;
    }
`
