import './Reserva.css';
import TituloPrincipal from "../../components/tituloPrincipal/TituloPrincipal";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

const Reserva = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataReserva, setDataReserva] = useState(new Date());
    const [qtdPessoas, setQtdPessoas] = useState(1);

    const filtroData = (dataReserva) => new Date() < dataReserva;
       
    const handleChangeNome = event => {
        setNome(event.target.value);        
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);        
    };

    const handleChangeTelefone = event => {
        setTelefone(event.target.value);        
    };

    const handleChangeQtdPessoas = event => {
        setQtdPessoas(event.target.value);        
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

        else if (dataReserva === ''){
            toast.error("Preencha o campo Data !", {
                duration: 4000,
                position: 'top-right',
              }); 
            return false;   
        }

        else if (qtdPessoas === '' || qtdPessoas < 1){
            toast.error("Preencha o campo Qtd Pessoas !", {
                duration: 4000,
                position: 'top-right',
              }); 
            return false;   
        }

        else if (qtdPessoas === '' || qtdPessoas > 10){
            toast.error("O maximo permitido é de 10 pessoas !", {
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
            console.log(dataReserva);

            let formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('telefone', telefone);
            formData.append('dataReserva', moment(dataReserva).format('YYYY-MM-DDTHH:mm:ss.SSSSSS'));
            formData.append('qtdPessoas', qtdPessoas);       
                                    
            fetch('http://localhost:5000/reserva', {
                method: 'post',
                body: formData
              })
            .then((response) => { 
                response.json(); 
                if (response.status === 200){        
                    toast.success("Reserva cadastrada com sucesso !", {
                        duration: 4000,
                        position: 'top-right',
                    }); 
                    setNome('');
                    setTelefone('');
                    setEmail('');
                    setDataReserva('');
                    setQtdPessoas('1');      
                }
                else if (response.status === 409){
                    toast.warning("Reserva cadastrada com sucesso !", {
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
                                <DatePicker className='campo-reserva' 
                                    selected={dataReserva}                                     
                                    onChange={(dataReserva) => setDataReserva(dataReserva)} 
                                    dateFormat='dd/MM/YYYY hh:mm:ss'
                                    showTimeSelect
                                    minTime={new Date(0, 0, 0, 12, 30)}
                                    maxTime={new Date(0, 0, 0, 19, 0)}
                                    filterDate={filtroData}
                                    onKeyDown={(e) => {
                                        e.preventDefault();
                                     }}
                                />                                
                            </td>
                        </tr>                        
                        <tr>
                            <td className='nome-campo-reserva'>Num Pessoas:</td>
                            <td>
                                <input className='campo-reserva-qtdpessoas' type="number" min="1" max="10"
                                    name="qtdPessoas" id="qtdPessoas" value={qtdPessoas}
                                    onChange={handleChangeQtdPessoas}/>
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