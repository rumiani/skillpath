import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { deletePath } from '@/pages/api/api'
import { useRouter } from 'next/router'
import Confirmation from '@/components/confirmation/confirmation'


const PathMenu = () => {
    const router = useRouter()
    const pathUrl = router.query.url
    const[show,setShow] = useState(false)
    const[showModal,setShowModal] = useState(false)

    const deleteHandler = (url) =>{
        setShowModal(true)
    }
    const confirmationHandler = (confirm)=>{
        console.log(confirm);
        
        if(confirm){
            deletePath(pathUrl)
            console.log('delete request');
            
        }else{
            setShowModal(false)
        }
    }
  return (
    <div className='relative w-20'>
        <button className='float-right hover:bg-blue-200 rounded-full p-1 transition-colors duration-300'
            onClick={()=>setShow(!show)}>
                {show?<AiOutlineClose/>:<BsThreeDotsVertical/>}
            </button>
        { show &&
            <div id='menu' className='absolute top-6 right-5 flex flex-col gap-2 bg-blue-500 rounded-lg w-20'>
            <button className='text-yellow-500 pt-2 hover:font-bold'
            title='Edit this path'
            >Edit</button>
            <button className='text-red-500 pb-2 hover:font-bold'
                title='Delete this path'
                onClick={()=> {
                    setShow(false)
                    deleteHandler(pathUrl)
                }}
            >Delete</button>
        </div>
        }
        <Confirmation
            showModal={showModal}
            msg='Are you sure you want to delete this path?'
            confirmationHandler={confirmationHandler}
        />
    </div>
  )
}

export default PathMenu