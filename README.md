# Gerenciador de Usuários

Este projeto é uma API de gerenciamento de usuários construída com Node.js, Sequelize e PostgreSQL. A API permite a criação, recuperação, atualização e exclusão de usuários.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js que suporta PostgreSQL.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Adminer**: Ferramenta de gerenciamento de banco de dados para visualizar e manipular dados.

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v12 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (você pode usar Docker para instalação)
- [Docker](https://www.docker.com/) (opcional, para rodar PostgreSQL e Adminer em containers)

### Instalação do PostgreSQL e Adminer com Docker

Se você optar por usar o Docker, execute os seguintes comandos para iniciar um container PostgreSQL e o Adminer:

```bash
# Iniciar o container PostgreSQL
docker run --name Devclub-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

# Iniciar o container Adminer
docker run --name adminer -p 8080:8080 --link Devclub-postgres:db -d adminer
