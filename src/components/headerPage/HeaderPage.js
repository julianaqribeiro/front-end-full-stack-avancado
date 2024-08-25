import './HeaderPage.css';
import { Link } from "react-router-dom";

const HeaderPage = () => {
    return (
        <nav>
            <div className="header">
                <div className="logo">
                    <Link to={"/"}>
                        <img src="/assets/logo.jpg" alt="logo"></img>
                    </Link>                    
                </div>
                <div className="menu">                                        
                    <div className="itemMenu">
                        <Link to={"/"}>HOME</Link>
                    </div>
                    <div className="itemMenu">
                        <Link to={"/cardapio"}>CARDÁPIO</Link>
                    </div>
                    <div className="itemMenu">
                        <Link to={"/lojas"}>LOJAS</Link>
                    </div>
                    <div className="itemMenu">
                        <Link to={"/faleconosco"}>FALE CONOSCO</Link>
                    </div>
                </div>
                <div className="rede-social">
                    <div>
                        <img src="/assets/instagram.svg" alt="instagram" title='Em Construççao'></img>
                    </div>
                    <div>
                        <img src="/assets/facebook.svg" alt="facebbok" title='Em Construççao'></img>
                    </div>                 
                </div>        
            </div>            
            <div className="banner" alt="banner"
                style={{backgroundImage: `url("/assets/banner.png")`, backgroundSize: 'cover'}}>                
            </div>
        </nav>
    );
}

export default HeaderPage