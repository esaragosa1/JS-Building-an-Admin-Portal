let addButton = document.querySelector('#add-book')


async function assignId () {
  let newId = 0;
  let response = await fetch('http://localhost:3001/listBooks');
  
  let data = await response.json();
  
  data.forEach(book => {
    if(book.id > newId) {
      newId = book.id
    }
  })
return newId + 1;
}
  
addButton.addEventListener('click', async () => {

  let id = await assignId();

  let dataToSend = {
    id: id,
    title: document.querySelector('#add-title').value,
    year: document.querySelector('#add-year').value,
    description: document.querySelector('#add-description').value,
    quantity: document.querySelector('#add-quantity').value,
    imageURL: document.querySelector('#add-imageURL').value,
  }  

  fetch('http://localhost:3001/addBook',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend)
  })

})

 

  
 

 