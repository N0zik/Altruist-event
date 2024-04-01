let allGridItems = [...document.getElementsByClassName(".grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
    console.log(e);
    let gridItemClicked = e.target.closest(".grid-item");
    let clickedImageName = gridItemClicked.id;
    popupBg.classList.add("active");
    popupImg.src = `../images/galerie/${clickedImageName}.jpg`;
};

const closePopup = () => {
    popupBg.classlist.remove("active");
};
allGridItems.forEach((el) => el.addEventListener("click", openPopup));
popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);

