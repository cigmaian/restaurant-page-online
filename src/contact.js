
function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '📞 123 456 789';

  const address = document.createElement('p');
  address.textContent = '🏠 11 Wall St, New York, NY 10005, USA';
  
  const mapBox = document.getElementById("map-container");
  mapBox.classList.add("mapBox");

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(mapBox);

  return contact;
}


function loadContact() {
const main = document.getElementById('main')
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact

