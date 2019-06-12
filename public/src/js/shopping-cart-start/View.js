(function (scope) {
  'use strict';

  const products = [
    new scope.app.Product(1, 'Star Wars Lego Ship'),
    new scope.app.Product(2, 'Barbie Doll'),
    new scope.app.Product(3, 'Remote Control Airplane'),
  ];

  const products2 = jq.ajax('http://localhost:4001/products/');

  function View() {

  }

  const cart = new scope.app.Cart();

  View.prototype.init = function() {
    products.forEach((product) => {
      const li = createLi({
        id: product.getId(),
        parent: '#products',
        text: product.getDescription(),
      });

      li.addEventListener('click', addToCart.bind(li));
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
    const product = products.filter(item => item.getId().toString() === this.id)[0];

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
