import { AnyAction } from "redux";

import { CartItem } from "./cart.type";

import { setIsCartOpen, setCartItems } from "./cart.action";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};

// import { createSlice } from "@reduxjs/toolkit";

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
// };

// export const carttSlice = createSlice({
//   name: "cart",
//   initialState: CART_INITIAL_STATE,
//   reducers: {
//     setIsCartOpen(state, action) {
//       state.cartItems = action.payload;
//     },
//     addItemToCart(state, action) {
//       state.cartItems = addCartItem(state.cartItems, action.payload);
//     },
//     removeItemFromCart(state, action) {
//       state.cartItems = removeCartItem(state.cartItems, action.payload);
//     },
//     clearItemFromCart(state, action) {
//       state.cartItems = clearCartItem(state.cartItems, action.payload);
//     },
//   },
// });

// export const {
//   setIsCartOpen,
//   addItemToCart,
//   removeItemFromCart,
//   clearItemFromCart,
// } = carttSlice.actions;

// export const cartReducer = carttSlice.reducer;
