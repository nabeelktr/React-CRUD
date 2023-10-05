import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedauthReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: persistedauthReducer,
    middleware: [thunk]
  })
 
export const persistor = persistStore(store);
export default store