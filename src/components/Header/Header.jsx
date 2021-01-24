import PropTypes from 'prop-types'

const Header = ({ text }) => {
    const style = {
        color: 'white',
        marginTop: '10px',
        marginBottom: '20px',
        fontSize: '25px'
    }

    return (
        <header style={style}>
            <h1>{text}</h1>
        </header>
    )
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header
