import { products } from "./db/products.js";
import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const productContainer = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];




// for(let product of products){
//     const cardContainer = document.createElement("div");
//     cardContainer.classList.add("card" , 
//         "card-vertical", 
//         "d-flex" , 
//         "direction-column" ,
//         "relative" , 
//         "shadow"
//     );


//     // Image container
//     const imageContainer = document.createElement("div");
//     imageContainer.classList.add("card-image-container");

//     const image = document.createElement("img");
//     image.classList.add("card-image");
//     image.setAttribute("src", product.img);
//     image.setAttribute("alt" , product.name);

//     imageContainer.appendChild(image);
    

//     //Card Details Container
//     const cardDetailsContainer = document.createElement("div");
//     cardDetailsContainer.classList.add("card-details");

//     const brandContainer = document.createElement("div");
//     brandContainer.classList.add("card-title");
//     brandContainer.innerHTML = product.brand;
//     cardDetailsContainer.appendChild(brandContainer);
    
 
//     //Card Description Container

//     const descriptionContainer = document.createElement("div");
//     descriptionContainer.classList.add("card-description");

//     const name = document.createElement("p");
//     name.classList.add("card-des");
//     name.innerText = product.name;
//     descriptionContainer.appendChild(name);

//     //Product Price

//     const price = document.createElement("p");
//     price.classList.add("card-price","d-flex" , "align-end", "gap-sm");
//     price.innerText = `Rs. ${product.newPrice}`

//     const oldPrice = document.createElement("span");
//     oldPrice.classList.add("price-strike-through");
//     oldPrice.innerText = `Rs. ${product.oldPrice}`
//     price.appendChild(oldPrice)

//     const discont = document.createElement("span");
//     discont.classList.add("discount");
//     discont.innerText = `(${product.discount}% OFF)`
//     price.appendChild(discont)

//     descriptionContainer.appendChild(price);

//     //Rating Container
//     const ratings = document.createElement("p");
//     ratings.classList.add("d-flex", "align-center")

//     const rating = document.createElement("span");
//     rating.innerText = product.rating;
//     ratings.appendChild(rating);

//     const star = document.createElement("span");
//     star.classList.add("material-icons-outlined" ,"star")
//     star.innerText = "star";
//     ratings.appendChild(star); 
    
//     descriptionContainer.appendChild(ratings);
//     cardDetailsContainer.appendChild(descriptionContainer);

//     //CTA button container
//     const ctaButton = document.createElement("div");
//     ctaButton.classList.add("cta-btn");
//     const cartButton = document.createElement("button");
//     cartButton.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin");
//     cartButton.setAttribute("data-id" ,product._id);


//     const cart = document.createElement("span");
//     cart.classList.add("material-icons-outlined")
//     cart.innerText = "shopping_cart";
//     cartButton.appendChild(cart);


//      //button text
//     const buttonText = document.createElement("span");
//     buttonText.innerText = "Add To Cart"
//     cartButton.appendChild(buttonText);

//     ctaButton.appendChild(cartButton);
//     cardDetailsContainer.appendChild(ctaButton);



//     cardContainer.appendChild(imageContainer);
//     cardContainer.appendChild(cardDetailsContainer);

//     productContainer.appendChild(cardContainer);

// }

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


    
})

createProductCard(products, productContainer, findProductInCart, "products");



