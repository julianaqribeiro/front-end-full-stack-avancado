import './Fidelidade.css';
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

const Fidelidade = () => {

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
                    toast.success("Cliente cadastrado no Programa Fidelidade !", {
                        duration: 4000,
                        position: 'top-right',
                    }); 
                    setNome('');
                    setTelefone('');
                    setEmail('');                    
                }
                else if (response.status === 409){
                    toast.warning("Cliente já cadastrado no Programa Fidelidade !", {
                        duration: 4000,
                        position: 'top-right',
                    }); 
                }
                else{
                    toast.erro("Erro no cadastro no Programa Fidelidade !", {
                        duration: 4000,
                        position: 'top-right',
                    }); 
                }
            })        
            .catch((error) => {
                alert("Erro ao inserir cliente no Programa Fidelidade.");
                console.error('Error:', error);
            });            
                    
        }
    }
    
    return (
        <div>
            <TituloPrincipal texto={"Programa Fidelidade"}></TituloPrincipal>  

            <form className="form-fidelidade">
                <table>
                    <tbody>
                        <tr>
                            <td className='nome-campo-fidelidade'>Nome:</td>
                            <td>
                                <input className='campo-fidelidade' type="text" 
                                    name="nome" id="nome" value={nome}                                     
                                    onChange={handleChangeNome}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo-fidelidade'>Email:</td>
                            <td>
                                <input className='campo-fidelidade' type="text" 
                                    name="email" id="email" value={email}                                     
                                    onChange={handleChangeEmail}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='nome-campo-fidelidade'>Telefone:</td>
                            <td>
                                <input className='campo-fidelidade' type="text" 
                                    name="telefone" id="telefone" value={telefone}                                     
                                    onChange={handleChangeTelefone}/>
                            </td>
                        </tr>                        
                        <tr>
                            <td>                                
                            </td>
                            <td>
                                <div className="div-botao-fidelidade">
                                    <button type="button" className='botao-fidelidade' onClick={clickEnviar}>ENVIAR</button>
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

export default Fidelidade