import './TabBar.css';
import { useState } from 'react';


const TabBar = ({ itens, getCategoriaSelecionada }) => {

    const [itemSelecionado, setItemSelecionado] = useState();

    function clickBotao(item){                
        setItemSelecionado(item.toUpperCase());
        getCategoriaSelecionada(item.toUpperCase());
    }

    return ( 
        
        <div className="tabBar">
        {                 
            itens.map((item, idx) => 
                <button type="button" className='botao-tabBar' key={`item-${idx}`} onClick={() => clickBotao(item.toUpperCase()) }>{ item.toUpperCase() }
                </button>)                
        }            
        </div>                                                       
    );
}

export default TabBar