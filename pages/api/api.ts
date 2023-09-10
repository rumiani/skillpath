const url = 'http://localhost:5000/newpath';

export const fetchPath = () => fetch(url)
export const createPath = (pathData) => fetch( url , {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',},
    body: JSON.stringify(pathData), 
  })