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

      
