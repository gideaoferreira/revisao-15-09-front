import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Swal from 'sweetalert2'

function EditUser() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const params = useParams();
    
    function getUserById() {
        const userId = params.id;
        axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
            if (response.status == 200) {
                setName(response.data.name);
                setSurname(response.data.surname);
                setEmail(response.data.email);
                setCpf(response.data.cpf);
                setBirthdate(response.data.birthdate);
                setPassword(response.data.password);
                setStatus(response.data.status);
            }
        })
    }

    function handleSubmit() {
        const userId = params.id;
        const user = {
            name,
            surname,
            email,
            cpf,
            birthdate,
            password,
            status
        };

        axios.put(`http://localhost:3000/user/${userId}`, user).then((response) => {
            if (response.status == 200) {
                Swal.fire(
                    'Editado!',
                    'Usuário editado com sucesso.',
                    'success'
                )
            }
        })
        
    }

    useEffect(() => {
        getUserById() 
    }, []);
    return (
        <>
            <div className="mb-5 d-flex justify-content-between align-items-center">
                <h4>Editar usuário</h4>
            </div>
            <div className="card p-4">
                <form>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Nome</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="José" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Sobrenome</label>
                        <input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Oliveira" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">CPF</label>
                        <input type="text"  value={cpf} onChange={(event) => setCpf(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="99499499449" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Nascimento</label>
                        <input type="date" value={birthdate} onChange={(event) => setBirthdate(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Status</label>
                        <select onChange={(event) => setStatus(event.target.value)} className="form-select mb-3" aria-label="Default select example">
                            <option value="">Selecione um status</option>
                            <option value="ACTIVE">Ativo</option>
                            <option value="INACTIVE">Inativo</option>
                            <option value="BLOCKED">Bloqueado</option>
                            <option value="ANALYZING">Analizando</option>
                        </select>
                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary"> Cadastrar </button>
                </form>
            </div>
        </>
    )
}

export default EditUser