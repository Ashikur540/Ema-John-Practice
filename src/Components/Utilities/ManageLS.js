// function to manage local storage data

const addToLs = (id) => {
   let shoppingCart = {};

   //    check if data already exist or not ...
   // const existCart = localStorage.getItem("shopping-cart");

   // if (existCart) {
   //    shoppingCart = JSON.parse(existCart);
   // } else {
   //    shoppingCart = {};
   // }

   //    add quaantity
   let qty = shoppingCart[id];
   if (qty) {
      //    console.log("exisit",id);
      let count = parseInt(qty) + 1;
      shoppingCart[id] = count;
      //    localStorage.setItem(id,count);
   } else {
      shoppingCart[id] = 1;
   }

   localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
   let shoppingCart = {};

   //check if data already exist or not ...
   const existCart = localStorage.getItem("shopping-cart");

   if (existCart) {
      shoppingCart = JSON.parse(existCart);
   } else {
      shoppingCart = {};
   }

   return shoppingCart;
};

// function to delete from local storage

const removeFrmCart = (id) => {
   // console.log('remove',id);
   const storedCart = localStorage.getItem("shopping-cart");
   if (storedCart) {
      const shoppingCart = JSON.parse(storedCart);
      if (id in shoppingCart) {
         // console.log("Already exists..")
         delete shoppingCart[id];
         localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      }
   }
};

export { addToLs, removeFrmCart, getStoredCart };
