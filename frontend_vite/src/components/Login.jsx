import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import share from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

const Login = () => {
  const navigate = useNavigate();

  // const googleResponse = (credentialResponse) => {
  //   console.log('Login Success:', credentialResponse);
  // };

  const googleResponse = (credentialResponse) => {
    localStorage.setItem('user', JSON.stringify(credentialResponse.ProfileObj))

    const { name, googleId, imageUrl } = credentialResponse.ProfileObj;
    // value to be created in sanity 

    const doc = {
      _id: googleId,
      _type: 'user',
      username: name,
      image: imageUrl
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
    // Add any additional login failure logic here
  };

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={share}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className="absolute flex flex-col justify-center items-center right-0 left-0 top-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
            clientId= {import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN}
              onSuccess={googleResponse}
              onFailure={handleLoginFailure}
              cookiePolicy = "single_host_origin"
              render={(renderProps) => (
                <button
                  className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer'
                  type='button'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4' /> Sign in with Google
                </button>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

