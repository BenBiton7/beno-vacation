import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(): JSX.Element {
    const navigation = useNavigate();
    return (
        <div className="Login">
			<h1 className="headLines">Login</h1>
            <div className="box">
            <form action="" >
                <input type="text" className="inputs" placeholder="Enter User Name" required/>
                <br /><br />
                <input type="password" className="inputs" placeholder="Enter Password" required  /> <br /> <br />
                <input type="submit"  className="submits" value="Login"/>
            </form>
            <p>Dont have an account?</p><br />
            <button className="submits"  onClick={() => navigation("/Register")}>Register</button>
            </div>
        </div>
    );
}

export default Login;
