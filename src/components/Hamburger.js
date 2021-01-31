const hamburger = document.getElementsByClassName("hamburger");

const handleclick = () => {
  hamburger.classList.toggle("hamburger--active");
};
hamburger.addEventListener("click", handleclick);
