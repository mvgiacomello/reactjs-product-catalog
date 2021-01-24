import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('renders Footer', () => {
    render(<Footer />)
    const element = screen.getByText(/Copyright/i)
    expect(element).toBeInTheDocument()
})