import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
// Development Only!
import Pause from "../../helpers/pause";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });

  await Pause(1000);
  return response.data;
});

export { addUser };
