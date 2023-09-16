import { useRouter } from 'next/router'
import React from 'react'

const SubmitBtn = ({isSubmitting, submitHandler}) => {
    const router = useRouter()
    const {pathname} = router
    const route = pathname.split('/')[1];
    // console.log(route, pathname,router);
    


    const updateHandler = () =>{
        console.log('update');
    }

  return (
    <>
        <button
          disabled={isSubmitting}
          onClick={()=>{
            if(route === 'edit'){
                updateHandler()
            }else if(route === 'newpath'){

                submitHandler()
            }
        }
        }
          className="primaryBtn  mx-auto"
        >
          Publish
        </button>
    </>
  )
}

export default SubmitBtn