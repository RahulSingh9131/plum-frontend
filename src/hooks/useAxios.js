import {useState,useEffect} from 'react'
import axios from 'axios';


const useAxios = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    const fetchPosts= async ()=>{
        setLoading(true);
        try {
            const res= await axios.get('https://www.reddit.com/r/pics/.json?');
            setData(res?.data?.data?.children);
        } catch (error) {
            console.log("fetchPosts error",error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchPosts();
    },[])

  return {
    loading,
    data,
    setData,
  }
}

export default useAxios