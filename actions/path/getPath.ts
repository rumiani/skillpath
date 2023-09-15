import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { pathReducer } from "@/redux/appStateSlice";

export const getPath = (url:string) => async (dispatch) => {
    url = api.serverUrl + '/path' + url
    console.log(url);
    
  try {
    const pathData = await api.getPath(url);
    const data = await pathData.json();
    if (data.url) {
        console.log(data);
        
      return dispatch(pathReducer(data));
    } else {
      console.log("Path not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
