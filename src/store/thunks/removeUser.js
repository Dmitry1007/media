import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Development Only!
import Pause from "../../helpers/pause";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  await Pause(1000);
  return user;
});

export { removeUser };
