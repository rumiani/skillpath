import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialStateTypes, pathType } from './interfaces'

const initialState: initialStateTypes = {
  user: {
    id:'', 
    name:'', 
    email:'',
    avatar:'',
    role:'',
    joinTime:'',
    permission:true,
    loggedIn:false,
    linkedIn:'',
    twitter:''
  },
  users:[],
  path: {
    title: '',
    body:'',
    intro:'',
    length:1,
    src: '',
    tags:[],
  },
  paths:[],
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    pathReducer: (state, action: PayloadAction<object>) => {  
      state.path = { ...state.path, ...action.payload}
    }
  },
})

export const { 
  pathReducer, 
} = appStateSlice.actions

export default appStateSlice.reducer