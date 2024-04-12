import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../contenedores/Home";
import Formulario from "../contenedores/Formulario";
import Layout from "../componentes/Layout";
import UsarContexto from "../contexto/UsarContexto";


function App() {
    return ( 
        <BrowserRouter>
        <UsarContexto>
        <Layout>
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/formulario" element={<Formulario />} />
            </Routes>
        </Layout>
        </UsarContexto>
        </BrowserRouter>
     );
}

export default App;