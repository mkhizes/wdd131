const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_________________'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append('li');

const addButton = document.getElementById('addChapterButton');

// Add click event listener to the Add Chapter button
addButton.addEventListener('click', function() {
  // Get the input element
  const inputField = document.getElementById('chapterInput');

  // Check if the input is not blank
  if (inputField.value.trim() !== '') {
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Create a new delete button element
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    
    // Add click event listener to the delete button
    deleteButton.addEventListener('click', function() {
      // Remove the list item when the delete button is clicked
      listItem.remove();
    });

    // Set the text content of the list item to the input value
    listItem.textContent = inputField.value;

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);
    
    // Append the list item to the chapter list
    document.getElementById('chapterList').appendChild(listItem);

    // Change the input value to empty string
    inputField.value = '';

    // Set focus to the input element
    inputField.focus();
  } else {
    
    inputField.focus();
  }
});

