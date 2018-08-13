//Constante solo accesible en este js
const env = process.env

export const nodeEnv = env.NODE_ENV || 'develpment'

export default {
    port: env.PORT || 8080
}