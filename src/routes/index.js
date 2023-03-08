import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Prova from "../pages/Prova";
import Page404 from "../pages/Page404";
import SelectProva from "../pages/SelectProva";
import Cadastro from "../pages/Cadastro";


export function MyRoutes(){
    return(
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cadastro" element={<Cadastro />} />
                <Route exact path="/selecionar" element={<SelectProva />} />
                <Route path="/prova" element={<Prova />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
    )
}