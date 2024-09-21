import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "./Input"

describe('<Input />', () => {
    it('should display input element with placeholder', () => {
        // renderiza o componente Input com o placeholder
        render(<Input placeholder="Enter character name" />)

        // seleciona o input pelo placeholder
        const inputElement = screen.getByPlaceholderText(/enter character name/i)

        // verifica se o input está no documento
        expect(inputElement).toBeInTheDocument()
    })

    it('should allow user to type in the input', () => {
        // renderiza o componente Input com um valor inicial
        render(<Input placeholder="Enter character name" value="Rick Sanchez" />)

        // seleciona o input pelo placeholder
        const inputElement = screen.getByPlaceholderText(/enter character name/i)

        // simula o usuário digitando no input
        userEvent.type(inputElement, 'Rick Sanchez')

        // verifica se o valor do input é atualizado corretamente
        expect(inputElement).toHaveValue('Rick Sanchez')
    })
})