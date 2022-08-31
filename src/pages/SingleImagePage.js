import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import "../css/main.css";
import useAxios from '../hooks/useAxios';


const SingleImagePage = () => {
    const [imageDetails,setImageDetails]=useState({});
    const {imageId}=useParams();
    const {data,loading}=useAxios();


    useEffect(()=>{
        const foundSingleImage= data?.find((item)=>item?.data?.id===imageId);
        setImageDetails(foundSingleImage?.data);
    },[data,imageId])
    
  return (
    <div className="singlepage">
        <main>
            <div className="big-wrapper">
                <Header/>
                <div className="showcase-area">
                    {loading ? <h4>Loading....</h4> :(
                        <div className='imagecard'>
                            <div className="card shadow-card">
                                <h3 className='card-category'>{imageDetails?.ups} votes</h3>
                                    <div className="card-top">
                                        <img className="card-img" src={imageDetails?.thumbnail} alt="productCard" />
                                    </div>
                                <div className="card-bottom">
                                    <div className="card-body-details">
                                        <h2> Subreddit-{imageDetails?.subreddit}</h2>
                                        <p>{imageDetails?.subreddit_name_prefixed}</p>
                                        <p>Awards-{imageDetails?.total_awards_received}</p>
                                    </div>
                                    <div className="card-body">
                                        <h3> AUTHOR-{imageDetails?.author}</h3>
                                        <p className='body-category'>{imageDetails?.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer/>
            </div>
        </main>
    </div>
  )
}

export default SingleImagePage