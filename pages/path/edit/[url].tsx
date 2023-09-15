import { getPath } from '@/actions/path/getPath'
import Custom404 from '@/components/custom404/custom404'
import PathPage from '@/components/pathPage/pathPage'
import { pathReducer } from '@/redux/appStateSlice'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const{path} = useSelector(state => state.appState)
  const dispatch = useDispatch()
  const router = useRouter()
  const uniqueUrl = router.query.url
  
  useEffect(() =>{
    console.log(uniqueUrl);
    
    dispatch(getPath('/edit/'+uniqueUrl))
  },[uniqueUrl, dispatch])

  return (
    <div>
      {path.title?
        <p>edit page</p>:
        <Custom404/>
      }
    </div>
  )
}

export default Index