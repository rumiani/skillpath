import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { userReducer } from "@/redux/appStateSlice";

export const userLogin = (userInfoGoogle) => async (dispatch) => {
  try {
    const userJson = await api.login(userInfoGoogle);
    const user = await userJson.json();
    if (user) {
      toast.success("The user was created successfully");
      return dispatch(userReducer(user));
    } else {
      console.log(user);
      toast.error("Oops! something went wrong");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};