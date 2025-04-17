// Importa o Axios, uma biblioteca HTTP baseada em Promises
import axios from 'axios';

/**
 * Cria uma instância personalizada do Axios para se comunicar com a API do TMDB (The Movie Database).
 * A instância inclui a baseURL da API e o cabeçalho de autorização (Bearer Token).
 * 
 * Obs: o token está diretamente embutido, o que não é recomendado para produção.
 * Idealmente, use variáveis de ambiente (.env).
 */
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // URL base da API TMDB

  headers: {
    // Token de autenticação JWT fornecido pelo TMDB (gerado no site)
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTFmOWY1OGJiMTI2OGU3ZGU5ODAyMDZlOWJiYjEzOSIsIm5iZiI6MTc0NDc1MzM3My41MjYsInN1YiI6IjY3ZmVkMmRkZDhiODVlYjc4MmQ5NDBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.guYzq3BdsbeO7NOiQocBZ64Ntn116wXat-2ZiosIz7s',
    
    // Define o tipo de conteúdo aceito na resposta
    accept: 'application/json'
  }
});

// Exporta a instância da API para ser usada em outras partes da aplicação
export default api;
