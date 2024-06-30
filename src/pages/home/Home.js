import React from "react";
import CardPagina from "../../components/cardPagina/CardPagina";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

   const navigate = useNavigate(); 

   const goToCardapio = () => {        
        navigate("/cardapio");        
   };

   const goToLojas = () => {        
    navigate("/lojas");        
};

    return (
        <div className="container">
            <div>            
                <CardPagina titulo={"Cardápio"} textButton={"Cardápio"} background={"/assets/img-cardapio.jpg"}
                    descricao={"Confira nossos pratos, que podem mudar ao longo do dia."} handleClick={goToCardapio}>                
                </CardPagina>
            </div>
            <div>
                <CardPagina titulo={"Lojas"} textButton={"Lojas"} background={"/assets/lojas.jpg"}
                    descricao={"Veja a loja mais próxima de vc e venha nos visitar."} handleClick={goToLojas}>
                </CardPagina>
            </div>            
        </div>
    );
}

export default Home