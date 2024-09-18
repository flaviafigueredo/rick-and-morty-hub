import api from "../services/api" // importa a instância do Axios
import { useState, useEffect } from "react" // importa os hooks useState e useEffect 

export function useCharacters() {
    // estado para armazenar os personagens
    const [characters, setCharacters] = useState([])

    // estado para controlar se os dados estão sendo carregados
    const [loading, setLoading] = useState(true)

    // estado para armazenar erros
    const [error, setError] = useState(null)

    // useEffect executa assim que o componente é montado
    useEffect(() => {
        // função assíncrona para buscar os personagens da API
        async function fetchCharacters() {
            try {
                // faz uma requisição GET para o endpoint /character usando a instância do Axios
                const response = await api.get('/character')
                
                // atualiza o estado characters com os dados recebidos
                setCharacters(response.data.results)
            } catch (err) {
                // se ocorrer um erro, atualiza o estado error com o erro
                setError(err)
            } finally {
                // atualiza o estado loading para false após a requisição ser concluída
                setLoading(false)
            }
        }

        fetchCharacters() // chama a função para buscar os personagens
    }, []) // o array vazio faz com que o useEffect execute apenas uma vez após o componente ser montado

    return { characters, loading, error } // retorna os dados e os estados
}