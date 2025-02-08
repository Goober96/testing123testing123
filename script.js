// Cart functionality
let cart = {
    items: [],
    totalPrice: 0,
    addItem: function(productName, productPrice) {
        this.items.push({ productName, productPrice });
        this.totalPrice += productPrice;
        this.updateCartDisplay();
    },
    updateCartDisplay: function() {
        document.getElementById('cart-total').textContent = `$${this.totalPrice.toFixed(2)}`;
        let cartItemsList = document.getElementById('cart-items-list');
        cartItemsList.innerHTML = '';
        this.items.forEach(item => {
            let listItem = document.createElement('li');
            listItem.textContent = `${item.productName} - $${item.productPrice.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
        });
    }
};

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        let productName = button.previousElementSibling.previousElementSibling.textContent;
        let productPrice = parseFloat(button.previousElementSibling.textContent.replace('$', ''));
        cart.addItem(productName, productPrice);
    });
});
