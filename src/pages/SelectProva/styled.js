import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../config/colors';
import { Container, UserInput } from '../../styles/GlobalStyles';


export const HomePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 1.4em;
`

export const ObsContainer = styled(Container)`
    h1 {
        margin: 20px;
    }
    
    ul {
        list-style: disc;
    }
`

export const SelectInput = styled(UserInput)`

    select {
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


