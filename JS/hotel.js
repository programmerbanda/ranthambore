const hideButton = document.getElementById('hide-search-section');
const hotelSearchContainer = document.getElementById('hotel-container');
const hotelSearchButton = document.getElementById('search-hotel-btn');


hideButton.addEventListener('click', ()=> {
    hotelSearchContainer.style.display = 'none';
    hotelSearchButton.style.display = 'block'
})

hotelSearchButton.addEventListener('click', ()=> {
    hotelSearchContainer.style.display = 'block';
    hotelSearchButton.style.display = 'none'
})