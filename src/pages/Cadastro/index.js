import React from "react";
import { CadastroPage } from './styled';
import {FormContainer, UserInput} from '../../styles/GlobalStyles';

export default function Cadastro () {

        return(
            <CadastroPage>
                <FormContainer>
                    <h2>Crie sua conta</h2>
                    <UserInput>
                        <label htmlFor="email">Seu email:</label>
                        <input type="email" name="email" id="email"></input>
                    </UserInput>
                    <UserInput>
                        <label htmlFor="password"> Sua senha:</label>
                        <input type="password" name="password" id="password"></input>
                    </UserInput>
                    <UserInput>
                        <label htmlFor="password2"> Repita sua senha:</label>
                        <input type="password" name="password2" id="password2"></input>
                    </UserInput>
                    <button className="btn criar-conta">Criar Conta</button>
                </FormContainer>
            </CadastroPage>
        )
}