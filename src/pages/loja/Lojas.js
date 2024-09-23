import React from "react";
import { useState, useEffect } from 'react';
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal"; 
import TituloSecudario from '../../components/tituloSecundario/TituloSecundario';
import TabBar from "../../components/tabBar/TabBar"; 
import './Lojas.css';
import TextoDestaque from "../../components/textoDestaque/TextoDestaque";
import TextoDescricao from "../../components/textoDescricao/TextoDescricao";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CenterUpdater = ({ center }) => {
    const map = useMap();
    map.setView(center);
    return null;
};

const Lojas = () => {

    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState(null);
    const [lojas, setLojas] = useState([""]);
    const [itemSelecionado, setitemSelecionado] = useState('');
    const [lojaSelecionada, setlojaSelecionada] = useState(undefined);
    const [center, setCenter] = useState([-22.9035, -43.2096]); 

    useEffect(() => { 
        fetch('http://localhost:5000/lojas')
        .then(response => response.json())
        .then(json => { setData(json); })        
        .catch(error => console.error(error));
                                     
    },[])

    useEffect(() => { 

        if (data && data.lojas){
            const listaNomeLoja = [];
            data.lojas.forEach(element => {
                listaNomeLoja.push(element.nome);
            });   
            
            setLojas(listaNomeLoja);
            setitemSelecionado(listaNomeLoja[0]);
            setlojaSelecionada(data.lojas[0]);            
            setLoading(false);
            setCenterLojaSelecionada(data.lojas[0]); 
        }
    },[data])

    useEffect(() => { 

        if (data && data.lojas){
            setlojaSelecionada(undefined);               
            data.lojas.forEach(element => {
                if (element.nome.toUpperCase() === itemSelecionado.toUpperCase()){
                    setlojaSelecionada(element);                                                  
                }                                     
            }); 
        }
                                                    
    },[data, itemSelecionado])    

    const getCategoriaSelecionada = (pItemSelecionado) => {
                        
        const lojas = [...data.lojas];
        lojas.forEach(element => {
            if (element.nome.toUpperCase() === pItemSelecionado){
                setlojaSelecionada(element);
                setCenterLojaSelecionada(element);              
            }
        });       
        
        setitemSelecionado(pItemSelecionado); 
    }

    const setCenterLojaSelecionada = (ploja) => { 
                
        const endereco = `${ploja?.endereco}, ${ploja?.numero}, ${ploja?.cidade}, Brasil`;
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json&addressdetails=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setCenter([data[0].lat, data[0].lon]);                                                      
                } else {
                    console.log('Endereço não encontrado.');
                }
            })
            .catch(error => console.error('Erro:', error));

    }

    if (loading){

        return (
            <div>
                <TituloPrincipal texto={"Nossas Lojas"}></TituloPrincipal>
                <div className="container-tabBar">
                    <span>carregando...</span>
                </div>
            </div>
        );
    }
    else {

        return (
            <div>
                <TituloPrincipal texto={"Nossas Lojas"}></TituloPrincipal>
                <div className="container-loja">
                    <div>
                        <TabBar itens = { lojas } botaoSelecionado={lojaSelecionada?.nome} getCategoriaSelecionada={getCategoriaSelecionada}></TabBar>
                    </div>                
                    <div className="card-loja">
                        <div>
                            <TituloSecudario texto={ itemSelecionado.toUpperCase() }></TituloSecudario>
                        </div>                    
                        <div className="loja">
                            <div className="imagem-loja" style={{backgroundImage: "url(" + lojaSelecionada?.foto + ")", backgroundSize: 'cover'}}>                            
                            </div>                        
                            <div className="info-loja">
                                <div className="endereco">
                                    <div><TextoDestaque texto={ lojaSelecionada?.endereco + ", " + lojaSelecionada?.numero + " - " + lojaSelecionada?.complemento }></TextoDestaque></div>
                                    <div>
                                        <TextoDestaque texto={ lojaSelecionada?.bairro + ", " + lojaSelecionada?.cidade +" - " + lojaSelecionada?.uf + ", " + lojaSelecionada?.cep}>
                                        </TextoDestaque>
                                    </div>
                                </div>
                                <div className="horario">
                                    <div className="texto-destaque">
                                        <TextoDestaque imagem="/assets/Clock.jpg" texto="Horário de Funcionamento:"></TextoDestaque>
                                    </div>
                                    <div className="descricao"><TextoDescricao texto={ lojaSelecionada?.horario_seg_sab }></TextoDescricao></div>
                                    <div className="descricao"><TextoDescricao texto={ lojaSelecionada?.horario_dom_feriado }></TextoDescricao></div>
                                </div>
                                <div className="telefone">
                                    <div className="texto-destaque">                                    
                                        <TextoDestaque imagem="/assets/Phone.jpg" texto="Telefone:"></TextoDestaque>
                                    </div>
                                    <div className="descricao"><TextoDescricao texto={ lojaSelecionada?.telefone }></TextoDescricao></div>                                
                                </div>
                            </div>
                            <div className="mapa-loja">
                                <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={center}>
                                        <Popup>
                                            {lojaSelecionada?.endereco}
                                        </Popup>                                        
                                    </Marker>
                                    <CenterUpdater center={center} />
                                </MapContainer>
                            </div>
                        </div>                    
                    </div>
                </div>     
            </div>
        );
    }    
}

export default Lojas