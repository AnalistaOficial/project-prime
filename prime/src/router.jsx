// Importa os componentes necessários do react-router-dom para gerenciamento de rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa os componentes que serão usados nas rotas
import HeaderApp from './components/Header';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Error from './pages/Error';
import Favorito from './pages/Favorito';

/**
 * Componente de configuração das rotas da aplicação
 * 
 * O RouterApp gerencia todas as rotas da aplicação e renderiza os componentes corretos
 * de acordo com a URL acessada. O BrowserRouter é responsável por envolver toda a
 * aplicação com as funcionalidades de roteamento.
 */
function RouteApp() {
    return (
        <div>
            {/* Envolve as rotas e o cabeçalho da aplicação */}
            <BrowserRouter>
                <HeaderApp />  {/* Componente do cabeçalho da aplicação */}

                {/* Define as rotas da aplicação */}
                <Routes>
                    {/* Rota principal que carrega a página Home */}
                    <Route path='/' element={ <Home /> } />

                    {/* Rota para a página de detalhes do filme, recebe um parâmetro 'id' */}
                    <Route path='/filme/:id' element={ <Filme /> } />

                    {/* Rota para a página de favoritos */}
                    <Route path='/favorito' element={ <Favorito /> } />

                    {/* Rota para página de erro (404), caso o usuário tente acessar uma URL não definida */}
                    <Route path='*' element={ <Error /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// Exporta o componente para ser usado no App.js
export default RouteApp;
