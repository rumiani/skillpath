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
export interface postType {
    id:string, 
    author:string,
    title:string, 
    body:string,
    src:string,
    status:string,
    createdAt:string,
}

export interface initialStateTypes {
    user:userTypes,
    users:userTypes[],
    post: postType,
    posts: postType[],
}