import { render, screen } from "@testing-library/react"
import { CharacterList } from "./CharacterList"

describe('<CharacterList />', () => {
    it('should display loading spinner when loading is true', () => {
        // renderiza o componente CharacterList com loading true e sem personagens
        const { container } = render(<CharacterList characters={[]} loading={true} />)

        // seleciona o spinner de loading
        const spinnerElement = container.querySelector('.loading-spinner')

        // verifica se o spinner está no documento
        expect(spinnerElement).toBeInTheDocument()
    })

    it('should display instructions when there are no characters', () => {
        // renderiza o componente CharacterList com loading false e uma lista vazia de personagens
        render(<CharacterList characters={[]} loading={false} />)

        // seleciona as instruções
        const instructionsElement = screen.getByText(/search for a rick and morty character/i)

        // verifica se as instruções estão no documento
        expect(instructionsElement).toBeInTheDocument()
    })

    it('should render one character card when there is one character', () => {
        // cria um exmeplo de personagem
        const character = {
            id: 1,
            name: 'Rick Sanchez',
            image: 'https://test.com/rick.png',
            species: 'Human',
            gender: 'Male',
            origin: { name: 'Earth' }
        }

        // renderiza o componente CharacterList com um personagem
        render(<CharacterList characters={[character]} loading={false} />)

        // seleciona o nome pelo texto
        const nameElement = screen.getByText(/rick sanchez/i)

        // verifica se o nome do personagem está na tela
        expect(nameElement).toBeInTheDocument()

        // verifica se a imagem renderiza corretamente
        expect(screen.getByAltText(/rick sanchez/i)).toHaveAttribute('src', character.image)
    })

    it('should render multiple character cards when there are multiple characters', () => {
        // cria uma lista de exemplos de personagens
        const characters = [
            {
                id: 1,
                name: 'Rick Sanchez',
                image: 'https://test.com/rick.png',
                species: 'Human',
                gender: 'Male',
                origin: { name: 'Earth' }
            },
            {
                id: 2,
                name: 'Morty Smith',
                image: 'https://test.com/morty.png',
                species: 'Human',
                gender: 'Male',
                origin: { name: 'Earth' }
            }
        ]

        // renderiza o componente CharacterList com personagens
        render(<CharacterList characters={characters} loading={false} />)

        // verifica se todos os personagens estão no documento
        characters.forEach(character => {
            expect(screen.getByText(character.name)).toBeInTheDocument()

            // verifica se as imagens dos personagens estão renderizadas corretamente
            expect(screen.getByAltText(character.name)).toHaveAttribute('src', character.image)
        })
    })
})