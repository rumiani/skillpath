import { getPath } from '@/actions/path/getPath'
import Custom404 from '@/components/custom404/custom404'
import PathForm from '@/components/pathForm/pathForm'
import PathPage from '@/components/pathPage/pathPage'
import { pathReducer } from '@/redux/appStateSlice'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const getServerSideProps = async (context) => {
  const { url } = context.query;
  try {
    const res = await fetch("http://localhost:5000/path-edit/" + url);
    const data = await res.json();
    return {
      props: { path: data },
    };
  } catch (error) {
    console.log(error);
  }
};

const Index = ({path}) => {

console.log(path);

  return (
    <div>
      {path.title &&
        <PathForm/>
        // <Custom404/>
      }
    </div>
  )
}

export default Index