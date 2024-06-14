import TituloSecundario from '../tituloSecundario/TituloSecundario';
import './CardPagina.css';

const CardPagina = ({titulo, pathImagem, descricao, textButton}) => {

    return (
        <div className="container-card">
            <div className="div-titulo">
                <TituloSecundario texto={titulo}></TituloSecundario>
            </div>
            <div className="div-imagem"
                style={{backgroundImage: { pathImagem }, backgroundSize: 'cover'}}>                 
            </div>
            <div className="div-descricao">
                <span className="texto-descricao">{ descricao }</span>
            </div>
            <div className="div-botao">
                <button type="button" className='botao'>{ textButton }</button>
            </div>
        </div>        
    );
}

export default CardPagina