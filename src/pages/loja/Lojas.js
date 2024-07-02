import React from "react";
import { useState, useEffect } from 'react';
import arquivoLoja from "../../loja.json";
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal"; 
import TituloSecudario from '../../components/tituloSecundario/TituloSecundario';
import TabBar from "../../components/tabBar/TabBar"; 
import './Lojas.css';
import TextoDestaque from "../../components/textoDestaque/TextoDestaque";
import TextoDescricao from "../../components/textoDescricao/TextoDescricao";

const Lojas = () => {

    const [lojas, setLojas] = useState([""]);
    const [itemSelecionado, setitemSelecionado] = useState('');
    const [lojaSelecionada, setlojaSelecionada] = useState(undefined);


    useEffect(() => { 

        const listaNomeLoja = [];
        arquivoLoja.lojas.forEach(element => {
            listaNomeLoja.push(element.nome);
        });   
        
        setLojas(listaNomeLoja);
        setitemSelecionado(listaNomeLoja[0]);
        setlojaSelecionada(arquivoLoja.lojas[0]);
    },[])

    useEffect(() => { 

        setlojaSelecionada(undefined);
        const lojas = [...arquivoLoja.lojas];        
        lojas.forEach(element => {
            if (element.nome.toUpperCase() === itemSelecionado.toUpperCase()){
                setlojaSelecionada(element);                              
            }                                     
        }); 
                                            
    },[itemSelecionado])

    const getCategoriaSelecionada = (pItemSelecionado) => {
                        
        const lojas = [...arquivoLoja.lojas];
        lojas.forEach(element => {
            if (element.nome.toUpperCase() === pItemSelecionado){
                setlojaSelecionada(element);
            }
        });       
        
        setitemSelecionado(pItemSelecionado); 
    }

    return (
        <div>
            <TituloPrincipal texto={"Nossas Lojas"}></TituloPrincipal>
            <div className="container-loja">
                <div>
                    <TabBar itens = { lojas } getCategoriaSelecionada={getCategoriaSelecionada}></TabBar>
                </div>                
                <div className="card-loja">
                    <div>
                        <TituloSecudario texto={ itemSelecionado.toUpperCase() }></TituloSecudario>
                    </div>                    
                    <div className="loja">
                        <div className="imagem-loja" style={{backgroundImage: "url(" + lojaSelecionada?.imagem + ")", backgroundSize: 'cover'}}>                            
                        </div>                        
                        <div className="info-loja">
                            <div className="endereco">
                                <div><TextoDestaque texto={ lojaSelecionada?.endereco }></TextoDestaque></div>
                                <div>
                                    <TextoDestaque texto={ lojaSelecionada?.bairro + ", " + lojaSelecionada?.cidade +" - " + lojaSelecionada?.UF + ", " + lojaSelecionada?.cep}>
                                    </TextoDestaque>
                                </div>
                            </div>
                            <div className="horario">
                                <div className="texto-destaque">
                                    <TextoDestaque imagem="/assets/Clock.jpg" texto="Horário de Funcionamento:"></TextoDestaque>
                                </div>
                                <div className="descricao"><TextoDescricao texto={ lojaSelecionada?.funcionamentoSegSab }></TextoDescricao></div>
                                <div className="descricao"><TextoDescricao texto={ lojaSelecionada?.funcionamentoDomFeriado }></TextoDescricao></div>
                            </div>
                            <div className="telefone">
                                <div className="texto-destaque">                                    
                                    <TextoDestaque imagem="/assets/Phone.jpg" texto="Telefone:"></TextoDestaque>
                                </div>
                                <div className="descricao"><TextoDescricao texto={ lojaSelecionada?.telefones }></TextoDescricao></div>                                
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>     
        </div>
    );        
}

export default Lojas