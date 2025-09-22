import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router";
import Swal from 'sweetalert2'
import { formatDatePTBR, formatDateTime } from "../../utils/date-format.js";

function ListUsers() {
    /**
     * Lista de usuários
     */
    const [listUsers, setListUsers] = useState([])

    /**
     * Pega os usuários na API e adiciona a variável listUsers
     */
    function getUsers() {
        axios.get('http://localhost:3000/users').then((response) => {
            setListUsers(response.data)
        })
    }

    function editUser(id) {
        console.log(id)
    }

    /**
     * Deleta um usuário pelo ID
     * @param id
     */    
    function deleteUser(id) {
        Swal.fire({
            title: 'Tem certeza que deseja deletar?',
            text: "Essa ação não poderá ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/user/${id}`).then((response) => {
                    if (response.status == 200) {
                        Swal.fire(
                            'Deletado!',
                            'Usuário deletado com sucesso.',
                            'success'
                        )
                        getUsers()
                    }
                })

            }
        })


    }

    /**
     * Executa os dados sempre que o componente for renderizado
     */
    useEffect(() => {
        getUsers()
    },[])

    return (
        <>
            <div className="mb-5 d-flex justify-content-between  align-items-center">
                <h4>Página de usuários</h4>
                <NavLink to="/create-user">
                    <button className="btn btn-primary btn-sm">+</button>
                </NavLink>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Nascimento</th>
                        <th>Status</th>
                        <th>Data da criação</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.length === 0 ?
                        (<tr>
                            <td colSpan={8} className="text-center">Nenhum usuário encontrado</td>
                        </tr>) :
                        listUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{formatDatePTBR(user.birthdate)}</td>
                                <td>
                                    {user.status === 'ACTIVE' && <span class="badge bg-success">Ativo</span>}
                                    {user.status === 'INACTIVE' && <span class="badge bg-secondary">Inativo</span>}
                                    {user.status === 'BLOCKED' && <span class="badge bg-danger">Bloqueado</span>}
                                    {user.status === 'ANALYZING' && <span class="badge bg-warning text-dark">Analisando</span>}
                                </td>
                                <td>{formatDateTime(user.createdAt)}</td>
                                <td>
                                    <NavLink to={{
                                        pathname: `/edit-user/${user.id}`,
                                    }}>
                                        <button className="btn btn-info btn-sm">
                                            Editar
                                        </button>
                                    </NavLink>
                                    <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListUsers