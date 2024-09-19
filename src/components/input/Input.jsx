import { Input as AntInput } from "antd" // importa o componente Input da biblioteca Ant Design e renomeia para AntInput para evitar conflitos

// componente Input envolve o AntInput para permitir reutilização
export function Input({ ...props }) {
    return (
        // renderiza o componente AntInput
        // o spread operator {...props} repassa todas as propriedades recebidas pelo componente Input diretamente para o AntInput
        <AntInput {...props} />
    )
}