import './TabBar.css';
import { useState } from 'react';


const TabBar = ({ itens, botaoSelecionado, getCategoriaSelecionada }) => {

    const [itemSelecionado, setItemSelecionado] = useState();

    function clickBotao(item){                
        setItemSelecionado(item.toUpperCase());
        getCategoriaSelecionada(item.toUpperCase());
    }

    function criarBotao(item, idx){

        let _botaoSelecionado = "";
        if (botaoSelecionado){
            _botaoSelecionado = botaoSelecionado.toString().toUpperCase();
        }

        return <button type="button" className='botao-tabBar' key={`item-${idx}`} 
                        autoFocus={item.toUpperCase() === _botaoSelecionado}
                        onClick={() => clickBotao(item.toUpperCase())}>
                        { item.toUpperCase() }
               </button>;                                    
    }

    return ( 
        
        <div className="tabBar">
        {                 
            itens.map((item, idx) => criarBotao(item, idx))                        
        }            
        </div>                                                       
    );
}

export default TabBar