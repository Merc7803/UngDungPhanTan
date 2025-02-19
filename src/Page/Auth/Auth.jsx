import React, { useState } from 'react'
import mercImage from './merc.jpg';
import "./Auth.css"
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);
    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className='box lg:max-w-4xl'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    <div className='front'>
                        <img src={mercImage} alt='' />
                       
                    </div>
                    <div className='back'>
                        <img src={mercImage} alt=''/>
                    </div> 
                </div>
                <div className='forms h-full'>
                    <div className='form-content h-full'>
                        <div className='login-form'>
                            <Signin
                            togglePanel={togglePanel}/>
                        </div>
                        <div className='signup-form'>
                            <Signup
                            togglePanel={togglePanel}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth