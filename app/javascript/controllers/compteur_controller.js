import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello from compteur_controller!")
  }

    compteurScroll() {
  // Compteur

    let compteur = 0;

    $(window).scroll(function() {
      const top = $('.counter').offset().top - window.innerHeight;

      if(compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
              countNum : countTo
            },
            {
              duration: 4000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum))
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });
          });
          compteur = 1;
        }
      });
  }

}
