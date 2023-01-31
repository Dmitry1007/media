import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from "@faker-js/faker";
// Development Only!
import Pause from "../../helpers/pause";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await Pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        query: () => {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: faker.name.firstName(),
            },
          };
        },
      }),
      removeUser: builder.mutation({
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } =
  usersApi;
export { usersApi };
