import PropTypes from 'prop-types'
import ProductGridItem from '../ProductGridItem/ProductGridItem'

const ProductGrid = ({ products }) => {
    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        rowGap: '20px',
        columnGap: '20px',
    }

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

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductGrid
