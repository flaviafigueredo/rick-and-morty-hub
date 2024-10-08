import { useState } from "react" // importa o hook useState para gerenciamento de estado
import axios from "axios" // importa o Axios para fazer requisições HTTP
import api from "../services/api" // importa a instância configurada do Axios
import { message } from "antd" // importa o componente de mensagem do Ant Design para exibir feedback ao usuário

export function useCharacterManager() {
    // estado para armazenar a lista de personagens
    const [characters, setCharacters] = useState([])

    // estado para controlar o carregamento (spinner) durante as requisições
    const [loading, setLoading] = useState(false)

    // estado para atualizar a lista de personagens
    const [addingCharacter, setAddingCharacter] = useState(false)

    // função para adicionar um personagem
    const addCharacter = async (name) => {
        if (addingCharacter) return // impede múltiplas chamadas enquanto está adicionando novos personagens
        setLoading(true) // inicia o carregamento
        setAddingCharacter(true) // inicia o processo de adição de personagens

        try {
            await new Promise(resolve => setTimeout(resolve, 500)) // simula um atraso de 500 milissegundos

            // verifica se o personagem já está na lista de personagens
            const existingCharacter = characters.some(character => character.name.toLowerCase() === name.toLowerCase())

            if (existingCharacter) {
                message.error("Character already added!") // exibe mensagem de erro se o personagem já estiver na lista
                return // sai da função
            }

            // adiciona o personagem na fake API
            await axios.post("http://localhost:5000/characters", { name })

            // busca os detalhes do personagem na API do Rick and Morty usando a baseURL
            const response = await api.get(`/character/?name=${name}`)
            const data = response.data

            // verifica se o personagem foi encontrado na API
            if (data.results.length === 0) {
                message.error("Character not found! Please check the name and try again.") // exibe mensagem de erro se o personagem não for encontrado
                return // sai da função
            }

            // sobrescreve a lista de personagens
            setCharacters(data.results)
        } catch (error) {
            // mensagens de erro específicas para problemas na requisição
            if (error.response && error.response.status === 404) {
                message.error("Character not found! Please check the name and try again.") // mensagem de erro para personagem não encontrado
            } else {
                message.error("An error occurred while adding the character.") // mensagem de erro genérica
            }
        } finally {
            setLoading(false) // finaliza o carregamento independente de sucesso ou falha
            setAddingCharacter(false) // finaliza o processo de adição de personagens
        }
    }

    // retorna os estados e a função para serem usados no componente
    return { characters, loading, addCharacter }
}