import React, {  useState } from 'react'
import './Register.scss'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useGetInputValue } from '../../hooks/GetInpuValue'
import axios from 'axios'
import Modul from '../../components/modul/Modul'


let initialState = {
    name : '' ,
    email : '',
    last_name : '',
    full_name : '',
    password: ''
}

const Register = () => {

    const navigate = useNavigate()

    const [model, setModel] = useState(false)

    const {formData , handleChange} = useGetInputValue(initialState)

    const [email, setEmail] = useState("");
    const [secret, setSecret] = useState("");


    const handleRegister = e => {
        e.preventDefault()
        axios
            .post('http://10.10.3.192:8080/user/register' , formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
            .finally(setModel(true))
            

    }
    const handleSubmitCode = (e) => {
        e.preventDefault();
        let newUser = {
            email , 
            secret
          }


        axios
            .post('http://10.10.3.192:8080/user/check', newUser)
            .then((res) => {
                localStorage.setItem("user" , res)
                console.log(res);
                navigate('/account')
            })
            .catch((err) => {
                console.log(err);
            });
    };

  return (
    <>
    <div className="register">
      <div className="container">
            <form onSubmit={handleRegister} action="">
                <div className="title">
                    <span>
                        <img src={logo} alt="" />
                        <h2>NORNLIGHT</h2>
                    </span>
                    <span>
                        <p>У вас уже есть аккаунт?</p>
                        <Link to={'/'} >Log In</Link>
                    </span>
                </div>
                <div className="df">
                    <span>
                        <label htmlFor="">имя</label>
                        <input required name='name' onChange={handleChange} value={formData.name} type="text" placeholder='Джон' />
                    </span>
                    <span>
                        <label htmlFor="">фамилия</label>
                        <input required  name='last_name' onChange={handleChange} value={formData.last_name} type="text" placeholder='Доe' />
                    </span>
                </div>
                <div className="xz">
                    <span>
                        <label htmlFor="">электронная почта</label>
                        <input required name='email' onChange={handleChange} value={formData.email} type="email" placeholder='ДжонДоe2@gmail.com' />
                    </span>
                </div>
                <div className="xz">
                    <span>
                        <label htmlFor="">имя пользователя</label>
                        <input required name='full_name' onChange={handleChange} value={formData.full_name} type="text" placeholder='ДжонДоe' />
                    </span>
                </div>
                <div className="xz">
                    <span>
                        <label htmlFor="">пароль</label>
                        <input required name='password' onChange={handleChange} value={formData.password} type="text" placeholder='пароль' />
                    </span>
                </div>
                <button>регистр</button>
            </form>
      </div>
    </div>
        {
                model ? 
                <Modul >
                   <form onSubmit={handleSubmitCode} action="">
                    <div className="secret">
                                <label htmlFor="">Enter your email </label>
                                <input  value={email} onChange={(e) => setEmail(e.target.value)}  type="text" />
                                <label htmlFor="">Enter the code sent to your email </label>
                                <input  value={secret} onChange={(e) => setSecret(e.target.value)} type="text" />
                                <button>войти</button>
                        </div>
                   </form>
                </Modul>
                :
                <></>
        }
    </>
  )
}

export default Register