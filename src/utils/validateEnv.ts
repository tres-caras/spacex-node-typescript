import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
    cleanEnv(process.env, {
        PORT: port(),
        POSTGRES_HOST: str(),
        POSTGRES_PORT: str(),
        POSTGRES_USER: str(),
        POSTGRES_PASSWORD: str(),
        POSTGRES_DATABASE: str(),
    });
}

export default validateEnv;