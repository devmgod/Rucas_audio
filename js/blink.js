function blinktext() {
    var f = document.getElementById('na-newlight');
    setInterval(function() {
      f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 500);
  }

  function blinktext1() {
    var f = document.getElementById('ccv-newlight');
    setInterval(function() {
      f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 500);
  }