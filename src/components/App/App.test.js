import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App', () => {
  render(<App />)
  const element = screen.getByText('Product Catalog')
  expect(element).toBeInTheDocument()
})
