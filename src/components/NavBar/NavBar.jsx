import './NavBar.css';
import ItemMenu from "../ItemMenu/ItemMenu";

const NavBar = () => {
    return (
        <nav>
            <div class="header">
                <div class="logo">
                    <img src="/assets/logo.jpg" alt="logo"></img>
                </div>
                <div class="menu">                    
                    <ItemMenu linkto={"/"} texto={"HOME"}></ItemMenu>
                    <ItemMenu linkto={"/cardapio"} texto={"CARDÁPIO"}></ItemMenu>
                    <ItemMenu linkto={"/lojas"} texto={"LOJAS"}></ItemMenu>                    
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