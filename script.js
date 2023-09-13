const targetDate = new Date('2023-10-01T23:59:59').getTime();

  function updateCounter() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the time remaining (in milliseconds)
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      // If the target date has passed, display a message
      document.getElementById('counter').textContent = 'Target date has passed!';
    } else {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Display the countdown in the specified elements
      document.querySelector('.days').textContent = `${days} days`;
      document.querySelector('.hours').textContent = `${hours} hours`;
      document.querySelector('.minu').textContent = `${minutes} minutes`;
      document.querySelector('.sec').textContent = `${seconds} seconds`;
    }
  }

  // Call the updateCounter function every second
  setInterval(updateCounter, 1000);

  // Initial call to set up the counter
  updateCounter();