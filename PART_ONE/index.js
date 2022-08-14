let foodContainer = document.querySelector(".food__container");
let headerImage = document.querySelector(".header__image");
let headerPrice = document.querySelector(".header__price");
let foodTitle = document.querySelector(".food__title");
let imageRecipe = document.querySelector(".image--recipe");
let times = document.querySelector(".time");
let arrButon = document.querySelector(".arrow__button");
let menubar = document.querySelector(".menu-bars");
let menu = document.querySelector(".containers");
let i = 0;
let current, prev, next;
menubar.addEventListener("click", function () {
  menubar.classList.toggle("change");
  menu.classList.toggle("hide");

});
let foodMenu = [
  {
    food: "Goat meat Soup",
    price: "N 6000",
    img: "./IMG/goatMeat.jpg",
    menu: "Goat-Meat, okra , carrot,vegetables,chilli,garlic,salt",
    time: "25mins",
  },
  {
    food: "Tasty soup",
    price: "N 3000",
    img: "./IMG/tastySoup.jpg",
    menu: "rice, noodles, soy , haisin,garlic,sauce,honey",
    time: "20mins",
  },
  {
    food: "Rice and salad",
    price: "N 3000",
    img: "./IMG/riceSalad.jpg",
    menu: "rice, Cucumbers, Grapes,rice,pawpaw",
    time: "30mins",
  },
];
const scrollbar = function () {
  foodContainer.innerHTML = "";
  foodMenu.forEach((item) => {
    let container = document.createElement("div");
    let image = document.createElement("img");
    container.classList.add("container");
    image.setAttribute("src", `${item.img}`);
    container.appendChild(image);
    foodContainer.appendChild(container);
  });
  let container = document.querySelectorAll(".container");
  container[1].classList.add("big");
};
function nextScroll() {
  scrollbar();
  prev = foodMenu[i === 0 ? foodMenu.length - 1 : i - 1];
  current = foodMenu[i];
  next = foodMenu[i === foodMenu.length - 1 ? 0 : i + 1];
  headerImage.setAttribute("src", current.img);
  headerPrice.textContent = current.price;
  foodTitle.textContent = current.food;
  imageRecipe.textContent = current.menu;
  times.textContent = current.time;
  let containers = document.querySelectorAll(".container");
  img1 = containers[0].querySelector("img");
  console.log(img1);
  img1.setAttribute("src", prev.img);
  let img2 = containers[1].querySelector("img");
  img2.setAttribute("src", current.img);
  img3 = containers[2].querySelector("img");
  img3.setAttribute("src", next.img);
  i++;
  if (i >= foodMenu.length) {
    i = 0;
  }
}

function change() {
  setInterval(nextScroll, 5000);
}
change();
