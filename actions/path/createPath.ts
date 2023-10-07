import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { pathReducer } from "@/redux/appStateSlice";
import { pathType } from "@/redux/interfaces";

export const createPath = (path:{path:pathType}) => async (dispatch) => {
  try {
    const pathData = await api.createPath(path);
    const data = await pathData.json();
    if (data.url) {
      toast.success("The path was created successfully");

      return dispatch(pathReducer({ url: data.url }));
    } else {
      console.log(data);

      toast.error("Oops! something went wrong");
    }
  } catch (error) {
    console.log(error);

    throw new Error(error.message);
  }
};
