import { useState } from 'react';

function AddFood(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFood({ name, calories, image });
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCalories = (event) => {
    setCalories(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Picture: </label>
        <input type="text" name="image" placeholder="insert url" value={image} onChange={handleImage} />

        <br />

        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <br />

        <label htmlFor="calories">Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <br />

        <button type="submit">Add New Food</button>
      </form>
    </div>
  );
}

export default AddFood;
