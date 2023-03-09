import React from "react";
import { HomeAlunoPage, LoginBtn } from './styled';


export default function HomeAluno () {

        return(
            <HomeAlunoPage>
                    <div className="imagem"></div>
                    <section className="provas-recentes">
                        <h2>Provas Recentes</h2>
                        <p>Você não tem provas recentes, <a href="/">clique aqui</a> para realizar sua primeira prova</p>
                    </section>
                    <section className="estatisticas">
                        <h2>Estatísticas</h2>
                    </section>
            </HomeAlunoPage>
        )
}