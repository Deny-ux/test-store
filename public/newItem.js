const submitBtn = document.querySelector(".submit-btn");
const productForm = document.querySelector(".product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const mainContainer = document.querySelector(".main-container");
const category = document.querySelector("select");
const desciption = document.querySelector("#description");

// after loading page
window.addEventListener("DOMContentLoaded", async () => {
  let products = await axios.get("/api/products?");
  console.log(products);
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
  const headers = {
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVueXMiLCJzdXJuYW1lIjoiRm9rYSIsImVtYWlsIjoibm90LWRlbnlzQGdtYWlsLmNvbSIsInVzZXJJRCI6IjYzODE1MGY3ZTJjNjJlYmU3M2I2Y2JjYSIsImlhdCI6MTY2OTQxOTMzNywiZXhwIjoxNjcyMDExMzM3fQ.-XaPxtRo7N-moASD_DJc9X-xccmLdqALmwg5paxSFFE",
  };
  const resp = await axios.post(
    "/api/products",
    {
      name: nameInput.value,
      description: desciption.value,
      price: Number(priceInput.value),
      category: category.value,
    },
    { headers }
  );

  document.location.reload();
});
