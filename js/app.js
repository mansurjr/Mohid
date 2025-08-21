const stars = document.querySelectorAll(".fa-star");
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("hovered", i <= index);
    });
  });

  star.addEventListener("mouseout", () => {
    stars.forEach((s) => s.classList.remove("hovered"));
  });

  star.addEventListener("click", () => {
    selectedRating = index + 1;
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i < selectedRating);
    });
  });
});
