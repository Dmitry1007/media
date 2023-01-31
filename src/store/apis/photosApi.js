import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Development Only!
import Pause from "../../helpers/pause";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await Pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchPhotosQuery } = photosApi;
export { photosApi };
