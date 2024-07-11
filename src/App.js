
import { Outlet } from 'react-router-dom';
import HeaderPage from './components/headerPage/HeaderPage';
import './App.css';

function App() {
  return (
    <div className="page">

      <div>
        <HeaderPage></HeaderPage>
      </div>
     
      <div className='outlet'>
        <Outlet></Outlet>
      </div>   
      
      <footer>
      <div className="rodape">      
        <div>
          <span>&copy; Copyright 2024 - Restaurante Full Stack - Todos os direitos reservados.</span>
        </div>         
        <div className='redes-sociais'>
          <div className='icones'>
            <div>
              <img src="/assets/instagram-rodape.svg" alt="instagram" title='Em Construççao'></img>
            </div>
            <div>
              <img src="/assets/facebook-rodape.svg" alt="facebbok" title='Em Construççao'></img>
            </div>
          </div>
        </div>
      </div>  
      </footer>   

    </div>
  );
}

export default App;
