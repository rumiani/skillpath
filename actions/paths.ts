import * as api from './../pages/api/api';
import { pathReducer } from '@/redux/appStateSlice';

export const createPath = (path) => async (dispatch) =>{
    try {
        const pathData = await api.createPath(path)
        const data = await pathData.json()
        console.log(data);
        
        dispatch(pathReducer(data))
    } catch (error) {
        console.log(error);
    }
}