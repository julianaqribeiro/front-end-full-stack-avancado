import React from "react";
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import './Cardapio.css';
import TabBar from "../../components/tabBar/TabBar"; 
import { useState, useEffect } from 'react';
import arquivoCardapio from "../../cardapio.json";
import TituloSecudario from '../../components/tituloSecundario/TituloSecundario';
import ItemCardapio from "../../components/itemCardapio/ItemCardapio";

const Cardapio = () => {
    
    const [categorias, setCategorias] = useState([""]);
    const [itemSelecionado, setitemSelecionado] = useState('');
    const [itensCardapio, setItensCardapio] = useState([]);

    const getCategoriaSelecionada = (pItemSelecionado) => {
                
        const cardapio = [...arquivoCardapio.categorias];
        cardapio.forEach(element => {
            if (element.nome.toUpperCase() === pItemSelecionado){
                setItensCardapio(element.itens);
            }
        });       
        
        setitemSelecionado(pItemSelecionado);        
    }

    useEffect(() => { 

        const categorias = [];
        arquivoCardapio.categorias.forEach(element => {
            categorias.push(element.nome);
        });        
        setCategorias(categorias);   
        setitemSelecionado(categorias[0]);                   
    },[])

    useEffect(() => { 

        setItensCardapio([]);
        arquivoCardapio.categorias.forEach(element => {
            if (element.nome.toUpperCase() === itemSelecionado.toUpperCase()){
                setItensCardapio([...element.itens]);                 
            }                                     
        }); 
                                            
    },[itemSelecionado])
    
    return (
        <div>
            <TituloPrincipal texto={"Cardápio"}></TituloPrincipal>
            <div className="container-tabBar">
                <div>
                    <TabBar itens = { categorias } botaoSelecionado={ itemSelecionado } getCategoriaSelecionada={getCategoriaSelecionada}></TabBar>
                </div>
                <div>
                    <TituloSecudario texto={ itemSelecionado.toUpperCase() }></TituloSecudario> 
                </div> 
                <div className="container-itens-cardapio">
                {                                 
                    itensCardapio.map((item) => 
                        <div><ItemCardapio nome={ item.nome } descricao={ item.descricao } preco={ item.preco }></ItemCardapio></div>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Cardapio