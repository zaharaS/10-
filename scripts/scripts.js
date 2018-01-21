//Get Sections top position
function getTargetTop(elem) {
    
        //gets the id of the section header
        //from the navigation's href e.g. ("#html")
        var id = elem.attr('href');
    
        //Gets the distance from the top and 
        //subtracts the height of the nav.
    
        if ($(id).offset()) {
            return $(id).offset().top - 10;
        }
        return 0
        
    }
    
    //Smooth scroll when user click link that starts with #
    $('a[href^="#"]#nav').click(function (event) {
    
        //gets the distance from the top of the 
        //section refenced in the href.
        var target = getTargetTop($(this));
        //scrolls to that section.
    
        $('html, body').animate({
            scrollTop: target
        }, 500);
    
        //prevent the browser from jumping down to section.
        event.preventDefault();
    
    });

    // L_S scroll

    window.sr = ScrollReveal({ container: document.querySelector('html')});
    
    sr.reveal('.LS.fds', { 
      duration: 0,
      beforeReveal: function (domEl) {
        domEl.classList.add('animated','rollIn')
      },
      afterReset: function (domEl) {
        //domEl.classList.remove('animated','zoomIn')
      }
    });
    sr.reveal('.LS.fdg', { 
        duration: 0,
        beforeReveal: function (domEl) {
          domEl.classList.add('animated','fadeInLeft')
        },
        afterReset: function (domEl) {
          //domEl.classList.remove('animated','zoomIn')
        }
      });
      sr.reveal('.LS.ghj', { 
        duration: 0,
        beforeReveal: function (domEl) {
          domEl.classList.add('animated','fadeInRight')
        },
        afterReset: function (domEl) {
          //domEl.classList.remove('animated','zoomIn')
        }
      });
      sr.reveal('.LS.hjk', { 
        duration: 0,
        beforeReveal: function (domEl) {
          domEl.classList.add('animated','zoomIn')
        },
        afterReset: function (domEl) {
          //domEl.classList.remove('animated','zoomIn')
        }
      });
      sr.reveal('.LS.jkl', { 
        duration: 0,
        beforeReveal: function (domEl) {
          domEl.classList.add('animated','rotateInDownRight')
        },
        afterReset: function (domEl) {
          //domEl.classList.remove('animated','zoomIn')
        }
      });
      sr.reveal('.LS.kl', { 
        duration: 0,
        beforeReveal: function (domEl) {
          domEl.classList.add('animated','swing')
        },
        afterReset: function (domEl) {
          //domEl.classList.remove('animated','zoomIn')
        }
      });

      // слайдер

      <script type="text/javascript">
  var total_pics_num = 4; 
 
  var interval = 5000;
       
  var time_out = 1;
        
  var i = 0;
  var timeout;
  var opacity = 100;
  function fade_to_next() {
    opacity--;
    var k = i + 1;
    var image_now = 'image_' + i;
    if (i == total_pics_num) k = 1;
    var image_next = 'image_' + k;
    document.getElementById(image_now).style.opacity = opacity/100;
    document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
    document.getElementById(image_next).style.opacity = (100-opacity)/100;
    document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
    timeout = setTimeout("fade_to_next()",time_out);
    if (opacity==1) {
      opacity = 100;
      clearTimeout(timeout);
    }
  }
  setInterval (
    function() {
      i++;
      if (i > total_pics_num) i=1;
      fade_to_next();
    }, interval
  );
</script>
