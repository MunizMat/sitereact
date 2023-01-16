import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Prova from "../pages/Prova";
import Page404 from "../pages/Page404";


export function MyRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prova" element={<Prova />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
    )
}