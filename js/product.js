const personalArray = [
  {
    name: "Shampoo",
    price: "$35",
    quantity: 10,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Personal_care/Shampoo.jpg",
  },
  {
    name: "Make Up",
    price: "$45",
    quantity: 20,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Personal_care/Makeup.jpg",
  },
  {
    name: "Perfume",
    price: "$35",
    quantity: 60,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Personal_care/Perfume.jpg",
  },
  {
    name: "Tooth Brush",
    price: "$5",
    quantity: 80,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Personal_care/ToothBrush.jpg",
  },
];

const bagsArray = [
  {
    name: "Purse",
    price: "$50",
    quantity: 15,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Bags/Bag1.jpg",
  },
  {
    name: "Shopping Bag",
    price: "$25",
    quantity: 30,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Bags/Bag2.jpg",
  },
  {
    name: "Garbage Bags",
    price: "$10",
    quantity: 50,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Bags/Bag3.jpg",
  },
  {
    name: "Carrying Bags",
    price: "$20",
    quantity: 25,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Bags/Bag4.jpg",
  },
];

const clothingArray = [
  {
    name: "T-shirts",
    price: "$20",
    quantity: 50,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Clothing/Tshirt.jpg",
  },
  {
    name: "Jeans",
    price: "$40",
    quantity: 30,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Clothing/Jeans.jpg",
  },
  {
    name: "Jackets",
    price: "$60",
    quantity: 20,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Clothing/Jackets.jpg",
  },
  {
    name: "Hats",
    price: "$15",
    quantity: 40,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Clothing/Hats.jpg",
  },
];

const electronicsArray = [
  {
    name: "EV Charger",
    price: "$250",
    quantity: 20,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Electronics/Charger.jpg",
  },
  {
    name: "E-Bike",
    price: "$800",
    quantity: 10,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Electronics/E-Bike.jpg",
  },
  {
    name: "Solar Panel",
    price: "$150",
    quantity: 15,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Electronics/Solar-Panel.jpg",
  },
  {
    name: "Solar Water Heater",
    price: "$300",
    quantity: 5,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Electronics/solar-water-heater-331316_1280.jpg",
  },
];

const packagingArray = [
  {
    name: "Packing Bags",
    price: "$10",
    quantity: 50,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Containers/Packing_Sheets.jpg",
  },
  {
    name: "Cardboard Container",
    price: "$20",
    quantity: 30,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Containers/Packing_Box.jpg",
  },
  {
    name: "Carrying Bags",
    price: "$15",
    quantity: 40,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Containers/Packing_Bags.jpg",
  },
  {
    name: "Tin Cans",
    price: "$8",
    quantity: 60,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Containers/Tin_Cans.jpg",
  },
];

const cleaningArray = [
  {
    name: "Wooden Brushes",
    price: "$10",
    quantity: 50,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Cleaning/Brushes.jpg",
  },
  {
    name: "Disinfectant Wipes",
    price: "$5",
    quantity: 100,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Cleaning/Cleaning_Wipes.jpg",
  },
  {
    name: "Recyclable Gloves",
    price: "$8",
    quantity: 30,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Cleaning/Eco_Gloves.jpg",
  },
  {
    name: "Bathroom Cleaner",
    price: "$12",
    quantity: 25,
    img: "https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/Product/Cleaning/Spray.jpg",
  },
];

