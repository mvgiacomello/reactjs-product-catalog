import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { retrieveProduct } from '../../common/APIUtils'
import Header from '../Header/Header'

const ProductDetails = () => {
    const location = useLocation()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const getDetails = async () => {
            const detailsFromServer = await retrieveProduct(location.pathname.split('/').reverse()[0])
            setDetails(detailsFromServer)
        }
        getDetails()
    }, [location])

    const backButtonStyle = {
        color: 'white',
        border: 'solid 1px',
        borderRadius: '5px',
        backgroundCollor: '#49FFD0'
    }

    return (
        <div>
            <Header text={details.title} />
            <Link to='/' style={backButtonStyle}>Return</Link>
            <p style={backButtonStyle}>{`${JSON.stringify(details)}`}</p>
        </div>
    )
}

export default ProductDetails
