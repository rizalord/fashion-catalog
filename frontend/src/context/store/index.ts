import { configureStore } from "@reduxjs/toolkit"
import navReducer from "./slices/navSlice"
import categoryReducer from "./slices/categorySlice"

export const store = configureStore({
    reducer: {
        nav: navReducer,
        category: categoryReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
