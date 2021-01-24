import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import ProductGridItem from './ProductGridItem'

test('renders ProductGridItem with Title', () => {
    render(<Router><ProductGridItem title='Foo' /></Router>)
    const element = screen.getByText('Foo')
    expect(element).toBeInTheDocument()
});

test('renders ProductGridItem with Price', () => {
    render(<Router><ProductGridItem price='10' /></Router>)
    const element = screen.getByText('£ 10')
    expect(element).toBeInTheDocument()
});