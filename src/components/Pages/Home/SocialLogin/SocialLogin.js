import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [singInWithGoogle,user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/home');
    }
    return (
        <div onClick={()=>singInWithGoogle()} className='mt-4'>
            <div className='social-login'>
                <img style={{height:"30px", width:"50px"}} src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
                <h4>SignIn With Google</h4>
            </div>
            
        </div>
    );
};

export default SocialLogin;