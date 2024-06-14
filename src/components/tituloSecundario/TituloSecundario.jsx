import './TituloSecundario.css';

const TituloSecundario = ({texto}) => {

    return (
        <div class="container-titulo-secundario">
            <span className="texto-secundario">{ texto }</span>
        </div>
    );
}

export default TituloSecundario