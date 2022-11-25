const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const mainContainer = document.querySelector(".main-container");
console.log(form);

// after loading page
addEventListener("DOMContentLoaded", async () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  //   console.log(window.location.href);
  console.log(params);
  let products = await axios.get("/products");
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
        </article>`;
    })
    .join("");
  mainContainer.innerHTML = productsDOM;
};
submitBtn.addEventListener("click", async function () {
  console.log(1);
  try {
    await axios.post("/products", {
      name: nameInput.value,
      price: Number(priceInput.value),
    });
  } catch (error) {
    console.log(error);
  }

  console.log(2);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
