import React from "react";
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import './Cardapio.css';
import TabBar from "../../components/tabBar/TabBar"; 
import { useState, useEffect } from 'react';
import TituloSecudario from '../../components/tituloSecundario/TituloSecundario';
import ItemCardapio from "../../components/itemCardapio/ItemCardapio";

const Cardapio = () => {
    
    const [data, setData] = useState(null);
    const [categorias, setCategorias] = useState([""]);
    const [itemSelecionado, setitemSelecionado] = useState('');
    const [itensCardapio, setItensCardapio] = useState([]);

    const getCategoriaSelecionada = (pItemSelecionado) => {
               
        if (categorias){
            const cardapio = [...categorias];
            cardapio.forEach(element => {
                if (element.nome?.toUpperCase() === pItemSelecionado){
                    setItensCardapio(element.itens);
                }
            });       
            
            setitemSelecionado(pItemSelecionado);  
        }             
    }

    useEffect(() => { 
                
        fetch('http://localhost:5000/cardapio')
        .then(response => response.json())
        .then(json => { setData(json); })
        .then(x => {
            if (data != null && data.categorias != null){
                const categorias = [];
                data.categorias.forEach(element => {
                    categorias.push(element.nome);
                });        
                setCategorias(categorias);   
                setitemSelecionado(categorias[0]);
            }            
        })
        .catch(error => console.error(error));
                                     
    },[data])

    useEffect(() => { 

        if (data && data.categorias) {
            setItensCardapio([]);
            data.categorias.forEach(element => {
                if (element.nome.toUpperCase() === itemSelecionado.toUpperCase()){
                    setItensCardapio([...element.itens]);                 
                }                                     
            }); 
        }                                                    
    },[data, itemSelecionado])
    
    return (
        <div>
            <TituloPrincipal texto={"Cardápio"}></TituloPrincipal>
            <div className="container-tabBar">
                <div>
                    <TabBar itens = { categorias } botaoSelecionado={ itemSelecionado } getCategoriaSelecionada={getCategoriaSelecionada}></TabBar>
                </div>
                <div>
                    <TituloSecudario key={`item-${itemSelecionado}`} texto={ itemSelecionado.toUpperCase() }></TituloSecudario> 
                </div> 
                <div className="container-itens-cardapio">
                {                                 
                    itensCardapio.map((item, idx) => 
                        <div key={`item-${idx}`}><ItemCardapio nome={ item.nome } descricao={ item.descricao } preco={ item.preco }></ItemCardapio></div>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Cardapio