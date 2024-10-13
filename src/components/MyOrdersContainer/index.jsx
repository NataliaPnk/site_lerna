import React from 'react'
import NavMenu from '../NavMenu'
import s from '../MyOrdersContainer/index.module.css'
import MyOrderCard from '../MyOrderCard'

export default function MyOrdersContainer({orderCards}) {

  return (
    <div className={s.myOrdersContainer}>
      <NavMenu />

      <div className={s.rightPart}>
      <h2>My orders</h2>

    <div className={s.orderCardsWrapper}>
      {
        orderCards.map((el) => <MyOrderCard key={el.id} {...el} />)
      }
    
    </div>

      </div>
      </div>
  )
}
