import { Outlet } from "react-router";
import Menu from "../menu/Menu";

function Layout() {
    return (
        <>
            <Menu />
            <div className="container py-3">
                <Outlet />
            </div>
            <h3>FOOTER</h3>
        </>
    )
}

export default Layout;