import React, { useContext } from 'react'
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Blogs() {
  const {blogs} =useContext(Context)
  const navigate=useNavigate()
  
  return (
    <div className='blogs'>
      <h1 id='bloghdg'>Blog's Title</h1>
      {blogs.map((blog,index)=>(<div className='blogitem' key={index}>
        <h4><Link to={`/${blog.id}`}>{blog.title}</Link></h4>
      </div>))}

      <button className='submtbtn' onClick={() => navigate('/')}>Create New </button>
    </div>
  )
}

export default Blogs