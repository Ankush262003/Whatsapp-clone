import { Navigate, Route, Routes } from "react-router-dom";

// Layout:
import AppLayout from "../layout/AppLayout";

// Pages:
import LoginPage from "../pages/Login";


const AppNavigater = () =>{
    return(
        <Routes>
            // Public routes:
            <Route path="/login" element={<LoginPage/>}/>
        
            // Private routes:
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Navigate to="/" replace/>}/>
                
            </Route>
          
        </Routes>
    )
}

export default AppNavigater;
