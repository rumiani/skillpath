import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { pathReducer } from "@/redux/appStateSlice";
import { Dispatch } from 'redux';
interface pathType {
  id:string,
  title:string,
  body:string,
  length:number,
  tags:string[],
  url:string
}
export const createPath = (path:pathType) => async (dispatch:Dispatch) => {
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
    throw new Error("Oops! something went wrong");
  }
};
