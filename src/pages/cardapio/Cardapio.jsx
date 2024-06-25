import React from "react";
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import './Cardapio.css';
import TabBar from "../../components/tabBar/TabBar"; 
import { useState, useEffect } from 'react';
import arquivoCardapio from "../../cardapio.json"

const Cardapio = () => {
    
    const [categorias, setCategorias] = useState([""])

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
            <TabBar itens = { categorias }></TabBar>
        </div>
    );
}

export default Cardapio