import { Outlet } from "react-router";
import Menu from "../menu/Menu";
import "./layout.css"
import { EntypoSocialInstagram } from "../../assets/svg/Instagram";

function Layout() {
    return (
        <>
            <div className="layout">
                <Menu />
                <div className="container py-3">
                    <Outlet />
                </div>
                <div class="card d-flex justify-content-center align-items-center text-center mb-2 border-0">
                    <div class="card-body">
                        <p>Delete Sem Where - EAD FS 08 - 2024/2 - DG College</p>
                        <hr />
                        <EntypoSocialInstagram />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;