import React from "react";
import { HomePage, LoginBtn } from './styled';

export default function Home () {

        return(
            <HomePage>
                <div className="home-container">
                    <h1>Studiez</h1>
                    <h2>Sua plataforma de estudos</h2>
                    <a href="/">
                        <LoginBtn><p>Fazer Login</p></LoginBtn>
                    </a>
                </div>
            </HomePage>
        )
}