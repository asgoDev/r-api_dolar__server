import env from "dotenv"
import envvar from 'env-var'

env.config()

export const envs = {
  PORT: envvar.get('PORT').required().asPortNumber()
}