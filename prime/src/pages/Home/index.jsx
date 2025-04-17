// Importa os hooks necessários do React e módulos de rota/API/estilo
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import './Home.css';

/**
 * Componente funcional Home
 * 
 * Exibe uma lista de filmes baseada em uma busca (ex: "Batman").
 * Os dados são buscados da API TMDB (The Movie Database) ao montar o componente.
 */
function Home() {

    // Estados do componente
    const [filmes, setFilmes] = useState([]);       // Lista de filmes buscados
    const [loading, setLoading] = useState(true);   // Estado de carregamento

    // Hook que executa a busca de filmes assim que o componente é montado
    useEffect(() => {
        async function buscarFilme() {
            try {
                const response = await api.get('/search/movie', {
                    params: {
                        query: 'Batman',       // Palavra-chave para busca de filmes
                        language: 'pt-BR',     // Idioma da resposta
                        page: 1                // Página da API
                    }
                });

                // Atualiza a lista de filmes e finaliza o carregamento
                setFilmes(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar filme:', error.response?.data || error.message);
            }
        }

        buscarFilme();
    }, []);

    // Exibe um carregando enquanto os dados ainda estão sendo buscados
    if (loading) {
        return (
            <div className='loading'>
                <h1>Carregando...</h1>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {
                    filmes.map((filme) => (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>

                            {/* Imagem do cartaz do filme */}
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                                alt={filme.title} 
                            />

                            {/* Link para detalhes do filme */}
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    ))
                }
            </div>
        </div>
    );
}

// Exporta o componente para ser usado em outras partes da aplicação
export default Home;
