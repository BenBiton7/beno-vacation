import { Navigate, useNavigate } from "react-router-dom";
import "./Register.css";


function Register(): JSX.Element {
    const navigation = useNavigate();
    return (
        <div className="Register">
            <h1 className="headLines"> Register</h1>
            <div className="box">
			<form action="">
                <input type="text"  placeholder="First Name" className="inputs"  required/> <br /> <br />
                <input type="text" placeholder="Last Name" className="inputs" required /> <br /> <br />
                <input type="email" placeholder="Email" className="inputs" required /> <br /> <br />
                <input type="password" placeholder="Password" className="inputs"  required/> <br /><br />
                <input type="submit" className="submits"  value="Register"/>
            </form>
            <p>already a member?</p>
            <button className="submits"  onClick={() => navigation("/Login")}>Login</button>
            </div>

        </div>
    );
}

export default Register;
