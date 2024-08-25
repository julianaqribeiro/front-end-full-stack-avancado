import './FaleConosco.css';
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FaleConosco = () => {

        
    function clickEnviar() {
        toast.success("Success Notification !", {
            duration: 4000,
            position: 'top-right',
          });
    }
    
    return (
        <div>
            <TituloPrincipal texto={"Fale Conosco"}></TituloPrincipal>  

            <form className="form-faleconosco">
                <table>
                    <tbody>
                        <tr>
                            <td className='nome-campo'>Nome:</td>
                            <td><input className='campo' type="text" name="nome" /></td>
                        </tr>
                        <tr>
                            <td className='nome-campo'>Email:</td>
                            <td><input className='campo' type="text" name="email" /></td>
                        </tr>
                        <tr>
                            <td className='nome-campo'>Telefone:</td>
                            <td><input className='campo' type="text" name="telefone" /></td>
                        </tr>
                        <tr>
                            <td className='nome-campo'>Mensagem:</td>
                            <td>
                                <textarea className='campo-mensagem'></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>                                
                            </td>
                            <td>
                                <div className="div-botao-enviar">
                                    <button type="button" className='botao-enviar' onClick={clickEnviar}>ENVIAR</button>
                                    <ToastContainer />
                                </div>
                            </td>                           
                        </tr>
                    </tbody>
                </table>                    
            </form>
        </div>
    );
    

}

export default FaleConosco