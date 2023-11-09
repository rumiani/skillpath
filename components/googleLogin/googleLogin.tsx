import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
// import useLocalStorage from '@/hooks/useLocalStorage/useLocalStorage';
// import postData from './post';
import { useDispatch } from "react-redux";
// import { userLoggedInReducer } from '@/redux/appStateSlice';
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loginGoogle } from "../../actions/user/loginGoogle";
import jwtDecode  from "jwt-decode";
const GoogleLoginComp = () => {
  // const[session, setSession] = useLocalStorage('userSession', null)
  const [user, setUser] = useState<String>();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("profile")).credential
    const user = jwtDecode(token)
    console.log(user);
    // setUser(token)
  }, [user]);

  return (
    <div className="w-fit mx-auto m-4">
      <GoogleLogin
        onSuccess={(res) => {
          // const credential:object = jwt_decode(res.credential)
          //  console.log(res.credential);
          console.log(res);
          localStorage.setItem(
            "profile",
            JSON.stringify({ credential: res.credential })
          );
          router.push("/");
          dispatch(loginGoogle({ credential: res.credential }));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComp;
