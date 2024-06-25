import './TabBar.css';
import { useState } from 'react';
import TituloSecudario from '../tituloSecundario/TituloSecundario'

const TabBar = ({ itens }) => {

    const [itemSelecionado, setItemSelecionado] = useState([""])

    return ( 
        <div class="container-tabBar">
            <div className="tabBar">
            {                 
                itens.map((item, idx) => 
                    <button type="button" className='botao-tabBar' key={`item-${idx}`} onClick={() => setItemSelecionado(item.toUpperCase()) }>{ item.toUpperCase() }
                    </button>)                
            }            
            </div>   
            <div>
                <TituloSecudario texto={ itemSelecionado }></TituloSecudario> 
            </div>
        </div>                                  
    );
}

export default TabBar