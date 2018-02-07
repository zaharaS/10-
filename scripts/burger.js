$(".hamburger").click(function() {
    if ($(".burger").css('display') === 'flex') {
        $(".burger").hide()
    } else {
        $(".burger").show().css({'display': 'flex'})
    }
})

$(".container").click(function() {
    $(".burger").hide()
})


$(document).ready(function (){

    $(".info").click(function() {
    
      $(".dws-wrapper2").slideToggle("slow").css({'display': 'flex'})
        })

    $(".dws-wrapper2").click(function(){
      $(".dws-wrapper2").hide();
    });
  })