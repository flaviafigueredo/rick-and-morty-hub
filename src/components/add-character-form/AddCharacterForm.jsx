import { Form as AntForm } from "antd" // importa o componente Form da biblioteca Ant Design e renomeia para AntForm para evitar conflitos
import "./styles.css" // importa o arquivo de estilos

// cria o componente AddCharacterForm para adicionar um novo personagem
// recebe duas props (children e onFinish)
export function AddCharacterForm({ children, onFinish }) {
    return (
        // renderiza o componente AntForm
        // a função onFinish é chamada quando o formulário é enviado
        <AntForm onFinish={onFinish} className="add-character-form">
            {children} {/* renderiza os filhos passados para o Form */}
        </AntForm>
    )
}