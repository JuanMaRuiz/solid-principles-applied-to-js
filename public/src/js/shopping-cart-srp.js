function Event(name) {
  this._handlers = [];
  this.name = name;
}

Event.prototype.addHandler = function (handler) {
  this._handlers.push(handler);
};

Event.prototype.removeHandler = function (handler) {
  for (let i = 0; i < this._handlers.length; i++) {
    if (handler === this._handlers[i]) {
      this._handlers.splice(i, 1);
      break;
    }
  }
};

Event.prototype.fire = function (eventArgs) {
  this._handlers.forEach(handler => handler(eventArgs));
};

const eventAggregator = (function () {
  const events = [];

  function _getEvent(eventName) {
    let newEvent = events.filter(event => event.name === eventName)[0];

    if (!newEvent) {
      newEvent = new Event(eventName);
      events.push(newEvent);
    }

    return newEvent;
  }

  return {
    publish(eventName, eventArgs) {
      const event = _getEvent(eventName);
      event.fire(eventArgs);
    },
    subscribe(eventName, handler) {
      const event = _getEvent(eventName);
      event.addHandler(handler);
    },
  };
}());


function Cart() {
  this._items = [];
}

Cart.prototype.addItem = function (item) {
  this._items.push(item);
  eventAggregator.publish('itemAdded', item);
};

/**
 * Helper function. This function creates an html element from the given configuration
 * @param {String} - Name of the tag we want to create
 * @param {String} - Class to use => default 'list-group-item'
 * @param {String} - Parent element we want to attach the element created created
 * @param {String} - Refers to the item we want to retrieve the information
 */
function createElementByTagName({
  tag, className = 'list-group-item', parent, item,
}) {
  const li = document.createElement(tag);
  li.className = className;
  li.textContent = item.getDescription();
  li.setAttribute('id', item.getId());
  document.querySelector(parent).appendChild(li);

  return li;
}

const cartView = (function () {
  eventAggregator.subscribe('itemAdded', (eventArgs) => {
    createElementByTagName({
      tag: 'li',
      parent: '#cart-srp',
      item: eventArgs,
    });
  });
}());

const cartController = (function (cart) {
  eventAggregator.subscribe('productSelected', eventArgs => cart.addItem(eventArgs.product));
}(new Cart()));

function Product(id, description) {
  this.id = id;
  this.description = description;
}

Product.prototype.getId = function () {
  return this.id;
};

Product.prototype.getDescription = function () {
  return this.description;
};

const products = [
  new Product(1, 'Star Wars Lego Ship'),
  new Product(2, 'Barbie Doll'),
  new Product(3, 'Remote Control Airplane'),
];

const productView = (function () {
  function onProductSelected() {
    const productId = this.id;

    eventAggregator.publish('productSelected', {
      product: products.filter(product => product.getId() === productId)[0],
    });
  }

  products.forEach((product) => {
    const li = createElementByTagName({
      tag: 'li',
      className: 'list-group-item',
      parent: '#products-srp',
      item: product,
    });

    li.addEventListener('click', onProductSelected.bind(li));
  });
}());
