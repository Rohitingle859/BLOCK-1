

let list = document.querySelector('#List');

let button = document.querySelector('#btn')

button.addEventListener('click', function() {
      let newItem = document.createElement('li');
      let itemNumber = list.children.length + 1;
      newItem.textContent = "Item " + itemNumber;

      if (itemNumber % 2 === 0) {
        newItem.className = "even";
      } else {
        newItem.className = "odd";
      }

      list.appendChild(newItem);
    });