import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'

test('renders Header', () => {
    render(<Header text='Foo' />)
    const element = screen.getByText('Foo')
    expect(element).toBeInTheDocument()
});