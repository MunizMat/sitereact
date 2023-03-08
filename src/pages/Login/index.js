import React from "react";
import { LoginPage } from './styled';
import {FormContainer, UserInput} from '../../styles/GlobalStyles';

export default function Login () {

        return(
            <LoginPage>
                <FormContainer>
                    <h2>Fazer Login</h2>
                    <UserInput>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"></input>
                    </UserInput>
                    <UserInput>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password"></input>
                    </UserInput>
                    <div className="btn-group">
                        <a href="/cadastro">Criar Conta</a>
                        <button type="submit" className="btn entrar">Entrar</button>
                    </div>
                </FormContainer>
            </LoginPage>
        )
}