import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, LayoutEl } from "./Home.styled";

const Layout = () => {
    return (
        <>
            <Header>
                <LayoutEl to={'/'}>Home</LayoutEl>
                <LayoutEl to={'movies'}>Movies</LayoutEl>
            </Header>
            <Suspense fallback={null}><Outlet /></Suspense>
        </>
    )
}

export default Layout;