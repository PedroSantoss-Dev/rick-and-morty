import { Navigate, Route, Routes } from "react-router-dom"
import { CardList } from "../pages/CardList"
import { Home } from "../pages/Home"

export const Routers = () => {
    return(
        <Routes>
            <Route  path="/home" element={<Home/>} />
            <Route  path="/character" element={<CardList/>} />
            <Route path="*" element={ <Navigate to="/home"/>}/>

        </Routes>
    )
}