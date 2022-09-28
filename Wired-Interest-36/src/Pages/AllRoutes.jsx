import { Route, Routes } from "react-router-dom";
import Discussion from "./Discussion";

function AllRoutes () {

    return(
        <Routes>
        <Route path="/discussion" element={<Discussion />}></Route>
    </Routes>
    )
}

export default AllRoutes;