import CustomerChart from "./hightlights/CustomerChart"
import SalesChart from "./hightlights/SalesChart"

function Home() {
    return (
        <>
            <h2>Página Home</h2>
            <div className="simple-report d-flex gap-4 mb-4">
                <div className="card p-4" style={{ flex: 1 }}>
                    <h5>Total de vendas</h5>
                    <h3>R$ 10.000,00</h3>
                </div>
                <div className="card p-4" style={{ flex: 1 }}>
                    <h5>Total de clientes</h5>
                    <h3>200</h3>
                </div>
                <div className="card p-4" style={{ flex: 1 }}>
                    <h5>Total de produtos</h5>
                    <h3>150</h3>
                </div>
                <div className="card p-4" style={{ flex: 1 }}>
                    <h5>Total de usuários</h5>
                    <h3>50</h3>
                </div>
            </div>
            <div className="highlights d-flex gap-4">
                <div className="card p-4" style={{flex: 1}}>
                    <SalesChart />
                </div>
                <div className="card p-4" style={{flex: 1}}>
                    <CustomerChart />
                </div>
            </div>
            <div className="product-highlights d-flex gap-4">
                <div className="card p-4 mt-4"  style={{flex: 1}}>
                    <h5>Produtos mais vendidos</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Produto</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Vendas</th>
                                <th scope="col">Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Notebook Dell</td>

                                <td>Informática</td>
                                <td>R$ 3.000,00</td>
                                <td>150</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card p-4 mt-4"  style={{flex: 1}}>
                    <h5>Produtos mais visualizados</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Produto</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Vendas</th>
                                <th scope="col">Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Notebook Dell</td>

                                <td>Informática</td>
                                <td>R$ 3.000,00</td>
                                <td>150</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home