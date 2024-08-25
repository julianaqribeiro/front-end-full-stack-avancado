import './FaleConosco.css';
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

const FaleConosco = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
       
    const handleChangeNome = event => {
        setNome(event.target.value);        
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);        
    };

    const handleChangeTelefone = event => {
        setTelefone(event.target.value);        
    };

    const handleChangeMensagem = event => {
        setMensagem(event.target.value);        
    };

    function validarCampos(){

        if (nome === ''){
            toast.error("Preencha o campo Nome !", {
                duration: 4000,
                position: 'top-right',
              }); 
            return false;              
        }

        else if (email === ''){
            toast.error("Preencha o campo Email !", {
                duration: 4000,
                position: 'top-right',
              });
            return false;    
        }

        else if (telefone === ''){
            toast.error("Preencha o campo Telefone !", {
                duration: 4000,
                position: 'top-right',
              }); 
            return false;   
        }

        else if (mensagem === ''){
            toast.error("Preencha o campo mensagem !", {
                duration: 4000,
                position: 'top-right',
              });
            return false;    
        }

        return true;
    }

    async function clickEnviar() {
        
        if (validarCampos())
        {                        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: nome, email: email, telefone: telefone, mensagem: mensagem })
            };

            await fetch('http://localhost:5000/fale_conosco', requestOptions);            
            toast.success("Mensagem enviada com sucesso !", {
                duration: 4000,
                position: 'top-right',
            }); 
            
            setNome('');
            setTelefone('');
            setEmail('');
            setMensagem('');
        }
    }
    
    return (
        <div>
            <TituloPrincipal texto={"Fale Conosco"}></TituloPrincipal>  

            <form className="form-faleconosco">
                <table>
                    <tbody>
                        <tr>
                            <td className='nome-campo'>Nome:</td>
                            <td>
                                <input className='campo' type="text" 
                                    name="nome" id="nome" value={nome}                                     
                                    onChange={handleChangeNome}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo'>Email:</td>
                            <td>
                                <input className='campo' type="text" 
                                    name="email" id="email" value={email}                                     
                                    onChange={handleChangeEmail}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo'>Telefone:</td>
                            <td>
                                <input className='campo' type="text" 
                                    name="telefone" id="telefone" value={telefone}                                     
                                    onChange={handleChangeTelefone}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo'>Mensagem:</td>
                            <td>
                                <textarea className='campo-mensagem'
                                    name="mensagem" id="mensagem" value={mensagem}                                     
                                    onChange={handleChangeMensagem}>
                                </textarea>
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