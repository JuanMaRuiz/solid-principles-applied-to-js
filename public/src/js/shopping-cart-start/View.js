(function (scope) {
  'use strict';

  const data = jq.ajax('http://localhost:4001/products/');
  let listOfProducts = [];

  function View() {

  }

  const cart = new scope.app.Cart();

  View.prototype.init = function() {
    data.then(products => {
      products.forEach((product) => {

        const item = new scope.app.Product(product.id, product.description);
        listOfProducts.push(item);

        const li = createLi({
          id: item.getId(),
          parent: '#products',
          text: item.getDescription(),
        });

        li.addEventListener('click', addToCart.bind(li));
        console.log('products: ', products);
      });
    });
  };

  const createLi = ({
    className = 'list-group-item', id, text, parent,
  }) => {
    const li = document.createElement('li');
    li.className = className;
    li.setAttribute('id', id);
    li.textContent = text;
    document.querySelector(parent).appendChild(li);

    return li;
  };

  function addToCart() {
    const product = listOfProducts.filter(item => item.getId().toString() === this.id)[0];

    cart.addItem(product);

    createLi({
      text: product.getDescription(),
      id: product.getId(),
      parent: '#cart',
    });
  }

  scope.app = window.app || {};
  scope.app.View = View;
}(window));
