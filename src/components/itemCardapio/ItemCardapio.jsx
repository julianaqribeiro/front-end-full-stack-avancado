import './ItemCardapio.css';

const ItemCardapio = ({nome, descricao, preco}) => {
    
    return (
        <div className="container-item-cardapio">
            <div className="item-cardapio">
                <div className="nome-item">
                    <span>{ nome }</span>
                </div>
                <div>
                    <div>{ descricao }</div>                    
                </div>
                <div className="preco-item">
                    <span>{ preco }</span>
                </div>                             
            </div>                       
        </div>        
    );
}

export default ItemCardapio