import { Layout } from "antd" // importa o Layout do Ant Design
import "./styles.css" // importa o arquivo de estilos

// renomeia o subcomponente Footer do Layout como AntFooter para evitar conflitos com o componente Footer da aplicação
const { Footer: AntFooter } = Layout

// função que define o componente Footer
export function Footer() {
    return (
        <AntFooter className="footer">
            <p>© 2024 Rick and Morty Hub - All rights reserved</p>
        </AntFooter>
    )
}