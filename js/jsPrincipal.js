$('#mostrar-nav').on('click', function(){
  $('nav').toggleClass('mostrar');
})

if($( window ).width() < 992) {
  var element = document.getElementById("my-nav");
  element.classList.remove("mostrar");

  document.getElementById("mostrar-nav").style.display = "block";
}else{
    document.getElementById("mostrar-nav").style.display = "none";
}


$(window).on('resize', function(){
  if ($( window ).width() < 992){
    var element = document.getElementById("my-nav");
    element.classList.remove("mostrar");
    document.getElementById("mostrar-nav").style.display = "block";
  }else{
    var element = document.getElementById("my-nav");
    element.classList.add("mostrar");
    document.getElementById("mostrar-nav").style.display = "none";
  }
});
