import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./src/state/redux/person/PersonSlice";
// ...

export const store = configureStore({
  reducer: {
    person: personReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
