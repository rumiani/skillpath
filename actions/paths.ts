import { toast } from 'react-toastify';
import * as api from './../pages/api/api';
import { pathReducer } from '@/redux/appStateSlice';

export const createPath = (path) => async (dispatch) =>{
    try {
        const pathData = await api.createPath(path)
        const data = await pathData.json()
        const url = data.url
        console.log(data);
        
        if(url){
            return dispatch(pathReducer({title: '', body:'', length:0, url, tags:[],}))
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        throw new Error(error.message)
    }
}