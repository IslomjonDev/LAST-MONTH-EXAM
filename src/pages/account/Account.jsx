import React, { useEffect } from 'react'
import './Account.scss'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
const Account = () => {

    const navigate = useNavigate()

    let {pathname} = useLocation()

    useEffect(() => {
      if (pathname === '/account') {
          navigate('/account/orders')
      }
  }, [pathname, navigate])


  return (
    <>
      <div className="account">
        <div className="container">
          <h2>Account</h2>
          <div className="order">
              <div className="order__left">
                    <span>
                        <NavLink to={'/account/orders'}>
                            Мои заказы
                        </NavLink>
                        <NavLink to={'/account/danne'}>
                           Мои данные
                        </NavLink>
                    </span>
              </div>
              <div className="order__right">
                 <Outlet   /> 
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account