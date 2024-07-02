
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/NavBar'; 
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div><NavBar></NavBar></div>
      <div className='outlet'>
        <Outlet></Outlet>
      </div>   
      <footer>
        <div className="rodape">
          <div className="logo">
            <img src="/assets/logoRodape.jpg" alt="logo"></img>
          </div>
          <div className='mapa'>
            <Link to={"/cardapio"}>Cardápio</Link>
            <Link to={"/lojas"}>Lojas</Link>
          </div>
          <div className='redes-sociais'>
            <div><span>Acompanhe-nos</span></div>
            <div className='icones'>
              <div>
                <img src="/assets/instagram.svg" alt="instagram"></img>
              </div>
              <div>
                <img src="/assets/facebook.svg" alt="facebbok"></img>
              </div>
            </div>
          </div>
        </div>
      </footer>   
    </div>
  );
}

export default App;
