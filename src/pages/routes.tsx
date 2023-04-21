import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Habilidades } from "./Habilidades"
import { Sobre } from "./Sobre"
import { Projetos } from "./Projetos"


const AppRoutes = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={ <Home/> }/>

                <Route path="/sobre" element={ <Sobre/> }/>

                <Route path="/habilidades" element={ <Habilidades/> }/>

                <Route path="/projetos" element={ <Projetos/> }/>

            </Routes>
        
        </BrowserRouter>

    )

}

export { AppRoutes }