import { createSlice } from "@reduxjs/toolkit";

//Contact contents are not part of the state
export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    viewContact: false,
    userName: "",
    email: "",
    phone: "",
    address: "",
  },
  reducers: {
    showContact: (state) => {
      state.viewContact = true;
    },
    hideContact: (state) => {
      state.viewContact = false;
    },
    setContactUserName: (state, action) => {
      state.userName = action.payload;
    },
    setContactEmail: (state, action) => {
      state.email = action.payload;
    },
    setContactPhone: (state, action) => {
      state.phone = action.payload;
    },
    setContactAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const {
  showContact,
  hideContact,
  setContactEmail,
  setContactPhone,
  setContactUserName,
  setContactAddress,
} = contactSlice.actions;
export const selectViewContact = (state) => state.contact.viewContact;
export const selectUserName = (state) => state.contact.userName;
export const selectEmail = (state) => state.contact.email;
export const selectPhone = (state) => state.contact.phone;

export const selectAddress = (state) => state.contact.address;
export default contactSlice.reducer;
