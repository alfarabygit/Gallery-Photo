let filterItem = document.querySelector(".item-links");
let fileteImages = document.querySelectorAll(".grid-item");

window.addEventListener("load", () => {
  filterItem.addEventListener("click", (selectedItem) => {
    if (selectedItem.target.classList.contains("item-link")) {
      document.querySelector(".menu-active").classList.remove("menu-active");
      selectedItem.target.classList.add("menu-active");
      let filterName = selectedItem.target.getAttribute("data-name");
      fileteImages.forEach((image) => {
        let filterImages = image.getAttribute("data-name");
        if (filterImages == filterName || filterName == "all") {
          image.style.display = "grid";
        } else {
          image.style.display = "none";
        }
      });
    }
  });
});
