import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import axios from 'axios';

const Logingpopup = ({ setShowPopup }) => {


    const { url, setToken } = useContext(StoreContext);
    const [currentState, setCurrentState] = useState("Sign up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowPopup(false);
        } else {
            alert(response.data.message)
        }
    }

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className='login-container'>
                <div className='login-pop-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowPopup(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='login-pop-inputs'>
                    {currentState === 'Sign up' ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required /> : null}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currentState === "Sign up" ? "Create account" : "Login"}</button>
                {currentState === "Sign up" ?
                    <div className="login-condition">
                        <input type="checkbox" required />
                        <p>By continuing, i agree to the terms of use & privacy policy.</p>
                    </div> : ""
                }
                {currentState === 'Login' ?
                    <p>Create a new account? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p> :
                    <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Logingpopup
