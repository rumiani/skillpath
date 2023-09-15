import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { resetPathReducer } from "@/redux/appStateSlice";

export const deletePath = (path) => async (dispatch) => {
  try {
    const pathData = await api.deletePath(path);
    const data = await pathData.json();
    if (data.url) {
      toast.success("The path was deleted successfully");
      return dispatch(resetPathReducer());
    } else {
      toast.error("Oops! something went wrong, try again later.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
