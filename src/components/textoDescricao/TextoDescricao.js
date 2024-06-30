import './TextoDescricao.css';

const TextoDescricao = ({texto}) => {
   
    return (
        <div className="container-texto-descricao">
            <span>{ texto }</span>             
        </div>
    );
    
}

export default TextoDescricao