import React, { useContext, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Context } from './Context'

function Details() {
    const{id}=useParams();
    const navigate=useNavigate()
    const {blogs}=useContext(Context);
    const [filt,setFilt]=useState([]);
    useEffect(()=>{
        setFilt(blogs.filter((item)=>item.id==id))
    },[])
  return (
    <div className='nnn'>
        <h3>Blog's Content </h3>
        {filt.map((blog,index)=>(<div className='ind' key={index}>
            <h4 id='titl'>{blog.title}</h4>
            <h5 className='crblglbl'>{blog.body}</h5>
        </div>))}
        <button className='submtbtn' onClick={() => navigate('/blogs')}>To Blogs</button>
        <button className='submtbtn' onClick={() => navigate('/')}>Create New </button>
    </div>
  )
}

export default Details