


  
function textNav() {
  var uno = document.getElementById('open_close');
  var dos = document.getElementById('advise-container');
  if (uno.innerHTML == 'MENÚ') {
    document.getElementById("myNav").style.height = "292px";
    document.getElementById("myNav").style.boxShadow = "0px -4px 12px 4px rgba(0, 0, 0, 0.250)";
    uno.innerHTML = 'CERRAR';
    document.getElementById("grid").style.opacity = "0.2";
    document.getElementById("grid").style.overflowY = "hidden";
    document.getElementById("advise-container").style.marginTop = "392px";
    

  } else  {
    uno.innerHTML = 'MENÚ';
    document.getElementById("myNav").style.boxShadow = "0px -4px 12px 4px rgba(0, 0, 0, 0.0)";
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("grid").style.opacity = "1";
    document.getElementById("grid").style.paddingTop = "0px";
    document.getElementById("advise-container").style.marginTop = "100px";
  } 
}