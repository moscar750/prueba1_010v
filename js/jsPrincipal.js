$('#mostrar-nav').on('click', function(){
  $('nav').toggleClass('mostrar');
})


$(window).on('resize', function(){
  if ($( window ).width() < 992){
    var element = document.getElementById("my-nav");
    element.classList.remove("mostrar");
  }else{
    var element = document.getElementById("my-nav");
    element.classList.add("mostrar");
  }
});
