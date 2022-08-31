import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../css/main.css';
import Imagecard from '../Components/Imagecard';
import useAxios from '../hooks/useAxios';
import { useFilter } from '../context/FilterContext';

const Home = () => {
    const {data,loading}=useAxios();
    const {filterState,dispatch}=useFilter();

    const getSortedData=(imageslist,state)=>{
        if(state.sortBy==="HIGH_TO_LOW"){
            return imageslist.sort((a,b)=>b?.data["ups"]-a?.data["ups"]);
        }else if(state.sortBy==="LOW_TO_HIGH"){
            return imageslist.sort((a,b)=>a?.data["ups"]-b?.data["ups"]);
        }else {
            return imageslist;
        }
    }

    const getFilteredData=(imagesdata,state)=>{
        return imagesdata.filter((item)=>Number(item?.data?.ups)<=state.votes);
    }

    const sortedData=getSortedData(data,filterState);
    const filteredData=getFilteredData(sortedData,filterState);
  return (
    <div className="homepage">
        <main>
            <div className="big-wrapper">
                <Header/>
                <div className="showcase-area">
                        <div className="filter-content">
                            <div className=" flex justify-space align-center">
                                <button className="product-btn" onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                            </div>
                            <div className=" left-subcontent flex align-center">
                                <h3>Votes</h3>
                                <div className="input-box">
                                    <input type="radio" name="sort" id="low" checked={filterState.sortBy==="LOW_TO_HIGH"?true:false} onChange={()=>dispatch({type:"SORT",payload:"LOW_TO_HIGH"})}/>
                                    <label htmlFor="low">Low to High</label>
                                </div>
                                <div className="input-box">
                                    <input type="radio" name="sort" id="high" checked={filterState.sortBy==="HIGH_TO_LOW"?true:false} onChange={()=>dispatch({type:"SORT",payload:"HIGH_TO_LOW"})}/>
                                    <label htmlFor="high">High to Low</label>
                                </div>
                            </div>
                            <div className="right-subcontent">
                                <h3>Votes 0-{filterState.votes}</h3>
                                <input type="range" name="votes" id="votes" min="800" max="32000" steps="100" value={filterState.votes} onChange={(e)=>dispatch({type:"VOTE",payload:e.target.value})}/>
                            </div>
                        </div> 
                </div>
                <div className="showcase-area">
                    <div className="container">
                        {loading && <h3 className='loading'>Loading...</h3>}                          
                            {filteredData.map((item,index)=>(
                                    <div className='item-container' key={index}>
                                        <Imagecard item={item?.data} key={index}/>
                                    </div>
                            ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    </div>
  )
}

export default Home