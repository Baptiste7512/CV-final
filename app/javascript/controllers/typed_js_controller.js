import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ['hey 👋 ',
    'Vivant à Paris, je suis devenue Developper-web Full-stack après 10 ans dans le médico-social',
    'grâce au bootcamp du Wagon(Paris).',
    'Vous trouverez ci dessous les informations importantes me concernant',
    'Baptistevigneron75@gmail.com'],
    typeSpeed: 5,
    backSpeed: 0,
    fadeOut: true,
    loop: false
    });
  }
}
