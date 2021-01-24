import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import ProductGrid from './ProductGrid'

const ENDPOINT = process.env.ENDPOINT || 'https://demo4690370.mockable.io'
const dummyResponse = [
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

const server = setupServer(
    rest.get(`${ENDPOINT}/products`, (req, res, ctx) => {
        return res(ctx.json(dummyResponse))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('renders ProductGrid a product with Title', async () => {
    render(<Router><ProductGrid /></Router>);
    await waitFor(() => screen.getByText(dummyResponse[0].title))
    const element = screen.getByText(dummyResponse[0].title)
    expect(element).toBeInTheDocument()
})