import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductGridItem = ({ id, title, price, thumbnail, backgroundColor, accentColor, textColor }) => {
    const style = {
        borderLeft: `solid 3px ${accentColor}`,
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: backgroundColor,
        color: textColor,
    }

    const imgStyle = {
        borderRadius: '5px'
    }

    const priceStyle = {
        textAlign: 'right',
        fontSize: '11px',
        fontWeight: 'bold',
        marginTop: '10px',
        marginRight: '10px',
        padding: '5px',
        backgroundColor: accentColor,
        borderRadius: '2px',
    }



    return (
        <Link to={`/product/${id}`}>
            <div style={style} >
                <img src={thumbnail} style={imgStyle} alt={title} />
                <p>{title}</p>
                <p style={priceStyle}>£ {price}</p>
            </div>
        </Link>
    )
}

ProductGridItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default ProductGridItem