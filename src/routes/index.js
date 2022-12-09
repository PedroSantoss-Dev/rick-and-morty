import { Navigate, Route, Routes } from "react-router-dom"
import { Episode } from "../pages/Episode"
import { Home } from "../pages/Home"
import { Info } from "../pages/Info"
import { Location } from "../pages/Location"

export const Routers = () => {
    return(
        <Routes>
            <Route  path="/home" element={<Home/>} />
            <Route  path="/episode" element={<Episode/>} />
            <Route  path="/location" element={<Location/>} />
            <Route  path="/info/:id" element={<Info/>} />
            <Route path="*" element={ <Navigate to="/home"/>}/>
        </Routes>
    )
}