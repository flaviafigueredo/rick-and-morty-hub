import Logo from "../../assets/logo.png"
import "./styles.css"
import { Layout } from "antd"

const { Header: AntHeader } = Layout

export function Header() {
    return (
        <AntHeader className="header">
            <div className="header-content">
                <img src={Logo} alt="Logo do Rick e Morty" className="logo" />
            </div>
        </AntHeader>
    )
}