import React from 'react'
import './Login.scss'
import {useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.webp'
import { useGetInputValue } from '../../hooks/GetInpuValue'
import { useDispatch } from 'react-redux'
import { setToken } from '../../context/slices/AuthSlice'
import { toast } from 'react-toastify'


let initialState = {
  username: '',
  password: ''
}



const Login = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {formData , handleChange } = useGetInputValue(initialState)


  const handleSubmit = e => {
    e.preventDefault()
    if(formData.username === "john32" && formData.password === "87654321"){
      dispatch(setToken("fake-token"))
      navigate('/admin')
      toast.success("добро пожаловать")
    }else{
      toast.error("Имя пользователя или пароль неверны")
    }

  }

  

  return (
    <>
      <div className="login">
          <div className="container">
            <div className="login__content">
              <span>
                  <img src={logo} alt="" />
                  <h2>NORNLIGHT</h2>
              </span>
                <h2>авторизоваться</h2>
                <form onSubmit={handleSubmit} action="">
                    <input name='username' value={formData.username} onChange={handleChange} placeholder='имя пользователя'  type="text" />
                    <input name='password' value={formData.password} onChange={handleChange} placeholder='пароль' type="password" />
                    <div className='df'>
                      <div className="line"></div>
                      <p>или</p> 
                      <div className="line"></div>
                    </div>
                    <div className="firebase">
                        <div className="google">
                          <img src={google} alt="" />
                            <h3>Google</h3>
                        </div>
                        <div className="facebook">
                            <img src={facebook} alt="" />
                            <h3>Facebook</h3>
                        </div>
                    </div>
                    <button>войти</button>
                </form>
            </div>
         </div>
      </div>
    </>
  )
}

export default Login