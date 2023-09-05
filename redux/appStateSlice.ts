import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialStateTypes } from './interfaces'

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
  post: {
    id: '',
    author:'',
    title: '',
    status:'',
    body:'',
    src: '',
    createdAt:''
  },
  posts:[],
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    userReducer: (state, action: PayloadAction) => {          
      state.user = action.payload
    },
    postReducer: (state, action: PayloadAction) => {          
      state.posts = action.payload
    },
    eventClickedIdReducer: (state, action: PayloadAction<string | null>) => {          
      state.eventClickedId = action.payload
    },
    eventsReducer: (state, action: PayloadAction<[]>) => {                
      state.events = action.payload
    },
  },
})

export const { 
  userReducer, 
  usersReducer, 
  eventClickedIdReducer,
  eventsReducer,
} = appStateSlice.actions

export default appStateSlice.reducer