import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "./apis/usersApi";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
      .concat(usersApi.middleware);
  },
});

// view store in browser console store.getState()
window.store = store;

setupListeners(store.dispatch);

export {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation,
} from "./apis/usersApi";

export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/photosApi";
