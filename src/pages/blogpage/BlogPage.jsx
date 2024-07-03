import React from 'react'
import Blog from '../../components/blog/Blog'
import '../../components/blog/Blog.scss'
import { MdArrowOutward } from 'react-icons/md'

import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import './BlogPage.scss'


const BlogPage = () => {
  return (
    <>
     <div className="blog">
         <div className="container">
                  <div className="blog__cardsp">
                  <div className="blog__card">
                    <img src={blog1} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                 <div className="blog__card">
                    <img src={blog2} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                 <div className="blog__card">
                    <img src={blog3} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                 <div className="blog__card">
                    <img src={blog1} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                 <div className="blog__card">
                    <img src={blog2} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                 <div className="blog__card">
                    <img src={blog3} alt="" /> 
                    <div className="card__parag">
                    <span>
                        <h3>Как правильно освещать дом снаружи?</h3>
                        <p>01.01.2024</p>
                    </span>
                       <MdArrowOutward />
                    </div>
                 </div>
                  </div>
             </div>
         </div>
    </>
  )
}

export default BlogPage