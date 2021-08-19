function newItem() {

    // Adding a new Item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(document.createTextNode(inputValue));
  
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      $('#list').append(li);
    }
  
    // Crossing out an item from the list of items:
    li.on('dblclick', function crossOut() {
      li.addClass('strike');
    });
  
    // 3.1. Adding the delete button "X":
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);
  
    // 3.2. Adding class delete from css
    crossOutButton.on('click', function deleteListItem() {
      li.addClass('delete');
    });
  
    // 4. Reordering the items:
    $('#list').sortable();
  }