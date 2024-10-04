# Node Sequelize User API

Este repositório contém uma API RESTful de gerenciamento de usuários, construída com **Node.js**, **Sequelize** e **PostgreSQL**. A API permite criar, consultar, atualizar e excluir usuários, além de seguir as melhores práticas de desenvolvimento backend.

## Tabela de Conteúdos

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Rodando as Migrações](#rodando-as-migrações)
- [Executando a Aplicação](#executando-a-aplicação)
- [Rotas da API](#rotas-da-api)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Gerenciamento do Banco de Dados](#gerenciamento-do-banco-de-dados)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Tecnologias Utilizadas

- **Node.js**: Plataforma para desenvolvimento backend com JavaScript.
- **Express.js**: Framework web para construção de APIs robustas.
- **Sequelize**: ORM para facilitar a integração com o banco de dados PostgreSQL.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Ferramenta para criação e gerenciamento de containers, usada para facilitar o setup do PostgreSQL.
- **Adminer**: Ferramenta de gerenciamento de banco de dados em PHP, que permite interagir facilmente com o PostgreSQL.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

- [Node.js](https://nodejs.org) (v12 ou superior)
- [Docker](https://www.docker.com/) (para rodar o PostgreSQL em um container)
- [Git](https://git-scm.com/)

## Instalação

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/Rizandrodev/node-sequelize-user-api.git
   cd node-sequelize-user-api
    npm install
## Configuração do Ambiente
-Crie um arquivo .env na raiz do projeto baseado no .env.example e configure as variáveis de ambiente, como o nome do banco de dados, usuário, e senha.
   ```bash

    cp .env.example .env


  
