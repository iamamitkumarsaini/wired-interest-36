import { Route, Routes } from "react-router-dom";
import Discussion from "./Discussion";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import SignupProfile from "./SignupProfile";

function AllRoutes () {

    return(
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/discussion" element={<Discussion />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signup/profile" element={<SignupProfile />}></Route>
    </Routes>
    )
}

export default AllRoutes;