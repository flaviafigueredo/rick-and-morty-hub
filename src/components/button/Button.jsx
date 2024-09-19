import { Button as AntButton } from "antd" // importa o componente de Button da biblioteca Ant Design e renomeia como AntButton para evitar conflitos

// componente Button envolve o AntButton para permitir reutilização
export function Button({ ...props }) {
    return (
        // renderiza o componente AntButton
        // o spread operator {...props} repassa todas as propriedades recebidas pelo componente Button diretamente para o AntButton
        <AntButton {...props} />
    )
}