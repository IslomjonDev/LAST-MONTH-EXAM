import React from 'react'
import not from'../../assets/404.png'
import './NotFound.scss'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
    <div className="found">
      <div  className="container">
           <img  src={not} alt="" />
           <p>Похоже, ничего не нашлось :(</p>
           <Link to={'/'}>
             <button>На главную</button>
           </Link>
      </div>
    </div>
    </>
  )
}

export default NotFound