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
            <div className="container-tabBar">
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
                                <div>{ lojaSelecionada?.endereco }</div>
                                <div>{ lojaSelecionada?.bairro + ", " + lojaSelecionada?.cidade +" - " + lojaSelecionada?.UF + ", " + lojaSelecionada?.cep} </div>
                            </div>
                            <div className="horario">
                                <div className="texto-destaque">
                                    <img src="/assets/Clock.jpg" width="24px" height="24px" alt="horario"></img>
                                    <span>Horário de Funcionamento:</span>                                
                                </div>
                                <div>{ lojaSelecionada?.funcionamentoSegSab }</div>
                                <div>{ lojaSelecionada?.funcionamentoDomFeriado }</div>
                            </div>
                            <div className="telefone">
                                <div className="texto-destaque">
                                    <img src="/assets/Phone.jpg" width="24px" height="24px" alt="horario"></img>
                                    <span>Telefone:</span> 
                                </div>
                                <div>{ lojaSelecionada?.telefones }</div>                                
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>     
        </div>
    );        
}

export default Lojas