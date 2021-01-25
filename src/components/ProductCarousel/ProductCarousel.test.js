import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import ProductCarousel from './ProductCarousel'

const dummyProducts = [
    {
        'id': 1,
        'title': 'Dummy Title',
        'description': 'Dummy Description',
        'artist': 'Dummy Artist',
        'isFree': false,
        'image1': 'data:image/png;base64,aa',
        'image2': 'data:image/png;base64,aa',
        'accentColor': '#000000',
        'backgroundColor': '#000000',
        'textColor': '#000000',
        'feature_order': '1',
        'price': '10.00'
    }
]

test('renders ProductCarousel a product with Title', async () => {
    render(<Router><ProductCarousel products={dummyProducts} /></Router>);
    const element = screen.getAllByText(dummyProducts[0].title)
    expect(element[0]).toBeInTheDocument()
})