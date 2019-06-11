/* eslint-disable no-param-reassign */
(function (sc) {
  var shoppingCart = sc || {};

  const products = [
    new sc.Product(1, 'Star Wars Lego Ship'),
    new sc.Product(2, 'Barbie Doll'),
    new sc.Product(3, 'Remote Control Airplane'),
  ];

  const cart = new sc.Cart();

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

  products.forEach((product) => {
    const li = createLi({
      id: product.getId(),
      parent: '#products',
      text: product.getDescription(),
    });

    li.addEventListener('click', addToCart.bind(li));
  });
}(shoppingCart));
