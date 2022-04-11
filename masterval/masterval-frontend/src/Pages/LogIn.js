import { signup, useAuth, logout, login } from "../firebase";
import "../styles/login.css";
import { useRef, useState } from "react";
import ToggleLoginButton from '../components/ToggleLoginButton';


export default function LogIn() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const [showlogin, setshowlogin] = useState(false);

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

        setLoading(false);
    }


    return (
        <>
            <div className="testing">
          

            <ToggleLoginButton showOverview={showlogin} setShowOverview={setshowlogin} />
  </div>
            <div > currently logged in as: {currentUser?.email}
            </div>

            <div className="fields">

                <input className="email_input" ref={emailRef} placeholder="Email" />

                <input className="password_input" ref={passwordRef} type="password" placeholder="Lösenord" />
            </div>
            <div className="testingmore">

            <div className="buttons">
            {showlogin ? <button className="Btn_LogIn" disabled={loading || currentUser} onClick={handleSignup}> Registera dig </button> :

                <button className="Btn_LogIn" disabled={loading || currentUser} onClick={handleLogin}> Logga in </button>
            }

            {showlogin ? <div> </div> : <button className="Btn_LogIn" disabled={loading || !currentUser} onClick={handleLogout}> Logga ut </button> }
            </div>

            </div>
        </>
        )
}

