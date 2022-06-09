function openNav() {
    document.getElementById("mySidenav").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";
    document.getElementById("Header").style.borderBottomLeftRadius= "0vh";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("Header").style.borderBottomLeftRadius= "1vh";
  }