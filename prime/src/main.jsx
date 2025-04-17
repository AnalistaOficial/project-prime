// Importa StrictMode do React (modo de desenvolvimento para detectar problemas) e a função createRoot para criar a raiz da aplicação
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importa o estilo global e o componente principal da aplicação
import './index.css';
import App from './App.jsx';

/**
 * Ponto de entrada da aplicação React
 * 
 * - StrictMode ajuda a identificar problemas no código durante o desenvolvimento.
 * - createRoot é usado para renderizar a aplicação no DOM.
 * - A aplicação é montada no elemento com o id 'root', que está no HTML.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Componente principal da aplicação */}
    <App />
  </StrictMode>,
);
