
import './TituloPagina.css';

const TituloPagina = ({texto}) => {

    return (
        <div class="container-titulo">
            <span className="texto">{ texto }</span>
        </div>
    );
}

export default TituloPagina