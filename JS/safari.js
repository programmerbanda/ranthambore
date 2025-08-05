const form = document.getElementById('form')
const safariBookingBtn = document.getElementById("safari-booking-btn");
const userFullName = document.getElementById("name").value;
const userEmail = document.getElementById("email").value;
const userNumber = document.getElementById("mobile").value;
const userTimng = document.getElementById("timing").value;
const safari = document.getElementById("safari").value;
const zone = document.getElementById("zone").value;
const safariTiming = document.querySelector('.safari-timing');

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    localStorage.setItem('username', userFullName)
    localStorage.setItem('email', userEmail)
    localStorage.setItem('number', userNumber)
    localStorage.setItem('timing', userTimng)
    localStorage.setItem('safari', safari)
    localStorage.setItem('zone', zone)
    window.location.href = 'create-safari-booking.html'
})

// safariBookingBtn.addEventListener("click", () => {
//     console.log('submit clicked')
//   window.location.href = "create-safari-booking.html";
// });
