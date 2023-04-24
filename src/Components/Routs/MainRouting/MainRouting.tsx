import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import "./MainRouting.css";
import Register from "../../Pages/Register/Register";
import AddVacation from "../../Pages/AddVacation/AddVacation";
import EditVacation from "../../Pages/EditVacation/EditVacation";
import Main from "../../Layout/Main/Main";
import Vacations from "../../Pages/Vacations/Vacations";
import Reports from "../../Pages/Reports/Reports";
import Page404 from "../../Pages/Page404/Page404";

function MainRouting(): JSX.Element {
    return (
        <div className="MainRouting">
			<Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/addVacation" element={<AddVacation/>}/>
                <Route path="/editVacation" element={<EditVacation/>}/>
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/" element={<Vacations/>}/>
                <Route path="*" element={<Page404/>}/>

            </Routes>
        </div>
    );
}

export default MainRouting;