// Access the HTML elements
const productCard = document.getElementById("personal-care");
function displayProducts(searchterm = "") {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((node) => node.remove());
  personalArray
    .filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    )
    .forEach((item) => {
      const parentDiv = document.createElement("div");
      parentDiv.setAttribute("class", "product-card");
      productCard.appendChild(parentDiv);

      const imgNode = document.createElement("img");
      imgNode.setAttribute("src", item.img);
      imgNode.setAttribute("loading", "lazy");
      imgNode.setAttribute("alt", item.name);

      // Add the click event listener to open the image in a new page
      imgNode.addEventListener("click", function () {
        openImageInNewPage(item.img);
        setSelectedProduct(item); // Store the selected product data in localStorage
      });

      parentDiv.appendChild(imgNode);

      const productName = document.createElement("h3"); // Create an element for the product name
      productName.innerText = item.name; // Set the product name
      parentDiv.appendChild(productName); // Append the product name to the parent div

      const parentButton = document.createElement("div");
      parentButton.setAttribute("class", "product-buttons");
      parentDiv.appendChild(parentButton);

      const addToCartButton = document.createElement("button");
      addToCartButton.setAttribute("class", "add-to-cart");
      addToCartButton.innerText = "Add to Cart";
      parentButton.appendChild(addToCartButton);

      const detailButton = document.createElement("button");
      detailButton.setAttribute("class", "buy-now");
      // Update the detailButton HTML to include the initial quantity from the item object
      detailButton.innerHTML = `<span>Price: ${item.price}</span> <span>Available Quantity: <span class="item-quantity">${item.quantity}</span></span>`;
      parentButton.appendChild(detailButton);
    });

  const productCardBags = document.getElementById("bags");

  bagsArray
    .filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    )
    .forEach((item) => {
      const parentDivBags = document.createElement("div"); // Use a different name for the parent div
      parentDivBags.setAttribute("class", "product-card");
      productCardBags.appendChild(parentDivBags);

      const imgNodeBags = document.createElement("img"); // Use a different name for the img element
      imgNodeBags.setAttribute("src", item.img);
      imgNodeBags.setAttribute("loading", "lazy");
      imgNodeBags.setAttribute("alt", item.name);
      parentDivBags.appendChild(imgNodeBags);

      // Add the click event listener to open the image in a new page
      imgNodeBags.addEventListener("click", function () {
        openImageInNewPage(item.img);
        setSelectedProduct(item); // Store the selected product data in localStorage
      });

      const headingBags = document.createElement("h3"); // Use a different name for the heading element
      headingBags.innerText = item.name;
      parentDivBags.appendChild(headingBags);

      const parentButtonBags = document.createElement("div"); // Use a different name for the parentButton element
      parentButtonBags.setAttribute("class", "product-buttons");
      parentDivBags.appendChild(parentButtonBags);

      const addToCartButtonBags = document.createElement("button"); // Use a different name for the addToCartButton element
      addToCartButtonBags.setAttribute("class", "add-to-cart");
      addToCartButtonBags.innerText = "Add to Cart";
      parentButtonBags.appendChild(addToCartButtonBags);

      const detailButtonBags = document.createElement("button"); // Use a different name for the detailButton element
      detailButtonBags.setAttribute("class", "buy-now");
      detailButtonBags.innerHTML = `<span>Price: ${item.price}</span> <span>Available Quantity: <span class="item-quantity">${item.quantity}</span></span>`;
      parentButtonBags.appendChild(detailButtonBags);
    });

  const productCardClothing = document.getElementById("clothing");

  clothingArray
    .filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    )
    .forEach((item) => {
      const parentDivClothing = document.createElement("div");
      parentDivClothing.setAttribute("class", "product-card");
      productCardClothing.appendChild(parentDivClothing);

      const imgNodeClothing = document.createElement("img");
      imgNodeClothing.setAttribute("src", item.img);
      imgNodeClothing.setAttribute("loading", "lazy");
      imgNodeClothing.setAttribute("alt", item.name);
      parentDivClothing.appendChild(imgNodeClothing);
      // Add the click event listener to open the image in a new page
      imgNodeClothing.addEventListener("click", function () {
        openImageInNewPage(item.img);
        setSelectedProduct(item); // Store the selected product data in localStorage
      });

      const headingClothing = document.createElement("h3");
      headingClothing.innerText = item.name;
      parentDivClothing.appendChild(headingClothing);

      const parentButtonClothing = document.createElement("div");
      parentButtonClothing.setAttribute("class", "product-buttons");
      parentDivClothing.appendChild(parentButtonClothing);

      const addToCartButtonClothing = document.createElement("button");
      addToCartButtonClothing.setAttribute("class", "add-to-cart");
      addToCartButtonClothing.innerText = "Add to Cart";
      parentButtonClothing.appendChild(addToCartButtonClothing);

      const detailButtonClothing = document.createElement("button");
      detailButtonClothing.setAttribute("class", "buy-now");
      detailButtonClothing.innerHTML = `<span>Price: ${item.price}</span> <span>Available Quantity: <span class="item-quantity">${item.quantity}</span></span>`;
      parentButtonClothing.appendChild(detailButtonClothing);
    });

  const productCardElectronics = document.getElementById("electronics");

  electronicsArray
    .filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    )
    .forEach((item) => {
      const parentDivElectronics = document.createElement("div");
      parentDivElectronics.setAttribute("class", "product-card");
      productCardElectronics.appendChild(parentDivElectronics);

      const imgNodeElectronics = document.createElement("img");
      imgNodeElectronics.setAttribute("src", item.img);
      imgNodeElectronics.setAttribute("loading", "lazy");
      imgNodeElectronics.setAttribute("alt", item.name);
      parentDivElectronics.appendChild(imgNodeElectronics);

      // Add the click event listener to open the image in a new page
      imgNodeElectronics.addEventListener("click", function () {
        openImageInNewPage(item.img);
        setSelectedProduct(item); // Store the selected product data in localStorage
      });
      const headingElectronics = document.createElement("h3");
      headingElectronics.innerText = item.name;
      parentDivElectronics.appendChild(headingElectronics);

      const parentButtonElectronics = document.createElement("div");
      parentButtonElectronics.setAttribute("class", "product-buttons");
      parentDivElectronics.appendChild(parentButtonElectronics);

      const addToCartButtonElectronics = document.createElement("button");
      addToCartButtonElectronics.setAttribute("class", "add-to-cart");
      addToCartButtonElectronics.innerText = "Add to Cart";
      parentButtonElectronics.appendChild(addToCartButtonElectronics);

      const detailButtonElectronics = document.createElement("button");
      detailButtonElectronics.setAttribute("class", "buy-now");
      detailButtonElectronics.innerHTML = `<span>Price: ${item.price}</span> <span>Available Quantity: <span class="item-quantity">${item.quantity}</span></span>`;
      parentButtonElectronics.appendChild(detailButtonElectronics);
    });

  const productCardPackaging = document.getElementById("packaging");

  packagingArray
    .filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    )
    .forEach((item) => {
      const parentDivPackaging = document.createElement("div");
      parentDivPackaging.setAttribute("class", "product-card");
      productCardPackaging.appendChild(parentDivPackaging);

      const imgNodePackaging = document.createElement("img");
      imgNodePackaging.setAttribute("src", item.img);
      imgNodePackaging.setAttribute("loading", "lazy");
      imgNodePackaging.setAttribute("alt", item.name);
      parentDivPackaging.appendChild(imgNodePackaging);
      // Add the click event listener to open the image in a new page
      imgNodePackaging.addEventListener("click", function () {
        openImageInNewPage(item.img);
        setSelectedProduct(item); // Store the selected product data in localStorage
      });

      const headingPackaging = document.createElement("h3");
      headingPackaging.innerText = item.name;
      parentDivPackaging.appendChild(headingPackaging);

      const parentButtonPackaging = document.createElement("div");
      parentButtonPackaging.setAttribute("class", "product-buttons");
      parentDivPackaging.appendChild(parentButtonPackaging);

      const addToCartButtonPackaging = document.createElement("button");
      addToCartButtonPackaging.setAttribute("class", "add-to-cart");
      addToCartButtonPackaging.innerText = "Add to Cart";
      parentButtonPackaging.appendChild(addToCartButtonPackaging);

      const detailButtonPackaging = document.createElement("button");
      detailButtonPackaging.setAttribute("class", "buy-now");
      detailButtonPackaging.innerHTML = `<span>Price: ${item.price}</span> <span>Available Quantity: <span class="item-quantity">${item.quantity}</span></span>`;
      parentButtonPackaging.appendChild(detailButtonPackaging);
    });

  const productCardCleaning = document.getElementById("cleaning");

  cleaningArray
    .filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    )
    .forEach((item) => {
      const parentDivCleaning = document.createElement("div");
      parentDivCleaning.setAttribute("class", "product-card");
      productCardCleaning.appendChild(parentDivCleaning);

      const imgNodeCleaning = document.createElement("img");
      imgNodeCleaning.setAttribute("src", item.img);
      imgNodeCleaning.setAttribute("loading", "lazy");
      imgNodeCleaning.setAttribute("alt", item.name);
      parentDivCleaning.appendChild(imgNodeCleaning);

      // Add the click event listener to open the image in a new page
      imgNodeCleaning.addEventListener("click", function () {
        openImageInNewPage(item.img);
        setSelectedProduct(item); // Store the selected product data in localStorage
      });

      const headingCleaning = document.createElement("h3");
      headingCleaning.innerText = item.name;
      parentDivCleaning.appendChild(headingCleaning);

      const parentButtonCleaning = document.createElement("div");
      parentButtonCleaning.setAttribute("class", "product-buttons");
      parentDivCleaning.appendChild(parentButtonCleaning);

      const addToCartButtonCleaning = document.createElement("button");
      addToCartButtonCleaning.setAttribute("class", "add-to-cart");
      addToCartButtonCleaning.innerText = "Add to Cart";
      parentButtonCleaning.appendChild(addToCartButtonCleaning);

      const detailButtonCleaning = document.createElement("button");
      detailButtonCleaning.setAttribute("class", "buy-now");
      detailButtonCleaning.innerHTML = `<span>Price: ${item.price}</span> <span>Available Quantity: <span class="item-quantity">${item.quantity}</span></span>`;
      parentButtonCleaning.appendChild(detailButtonCleaning);
    });
}
displayProducts();
function searchProducts(query) {
  const searchResults = [];

  // Search in personalArray
  searchResults.push(
    ...personalArray.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  // Clear existing product cards
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => card.remove());

  // Display the search results
  displayProducts(searchResults);
}

