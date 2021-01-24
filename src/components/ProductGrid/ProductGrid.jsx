import { useState, useEffect } from 'react'
import ProductGridItem from '../ProductGridItem/ProductGridItem'
import { retrieveProducts } from '../../common/APIUtils'

const ProductGrid = () => {
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        rowGap: '20px',
        columnGap: '20px',
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
        <div style={style}>
            {products.sort((a, b) => a.feature_order - b.feature_order).map(product => (
                <ProductGridItem
                    key={product.id}
                    id={product.id}
                    accentColor={product.accentColor}
                    artist={product.artist}
                    backgroundColor={product.backgroundColor}
                    description={product.description}
                    heroImage={product.image1}
                    thumbnail={product.image2}
                    isFree={product.isFree}
                    price={product.isFree ? 'FREE' : (product.price === undefined ? 'Not Confirmed' : product.price)}
                    textColor={product.textColor}
                    title={product.title} />
            ))}
        </div>
    )
}

export default ProductGrid
