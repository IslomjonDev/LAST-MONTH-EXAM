import React, { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Orders = () => {

  const navigate = useNavigate()

  let {pathname} = useLocation()

  useEffect(() => {
    if (pathname === '/account/orders') {
        navigate('/account/orders/active')
    }
}, [pathname, navigate])

  return (
    <>
    <div className="orders__page">
        <div className="btns">
            <NavLink to={'all-orders'}>
                <button>Все заказы</button>
            </NavLink>
            <NavLink to={'unpaid'}>
                <button>Неоплаченные</button>
            </NavLink>
            <NavLink to={'active'}>
                <button>Активные</button>
            </NavLink>
        </div>
        <div className="orders__content">       
           <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Orders