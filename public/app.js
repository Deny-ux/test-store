const submitBtn = document.querySelector(".submit-btn");
const productForm = document.querySelector(".product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const mainContainer = document.querySelector(".main-container");

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

submitBtn.addEventListener("click", async function () {
  try {
    // const resp = await axios.post("/products", {
    //   name: nameInput.value,
    //   price: Number(priceInput.value),
    // });
    console.log("click");
  } catch (error) {
    console.log("error click");
  }
});

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit form");
});
