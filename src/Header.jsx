
function Header() {
    return(
        <header>
            <nav>
                <ul className="header-list">
                    <li className="header-list-item"><span className="header-dot"></span></li>
                    <li className="header-list-item"><h1 className="header-h1"><a href="#home">Iiro Pääkkönen</a></h1></li>
                    <li className="header-list-item"><p className="header-p">Software Engineering Student</p></li>
                </ul>
                <ul className="nav-list-full">
                    <li className="nav-list"><a  href="#personal">Personal</a></li>
                    <li className="nav-list"><a href="#projects">Projects</a></li>
                    <li className="nav-list"><a href="#academics">Academics</a></li>
                    <li className="nav-list"><a href="#resume">Resume</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}
export default Header