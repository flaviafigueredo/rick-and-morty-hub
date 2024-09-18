// importa o axios (biblioteca para fazer requisições HTTP)
import axios from "axios"

// cria uma instância do Axios com uma URL base
const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api", 
  // a baseURL define a URL base que será usada em todas as requisições feitas com esta instância
})

// exporta a instância do Axios para ser usada em outros módulos
export default api