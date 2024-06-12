import { Link } from "react-router-dom";
import './ItemMenu.css';

const ItemMenu = ({linkto, texto}) => {

    return (
        <div class="itemMenu">
            <Link to={linkto}>{texto}</Link>
        </div>
    );
}

export default ItemMenu


