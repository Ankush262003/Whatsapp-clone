import { Navigate, Route, Routes } from "react-router-dom";

// Layout:
import AppLayout from "../layout/AppLayout";

// Pages:
import Auth from "../pages/Auth";


const AppNavigater = () =>{
    return(
        <Routes>
           <Route path="/" element={<AppLayout/>}>
             <Route index element={<Navigate to="/login" replace/>}/>
             <Route path="/login" element={<Auth/>}/>
           </Route>
        </Routes>
    )
}

export default AppNavigater;
