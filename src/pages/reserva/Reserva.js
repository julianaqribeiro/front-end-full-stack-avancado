import './Reserva.css';
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

const Reserva = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
       
    const handleChangeNome = event => {
        setNome(event.target.value);        
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);        
    };

    const handleChangeTelefone = event => {
        setTelefone(event.target.value);        
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

        return true;
    }

    async function clickEnviar() {
        
        if (validarCampos())
        {   
            let formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('telefone', telefone);           
                        
            fetch('http://localhost:5000/fidelidade', {
                method: 'post',
                body: formData
              })
            .then((response) => { 
                response.json(); 
                if (response.status === 200){        
                    toast.success("Cliente cadastrado no Reserva !", {
                        duration: 4000,
                        position: 'top-right',
                    }); 
                    setNome('');
                    setTelefone('');
                    setEmail('');                    
                }
                else if (response.status === 409){
                    toast.warning("Cliente já cadastrado no Reserva !", {
                        duration: 4000,
                        position: 'top-right',
                    }); 
                }
                else{
                    toast.erro("Erro no cadastro no Reserva !", {
                        duration: 4000,
                        position: 'top-right',
                    }); 
                }
            })        
            .catch((error) => {
                alert("Erro ao inserir uma Reserva.");
                console.error('Error:', error);
            });            
                    
        }
    }

    return (
        <div>
            <TituloPrincipal texto={"Reserva"}></TituloPrincipal>  

            <form className="form-reserva">
                <table>
                    <tbody>
                        <tr>
                            <td className='nome-campo-reserva'>Nome:</td>
                            <td>
                                <input className='campo-reserva' type="text" 
                                    name="nome" id="nome" value={nome}                                     
                                    onChange={handleChangeNome}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo-reserva'>Email:</td>
                            <td>
                                <input className='campo-reserva' type="text" 
                                    name="email" id="email" value={email}                                     
                                    onChange={handleChangeEmail}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo-reserva'>Telefone:</td>
                            <td>
                                <input className='campo-reserva' type="text" 
                                    name="telefone" id="telefone" value={telefone}                                     
                                    onChange={handleChangeTelefone}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo-reserva'>Data:</td>
                            <td>
                                <input className='campo-reserva' type="text" 
                                    name="telefone" id="telefone" value={telefone}                                     
                                    onChange={handleChangeTelefone}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo-reserva'>Horario:</td>
                            <td>
                                <input className='campo-reserva' type="text" 
                                    name="telefone" id="telefone" value={telefone}                                     
                                    onChange={handleChangeTelefone}/>
                            </td>
                        </tr>    
                        <tr>
                            <td className='nome-campo-reserva'>Quantidade de Pessoas:</td>
                            <td>
                                <input className='campo-reserva' type="text" 
                                    name="telefone" id="telefone" value={telefone}                                     
                                    onChange={handleChangeTelefone}/>
                            </td>
                        </tr>               
                        <tr>
                            <td>                                
                            </td>
                            <td>
                                <div className="div-botao-reserva">
                                    <button type="button" className='botao-reserva' onClick={clickEnviar}>ENVIAR</button>
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

export default Reserva