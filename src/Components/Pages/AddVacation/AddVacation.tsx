import "./AddVacation.css";
import { Navigate, useNavigate } from "react-router-dom";

function AddVacation(): JSX.Element {
    const navigation = useNavigate();
    return (
        <div className="AddVacation">
			<h1 className="headLines">Add Vacation</h1>
            <div className="box">
                <form action="">
                <input type="text" placeholder="destination" required />
                <br /><br />
                <textarea name="description" placeholder="description" required></textarea>
                <br /><br />
                <p>start on</p>
                <input type="date" /><br /><br />
                <p>ends on</p>
                <input type="date"  /><br /><br />
                <input type="number"  placeholder="price (in dollers)"/> <br /><br />
                <input type="submit" className="submits" value="Add Vacation" /> <br /><br />
                <input type="reset" value="cancel"  className="inputs" onClick={() => navigation("/Vacations")}/>
                </form>
            </div>
        </div>
    );
}

export default AddVacation;
