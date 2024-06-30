
import './TituloPrincipal.css';

const TituloPrincipal = ({texto}) => {

    return (
        <div className="container-titulo">
            <span className="texto">{ texto }</span>
        </div>
    );
}

export default TituloPrincipal