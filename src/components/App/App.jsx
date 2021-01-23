import Header from '../Header/Header'
import ProductGrid from '../ProductGrid/ProductGrid'
import Footer from '../Footer/Footer'


function App() {
  const style = {
    'text-align': 'center',
    'border': 'solid 1px',
    'border-radius': '7px',
    'padding': '10px'
  }

  return (
    <div style={style} className="App">
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
