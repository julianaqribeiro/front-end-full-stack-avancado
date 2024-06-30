import { Link } from "react-router-dom";
import './ItemMenu.css';

const ItemMenu = ({linkto, texto}) => {

    return (
        <div className="itemMenu">
            <Link to={linkto}>{texto}</Link>
        </div>
    );
}

export default ItemMenu


