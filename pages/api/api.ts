
const serverUrl = 'http://localhost:5000';

export const fetchPath = () => fetch(serverUrl)

const postOptions = (pathData) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json',},
  body: JSON.stringify(pathData), 
})
export const createPath = (pathData) => fetch( serverUrl + '/newpath' , postOptions(pathData))
.then(res => {
    if(!res.ok) return false
    res.json()
  })
  .then( data => data)
  .catch(error => console.log(error)
  )

export const deletePath = (pathUrl) => {
  fetch(serverUrl+'/path/'+pathUrl,{
    method: 'DELETE',
  })
  .then(res => res.ok?true:false)
  .catch(error => {
    console.log(error.message)
  })
}
