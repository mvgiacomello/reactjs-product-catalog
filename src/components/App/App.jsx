import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Header/Header'
import ProductGrid from '../ProductGrid/ProductGrid'
import Footer from '../Footer/Footer'
import ProductDetails from '../ProductDetails/ProductDetails'
import ProductCarousel from '../ProductCarousel/ProductCarousel'
import { useState, useEffect } from 'react'
import { retrieveProducts } from '../../common/APIUtils'


function App() {
  const style = {
    textAlign: 'center',
    border: 'solid 1px #49FFD0',
    borderRadius: '7px',
    padding: '10px',
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await retrieveProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  return (
    <Router>
      <div style={style} className='App'>
        <Route path='/' exact render={(props) => (
          <>
            <Header text='Product Catalog' />
            <section>
              <ProductCarousel products={products} />
            </section>
            <section>
              <ProductGrid products={products} />
            </section>
          </>
        )} />
        <Route path='/product/:productId' component={ProductDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App
