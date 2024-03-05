const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button 
                className="btn"
                onClick={() => handleToggleDarkMode(prevValue => !prevValue)}
            >Toggle</button>
        </div>
    )
}

export default Header;