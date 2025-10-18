// 1️⃣ Car data array (backend)
const cars = [
  { name: "Toyota Corolla", year: 2022, price: "$20,000", image: "images/car1.jpg" },
  { name: "Honda Civic", year: 2021, price: "$21,000", image: "images/car2.jpg" },
  { name: "Ford Mustang", year: 2023, price: "$35,000", image: "images/car3.jpg" },
  { name: "Chevrolet Camaro", year: 2022, price: "$33,500", image: "images/car4.jpg" },
  { name: "Tesla Model 3", year: 2023, price: "$42,000", image: "images/car5.jpg" },
  { name: "BMW X5", year: 2022, price: "$60,000", image: "images/car6.jpg" },
  { name: "Audi Q7", year: 2021, price: "$65,000", image: "images/car7.jpg" },
  { name: "Jeep Wrangler", year: 2023, price: "$45,000", image: "images/car8.jpg" },
  { name: "Porsche 911", year: 2023, price: "$120,000", image: "images/car9.jpg" },
  { name: "Mercedes-Benz G-Class", year: 2022, price: "$130,000", image: "images/car10.jpg" }
];

// 2️⃣ Select HTML elements
const carImage = document.getElementById("car-image");
const carName = document.getElementById("car-name");
const carYear = document.getElementById("car-year");
const carPrice = document.getElementById("car-price");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// 3️⃣ Function to update displayed car
function updateCar() {
  const car = cars[currentIndex];
  carImage.src = car.image;
  carName.textContent = car.name;
  carYear.textContent = "Year: " + car.year;
  carPrice.textContent = "Price: " + car.price;
}

// 4️⃣ Event listeners for scrolling
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCar();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCar();
});

// 5️⃣ Initialize the first car display
updateCar();
