import axios from "axios";
import { useNavigate } from "react-router";
import  { useForm } from "react-hook-form";

function CreateUser() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate();

    function onSubmit(data) {
        axios.post('http://localhost:3000/users', data).then((response) => {
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
            <div className="card p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="José"
                            {
                                ...register("name", { required: true, maxLength: 15, minLength: 2 })
                            }
                        />
                        <span className="text-danger">{ errors.name && "Nome do usuário é obrigatório" }</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sobrenome</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Oliveira"
                            {
                                ...register("surname", { required: true, maxLength: 30, minLength: 3 })
                            }
                        />
                        <span className="text-danger">{ errors.surname && "Sobrenome do usuário é obrigatório" }</span>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="email@email.com"
                            {
                                ...register("email", { required: true, maxLength: 30, minLength: 8 })
                            }
                        />
                        <span className="text-danger">{ errors.email && "Email do usuário é obrigatório" }</span>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="99499499449"
                            {
                                ...register("cpf", { required: true, maxLength: 11, minLength: 11 })
                            }
                        />
                        <span className="text-danger">{ errors.cpf && "CPF do usuário é obrigatório" }</span>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Nascimento</label>
                        <input
                            type="date"
                            max={"2009-01-01"}
                            className="form-control"
                            {
                                ...register("birthdate", { required: true, maxLength: 10, minLength: 10 })
                            }
                        />
                        <span className="text-danger">{ errors.birthdate && "Data de nascimento do usuário é obrigatório" }</span>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="@s4!$%dds"
                            {
                                ...register("password", { required: true, maxLength: 15, minLength: 6 })
                            }
                        />
                        <span className="text-danger">{ errors.password && "Senha do usuário é obrigatório" }</span>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary"> Cadastrar </button>
                </form>
            </div>
        </>
    );
}

export default CreateUser;