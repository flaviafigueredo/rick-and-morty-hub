import Logo from "../../assets/logo.png" // importa o logo
import "./styles.css" // importa o arquivo dos estilos
import { Layout } from "antd" // importa o Layout do Ant Design

// renomeia o subcomponente Header do Layout como AntHeader para evitar conflitos com o componente Header da aplicação
const { Header: AntHeader } = Layout

// função que define o componente Header
export function Header() {
    return (
        // o AntHeader é o container principal do cabeçalho
        <AntHeader className="header">
            <div className="header-content">
                {/* exibe o logo */}
                <img src={Logo} alt="Logo do Rick e Morty" className="logo" />
            </div>
        </AntHeader>
    )
}