import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"

describe('<Footer />', () => {
    it('should be rendered', () => {
        // renderiza o componente Footer
        render(<Footer />)

        // seleciona o Footer pelo texto
        const footerElement = screen.getByText(/rick and morty hub/i)

        // verifica se o Footer está no documento
        expect(footerElement).toBeInTheDocument()
    })
})