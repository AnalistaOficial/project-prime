// Importa hooks do React e o componente Link do React Router
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Importa o arquivo de estilos CSS específico para este componente
import './Favorito.css';

/**
 * Componente funcional Favorito
 * 
 * Exibe uma lista de filmes favoritos armazenados no localStorage.
 * Permite visualizar detalhes de cada filme e excluir filmes da lista.
 * Ao excluir um filme, um modal de confirmação é exibido.
 */
function Favorito() {
    // Estado que armazena a lista de filmes favoritos
    const [listaFilmes, setListaFilmes] = useState([]);

    // Estado que controla a exibição do modal de confirmação
    const [mostrarModal, setMostrarModal] = useState(false);

    // Carrega os filmes favoritos do localStorage na primeira renderização
    useEffect(() => {
        const listaFavoritoStorange = localStorage.getItem("@prime");
        setListaFilmes(JSON.parse(listaFavoritoStorange) || []);
    }, []);

    /**
     * Função para excluir um filme da lista de favoritos
     * 
     * @param {number} id - ID do filme a ser removido
     */
    function excluirFilmeFavorito(id) {
        // Filtra a lista removendo o filme com o ID fornecido
        const filmesAtualizados = listaFilmes.filter(filme => filme.id !== id);

        // Atualiza o estado com a nova lista
        setListaFilmes(filmesAtualizados);

        // Atualiza os dados no localStorage
        localStorage.setItem("@prime", JSON.stringify(filmesAtualizados));

        // Exibe o modal de confirmação
        setMostrarModal(true);
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            <ul>
                {
                    listaFilmes.map((item) => (
                        <li key={item.id}>
                            <span>{item.title}</span>

                            {/* Exibe o pôster do filme */}
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                                alt={item.title} 
                            />

                            <div>
                                {/* Link para a página de detalhes do filme */}
                                <Link to={`/filme/${item.id}`}>Ver detalhe</Link>

                                {/* Botão para excluir o filme da lista */}
                                <button onClick={() => excluirFilmeFavorito(item.id)}>Excluir</button>
                            </div>
                        </li>
                    ))
                }
            </ul>

            {/* Modal de confirmação da exclusão */}
            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Filme excluído com sucesso.</p>
                        <button onClick={() => setMostrarModal(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Exporta o componente para que possa ser usado em outras partes da aplicação
export default Favorito;

