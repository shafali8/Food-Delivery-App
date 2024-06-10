import { useState } from 'react'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Header from '../../Components/Header/Header'
import './Home.css'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu catogory={category} setCatogory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
