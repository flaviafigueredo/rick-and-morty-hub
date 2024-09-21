import { render } from "@testing-library/react"
import { AddCharacterForm } from "./AddCharacterForm"

describe('<AddCharacterForm />', () => {
    it('should render the form', () => {
        // renderiza o componente AddCharacterForm e armazena o container
        const { container } = render(<AddCharacterForm />)

        // seleciona o formulário usando a classe CSS
        const formElement = container.querySelector('.add-character-form')

        // verifica se o formulário está presente no documento
        expect(formElement).toBeInTheDocument()
    })
})