const submitBtn = document.querySelector(".submit-btn");
const productForm = document.querySelector(".product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const mainContainer = document.querySelector(".main-container");
const category = document.querySelector("select");
const desciption = document.querySelector("#description");

// after loading page
addEventListener("DOMContentLoaded", async () => {
  let products = await axios.get("/api/products");
  products = products.data.products;
  displayProducts(products);
  console.log(products);
});

const displayProducts = (products) => {
  const productsDOM = products
    .map((product) => {
      return `<article class="product">
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <p>${product.category}</p>
        </article>`;
    })
    .join("");
  mainContainer.innerHTML = productsDOM;
};

productForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (nameInput.value === "") {
    alert("please provide name");
    return;
  }
  console.log("submit form");
  const resp = await axios.post("/api/products", {
    name: nameInput.value,
    description: desciption.value,
    price: Number(priceInput.value),
    category: category.value,
  });
  console.log(desciption.value);
  console.log(nameInput.value);
  console.log(typeof priceInput.value);
  console.log(category.value);

  document.location.reload();
});
