require('dotenv').config();

const serverConfig = {
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 8080,
    HOST: process.env.HOST ? process.env.HOST : '127.0.0.1',
    DATABASE_HOST: process.env.DATABASE_HOST ? process.env.DATABASE_HOST : '',
    REQUEST_SECURITY: process.env.REQUEST_SECURITY ? process.env.REQUEST_SECURITY : 'anystringthere',
    OVERRIDE: process.env.OVERRIDE && process.env.OVERRIDE.trim() === 'true' ? true : false
}

module.exports = serverConfig