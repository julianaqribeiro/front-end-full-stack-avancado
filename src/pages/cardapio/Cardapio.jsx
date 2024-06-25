import React from "react";
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import './Cardapio.css';
import TabBar from "../../components/tabBar/TabBar"; 
import { useState, useEffect } from 'react';
import arquivoCardapio from "../../cardapio.json";
import TituloSecudario from '../../components/tituloSecundario/TituloSecundario';

const Cardapio = () => {
    
    const [categorias, setCategorias] = useState([""]);
    const [itemSelecionado, setitemSelecionado] = useState('');
    const [itensCardapio, setItensCardapio] = useState('');

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
    },[])
    

    return (
        <div>
            <TituloPrincipal texto={"Cardápio"}></TituloPrincipal>
            <div class="container-tabBar">
                <div>
                    <TabBar itens = { categorias } itemFoco={categorias[0]} getCategoriaSelecionada={getCategoriaSelecionada}></TabBar>
                </div>
                <div>
                    <TituloSecudario texto={ itemSelecionado }></TituloSecudario> 
                </div>                
            </div>            
        </div>
    );
}

export default Cardapio