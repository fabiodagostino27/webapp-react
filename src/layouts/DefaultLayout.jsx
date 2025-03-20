import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function DefaultLayout() {
    const {isLoading} = useContext(GlobalContext)

    return (
        <>
            <Header />
            <Outlet />

            {isLoading && <Loader />}
        </>
    )
}