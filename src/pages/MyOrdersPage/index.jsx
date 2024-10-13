import React from 'react'
import MyOrdersContainer from '../../components/MyOrdersContainer'

export default function MyOrdersPage({orderCards}) {
  
  return (
    <div>
      <MyOrdersContainer orderCards={orderCards}/>
    </div>
  )
}
