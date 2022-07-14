import { useState } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import SearchFood from './components/SearchFood';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [consumedFood, setConsumedFood] = useState([]);
  const [showAddFoodForm, setShowAddFoodForm] = useState(false);
  const [foodToRender, setFoodToRender] = useState(foods);

  const addToConsumedCalories = (foodToConsume) => {
    setConsumedFood([...consumedFood, foodToConsume]);
  };

  const total = consumedFood.reduce((acc, eachFoodCalories) => {
    return acc + eachFoodCalories.quantity * eachFoodCalories.calories;
  }, 0);

  const addFood = (food) => {
    setFoodList([...foodList, food]);
    setFoodToRender([...foodList, food]);
  };

  const searchFood = (searchQuery) => {
    const filteredFood = foodList.filter((eachFood) => {
      return eachFood.name.includes(searchQuery);
    });
    setFoodToRender(filteredFood);
  };

  const deleteFood = (foodName) => {
    const foodListCopy = [...consumedFood];
    foodListCopy.splice(foodName, 1);
    setConsumedFood(foodListCopy);
  };

  return (
    <div className="App">
      <h1>Welcome to IronNutrition</h1>

      <button onClick={() => setShowAddFoodForm(!showAddFoodForm)}>
        {showAddFoodForm ? 'Hidde Form' : 'Show Form'}
      </button>

      {showAddFoodForm && <AddFood addFood={addFood} />}

      <SearchFood searchFood={searchFood} />

      <h3>Today's Food:</h3>

      {consumedFood.map((eachFoodCalories, index) => {
        const { name, quantity, calories } = eachFoodCalories;
        return (
          <p key={index + eachFoodCalories.name}>
            {name} : {quantity} x {calories} cal. = {quantity * calories} cal.{' '}
            <button onClick={() => deleteFood(index)}> Delete</button>
          </p>
        );
      })}

      <h4>Total: {total} cal</h4>

      {foodToRender.map((eachFood, index) => {
        return (
          <FoodBox
            eachFoodProps={eachFood}
            key={index + eachFood.name}
            addToConsumedCalories={addToConsumedCalories}
          />
        );
      })}
    </div>
  );
}

export default App;
