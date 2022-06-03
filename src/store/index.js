import {  configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice"



const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});


export default store;





// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "increse") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };