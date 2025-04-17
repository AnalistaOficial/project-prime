// Importa o arquivo de estilos CSS específico para este componente
import './Error.css';

/**
 * Componente funcional Error
 * 
 * Este componente é utilizado para exibir uma página de erro "Page Not Found",
 * normalmente usada quando o usuário acessa uma rota inexistente.
 * Ele renderiza uma imagem centralizada com uma mensagem visual de erro.
 */
function Error() {
    return (
        <div className='div-img-notfound'> {/* Container da imagem com classe para estilização */}
            <img 
                src="page_not_found.jpg" // Caminho da imagem que será exibida
                alt="Page Not Found"     // Texto alternativo da imagem (acessibilidade)
                className="img-notfound" // Classe usada para estilizar a imagem via CSS
            />
        </div>
    );
}

// Exporta o componente para que possa ser utilizado em outras partes da aplicação
export default Error;
