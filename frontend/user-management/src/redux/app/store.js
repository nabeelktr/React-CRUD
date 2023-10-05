import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import adminAuthReducer from '../features/adminSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedauthReducer = persistReducer(persistConfig, authReducer)
const persistedadminAuthReducer = persistReducer(persistConfig, adminAuthReducer)

const store = configureStore({
  reducer: {
    auth: persistedauthReducer, // Assuming "auth" is the key for authSlice
    admin: persistedadminAuthReducer, // Assuming "admin" is the key for adminSlice
  },
    middleware: [thunk]
  })
 
export const persistor = persistStore(store);
export default store