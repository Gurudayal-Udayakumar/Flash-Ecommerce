import { products } from "./db/products.js";
import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const productContainer = document.getElementById("products");
const filterContainer = document.querySelector(".side-bar");
let cart = JSON.parse(localStorage.getItem("cart")) || [];






productContainer.addEventListener("click", (event) => {

    const isProductInCart = findProductInCart(cart, event.target.dataset.id);
    if(!isProductInCart){
        const productToAddToCart = products.filter(({_id}) => _id === event.target.dataset.id);
        cart = [...cart, ...productToAddToCart];
        localStorage.setItem("cart", JSON.stringify(cart)); 
        const cartButton = event.target;
        cartButton.innerHTML = "Go To Cart <span class ='material-icons-outlined'>shopping_cart</span>";
    }else{
        location.href = "cart.html";
    }


    
});

filterContainer.addEventListener("click" , (event) => {
    let filteredProducts = [...products];
    if(event.target.dataset.rating){
        const minRating = Number(event.target.dataset.rating);
        filteredProducts = filteredProducts.filter(({rating}) => rating >= minRating);
    }
    
    if(event.target.dataset.discount){
        const minDiscount = Number(event.target.dataset.discount);
        filteredProducts = filteredProducts.filter(({discount}) => discount >= minDiscount);
    }
    
    productContainer.innerHTML = "";
    createProductCard(filteredProducts, productContainer, findProductInCart, "products");

})

createProductCard(products, productContainer, findProductInCart, "products");



