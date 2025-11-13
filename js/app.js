const sidebarEl = document.querySelector(".navbar-lists");
const toggleBtn = document.querySelector(".navbar-toggle");

function toggleSidebar() {
  sidebarEl.classList.toggle("active");

  if (sidebarEl.classList.contains("active")) {
    toggleBtn.classList.remove("fa-bars");
    toggleBtn.classList.add("fa-xmark");
  } else {
    toggleBtn.classList.remove("fa-xmark");
    toggleBtn.classList.add("fa-bars");
  }
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  margin: 20,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
