import { Route, Routes } from "react-router-dom";
import Discussion from "./Discussion";
import Home from "./Home";

function AllRoutes () {

    return(
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/discussion" element={<Discussion />}></Route>
    </Routes>
    )
}

export default AllRoutes;