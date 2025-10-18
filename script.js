let currentIndex = 0;

const carImage = document.getElementById("car-image");
const carName = document.getElementById("car-name");
const carYear = document.getElementById("car-year");
const carPrice = document.getElementById("car-price");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updateCar() {
  const car = cars[currentIndex];
  carImage.src = car.image;
  carName.textContent = car.name;
  carYear.textContent = "Year: " + car.year;
  carPrice.textContent = "Price: " + car.price;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCar();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCar();
});
