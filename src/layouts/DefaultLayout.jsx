import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Loader />
            <Outlet />
        </>
    )
}