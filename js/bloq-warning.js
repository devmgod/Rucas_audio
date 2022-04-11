

  function textNav() {
    var uno = document.getElementById('bloq-container');
    if (uno.innerHTML == 'MENÚ') {
      document.getElementById("myNav").style.height = "100%";
      document.getElementById("grid").style.opacity = "0";
      uno.innerHTML = '';
    }
    else  {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("grid").style.opacity = "1";

    uno.innerHTML = '';
    }
  }

  