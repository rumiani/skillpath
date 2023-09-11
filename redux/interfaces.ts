export interface userTypes {
    id:string, 
    name:string, 
    email:string,
    avatar:string,
    role:string,
    joinTime:string,
    permission:boolean,
    loggedIn:boolean,
    linkedIn:string
    twitter:string
}
export interface pathType {
    title:string,
    body:string,
    length:number,
    tags:string[],
}

export interface initialStateTypes {
    user:userTypes,
    users:userTypes[],
    path: pathType,
    paths: pathType[],
}