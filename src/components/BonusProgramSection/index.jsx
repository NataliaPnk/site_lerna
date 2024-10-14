import React from 'react'
import BonusProgramContainer from '../BonusProgramContainer'
import NavMenu from '../NavMenu'
import s from './index.module.css'


export default function BonusProgramSection() {

  return (
    <div className={s.bonusProgramSection}>
      <NavMenu />

      <div className={s.rightPart}>
        <h2>Bonus loyalty program Lerna</h2>
        
        <div className={s.bonusAccountBox}>
          <p>Your bonus account:</p>
          <h3>250 tokens</h3>
          <span>1 token = 1 BYN</span>
        </div>

        <h3 className={s.titlePartDown}>What are the tokens awarded for</h3>

      <BonusProgramContainer />
      </div>
      </div>
  )
}
