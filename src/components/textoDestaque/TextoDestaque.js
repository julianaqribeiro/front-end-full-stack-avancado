import './TextoDestaque.css';

const TextoDestaque = ({imagem, texto}) => {

    if (imagem){
        return (
            <div className="container-texto">
                <img src={ imagem } width="24px" height="24px" alt="horario"></img>                                    
                <span>{ texto }</span>             
            </div>
        );
    }
    else{
        return (
            <div className="container-texto">
                <span>{ texto }</span>             
            </div>
        );
    }
}

export default TextoDestaque