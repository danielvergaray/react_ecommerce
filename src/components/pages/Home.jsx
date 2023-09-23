import React from 'react'
import SliderHeroListContainer from '../silderHero/SliderHeroListContainer'
import { useParams } from 'react-router'

const Home = () => {
  const params = useParams()
  
  return (
    <div>
      <SliderHeroListContainer/>
    </div>
  )
}

export default Home