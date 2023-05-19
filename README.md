# vite_market_list

<h3>A simple shopping list, where you can add the item and its quantity, after adding you can either mark it as purchased or excluded </h3>

<p>College project</p>

<h4>Sure! Here's the explanation of how the mini-micro shopping list app works:

1. **Items State**: The list of items to be purchased is stored in the `items` state, which is initialized as an empty array using `useState`. Each item in the list is represented by an object with properties `name` (item name), `quantity` (desired quantity), and `completed` (indicator if the item is marked as "already purchased").

2. **Input Fields**: There are two input fields in the form. The text field is used to enter the name of the item to be added, while the additional text field is used to specify the desired quantity of the item.

3. **Adding Items**: When the user fills in the input fields and clicks the "Add" button, the `handleAddItem` function is called. It checks if both input fields are not empty. If they are filled, a new object is created with the `name` and `quantity` properties, using the values from the input fields. Then, this object is added to the `items` state using the spread operator (`...`) to keep the existing items and add the new item.

4. **Marking as "Already Purchased"**: Each item in the list is rendered as an `li` element within an unordered list (`ul`). The style of an item is conditionally changed based on the value of the `completed` property. If `completed` is `true`, the `textDecoration` style is set to "line-through", which displays the item name with a line through it, indicating that it has been marked as "already purchased".

5. **Marking and Unmarking**: In each list row, there is a "Mark/Unmark" button. When the user clicks this button, the `handleToggleItem` function is called, passing the index of the item in the list. This function toggles the value of the `completed` property of the corresponding item between `true` and `false`. As a result, the style of the item is updated, displaying or removing the line through the text to indicate the completion status.

6. **Deleting Items**: Each list row also has a "Delete" button. When the user clicks this button, the `handleDeleteItem` function is called, passing the index of the item in the list. This function removes the corresponding item from the `items` state using the `splice` method, which removes an element from the array by its position.

This is an overview of how the mini-micro shopping list app works. It allows the user to add items to the list, specify the desired quantity, mark them as "already purchased," and delete items from the list. The items are displayed in real-time on the screen, with the style being updated to reflect their completion status.</h4>

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-vmhrqc)
