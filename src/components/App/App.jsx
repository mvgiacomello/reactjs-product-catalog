import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Header/Header'
import ProductGrid from '../ProductGrid/ProductGrid'
import Footer from '../Footer/Footer'
import ProductDetails from '../ProductDetails/ProductDetails'
import ProductCarousel from '../ProductCarousel/ProductCarousel'


function App() {
  const style = {
    textAlign: 'center',
    border: 'solid 1px #49FFD0',
    borderRadius: '7px',
    padding: '10px',
  }

  return (
    <Router>
      <div style={style} className="App">
        <Route path='/' exact render={(props) => (
          <>
            <Header text='Product Catalog' />
            <section>
              <ProductCarousel />
            </section>
            <section>
              <ProductGrid />
            </section>
          </>
        )} />
        <Route path='/product/:productId' component={ProductDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
