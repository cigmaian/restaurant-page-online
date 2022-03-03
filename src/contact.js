
function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 123 456 789'

  const address = document.createElement('p')
  address.textContent = '🏠 11 Wall St, New York, NY 10005, USA'

  const restaurantLocation = document.createElement('iframe')
  restaurantLocation.src = "https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA";
  restaurantLocation.width = "600";
  restaurantLocation.height = "450";
  restaurantLocation.loading="lazy";
  restaurantLocation.allowfullscreen;

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(restaurantLocation)

  return contact
}

function loadContact() {
const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact

