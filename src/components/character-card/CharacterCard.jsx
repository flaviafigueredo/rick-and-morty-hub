import { Card } from "antd" // importa o componente Card do Ant Design
import "./styles.css" // importa o arquivo de estilos

// desestruturação do componente Meta do Ant Design (ele é usado dentro do Card para exibir o título e a descrição)
const { Meta } = Card

// o componente CharacterCard recebe as props: name, image, species, gender e origin
export function CharacterCard({ name, image, species, gender, origin }) {
    return (
        // cria o Card para cada personagem com uma imagem e uma classe CSS personalizada
        <Card
            cover={<img alt={name} src={image} />} // exibe a imagem do personagem como cover (capa) do Card, o alt contém o nome do personagem para acessibilidade

            className="character-card" // aplica a classe CSS para customização do estilo
        >
            {/* Meta é usado para definir o título e a descrição do Card */}
            <Meta
                title={name} // o nome do personagem será exibido como título
                description={(
                    // a descrição inclui detalhes sobre o personagem, como espécie, gênero e origem e são passados pelas props
                    <div>
                        <p>Species: {species}</p>
                        <p>Gender: {gender}</p>
                        <p>Origin: {origin}</p>
                    </div>
                )}
            />
        </Card>
    )
}