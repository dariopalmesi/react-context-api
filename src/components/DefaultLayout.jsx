import { Outlet } from "react-router-dom"
import MainMenu from "./MainMenu"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"



export default function DefaultLayout() {
    return (
        <>
            <AppHeader>
                <MainMenu />
            </AppHeader>
            <main className="bg-black">
                <Outlet />
            </main >
            <AppFooter />
        </>

    )
}