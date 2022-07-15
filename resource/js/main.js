//mixit up

var mixer = mixitup('.grid-porfolio-container');
$(document).ready(function(){
    
    var mixer = mixitup('.grid-porfolio-container');


  });

  //humberger manu
  function openManu(){
    document.getElementById('navbar').style.height="100%";
  }
  function closeManu(){
    document.getElementById('navbar').style.height="0%";
  }

  
//smooth scroll

$(function(){
  $('.manu-item a').on('click',function(){
    $('html, body').animate({
     scrollTop: $($.attr(this,'href')).offset().top
    },1000);
  });

});