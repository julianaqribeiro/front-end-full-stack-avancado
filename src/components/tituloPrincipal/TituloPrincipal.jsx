
import './TituloPrincipal.css';

const TituloPrincipal = ({texto}) => {

    return (
        <div class="container-titulo">
            <span className="texto">{ texto }</span>
        </div>
    );
}

export default TituloPrincipal