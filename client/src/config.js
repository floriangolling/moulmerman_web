const Config = {
    BACKEND_URL: process.env.VUE_APP_BACKEND_URL || 'http://localhost:8080',
    BACKEND_SECURITY_TOKEN: process.env.VUE_APP_BACKEND_SECURITY_TOKEN || 'anystringthere'
}

export default Config;