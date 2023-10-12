import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { userReducer } from "@/redux/appStateSlice";
import { Dispatch } from "@reduxjs/toolkit";
interface UserInfo {
  email: string,
  password: string
}
export const userLogin = (userInfo:UserInfo) => async (dispatch: Dispatch) => {
  try {
    const userJson = await api.login(userInfo);
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
    toast.success("Oops, something went wrong.");
    throw new Error("Oops, something went wrong.");
  }
};
