import dotenv from 'dotenv';

// Carregar variáveis do arquivo .env
dotenv.config();

export default {
    dialect:'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
