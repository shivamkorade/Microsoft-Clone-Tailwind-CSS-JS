const hamburgerDiv = document.querySelector(".hamburger");
const hamOptionsDiv = document.querySelector(".ham_options");

const toggleVisibility = () => {
  if (hamOptionsDiv.classList.contains("hidden")) {
    hamOptionsDiv.classList.remove("hidden");
  } else {
    hamOptionsDiv.classList.add("hidden");
  }
};

hamburgerDiv.addEventListener("click", toggleVisibility);
