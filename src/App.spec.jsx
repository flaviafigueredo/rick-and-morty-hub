import { render, screen } from "@testing-library/react"
import App from "./App"
import { useCharacterManager } from "./hooks/useCharacterManager"

// mock do hook useCharacterManager para simular seu comportamento
jest.mock('./hooks/useCharacterManager')

// mock global para o método matchMedia, necessário em ambiente de simulação
global.matchMedia = jest.fn().mockImplementation(query => {
    return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn()
    }
})

describe('<App />', () => {
    it('should render App with Header, Footer, and Instructions when no characters are present', () => {
        // mocka o retorno do hook para simular ausência de personagens
        useCharacterManager.mockReturnValue({
            characters: [],
            loading: false,
            addCharacter: jest.fn(),
        })

        // renderiza o componente App
        render(<App />)

        // verifica se o Header está no documento
        const headerElement = screen.getByAltText(/logo do rick e morty/i)
        expect(headerElement).toBeInTheDocument()

        // verifica se as instruções estão no documento
        const instructionsElement = screen.getByText(/search for a rick and morty character/i)
        expect(instructionsElement).toBeInTheDocument()

        // verifica se o Footer está no documento
        const footerElement = screen.getByText(/rick and morty hub/i)
        expect(footerElement).toBeInTheDocument()
    })

    it('should render App with CharacterList when characters are present', () => {
        // mocka uma lista de personagens para simulação
        const charactersMock = [
            {
                id: 1,
                name: 'Rick Sanchez',
                image: 'https://test.com/rick.png',
                species: 'Human',
                gender: 'Male',
                origin: { name: 'Earth' }
            },
        ]

        // mocka o retorno do hook para simular presença de personagens
        useCharacterManager.mockReturnValue({
            characters: charactersMock, // lista de personagens
            loading: false,
            addCharacter: jest.fn(),
        })

        // renderiza o componente App
        render(<App />)

        // verifica se o nome do personagem está no documento
        const characterNameElement = screen.getByText(/rick sanchez/i)
        expect(characterNameElement).toBeInTheDocument()
    })
})