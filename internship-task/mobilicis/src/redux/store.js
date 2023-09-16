import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage
import profileSlice from '@/redux/profileSlice'; // Update the import path

const persistConfig = {
  key: 'root', // Root key for storage
  storage,
  // Add any blacklist or whitelist options here if needed
};

const persistedProfileReducer = persistReducer(persistConfig, profileSlice);

const store = configureStore({
  reducer: {
    profile: persistedProfileReducer,
    // You can add other reducers here if needed
  },
  // You can add other middleware, dev tools, etc. here
});

const persistor = persistStore(store);
export {store,persistor} 
