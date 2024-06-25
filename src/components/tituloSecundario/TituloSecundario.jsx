import './TituloSecundario.css';
import { useEffect, useState } from 'react';

const TituloSecundario = ({texto}) => {

    const [titulo, setTitulo] = useState("titulo");

    useEffect(() => {
        setTitulo(texto);
      }, [texto]);

    return (
        <div class="container-titulo-secundario">
            <span className="texto-secundario">{ titulo }</span>
        </div>
    );
}

export default TituloSecundario