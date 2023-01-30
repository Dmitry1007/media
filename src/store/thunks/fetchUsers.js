import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Development Only!
import Pause from "../../helpers/pause";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  await Pause(1000);
  return response.data;
});

export { fetchUsers };
