import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from "./components/Header/Header";
import MealsList from './components/Meals/MealsList';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="jumbotron">
        <h3>
          Delicious food, Delivered to you
        </h3>
        <p>
          Choose your favorite meal form our broad selection of available meals and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high quality ingredients. just-in-time and of course by experienced chefs. 
        </p>
      </div>
      <div className='card_cnt'>
        <MealsList />
      </div>
    </>

  )
}

export default App
