import './TabBar.css';
import { useState } from 'react';

const TabBar = ({ itens }) => {

    const [itemSelecionado, setItemSelecionado] = useState("");

    return (               
        <div className="tabBar">
            {                 
                itens?.map((item, idx) => 
                    <button type="button" className='botao-tabBar' key={`item-${idx}`} click="">{item ? item?.toUpperCase() : ""}
                    </button>)                
            }            
        </div>                                     
    );
}

export default TabBar