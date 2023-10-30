//---------------------Navbar-----------------------
var MenuItems = document.getElementById("navbar-items")

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "250px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}

const currentPath = window.location.pathname;

//---------------------Shop Section-----------------------
if (currentPath.includes("shop")){
    //Products
    let products = [
        {category: "F&G", productName: "Banana", price: "$4.99", img: "Images/product-1.png"} ,
        {category: "F&G", productName: "Apple", price: "$2.99", img: "Images/product-2.png"} ,
        {category: "F&G", productName: "Broccoli", price: "$3.98", img: "Images/product-3.png"} ,
        {category: "F&G", productName: "Potato", price: "$0.49", img: "Images/product-4.png"} ,
        {category: "M&P", productName: "Beef", price: "$15.99", img: "Images/product-5.png"} ,
        {category: "M&P", productName: "Chicken", price: "$12.49", img: "Images/product-6.png"} ,
        {category: "M&P", productName: "Pork", price: "$20.89", img: "Images/product-7.png"} ,
        {category: "F&D", productName: "Butter", price: "$7.99", img: "Images/product-8.png"} ,
        {category: "F&D", productName: "Milk", price: "$8.49", img: "Images/product-9.png"} ,
        {category: "F&D", productName: "Cheese", price: "$3.99", img: "Images/product-10.png"} ,
        {category: "Bakery", productName: "Bread", price: "$4.99", img: "Images/product-11.png"} ,
        {category: "Bakery", productName: "Biscuits", price: "$99.99", img: "Images/product-12.png"} ,
    ];

    let allProducts = "";

    //Loop through all elements in the array "products"
    for(let i = 0; i < products.length; i++) {
        allProducts += 
        `
            <div class="shop-item">
                <h3>${products[i].productName}</h3>
                <p class="price">${products[i].price}</p>
                <img src=${products[i].img} alt="product">
                <input type="number" value="1" min="1">
                <br>
                <button class="add-btn">Add To Cart</button>
            </div>
        `; 
    }
    //Write products on product page
    document.getElementById("products-section").innerHTML = allProducts;

    function displaySelectedCategoryShop() {
        let selectedCategory = document.getElementById("categorySelectShop").value;
    
        let allProducts = ""
        for(let i = 0; i < products.length ; i++){
            if (products[i].category.toLowerCase().includes(selectedCategory.toLowerCase())){
                allProducts +=
            `
                <div class="shop-item">
                    <h3>${products[i].productName}</h3>
                    <p class="price">${products[i].price}</p>
                    <img src=${products[i].img} alt="product">
                    <input type="number" value="1" min="1">
                    <br>
                    <button class="add-btn">Add To Cart</button>
                </div>
            `; 
            }
    
        }
        document.getElementById("products-section").innerHTML = allProducts;
    }
}

//--------------Recipe Section-------------------------
if (currentPath.includes("recipes")){
    //recipes
    let recipes = [
        {category: "lunch", recipeName: "Beef Tacos", serving: "2-4", time: "15 Minutes", img: "Images/recipe-1.png"} ,
        {category: "lunch", recipeName: "Chicken Burgers", serving: "3-4", time: "35 Minutes", img: "Images/recipe-2.png"} ,
        {category: "breakfast", recipeName: "Eggs Benedict", serving: "1-2", time: "10 Minutes", img: "Images/recipe-3.png"} ,
        {category: "breakfast", recipeName: "Pancakes", serving: "2-3", time: "15 Minutes", img: "Images/recipe-4.png"} ,
        {category: "dinner", recipeName: "Pepperoni Pizza", serving: "1-4", time: "30 Minutes", img: "Images/recipe-5.png"} ,
        {category: "dinner", recipeName: "Spaghetti and Meatballs", serving: "2-4", time: "15 Minutes", img: "Images/recipe-6.png"} ,
        {category: "dessert", recipeName: "Chocolate Lava Cake", serving: "1-2", time: "45 Minutes", img: "Images/recipe-7.png"} ,
        {category: "dessert", recipeName: "Caramel Pudding", serving: "1-2", time: "60 Minutes", img: "Images/recipe-8.png"} ,
    ];


    let allRecipes = "";
    //Loop through all elements in the array "recipes"
    for(let i = 0; i < recipes.length; i++) {
        allRecipes += 
        `
        <div class="recipe-item">
            <h3>${recipes[i].recipeName}</h3>
            <img src="${recipes[i].img}" alt="Recipe Image">
            <div>
                <p><i class="fa fa-clock-o"></i>${recipes[i].time}</p>
                <p><i class="fa fa-cutlery"></i>Serves ${recipes[i].serving}</p>
            </div>              
        </div>
    `; 
    }
    //Write recipes on recipe page
    document.getElementById("recipes").innerHTML = allRecipes;

    function displaySelectedCategoryRecipe() {
        let selectedCategory = document.getElementById("categorySelectRecipe").value;
    
        let allRecipes = ""
        for(let i = 0; i < recipes.length ; i++){
            if (recipes[i].category.toLowerCase().includes(selectedCategory.toLowerCase())){
                allRecipes +=
            `
            <div class="recipe-item">
                <h3>${recipes[i].recipeName}</h3>
                <img src="${recipes[i].img}" alt="Recipe Image">
                <div>
                    <p><i class="fa fa-clock-o"></i>${recipes[i].time}</p>
                    <p><i class="fa fa-cutlery"></i>Serves ${recipes[i].serving}</p>
                </div>              
            </div>
            `; 
            }
    
        }
        document.getElementById("recipes").innerHTML = allRecipes;
    }
}



//---------------------Login Page-----------------------
if (currentPath.includes("login")){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('login-container');
    const mobileSignInButton = document.getElementById('mobileSignIn');
    const mobileSignUpButton = document.getElementById('mobileSignUp');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    //Mobile login
    mobileSignUpButton.addEventListener('click', () => {
        event.preventDefault();
        container.classList.add("right-panel-active");
    });


    mobileSignInButton.addEventListener('click', () => {
        event.preventDefault();
        container.classList.remove("right-panel-active");
    });
}

//--------------Checkout Page-------------------------
if (currentPath.includes("checkout")) {
    let quantityInputs = document.querySelectorAll(".item-quantity");
    const removeButtons = document.querySelectorAll(".remove-button");
    const subtotalElement = document.getElementById("subtotal");
    const shippingCostElement = document.getElementById("shipping-cost");
    const totalElement = document.getElementById("total");
    
    // Function to update the subtotal and total
    function updateTotals() {
        let subtotal = 0;
        let quantityInputs = document.querySelectorAll(".item-quantity");
        for (let i = 0; i < quantityInputs.length; i++) {
            const quantity = parseInt(quantityInputs[i].value);
            const price = parseFloat(quantityInputs[i].closest(".review-item").querySelector(".price").textContent.slice(1)); // Extract the price and convert to a number
            subtotal += quantity * price;
        }
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

        const shippingCost = parseFloat(shippingCostElement.textContent.slice(1)); // Extract the shipping cost and convert to a number
        const total = subtotal + shippingCost;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Add event listeners for quantity input changes
    quantityInputs.forEach(function (input) {
        input.addEventListener("input", updateTotals);
    });

    // Add event listeners for remove buttons
    removeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove the corresponding review item
            const reviewItem = button.closest(".review-item");
            reviewItem.parentNode.removeChild(reviewItem);
            // Update the totals after removal
            updateTotals();
        });
    });

    // Initial update of subtotal and total
    updateTotals();
};