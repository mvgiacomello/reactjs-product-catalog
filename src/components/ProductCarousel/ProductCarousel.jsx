import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'


const ProductCarousel = ({ products }) => {

    const carouselStyle = {
        width: 'auto',
        maxWidth: '700px',
        borderRadius: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '30px',
    }

    const imgStyle = color => {
        return {
            borderLeft: `solid 5px ${color}`,
            borderRadius: '3px',
        }
    }

    try {
        return (
            <div style={carouselStyle}>
                <Carousel autoPlay showThumbs={false} infiniteLoop>
                    {
                        products.sort((a, b) => a.feature_order - b.feature_order).map(product => (
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <img src={product.image1} alt={product.description} style={imgStyle(product.backgroundColor)} />
                                <p className='legend'>{product.title}</p>
                            </Link>
                        ))
                    }
                </Carousel >
            </div>
        )
    } catch (error) {
        console.log(error)
    }

}

ProductCarousel.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductCarousel