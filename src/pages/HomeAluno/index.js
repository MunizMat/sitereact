import React from "react";
import { HomeAlunoPage, LoginBtn } from './styled';

export default function HomeAluno () {

        return(
            <HomeAlunoPage>
                <div className="home-container">
                    <h1>Título</h1>
                    <h2>Sua plataforma de estudos</h2>
                    <a href="/login">
                        <LoginBtn><p>Faça login ou crie sua conta</p></LoginBtn>
                    </a>
                </div>
            </HomeAlunoPage>
        )
}