// Lyt efter form-submit begivenhed
document.getElementById('nyhedsbrev-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Forhindrer at siden genindlæses ved form-submit
  
    // Viser pop-up-besked
    alert('Tak for din tilmelding til nyhedsbrevet!');
  });
  