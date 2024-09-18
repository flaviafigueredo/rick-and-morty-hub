import "./styles.css" // importa o arquivo CSS
import { useCharacters } from "../../hooks/useCharacters" // importa o hook personalizado para buscar personagens
import { CharacterCard } from "../character-card/CharacterCard" // importa o componente de Card para exibir os personagens

// componente que renderiza a lista de personagens
export function CharacterList() {
    // utiliza o hook useCharacters para buscar personagens da API e controlar estados de carregamento e erro
    const { characters, loading, error } = useCharacters()

    // se os dados ainda estiverem sendo carregados exibe a mensagem de carregamento
    if (loading) return <p>Loading...</p>

    // se houver algum erro na requisição exibe a mensagem de erro
    if (error) return <p>Error: {error.message}</p>

    // filtra os três primeiros personagens para exibição
    const firstThreeCharacters = characters.slice(0, 3)

    return (
        // renderiza a lista de personagens em uma div com a classe character-list
        <div className="character-list">
            {
                // mapeia os personagens filtrados e cria um componente CharacterCard para cada um
                firstThreeCharacters.map(character => (
                    <CharacterCard
                        key={character.id} // atribui uma key única a cada card
                        name={character.name} // passa o nome do personagem
                        image={character.image} // passa a imagem do personagem
                        species={character.species} // passa a espécie do personagem
                        gender={character.gender} // passa o gênero do personagem
                        origin={character.origin.name} // passa o nome do local de origem do personagem
                    />
                ))
            }
        </div>
    )
}