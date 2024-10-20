import React from 'react'
import s from '../ReferralSection/index.module.css'
import NavMenu from '../NavMenu'
import ReferralContainer01 from '../ReferralContainer01'
import ReferralContainer02 from '../ReferralContainer02'

export default function ReferralSection() {

  return (
    <div className={s.referralSection}>
      <NavMenu />
      <div className={s.rightPart}>
        <h2>Referral program</h2>
        <ReferralContainer01 />
        <ReferralContainer02 />
      </div>
      </div>
  )
}
