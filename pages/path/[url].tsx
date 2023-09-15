import { getPath } from "@/actions/path/getPath";
import Custom404 from "@/components/custom404/custom404";
import PathPage from "@/components/pathPage/pathPage";
import { pathReducer } from "@/redux/appStateSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const{path} = useSelector(state => state.appState)
  const [found, setFound] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const uniqueUrl = router.query.url;
console.log(uniqueUrl);

  useEffect(() => {
    dispatch(getPath('/'+uniqueUrl))
  }, [uniqueUrl, dispatch]);

  return <div>{path.url ? <PathPage /> : <Custom404 />}</div>;
};

export default Index;
