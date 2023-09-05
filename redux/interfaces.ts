export interface userTypes {
    id:string, 
    name:string, 
    email:string,
    avatar:string,
    role:string,
    joinTime:string,
    permission:boolean,
    loggedIn:boolean,
    des:string,
    linkedIn:string
    twitter:string
}

export interface eventType {
  id: string,
  location: string,
  start: string,
  end: string,
  title: string,
  status:string,
  mentor: {
    id:string,
    attendance:boolean,
  },
  mentee: {
    id:string,
    attendance:boolean,
  },
  canceler: {
    id:string,
    des:string
  },
}

export interface initialStateTypes {
    user:userTypes,
    users:userTypes[],
    event:eventType,
    events:eventType[],
    eventClickedId:string | null
}