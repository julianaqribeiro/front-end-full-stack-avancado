import React from "react";
import CardPagina from "../../components/cardPagina/CardPagina";
import "./Home.css"

const Home = () => {
    return (
        <div className="container">
            <div>
                <CardPagina titulo={"Cardápio"} textButton={"Cardápio"} pathImagem={`url("/assets/img-cardapio.jpg")`}
                    descricao={"Confira nossos pratos, que podem mudar ao longo do dia."}>                
                </CardPagina>
            </div>
            <div>
                <CardPagina titulo={"Lojas"} textButton={"Lojas"}
                    descricao={"Veja a loja mais próxima de vc e venha nos visitar."}>
                </CardPagina>
            </div>            
        </div>
    );
}

export default Home