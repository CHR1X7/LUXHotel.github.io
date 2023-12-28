function calculatePrice() {
    // Get the selected values
    var selectedRoom = document.getElementById('available_rooms').value;
    var numberOfNights = parseInt(document.getElementById('number_of_nights').value);
  
    // Define the price per night based on the selected room
    var pricePerNight;
    if (selectedRoom === 'king_bedroom') {
      pricePerNight = 370;
    } else if (selectedRoom === 'queen_bedroom' || selectedRoom === 'double_bedroom') {
      pricePerNight = 200;
    } else if (selectedRoom === 'classic_bedroom') {
      pricePerNight = 100;
    }
  
    // Calculate the total price
    var totalPrice = pricePerNight * numberOfNights;
  }