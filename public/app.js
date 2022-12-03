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
  const formData = new FormData(productForm);

  console.log(formData);
  // const resp = await axios.post("/api/products", {
  //   name: nameInput.value,
  //   description: desciption.value,
  //   price: Number(priceInput.value),
  //   category: category.value,
  // });

  // document.location.reload();
});
