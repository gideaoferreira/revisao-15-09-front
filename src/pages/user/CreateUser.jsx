import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateUser() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit() {
        const user = {
            name,
            surname,
            email,
            cpf,
            birthdate,
            password
        };

        axios.post('http://localhost:3000/users', user).then((response) => {
            if (response.status == 201) {
                navigate("/users");
            }
        });
    }

    return (
        <>
            <div className="mb-5 d-flex justify-content-between  align-items-center">
                <h4>Criar usuário</h4>
            </div>
            <form>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nome</label>
                    <input type="text" onChange={(event) => setName(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="José" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Sobrenome</label>
                    <input type="text" onChange={(event) => setSurname(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Oliveira" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="text" onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">CPF</label>
                    <input type="email"  onChange={(event) => setCpf(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="99499499449" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nascimento</label>
                    <input type="date" onChange={(event) => setBirthdate(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Senha</label>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="@s4!$%dds" />
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary"> Cadastrar </button>
            </form>
        </>
    );
}

export default CreateUser;