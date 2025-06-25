import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import PreferencePerfilForm from "./pages/PreferencePerfilForm";
import DisciplinesListPage from "./pages/DisciplinesListPage";
import EditUserPage from "./pages/EditUserPage";

function CustomRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/editUser" element={<EditUserPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/preferencesForm" element={<PreferencePerfilForm />} />
                <Route path="/selectDisciplines" element={<DisciplinesListPage />} />
                <Route path="/" element={<SignIn />}/>        
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes;