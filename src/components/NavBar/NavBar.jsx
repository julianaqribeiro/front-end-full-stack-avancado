import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div class="header">
                <div class="logo">
                    <p>Logo</p>
                </div>
                <div class="menu">
                    <Link to="/">Home</Link>
                    <Link to="/cardapio">Cardápio</Link>
                    <Link to="/lojas">Lojas</Link>
                </div>            
            </div>            
            <div class="banner">
                <img src="..\..\assets\banner.jpg" alt="banner"></img>
            </div>
        </nav>
    );
}

export default NavBar