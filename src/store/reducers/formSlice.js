import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchName } from "./formAPI";

const initialState = {
  employees: [],
  isLoading: false,
  isNameDistributionFilled: false,
  name: "0",
  distributionCenter: "0",
  paymentType: "",
  expiredDate: "",
  notes: "",
  userProducts: [{ status: "empty" }],
  totalProductsPrice: 0,
};

export const fetchUsers = createAsyncThunk("forms/fetchName", async () => {
  const response = await fetchName();
  return response;
});

export const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    changeIsNameDistributionFilled: (state, action) => {
      state.isNameDistributionFilled = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDistributionCenter: (state, action) => {
      state.distributionCenter = action.payload;
    },
    setPaymentType: (state, action) => {
      state.paymentType = action.payload;
    },
    setExpiredDate: (state, action) => {
      state.expiredDate = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    addProducts: (state, action) => {
      console.log("ADDDDD", action.payload);
      if (action.payload !== null) {
        console.log("MASUK IF");
        state.userProducts.splice(action.payload.index, 1);
        state.userProducts.splice(action.payload.index, 0, {
          status: "filled",
          name: action.payload.name,
          unit: action.payload.unit,
          quantity: action.payload.quantity,
          price: action.payload.price,
          totalPrice: action.payload.totalPrice,
        });
        state.totalProductsPrice += action.payload.totalPrice;
      } else {
        console.log("MASUK ELSE");
        state.userProducts.push({ status: "empty" });
      }
    },
    removeProduct: (state, action) => {
      state.userProducts.splice(action.payload.index, 1);
      state.totalProductsPrice -= action.payload.totalPrice;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("WOI", action.payload);
        state.employees = action.payload;
      });
  },
});

export const {
  changeIsNameDistributionFilled,
  setName,
  setDistributionCenter,
  setPaymentType,
  setExpiredDate,
  setNotes,
  addProducts,
  removeProduct,
} = formSlice.actions;

export const isNameDistributionFilled = (state) =>
  state.form.isNameDistributionFilled;
export const name = (state) => state.form.name;
export const distributionCenter = (state) => state.form.distributionCenter;
export const paymentType = (state) => state.form.paymentType;
export const expiredDate = (state) => state.form.expiredDate;
export const notes = (state) => state.form.notes;
export const totalProductsPrice = (state) => state.form.totalProductsPrice;
export const employees = (state) => state.form.employees;
export const products = (state) => state.form.userProducts;

export default formSlice.reducer;
