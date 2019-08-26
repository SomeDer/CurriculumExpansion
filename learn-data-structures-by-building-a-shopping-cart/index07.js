const products = [
  {
    id: 0,
    name: "Vanilla buttercream cupcake",
    price: 2.99
  },
  {
    id: 1,
    name: "French Macaroon",
    price: 3.99
  },
  {
    id: 2,
    name: "Fruit sprinkles cupcake",
    price: 3.99
  },
  {
    id: 3,
    name: "Pink flower cupcake",
    price: 5.99
  }
];

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem() {

  }
}

/*
  We have the method but how can we add an item using this method?

  If we know unique identities that only each item possesses, we can use that identity to add that item to the cart.

  Each item currently has three properties called id, name and price. Let's figure out which key can be unique.
  
  Price is definitely not unique because different items can have the same price.

  How about name? Maybe. However, what if there are items with the same name but can have different attributes like colors?

  This is why we have ids. They are unique identifiers that only each item can have. 
  
  Let's have addItem method take id as first parameter. 

  We also need to tell the addItem method from where which selection of items should add an item because there could be many in the future.

  Methods can take parameters by providing what they will be received as inside parameters. For ex.
  
  sayName (name) {
  
  }

  Make the addItem method take id as the first parameter and products as the second parameter.
*/
