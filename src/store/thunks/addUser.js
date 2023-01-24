import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("users/addUser", async () => {
  const user = { id: 2, name: "Matilda" };
  const response = await axios.post("http://localhost:3005/users", user);
  return response.data;
});

export { addUser };
