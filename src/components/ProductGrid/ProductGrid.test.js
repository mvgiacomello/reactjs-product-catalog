import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react';
import ProductGrid from './ProductGrid';

const dummyResponse = [
    {
        'id': 111,
        'title': 'John Legend Live',
        'description': 'Come and join one of the world\'s most beloved artists as he performs live and just for you from MelodyVR’s studio in LA.',
        'artist': 'John Legend',
        'isFree': false,
        'image1': 'https://d17jafawxl91z1.cloudfront.net/MVR_FDC_L0103_App_Hero-1607341456001.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_FDC_L0103_App_Square-1607341456001.jpg',
        'accentColor': '#f52459',
        'backgroundColor': '#841225',
        'textColor': '#ffffff',
        'feature_order': '4',
        'price': '12.99'
    },
    {
        'id': 114,
        'title': 'Fontaines D.C. in London',
        'description': 'Live show from Brixton Academy.',
        'artist': 'Fontaines D.C.',
        'isFree': false,
        'image1': 'https://d17jafawxl91z1.cloudfront.net/MVR_JOL_L0022_App_Hero-1589529179871.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_JOL_L0022_App_Square-1589535273302.jpg',
        'accentColor': '#8a8989',
        'backgroundColor': '#424242',
        'textColor': '#FFCCCC',
        'feature_order': '3',
        'price': '12.99'
    }
]

const server = setupServer(
    rest.get('/products', (req, res, ctx) => {
        return res(ctx.json(dummyResponse))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('renders ProductGrid with Title', async () => {
    render(<Router><ProductGrid /></Router>);
    await waitFor(() => screen.getByText(dummyResponse[0].title))
    const element = screen.getByText(dummyResponse[0].title);
    expect(element).toBeInTheDocument();
});