document.addEventListener('DOMContentLoaded', function() {
  try {
    // Determine which page is loaded
    const isFormPage = window.location.pathname.includes('safari.html') || window.location.pathname === '/' || !window.location.pathname.includes('create-safari-booking.html');
    const isBookingPage = window.location.pathname.includes('create-safari-booking.html');

    console.log('Current page:', window.location.pathname, { isFormPage, isBookingPage });

    // Form submission logic for index.html
    if (isFormPage) {
      const form = document.getElementById('form');
      if (!form) {
        console.error("Form element with id 'form' not found.");
        alert('Form not found on this page.');
        return;
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get input values
        const userFullName = document.getElementById('name')?.value;
        const userEmail = document.getElementById('email')?.value;
        const userNumber = document.getElementById('mobile')?.value;
        const userTiming = document.getElementById('timing')?.value;
        const safari = document.getElementById('safari')?.value;
        const zone = document.getElementById('zone')?.value;

        // Validate inputs
        if (!userFullName || !userEmail || !userNumber || !userTiming || !safari || !zone) {
          console.error('One or more input fields are missing or empty:', {
            userFullName, userEmail, userNumber, userTiming, safari, zone
          });
          alert('Please fill out all form fields.');
          return;
        }

        // Log input values for debugging
        console.log('Form values:', { userFullName, userEmail, userNumber, userTiming, safari, zone });

        // Store values in localStorage
        localStorage.setItem('username', userFullName);
        localStorage.setItem('email', userEmail);
        localStorage.setItem('number', userNumber);
        localStorage.setItem('timing', userTiming);
        localStorage.setItem('safari', safari);
        localStorage.setItem('zone', zone);

        // Verify stored values
        console.log('Stored in localStorage:', {
          username: localStorage.getItem('username'),
          email: localStorage.getItem('email'),
          number: localStorage.getItem('number'),
          timing: localStorage.getItem('timing'),
          safari: localStorage.getItem('safari'),
          zone: localStorage.getItem('zone')
        });

        // Redirect to the second page
        try {
          window.location.href = 'create-safari-booking.html';
          console.log('Redirecting to create-safari-booking.html');
        } catch (redirectError) {
          console.error('Redirect failed:', redirectError);
          alert('Failed to redirect to the booking page. Please check the console.');
        }
      });
    }

    // Data display logic for create-safari-booking.html
    if (isBookingPage) {
      // Retrieve data from localStorage
      const username = localStorage.getItem('username');
      const email = localStorage.getItem('email');
      const number = localStorage.getItem('number');
      const timing = localStorage.getItem('timing');
      const safari = localStorage.getItem('safari');
      const zone = localStorage.getItem('zone');

      // Log retrieved values
      console.log('Retrieved from localStorage:', { username, email, number, timing, safari, zone });

      // Get DOM elements
      const displayName = document.querySelector('.display-name');
      const displayEmail = document.querySelector('.display-email');
      const displayMobile = document.querySelector('.display-mobile');
      const displaySafari = document.querySelector('.display-safari');
      const displayZone = document.querySelector('.display-zone');
      const displayTiming = document.querySelector('.display-timing');

      // Log DOM elements
      console.log('DOM elements:', { displayName, displayEmail, displayMobile, displaySafari, displayZone, displayTiming });

      // Update DOM with data or fallback
      if (username && displayName) displayName.textContent = username;
      else if (displayName) displayName.textContent = 'N/A';

      if (email && displayEmail) displayEmail.textContent = email;
      else if (displayEmail) displayEmail.textContent = 'N/A';

      if (number && displayMobile) displayMobile.textContent = number;
      else if (displayMobile) displayMobile.textContent = 'N/A';

      if (safari && displaySafari) displaySafari.textContent = safari;
      else if (displaySafari) displaySafari.textContent = 'N/A';

      if (zone && displayZone) displayZone.textContent = zone;
      else if (displayZone) displayZone.textContent = 'N/A';

      if (timing && displayTiming) displayTiming.textContent = timing;
      else if (displayTiming) displayTiming.textContent = 'N/A';
    }
  } catch (error) {
    console.error('Error in script execution:', error);
    alert('An error occurred. Please check the console for details.');
  }
});