import TextoDescricao from '../textoDescricao/TextoDescricao';
import TextoDestaque from '../textoDestaque/TextoDestaque';
import './ItemCardapio.css';

const ItemCardapio = ({nome, descricao, preco}) => {
    
    return (
        <div className="container-item-cardapio">
            <div className="item-cardapio">
                <div>
                    <TextoDestaque texto={nome}></TextoDestaque>
                </div>
                <div>
                    <TextoDescricao texto={descricao}></TextoDescricao>                 
                </div>
                <div>
                    <TextoDestaque texto={preco}></TextoDestaque>
                </div>                             
            </div>                       
        </div>        
    );
}

export default ItemCardapio