// Import configureStore (function to create a Redux store with good default middleware settings)
// from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { puppyBowlAPI } from '../api/puppyBowlApi'

// Import the API service we defined (which includes the API endpoints and the reducer)


// Create a Redux store

export const store = configureStore({
    // Define the reducer for the store
    // We are adding the API service's reducer to our Redux store's reducer.
    // This means the API service's actions will be dispatched to the API service's reducer.
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [puppyBowlAPI.reducerPath]:  puppyBowlAPI.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlAPI.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)