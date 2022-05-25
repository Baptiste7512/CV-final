import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello from navbar_controller!")
  }

  updateNavbar() {
    // Navbar
  let lastScrollTop = 0;


  window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop){
     navbar.style.top = '-50px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});
  };
}
