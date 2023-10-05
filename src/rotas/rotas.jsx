import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/About'
import Contato from '../pages/Contact'
import Services from "../pages/Services";
import Pessoal from "../pages/Pessoal";
import Equipe from "../pages/Equipe";

export const AppRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = {<Home />}   path="/" />
                <Route element = {<Sobre />}   path="/sobre" />
                <Route element = {<Services />}   path="/areas-atuacao" />
                <Route element = {<Pessoal />}   path="/pagina-pessoal" />
                <Route element = {<Equipe />}   path="/advogados" />

                <Route element = {<Contato />}   path="/contato" />
            </Routes>
       </BrowserRouter>
   )
}
