import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div class="header">
                <div class="logo">
                    <img src="/assets/logo.jpg" alt="logo"></img>
                </div>
                <div class="menu">
                    <div class="itemMenu">
                        <Link to="/">HOME</Link>
                    </div>
                    <div class="itemMenu">
                        <Link to="/cardapio">CARDÁPIO</Link>
                    </div>
                    <div class="itemMenu">
                        <Link to="/lojas">LOJAS</Link>
                    </div>
                </div>
                <div class="rede-social">
                    <div>
                        <img src="/assets/instagram.svg" alt="banner"></img>
                    </div>
                    <div>
                        <img src="/assets/facebook.svg" alt="banner"></img>
                    </div>
                </div>        
            </div>            
            <div class="banner" alt="banner"
                style={{backgroundImage: `url("/assets/banner.png")`, backgroundSize: 'cover'}}>                
            </div>
        </nav>
    );
}

export default NavBar