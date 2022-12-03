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
  products = products.data.products;
  displayProducts(products);
});

const displayProducts = (products) => {
  const productsDOM = products
    .map((product) => {
      return `<article data-id=${product._id}  class="product">
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <p>${product.category}</p>
    <img src=${product.img} alt="product image">

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
  const formData = new FormData(productForm);
  const headers = {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVueXMiLCJzdXJuYW1lIjoiRm9rYSIsImVtYWlsIjoibm90LWRlbnlzQGdtYWlsLmNvbSIsInVzZXJJRCI6IjYzOGI3NzIzOGEwZTIzYTk3ODkzMzUwMyIsImlhdCI6MTY3MDA4NDM4NywiZXhwIjoxNjcyNjc2Mzg3fQ.enjrchUDYm4BARZf4axy8fWDhZAkNBmufl544VlxeAM",
    // "Content-Type": "multipart/form-data",
  };
  const resp = await axios.post("/api/products", formData, { headers });

  console.log(resp.data);
  document.location.reload();
});
