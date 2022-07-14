import { useState } from 'react';

function FoodBox(props) {
  const { image, name, calories } = props.eachFoodProps;
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) =>{
    setQuantity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addToConsumedCalories({ name, calories, quantity })
  }

  return (
    <div>
      <img src={image} alt={image} width="100px"/>

      <p>
        <strong>{name}</strong> <br />
        <small>{calories} cal</small>
      </p>

      <form onSubmit={handleSubmit}>
        <input type="number" name="quantity" value={quantity} onChange={handleChange}/>
        <button> + </button>
      </form>
    </div>
  );
}

export default FoodBox;
