window.addEventListener("load", function(){
  var banner = document.getElementById("banner").style;
    var header = document.getElementById("header").style;
  banner.opacity = "0.6";
  var footer = document.getElementById("footer").style;
 footer.transform = "translateY(-100%)";
 setTimeout(function(){
   header.transform = "translateY(-100%)";
 }, 900);

  window.onscroll = function(){
  }
  console.log(scrollY);
});
