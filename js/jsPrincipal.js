$('#mostrar-nav').on('click', function(){
  $('nav').toggleClass('mostrar');
})

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var element = document.getElementById("my-nav");
  element.classList.remove("mostrar");
}

$(window).on('resize', function(){
  if ($( window ).width() < 992){
    var element = document.getElementById("my-nav");
    element.classList.remove("mostrar");
  }else{
    var element = document.getElementById("my-nav");
    element.classList.add("mostrar");
  }
});
