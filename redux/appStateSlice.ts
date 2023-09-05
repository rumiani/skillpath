import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { eventType, initialStateTypes } from './interfaces'

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
    des:'',
    linkedIn:'',
    twitter:''
  },
  users:[],
  event: {
    id: '',
    location: '',
    start: '',
    end: '',
    title: '',
    status:'',
    mentor: {
      id:'',
      attendance:true,
    },
    mentee: {
      id:'',
      attendance:true,
    },
    canceler: {
      id:'',
      des:''
    },
  },
  events:[],
  eventClickedId:null,
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    userReducer: (state, action: PayloadAction<eventType>) => {          
      state.event = action.payload
    },
    usersReducer: (state, action: PayloadAction<eventType>) => {          
      state.event = action.payload
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