
function Header() {
    return(
        <header>
            <h1><a href="#home">My website</a></h1>
            <nav>
                <ul className="nav-list-full">
                    <li><a className="nav-list" href="#home">Home</a></li>
                    <li><a className="nav-list" href="#about">About</a></li>
                    <li><a className="nav-list" href="#services">Services</a></li>
                    <li><a className="nav-list" href="#contact">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}
export default Header