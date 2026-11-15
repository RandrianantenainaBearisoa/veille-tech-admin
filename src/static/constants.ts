const env_file = import.meta.env;

const APP_NAME = env_file.VITE_APP_NAME;

export { APP_NAME };
