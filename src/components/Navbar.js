import "../components/Navbar.css";

function Navbar() {
    return (
        <div>

            <nav className="navbar">
                <div className="logo">  <a href="#" alt="logo">Keeper</a></div>
                <div className="nav-items">
                    <ul>
                        <li className="nav-item"><a href="#" alt="nav items">Home</a></li>
                        <li className="nav-item"><a href="#" alt="nav items">Home</a></li>
                        <li className="nav-item"><a href="#" alt="nav items">Home</a></li>
                        <li className="nav-item"><a href="#" alt="nav items">Home</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;