import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe('<Header />', () => {
    it('should be rendered', () => {
        // renderiza o componente Header
        render(<Header />)

        // seleciona o logo pelo alt
        const logoElement = screen.getByAltText(/logo do rick e morty/i)

        // verifica se o elemento está no documento
        expect(logoElement).toBeInTheDocument()
    })
})