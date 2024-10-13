import React from 'react'
import MyLearningCard from '../MyLearningCard'
import s from '../MyLearningList/index.module.css'

export default function MyLearningList({learningCards}) {

  return (
    <div className={s.learningList}>
      {
        learningCards.map((el) => <MyLearningCard key={el.id} {...el} />)
      }
      </div>
  )
}
