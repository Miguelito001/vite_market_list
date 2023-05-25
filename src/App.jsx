import React, { useState } from 'react';

const unitOptions = ['kg', 'g', 'L', 'ml', 'unit'];

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');
  const [unitValue, setUnitValue] = useState(unitOptions[0]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantityValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnitValue(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (
      inputValue.trim() !== '' &&
      quantityValue.trim() !== '' &&
      Number(quantityValue) > 0
    ) {
      const newItem = {
        name: inputValue,
        quantity: quantityValue,
        unit: unitValue,
        completed: false,
      };

      setItems([...items, newItem]);
      setInputValue('');
      setQuantityValue('');
      setUnitValue(unitOptions[0]);
    }
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div class="hole">
      <div class="container">
        <div class="box">
          <h1 id="name">Lista de compras</h1>
        </div>
      </div>
      <form onSubmit={handleAddItem}>
        <div>
          <label htmlFor="itemInput">Item:</label>
          <input
            id="itemInput"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="escolha um item"
          />
        </div>
        <div>
          <label htmlFor="quantityInput">Quantidade:</label>
          <input
            id="quantityInput"
            type="number"
            value={quantityValue}
            onChange={handleQuantityChange}
            placeholder="escolha uma quantidade"
          />
        </div>
        <div>
          <label htmlFor="unitInput">Unidade:</label>
          <select id="unitInput" value={unitValue} onChange={handleUnitChange}>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.name} - {item.quantity} {item.unit}
            <button onClick={() => handleToggleItem(index)}>
              {item.completed ? 'Unmark' : 'Mark'}
            </button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
