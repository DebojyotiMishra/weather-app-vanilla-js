const loadEnv = () => {
    const env = {};
    const envText = localStorage.getItem('env') || '';
    envText.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            env[key.trim()] = value.trim();
        }
    });
    return env;
};

const env = loadEnv();

const config = {
    API_KEY: env.WEATHER_API_KEY,
    DEFAULT_CITY: env.DEFAULT_CITY || 'Paris'
};

export default config; 