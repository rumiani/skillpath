import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { pathReducer, resetPathReducer } from "@/redux/appStateSlice";

export const updatePath = (url,path) => async (dispatch) => {
  try {
    const pathData = await api.updatePath(url, path);
    const data = await pathData.json();
    if (data.url) {
      toast.success("The path was updated successfully");
       dispatch(resetPathReducer());
       dispatch(pathReducer({ url: data.url }))
       return
    } else {
      toast.error("Oops! something went wrong, try again later.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
