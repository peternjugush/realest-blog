import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () =>{
    return (
        <GoogleLogin
        onSuccess={credentialResponse => {
            const credentialResponseDecoded = jwtDecode(
                credentialResponse.credential
            );
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />    
    );
  }
  
  export default Login