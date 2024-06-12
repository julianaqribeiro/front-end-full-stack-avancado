
import './TituloPagina.css';

const TituloPagina = ({texto}) => {

    return (
        <div class="container-titulo">
            <span class="titulo">{ texto }</span>
        </div>
    );
}

export default TituloPagina