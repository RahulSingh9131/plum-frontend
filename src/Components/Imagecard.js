import React from 'react'
import {Link} from "react-router-dom";
import "../css/main.css";

const Imagecard = ({item,index}) => {
    const {thumbnail,title,ups,id}=item;
  return (
    <div className='imagecard'>
        <div className="card shadow-card" key={index}>
            <h3 className='card-category'>{ups} votes</h3>
            <Link to={`/${id}`}>
                <div className="card-top">
                    <img className="card-img" src={thumbnail} alt="productCard" />
                </div>
            </Link>
            <div className="card-bottom">
                <div className="card-body">
                    <p className='body-category'>{title}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Imagecard