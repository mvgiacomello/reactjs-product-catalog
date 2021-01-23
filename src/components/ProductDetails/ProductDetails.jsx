import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { retrieveProduct } from '../../common/APIUtils'
import Header from '../Header/Header'

const ProductDetails = () => {
    const { productId } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const getDetails = async () => {
            const detailsFromServer = await retrieveProduct(productId)
            setDetails(detailsFromServer)
        }
        getDetails()
    }, [productId])

    const returnButtonStyle = {
        backgroundColor: details.backgroundColor,
        borderLeft: 'solid 3px #49FFD0',
        borderRadius: '5px',
        padding: '5px 20px',
        color: details.textColor,
        marginBottom: '20px',
        width: '100px'
    }

    const contentStyle = {
        backgroundColor: details.backgroundColor,
        borderLeft: `solid 3px ${details.accentColor}`,
        borderRadius: '5px',
        padding: '20px',
    }

    const detailStyle = {
        backgroundColor: 'lightgrey',
        borderLeft: 'solid 3px #49FFD0',
        borderRadius: '5px',
        padding: '20px',
        textAlign: 'left'
    }

    const imgStyle = {
        borderRadius: '5px',
        borderRight: `solid 3px ${details.accentColor}`,
        marginBottom: '30px'
    }

    return (
        <div>
            <div style={returnButtonStyle}>
                <Link to='/'>Return</Link>
            </div>
            <Header text={details.title} />
            <div style={contentStyle}>
                <img src={details.image1} alt={details.artist} style={imgStyle} />
                <div style={detailStyle}>
                    <p>Artist: {details.artist}</p>
                    <p>Description: {details.description}</p>
                    <p>Price: £ {details.isFree ? 'FREE' : (details.price === undefined ? 'Not Confirmed' : details.price)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
