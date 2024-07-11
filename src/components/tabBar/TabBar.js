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

        return <button type="button" className={(item.toUpperCase() === (!itemSelecionado ? _botaoSelecionado : itemSelecionado)) ? "botao-tabBar-selecionado" : "botao-tabBar"} 
                    key={`item-${idx}`}                         
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