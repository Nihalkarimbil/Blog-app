import React, { createContext, useState } from "react";

export const Context = createContext();

function Cntxt({ children }) {
    const [blogs, setBlogs] = useState([]);
    
    const addBlog = (blog) => {
        setBlogs([...blogs, blog]);
    };
    console.log(blogs)

    return (
        <Context.Provider value={{ blogs, addBlog }}>
            {children}
        </Context.Provider>
    );
}

export default Cntxt;
