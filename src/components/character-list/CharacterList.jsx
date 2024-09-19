import "./styles.css" // importa o arquivo CSS
import { CharacterCard } from "../character-card/CharacterCard" // importa o componente de Card para exibir os personagens
import { Instructions } from "../instructions/Instructions" // importa o componente Instructions

import { Spin } from "antd" // importa o componente Spin do Ant Design para exibir o carregamento

// componente que renderiza a lista de personagens
export function CharacterList({ characters, loading }) {
    // se os dados ainda estiverem sendo carregados exibe o componente de carregamento (Spin)
    if (loading) {
        return (
            <div className="loading-spinner">
                <Spin size="default" />
            </div>
        )
    }

    // se não houver personagens na tela exibe o componente de instruções
    if (characters.length === 0) {
        return <Instructions />
    }

    return (
        // renderiza a lista de personagens em uma div com a classe character-list
        <div className="character-list">
            {
                // mapeia a lsita de personagens e cria um componente CharacterCard para cada um
                characters.map(character => (
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