(function() {   
  function $(id) {     
    return document.getElementById(id);   
  }    
  
  var card = $('card'),       
      openB = $('open'),       
      closeB = $('close'),       
      timer = null;
      
  // Create audio element for birthday song
  var audio = new Audio('Thousand-Years.mp3'); // Replace with your actual song filename
  audio.loop = true;
  audio.currentTime = 16; // Start from 30 seconds
  
  console.log('wat', card);   
  
  openB.addEventListener('click', function () {     
    card.setAttribute('class', 'open-half');     
    if (timer) clearTimeout(timer);     
    timer = setTimeout(function () {       
      card.setAttribute('class', 'open-fully');
      // Play audio when card opens fully
      audio.play().catch(function(error) {
        console.log('Audio play failed:', error);
      });
      timer = null;     
    }, 1000);   
  });    
  
  closeB.addEventListener('click', function () {     
    card.setAttribute('class', 'close-half');     
    if (timer) clearTimeout(timer);     
    timer = setTimeout(function () {       
      card.setAttribute('class', '');
      // Pause audio when card closes
      audio.pause();
      audio.currentTime = 30; // Reset to 30 seconds for next play
      timer = null;     
    }, 1000);   
  });  
}());
