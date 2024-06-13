import { Navigate, Route, Routes } from "react-router-dom";

// Layout:
import AppLayout from "../layout/AppLayout";

// Pages:
import Auth from "../pages/Auth";


const AppNavigater = () =>{
    return(
        <Routes>
            // Public routes:
            <Route path="/login" element={<Auth/>}/>
        
            // Private routes:
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Navigate to="/" replace/>}/>
                
            </Route>
          
        </Routes>
    )
}

export default AppNavigater;
