import React from 'react'
import { useFarmContext } from '../Context/useContext'
const Home = () => {
    const {home,setHome} = useFarmContext();
  return (
    <div>
      {home}
      
    </div>
  )
}

export default Home
