import { render, screen } from "@testing-library/react"
import { Instructions } from "./Instructions"

describe('<Instructions />', () => {
    it('should render the Instructions component', () => {
        // renderiza o componente Instructions
        render(<Instructions />)

        // seleciona o parágrafo pelo role (papel)
        const instructionsElement = screen.getByRole('paragraph')

        // verifica se as instruções estão no documento
        expect(instructionsElement).toBeInTheDocument()
    })
})