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

export default Header
