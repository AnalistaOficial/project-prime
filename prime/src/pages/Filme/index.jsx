// Importa os hooks necessários do React e do React Router
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Importa a instância da API e os estilos CSS
import api from '../../service/api';
import './Filme.css';

/**
 * Componente funcional Filme
 * 
 * Este componente busca e exibe os detalhes de um filme específico com base no ID passado via URL.
 * Também permite salvar o filme como favorito no localStorage e exibe um modal de feedback para o usuário.
 */
function Filme() {
    // Extrai o parâmetro `id` da URL
    const { id } = useParams();

    // Estados do componente
    const [deltalhe, setDetalhe] = useState({}); // Detalhes do filme
    const [loading, setLoading] = useState(true); // Indica se os dados ainda estão sendo carregados
    const [mensagemModal, setMensagemModal] = useState(""); // Mensagem exibida no modal
    const [mostrarModal, setMostrarModal] = useState(false); // Controle de exibição do modal

    const navigate = useNavigate();

    // Efeito que carrega os dados do filme ao montar o componente
    useEffect(() => {
        async function buscarDetalhe() {
            try {
                const response = await api.get(`/movie/${id}`, {
                    params: {
                        query: 'Batman', // (Pode ser removido — não é necessário aqui)
                        language: 'pt-BR'
                    }
                });

                setDetalhe(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Filme não encontrado");

                // Redireciona o usuário para a home caso ocorra erro
                navigate('/', { replace: true });
            }
        }

        buscarDetalhe();
    }, [navigate, id]);

    /**
     * Função para salvar o filme no localStorage como favorito
     */
    function salvarFilme() {
        const listaFilmesSalvos = localStorage.getItem("@prime");
        let filmesSalvos = JSON.parse(listaFilmesSalvos) || [];

        // Verifica se o filme já está salvo
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === deltalhe.id);

        if (hasFilme) {
            setMensagemModal("Este filme já está na sua lista de favoritos.");
            setMostrarModal(true);
            return;
        }

        // Adiciona o novo filme e salva novamente no localStorage
        filmesSalvos.push(deltalhe);
        localStorage.setItem("@prime", JSON.stringify(filmesSalvos));

        setMensagemModal("Filme adicionado à sua lista de favoritos.!");
        setMostrarModal(true);
    }

    // Exibe uma mensagem de carregamento enquanto os dados do filme estão sendo buscados
    if (loading) {
        return (
            <div className='carrega-detalhe'>
                <h1>Carregando detalhe...</h1>
            </div>
        );
    }

    return (
        <div className='detalhe-filme'>
            {/* Título do filme */}
            <strong>{deltalhe.title}</strong>

            {/* Imagem do filme */}
            <img 
                src={`https://image.tmdb.org/t/p/original/${deltalhe.backdrop_path}`} 
                alt={deltalhe.title} 
            />

            {/* Sinopse do filme */}
            <h3>Sinopse</h3>
            <span>{deltalhe.overview}</span>

            {/* Avaliação do filme */}
            <strong>Avaliação: {deltalhe.vote_average} / 10</strong>

            {/* Botões de ação */}
            <div className="botoes-detalhe">
                <button onClick={salvarFilme} className="botao-detalhe">Salvar</button>

                <button className="botao-detalhe">
                    <a 
                        className="botao-detalhe link-trailer" 
                        target='_blank' 
                        rel="external" 
                        href={`https://www.youtube.com/results?search_query=${deltalhe.title} Trailer`}
                    >
                        Trailer
                    </a>
                </button>
            </div>

            {/* Modal de confirmação */}
            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>{mensagemModal}</p>
                        <button onClick={() => setMostrarModal(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Exporta o componente para uso em outras partes da aplicação
export default Filme;
