import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantityValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '' && quantityValue.trim() !== '') {
      const newItem = {
        name: inputValue,
        quantity: quantityValue,
      };

      setItems([...items, newItem]);
      setInputValue('');
      setQuantityValue('');
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
    <div>
      <h1>Lista de Compras</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite um item"
        />
        <input
          type="text"
          value={quantityValue}
          onChange={handleQuantityChange}
          placeholder="Digite a quantidade"
        />
        <button onClick={handleAddItem}>Adicionar</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.name} - {item.quantity}
            <button onClick={() => handleToggleItem(index)}>
              {item.completed ? 'Desmarcar' : 'Marcar'}
            </button>
            <button onClick={() => handleDeleteItem(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