// Add event listener to the search button
document.getElementById("search-button").addEventListener("click", function () {
  const searchInput = document.getElementById("search-input");
  const searchQuery = searchInput.value.trim();
  displayProducts(searchQuery);
});

document
  .getElementById("search-input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      document.getElementById("search-button").click();
    }
  });

// Initialize an empty array to store the selected products in localStorage
const selectedProducts =
  JSON.parse(localStorage.getItem("selectedProducts")) || [];
// Function to open the image in a new page
function openImageInNewPage(imageUrl) {
  const newPageURL = `description.html?image=${encodeURIComponent(imageUrl)}`;
  window.open(newPageURL, "_blank");
}

// Function to store the selected product in localStorage
function setSelectedProduct(productData) {
  localStorage.setItem("selectedProduct", JSON.stringify(productData));
}

// Function to store the selected product in localStorage
function addProductToCart(productData) {
  const selectedProducts =
    JSON.parse(localStorage.getItem("selectedProducts")) || [];
  selectedProducts.push(productData);
  localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
}

// Add event listener to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Check if the button is already disabled
    if (this.disabled) {
      console.log("Button is already disabled.");
      return;
    }

    // Get the parent product card element
    const productCard = this.parentElement.parentElement;

    // Find the element that contains the quantity information
    const quantityElement = productCard.querySelector(".item-quantity");
    const itemPrice = productCard.querySelector("span").innerText;

    // Retrieve the quantity text from the element
    const availableQuantity = quantityElement.innerText;
    // Update the available quantity (subtract 1)
    const updatedQuantity = parseInt(availableQuantity) - 1;

    // Update the "Available Quantity" text with the updated value
    quantityElement.textContent = `${updatedQuantity}`;

    // Disable the button after one click
    this.disabled = true;
    const productName = productCard.querySelector("h3").innerText;
    const productPrice = itemPrice;
    const selectedProduct = {
      name: productName,
      price: productPrice,
    };
    addProductToCart(selectedProduct); // Store the selected product in localStorage
  });
});

// Add event listener to the "Checkout" button
document.getElementById("checkout-btn").addEventListener("click", function () {
  window.location.href = "../html/checkout.html";
});
