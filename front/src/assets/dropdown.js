/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");

    var dropdown2 = document.getElementById("myDropdown2");
    if (dropdown2.classList.contains('show')) {
      dropdown2.classList.remove('show');
    }

    var dropdown3 = document.getElementById("myDropdown3");
    if (dropdown3.classList.contains('show')) {
      dropdown3.classList.remove('show');
    }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");

  var dropdown1 = document.getElementById("myDropdown1");
    if (dropdown1.classList.contains('show')) {
      dropdown1.classList.remove('show');
    }

    var dropdown3 = document.getElementById("myDropdown3");
    if (dropdown3.classList.contains('show')) {
      dropdown3.classList.remove('show');
    }
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");

    var dropdown1 = document.getElementById("myDropdown1");
    if (dropdown1.classList.contains('show')) {
      dropdown1.classList.remove('show');
    }

    var dropdown2 = document.getElementById("myDropdown2");
    if (dropdown2.classList.contains('show')) {
      dropdown2.classList.remove('show');
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}