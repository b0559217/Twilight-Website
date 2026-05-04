// CART DATA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//SAVE CART
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

//  ADD ITEMS
function addToCart(name, price) {

    cart.push({ name: name, price: price, qty: 1 });

    saveCart();
    alert(name + " added to cart!");

    displayCart();
}

function addRobe() {
    let size = document.getElementById("robeSize").value;
    cart.push({ name: "Robe (" + size + ")", price: 40, qty: 1 });

    saveCart();
    alert("Robe added to cart!");
    displayCart();
}

function addShirt() {
    let size = document.getElementById("shirtSize").value;
    cart.push({ name: "T-Shirt (" + size + ")", price: 20, qty: 1 });

    saveCart();
    alert("T-Shirt added to cart!");
    displayCart();
}

// DISPLAY CART
function displayCart() {

    let output = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        output += `
        <p>
        ${cart[i].name} - $${cart[i].price}
        Qty: <input type="number" min="1" value="${cart[i].qty}" onchange="updateQty(${i}, this.value)">
        <button onclick="removeItem(${i})">Remove</button>
        </p>
        `;

        total += cart[i].price * cart[i].qty;
    }

    document.getElementById("cartItems").innerHTML = output;
    document.getElementById("cartTotal").innerHTML = "Total: $" + total;
}

// UPDATE QTY 
function updateQty(index, qty) {
    cart[index].qty = qty;
    saveCart();
    displayCart();
}

// REMOVE ITEM 
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

// CHECKOUT 
function showCheckout() {
    document.getElementById("checkout").style.display = "block";
}

//COPY ADDRESS (BONUS) 
function copyAddress() {
    document.getElementById("shipping").value =
        document.getElementById("billing").value;
}

// VALIDATION 
function placeOrder() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let error = "";

    if (name == "") {
        error = "Name is required";
    }
    else if (email == "" || !email.includes("@")) {
        error = "Valid email required";
    }
    else if (phone == "") {
        error = "Phone is required";
    }

    if (error != "") {
        document.getElementById("error").innerHTML = error;
        return;
    }

    alert("Order placed successfully!");

    localStorage.clear();
    location.reload();
}

//LOAD CART ON START 
displayCart();

//SAVE FORM DATA
document.addEventListener("input", function () {

    localStorage.setItem("name", document.getElementById("name")?.value || "");
    localStorage.setItem("email", document.getElementById("email")?.value || "");
    localStorage.setItem("phone", document.getElementById("phone")?.value || "");
    localStorage.setItem("billing", document.getElementById("billing")?.value || "");
});

// RESTORE FORM DATA
window.onload = function () {

    if (document.getElementById("name")) {
        document.getElementById("name").value = localStorage.getItem("name") || "";
        document.getElementById("email").value = localStorage.getItem("email") || "";
        document.getElementById("phone").value = localStorage.getItem("phone") || "";
        document.getElementById("billing").value = localStorage.getItem("billing") || "";
    }
};