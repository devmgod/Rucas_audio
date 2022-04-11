


  
function textIndex() {
  var uno = document.getElementById('ig-open');
  if (uno.innerHTML == 'ABRIR') {
    document.getElementById("index-content").style.height = "233px";
    uno.innerHTML = 'CERRAR';

  } else {
    document.getElementById("index-content").style.height = "8px";
    document.getElementById("index-content").style.overflowY = "none";
    document.getElementById("index-content").style.overflowX = "none";
    uno.innerHTML = 'ABRIR';
  }
}
  