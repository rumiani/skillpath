import PathPage from '@/components/pathPage/pathPage'
import { pathReducer } from '@/redux/appStateSlice'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const uniqueUrl = router.query.url
  
  useEffect(() =>{
    const url ='http://localhost:5000/path/' + uniqueUrl    
    fetch(url)
    .then( res => res.json())
    .then(data => dispatch(pathReducer(data))
    )
    .catch( error => console.log(error)
    )
  },[router, uniqueUrl, dispatch])
  return (
    <div>
        <PathPage/>
    </div>
  )
}

export default Index