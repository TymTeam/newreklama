(function() {
  var toggles = document.querySelectorAll(".header__btn-menu");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
  $('.header__btn-menu').on('click',function() {
    $('.menu').toggleClass('menu--open');
  });
})();

$(document).ready(function(){
    $('.top__slider').slick({
        arrows:true,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
    });
	
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bukv'
        }
    });	

});
function externalLinks(){
    links = document.getElementsByTagName("a")
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
   }
   window.onload = externalLinks;

