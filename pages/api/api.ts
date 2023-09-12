const url = 'http://localhost:5000/';

export const fetchPath = () => fetch(url)
export const createPath = (pathData) => fetch( url + 'newpath' , {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',},
    body: JSON.stringify(pathData), 
  })
export const deletePath = (pathUrl) => fetch(url+pathUrl,{
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json',},
  body: JSON.stringify(pathUrl), 
})
