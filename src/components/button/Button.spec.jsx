import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe('<Button />', () => {
    it('should render the button', () => {
        // renderiza o componente Button
        render(<Button />)

        // seleciona o botão usando o papel (role)
        const buttonElement = screen.getByRole('button')

        // verifica se o botão está presente no documento
        expect(buttonElement).toBeInTheDocument()
    })
})