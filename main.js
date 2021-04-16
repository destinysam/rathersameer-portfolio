let aboutview = document.getElementById("aboutview")
let navbar = document.getElementById("navbar")

document.body.onscroll = function(){
    var element =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if (element > 10){
        navbar.style.background="darkslategray"
    }
    else{
        navbar.style.background="none"
    }
}
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  })
}
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.sections').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                    $('.navbar-nav a.active').removeClass('active');
                    $('.navbar-nav a').eq(i).addClass('active');
            }
    });
}).scroll();
