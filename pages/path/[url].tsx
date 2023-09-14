import Custom404 from '@/components/custom404/custom404'
import PathPage from '@/components/pathPage/pathPage'
import { pathReducer } from '@/redux/appStateSlice'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Index = () => {
  const[found, setFound] = useState(true)
  const dispatch = useDispatch()
  const router = useRouter()
  const uniqueUrl = router.query.url
  
  useEffect(() =>{
    const url ='http://localhost:5000/path/' + uniqueUrl    
    fetch(url)
    .then( res => res.json())
    .then(data => {
      console.log(data);
      
      if(data.error){
        return setFound(false)
      }
      setFound(true)
      dispatch(pathReducer(data))
    }
    )
    .catch( error => console.log('error',error)
    )
  },[router, uniqueUrl, dispatch])
  return (
    <div>
      {found?
        <PathPage/>:
        <Custom404/>
      }
    </div>
  )
}

export default Index