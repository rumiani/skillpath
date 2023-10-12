import { toast } from "react-toastify";
import * as api from "../../pages/api/api";
import { resetPathReducer } from "@/redux/appStateSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const deletePath = (path: string) => async (dispatch: Dispatch) => {
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
    throw new Error("Oops! something went wrong, try again later.");
  }
};
