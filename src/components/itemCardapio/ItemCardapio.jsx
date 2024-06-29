import './ItemCardapio.css';

const ItemCardapio = ({nome, descricao, preco}) => {
    
    return (
        <div className="container-item-cardapio">
            <div className="item-cardapio">
                <div className="nome-item">
                    <span>{ nome }</span>
                </div>
                <div>
                    <span>{ descricao }</span>                    
                </div>
                <div className="preco-item">
                    <span>{ preco }</span>
                </div>                             
            </div>                       
        </div>        
    );
}

export default ItemCardapio