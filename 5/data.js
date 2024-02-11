const data = `[
  {
      "id" : "1",
      "productImg" : "images/black-shoes.jpg",
      "productName" : "Black shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "2",
      "productImg" : "images/white-shoes.jpg",
      "productName" : "White shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "3",
      "productImg" : "images/golden-shoes.jpg",
      "productName" : "Golden shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "4",
      "productImg" : "images/pink-shoes.jpg",
      "productName" : "Pink shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "5",
      "productImg" : "images/red-shoes.jpg",
      "productName" : "Red shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "6",
      "productImg" : "images/silver-shoes.jpg",
      "productName" : "Silver shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "7",
      "productImg" : "images/beige-shoes.jpg",
      "productName" : "Beige shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "8",
      "productImg" : "images/olive-shoes.jpg",
      "productName" : "Olive shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "9",
      "productImg" : "images/blue-shoes.jpg",
      "productName" : "Blue shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "10",
      "productImg" : "images/yellow-shoes.jpg",
      "productName" : "Yellow shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "11",
      "productImg" : "images/nude-shoes.jpg",
      "productName" : "Nude shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  },
  {
      "id" : "12",
      "productImg" : "images/purple-shoes.jpg",
      "productName" : "Purple shoes",
      "productUrl" : "#",
      "productPrice" : "5 000"
  }
]`;

const dbCatalog = JSON.parse(data);
console.log(dbCatalog);

const products = document.querySelector(".catalog__products");

dbCatalog.forEach(
  ({ id, productImg, productName, productUrl, productPrice }) => {
    const productItemEl = document.createElement("div");
    productItemEl.classList.add("product__item");
    products.append(productItemEl);

    const productImgEl = document.createElement("img");
    productImgEl.classList.add("catalog__productImg");
    productImgEl.src = productImg;
    productImgEl.alt = "product";
    productItemEl.append(productImgEl);

    const productNameEl = document.createElement("a");
    productNameEl.classList.add("catalog__productName");
    productNameEl.href = productImg;
    productNameEl.textContent = productName;
    productItemEl.append(productNameEl);

    const productPriceEl = document.createElement("div");
    productPriceEl.classList.add("catalog__productPrice");
    productPriceEl.textContent = productPrice;
    productItemEl.append(productPriceEl);
  }
);
