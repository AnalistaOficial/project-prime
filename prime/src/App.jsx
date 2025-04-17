// Importa o componente de roteamento da aplicação
import RouterApp from './router';

/**
 * Componente principal da aplicação
 * 
 * O componente App é o ponto de entrada da aplicação React.
 * Dentro dele, o componente RouterApp é responsável por gerenciar as rotas da aplicação.
 */
function App() {

  return (
    // Container principal da aplicação
    <div className="App">
      
      {/* Componente de roteamento que lida com as diferentes páginas */}
      <RouterApp />
    </div>
  )
}

// Exporta o componente App para ser usado no index.js (ponto de entrada da aplicação)
export default App;
