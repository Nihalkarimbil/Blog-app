import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Createblog from './Createblog'
import Blogs from './Blogs'
import Cntxt from './Context'
import Details from './Details'


function Mainrouter() {
    return (
        <div>
            <Cntxt>
                <Routes>
                    <Route path='/' element={<Createblog />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/:id' element={<Details/>}/>
                </Routes>
            </Cntxt>
        </div>
    )
}

export default Mainrouter