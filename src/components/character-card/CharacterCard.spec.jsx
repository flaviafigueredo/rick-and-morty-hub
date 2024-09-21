import { render, screen } from "@testing-library/react"
import { CharacterCard } from "./CharacterCard"

describe('<CharacterCard />', () => {
    it('should display character details correctly', () => {
        // cria um objeto de exemplo para o personagem
        const character = {
            name: 'Rick Sanchez',
            image: 'https://test.com/rick.png',
            species: 'Human',
            gender: 'Male',
            origin: 'Earth'
        }

        // renderiza o componente CharacterCard com as propriedades do personagem
        render(<CharacterCard {...character} />)

        // verifica se o nome do personagem está na tela, ignorando letras maiúsculas/minúsculas 
        const nameElement = screen.getByText(/rick sanchez/i)
        expect(nameElement).toBeInTheDocument()

        // verifica se a imagem está na tela e se o src está correto
        const imgElement = screen.getByAltText(/rick sanchez/i)
        expect(imgElement).toHaveAttribute('src', character.image)

        // verifica se a espécie, gênero e origem estão na tela
        expect(screen.getByText(/species: human/i)).toBeInTheDocument()
        expect(screen.getByText(/gender: male/i)).toBeInTheDocument()
        expect(screen.getByText(/origin: earth/i)).toBeInTheDocument()
    })
})