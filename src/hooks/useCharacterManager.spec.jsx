import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { useCharacterManager } from "./useCharacterManager"
import { message } from "antd"
import api from "../services/api"
import axios from "axios"

// mockando a instância do axios
jest.mock("axios")
jest.mock("../services/api", () => ({
    get: jest.fn(), // mocka o método GET da API
}))

// mockando o message do Ant Design
jest.mock("antd", () => ({
    message: {
        error: jest.fn(),
        success: jest.fn(),
    }
}))

// componente de teste que utiliza o hook useCharacterManager
const TestComponent = () => {
    const { loading, addCharacter } = useCharacterManager()

    React.useEffect(() => {
        const addCharacters = async () => {
            // chama a função para adicionar o personagem
            await addCharacter("Rick Sanchez") // espera a primeira chamada
            await addCharacter("Rick Sanchez") // chama novamente para testar a duplicidade
        }

        addCharacters()
    }, [addCharacter])

    return (
        <div>
            {loading && <div role="status">Loading...</div>} {/* simula a exibição do spinner de carregamento */}
        </div>
    )
}

describe("useCharacterManager", () => {
    it('should show spinner while loading and hide it after', async () => {
        // mockando a resposta da API com um personagem
        api.get.mockResolvedValueOnce({
            data: {
                results: [
                    { name: "Rick Sanchez" },
                ]
            }
        })

        // renderiza o componente de teste
        render(<TestComponent />)

        const loadingElement = screen.getByRole("status")
        expect(loadingElement).toBeInTheDocument() // verifica se o loading está presente

        // espera até que o loading não esteja mais no documento
        await waitFor(() => expect(loadingElement).not.toBeInTheDocument())
    })

    it("should show error when character is already added", async () => {
        // mockando a resposta da API para a primeira adição
        api.get.mockResolvedValueOnce({
            data: {
                results: [{ name: "Rick Sanchez" }],
            },
        })

        // mockando a resposta da fake API para a adição de personagem
        axios.post.mockResolvedValueOnce({}) // mock da chamada POST

        // renderiza o componente de teste
        render(<TestComponent />)
        
        // espera a mensagem de erro ser chamada para a duplicidade
        await waitFor(() => {
            expect(message.error).toHaveBeenCalledWith("Character already added!")
        })
    })

    it("should show error when character is not found", async () => {
        // mockando a resposta da API para simular um personagem não encontrado
        api.get.mockResolvedValueOnce({
            data: {
                results: [], // sem resultados significa que o personagem não foi encontrado
            },
        })

        // renderiza o componente de teste
        render(<TestComponent />)

        // espera a mensagem de erro ser chamada
        await waitFor(() => {
            expect(message.error).toHaveBeenCalledWith("Character not found! Please check the name and try again.")
        })
    })

    it("should show a generic error message when an error occurs during the request", async () => {
        // mockando a resposta da API para simular um erro
        api.get.mockRejectedValueOnce(new Error("Network Error")) // simulando um erro de rede

        // renderiza o componente de teste
        render(<TestComponent />)

        // espera a mensagem de erro genérica ser chamada
        await waitFor(() => {
            expect(message.error).toHaveBeenCalledWith("An error occurred while adding the character.")
        })
    })
})