import React from 'react'
import MyLearningContainer from '../../components/MyLearningContainer'

export default function MyLearningPage({learningCards}) {
  
  return (
    <div>
      <MyLearningContainer learningCards={learningCards}/>
      </div>
  )
}
