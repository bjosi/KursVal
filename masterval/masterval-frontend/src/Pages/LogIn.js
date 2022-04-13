import { signup, useAuth, logout, login } from "../firebase";
import "../styles/login.css";
import { useRef, useState } from "react";
import ToggleLoginButton from "../components/ToggleLoginButton";

export default function LogIn() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const [showlogin, setshowlogin] = useState(false);

    const [errorlogin, seterrorlogin] = useState(false);
    const [errorsignup, seterrosignup] = useState(false);
    const [errorpassword, seterrorpassword] = useState(false);



    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {

        setLoading(true);
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            seterrosignup(false);
            seterrorpassword(false);
        }
        catch {
            if (passwordRef.current.value == "") {
                seterrorpassword(true);
                seterrosignup(false);
            }
            else {
                seterrosignup(true);
                seterrorpassword(false);
            }
        }

        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        }
        catch {  }
        setLoading(false);
    }


    async function handleLogin() {

        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        }
        catch {
            seterrorlogin(true);
        }
        setLoading(false);
    }


    return (
        <>
            <div className="testing">
          

                <ToggleLoginButton showOverview={showlogin} setShowOverview={setshowlogin} seterrorlogin={seterrorlogin} seterrorpassword = { seterrorpassword } seterrosignup = { seterrosignup} />
            </div>


            <div className="fields">

            {errorlogin ? < div className="error_msg" ><p> there was an error</p>
            </div> : <> </>}

            {errorsignup ? < div className="error_msg"><p> Vändligen ange giltigt email</p>
            </div> : <> </>}


            {errorpassword ? < div className="error_msg" ><p> Du behöver ett lösenord</p>
                </div> : <> </>}
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

            {showlogin ? <> </> : <button className="Btn_LogIn" disabled={loading || !currentUser} onClick={handleLogout}> Logga ut </button> }
            </div>

            </div>
        </>
        )
}
