import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { Dispatch } from "@reduxjs/toolkit";
import { userReducer } from "../../redux/appStateSlice";

export const loginGoogle = (credential) => async (dispatch: Dispatch) => {      
    try {
    const userJson = await api.login(credential);
    const user = await userJson.json();
    if (userJson.status === 404) {
      toast.error("The user does not exist.");
      return;
    }
    if (userJson.status === 400) {
      toast.error("Wrong credentials.");
      return;
    } else {      
      toast.success("You are logged in successfully.");
      return dispatch(userReducer(user));
    }
  } catch (error) {
    console.log(error);
    
    toast.error("Oops, something went wrong.");
    throw new Error("Oops, something went wrong.");
  }
};
