// import { toast } from "react-toastify";
// import * as api from "../../pages/api/api";
// import { pathReducer } from "@/redux/appStateSlice";

// export const getPath = (url:string) => async (dispatch) => {
//     url = api.serverUrl + url        
//   try {
//     const pathData = await api.getPath(url);
//     const data = await pathData.json();
//     console.log(data);
    
//     if (data.url) {        
//       return dispatch(pathReducer(data));
//     } else {
//       throw new Error("Path not found.")
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
