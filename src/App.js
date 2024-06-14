
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/NavBar'; 
import './App.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='outlet'>
        <Outlet></Outlet>
      </div>      
    </div>
  );
}

export default App;
