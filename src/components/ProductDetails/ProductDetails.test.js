import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import ProductDetails from './ProductDetails'

test('renders ProductDetails', () => {
    const history = createMemoryHistory()
    const route = '/product/123';
    history.push(route);

    render(
        <Router history={history}>
            <ProductDetails history={history} />
        </Router>
    );
    const element = screen.getByText('Return')
    expect(element).toBeInTheDocument()
});