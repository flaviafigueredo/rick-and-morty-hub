import { Form as AntForm } from "antd" // importa o componente Form da biblioteca Ant Design e renomeia para AntForm para evitar conflitos
import "./styles.css" // importa o arquivo de estilos

// cria o componente AddCharacterForm para adicionar um novo personagem
// o componente recebe três props: 
// - children: os elementos filhos que serão renderizados dentro do formulário
// - onFinish: a função chamada quando o formulário é enviado e validado com sucesso
// - form: a instância do formulário gerenciada pelo Ant Design para controle de campos
export function AddCharacterForm({ children, onFinish, form }) {
    return (
        // renderiza o componente AntForm
        // a função onFinish é chamada quando o formulário é enviado
        // a prop form permite o controle do estado do formulário como resetar campos
        <AntForm onFinish={onFinish} form={form} className="add-character-form">
            {children} {/* renderiza os filhos passados para o Form */}
        </AntForm>
    )
}