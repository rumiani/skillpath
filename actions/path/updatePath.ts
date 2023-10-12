import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { pathReducer, resetPathReducer } from "@/redux/appStateSlice";
import { Dispatch } from "@reduxjs/toolkit";
interface pathType {
  id:string,
  title:string,
  body:string,
  length:number,
  tags:string[],
  url:string
}
export const updatePath = (url:string, path:pathType) => async (dispatch : Dispatch) => {
  try {
    const pathData = await api.updatePath(url, path);
    const data = await pathData.json();
    if (data.url) {
      toast.success("The path was updated successfully");
      dispatch(resetPathReducer());
      dispatch(pathReducer({ url: data.url }));
      return;
    } else {
      toast.error("Oops! something went wrong, try again later.");
    }
  } catch (error) {
    throw new Error("Oops! something went wrong, try again later.");
  }
};
