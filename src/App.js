
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; 

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div class="outlet">
        <Outlet></Outlet>
      </div>      
    </div>
  );
}

export default App;
