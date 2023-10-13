import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { pathReducer, resetPathReducer } from "@/redux/appStateSlice";
import { Dispatch, AnyAction } from "redux";
interface pathType {
  title:string,
  body:string,
  tags:string[],
  url:string
}

export const updatePath = (path:pathType) => async (dispatch : Dispatch<AnyAction>) => {
  try {
    const pathData = await api.updatePath(path.url, path);
    const data = await pathData.json();
    if (data.url) {
      toast.success("The path was updated successfully");
      dispatch(resetPathReducer());
      dispatch(pathReducer({ url: data.url }));
      return;
    } else {
      toast.error("Oops! something went wrong, try again later.");
      return
    }
  } catch (error) {
    throw new Error("Oops! something went wrong, try again later.");
  }
};
