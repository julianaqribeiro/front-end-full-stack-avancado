import React from "react";
import { useState, useEffect } from 'react';
import arquivoLoja from "../../loja.json";
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal"; 
import TituloSecudario from '../../components/tituloSecundario/TituloSecundario';
import TabBar from "../../components/tabBar/TabBar"; 
import './Lojas.css';

const Lojas = () => {

    const [lojas, setLojas] = useState([""]);
    const [itemSelecionado, setitemSelecionado] = useState('');
    const [lojaSelecionado, setlojaSelecionado] = useState(undefined);


    useEffect(() => { 

        const listalojas = [];
        arquivoLoja.lojas.forEach(element => {
            listalojas.push(element.nome);
        });   
        
        setLojas(listalojas);
        //setitemSelecionado(listalojas[0].nome);
        //setlojaSelecionado(lojas[0]);
    },[])

    const getCategoriaSelecionada = (pItemSelecionado) => {
                        
        //  arquivoLoja.lojas.forEach(element => {
        //      if (element.nome.toUpperCase() === pItemSelecionado.toUpperCase())
        //          setlojaSelecionado([...element]);
        //  });
            
        setitemSelecionado(pItemSelecionado);
    }

    return (
        <div>
            <TituloPrincipal texto={"Nossas Lojas"}></TituloPrincipal>
            <div class="container-tabBar">
                <div>
                    <TabBar itens = { lojas } getCategoriaSelecionada={getCategoriaSelecionada}></TabBar>
                </div>                
                <div class="card-loja">
                    <div>
                        <TituloSecudario texto={ itemSelecionado.toUpperCase() }></TituloSecudario>
                    </div>                    
                    <div class="loja">
                        <div class="imagem-loja">

                        </div>
                        <div class="info-loja">

                        </div>
                    </div>
                    
                </div>
            </div>     
        </div>
    );        
}

export default Lojas