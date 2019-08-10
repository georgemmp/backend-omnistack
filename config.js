require('dotenv').config();

const env = {
    DB_CONFIG: process.env.DB_CONFIG,
    API_GITHUB: process.env.API_GITHUB
};

module.exports = env;

