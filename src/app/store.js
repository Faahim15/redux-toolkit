import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/feautures/counters/CountersSlice";
const store = configureStore({
  reducer: {
    counters: counterReducer, //aikane key ta icca moto name dewa jai
  },
});

export default store;
