import TituloSecundario from '../tituloSecundario/TituloSecundario';
import './CardPagina.css';

const CardPagina = ({titulo, background, descricao, textButton, handleClick}) => {
    
    const onClick = handleClick;

    return (
        <div className="container-card">
            <div className="div-titulo">
                <TituloSecundario texto={titulo}></TituloSecundario>
            </div>
            <div className="div-imagem"
                style={{backgroundImage: "url(" + background + ")", backgroundSize: 'cover'}}>                 
            </div>
            <div className="div-descricao">
                <span className="texto-descricao">{ descricao }</span>
            </div>
            <div className="div-botao">
                <button type="button" className='botao' onClick={onClick}>{ textButton.toUpperCase() }</button>
            </div>
        </div>        
    );
}

export default CardPagina