import React from 'react'

const NavBar = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
    return (

        <header>
            <nav>

                <div className="navigation">
                    <a className="button" href="/movies">
                        Movies
                    </a>
                    <a className="button" href="/movies/new">
                        Add Movies
                    </a>
                    <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar