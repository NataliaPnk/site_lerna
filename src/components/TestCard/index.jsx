import React from 'react'
import s from '../TestCard/index.module.css'

export default function TestCard({ id, picture, tagsTitle, tagsText }) {

  return (
    <div className={s.testCard}>
      <img src={picture} />
      <p>{tagsTitle.join(' • ')}</p>
      <span>{tagsText.join(' • ')}</span>
      <button>take the test</button>
    </div>
  )
}
