import { signup, useAuth, logout, login } from "../firebase";
import "../styles/login.css";
import { useRef , useState} from "react";


export default function LogIn() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {

        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
        }
        catch {
                alert("Error");
        }

        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        }
        catch { alert("Error!") }
        setLoading(false);
    }


    async function handleLogin() {

        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        }
        catch {
            alert("Error");
        }

        setLoading(false); }


    return (
        <>
            <div className="testing">
            </div>

            <div > currently logged in as: {currentUser?.email}
            </div>

            <div className="fields">
                <input ref={emailRef} placeholder="Email" />

                <input ref={passwordRef} type= "password" placeholder="Lösenord" />
            </div>

            <button disabled={loading || currentUser} onClick={handleSignup}> Registera dig </button>

            <button disabled={loading || !currentUser} onClick={handleLogin}> Logga in </button>

            <button disabled={loading || !currentUser}  onClick={handleLogout}> Logga ut </button>


        </>
        )
}

