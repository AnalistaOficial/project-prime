# Projeto React com Docker

![Docker](https://img.shields.io/badge/Docker-%230db7ed?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-%2320232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-%2343853D?style=for-the-badge&logo=node.js&logoColor=white)

Este projeto é uma aplicação React configurada para ser executada dentro de um container Docker. O projeto utiliza o Vite para a construção e React Router para navegação, permitindo uma aplicação dinâmica de filmes com recursos como salvar filmes como favoritos e exibir detalhes. A aplicação consome dados da API TMDB para exibir informações sobre filmes. Abaixo estão as instruções para rodar o projeto localmente com Docker, seja em Windows ou Linux.

## Objetivo do Projeto

Este projeto tem como objetivo fornecer uma aplicação interativa onde os usuários podem pesquisar filmes, visualizar seus detalhes e adicionar filmes à sua lista de favoritos. A aplicação utiliza:

- **React** para o desenvolvimento do front-end.
- **React Router** para a navegação entre páginas.
- **TMDB API** para buscar dados de filmes.
- **LocalStorage** para armazenar os filmes favoritos.

Os usuários podem visualizar a lista de filmes, acessar detalhes de um filme, assistir ao trailer no YouTube e salvar filmes como favoritos. A aplicação também conta com um sistema de modal de confirmação para ações como a adição ou remoção de filmes dos favoritos.

## Requisitos

- Docker Desktop instalado na sua máquina.

### Como instalar o Docker:

- **Windows:**
  - Baixe e instale o Docker Desktop para Windows através do [link oficial](https://www.docker.com/products/docker-desktop).
  - Siga as instruções de instalação e, após a instalação, reinicie o computador se necessário.

- **Linux:**
  - Para sistemas baseados no Ubuntu, execute os seguintes comandos:
  
    ```bash
    sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install docker-ce
    sudo systemctl enable docker
    sudo systemctl start docker
    ```

  - Para outros sistemas Linux, consulte a documentação oficial do Docker: [Instalar Docker no Linux](https://docs.docker.com/engine/install/).

## Instruções de Execução

Siga as etapas abaixo para executar o projeto localmente com Docker:

### 1. Baixe o código-fonte

Clone este repositório para a sua máquina:

```bash
git clone https://github.com/AnalistaOficial/project-prime.git
cd project-prime

## 3. Acesse a aplicação

Após a construção do container, a aplicação estará disponível em `http://localhost:5173`. Abra seu navegador e acesse a URL.

## 4. Rodando em Produção

Para rodar a aplicação em modo de produção, remova o comando `--dev` da linha de comando do Docker no `docker-compose.yml` e altere o `CMD` do `Dockerfile` para rodar a aplicação em produção.

### Dockerfile:

```dockerfile
CMD ["npm", "run", "build"]

E depois, execute:

```bash
docker-compose up --build
