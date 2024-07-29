import React, { useContext, useState } from 'react'
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';



function Createblog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addBlog,blogs} =useContext(Context);
  const navigate=useNavigate()


  function handlesubmit(e) {
    e.preventDefault();
    const newBlog={id:blogs.length, title,body}
    addBlog(newBlog)
    setTitle("")
    setBody("")
    
  }
 

  return (
    <div className='blog'>
      <form onSubmit={handlesubmit} >
        <h2 id='hdng' >Create a Blog</h2>
        <div id='feiled'>
          <label className='crblglbl' >Enter The Title</label>
          <br />
          <br />

          <input className='titleblog'
            type='text'
            placeholder='title'
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <br />
          <br />
          <label className='crblglbl'>enter the content</label>
          <br />
          <textarea id='txtarea'
            placeholder='body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
          <button className='submtbtn' type='submit'>submit</button>
          <button className='submtbtn' onClick={() => navigate('/blogs')}>blogs</button>
        </div>

      </form>

    </div>
  )
}

export default Createblog