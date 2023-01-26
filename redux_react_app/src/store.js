import {createStore} from "redux"
import rootReducers from "./reducers/index";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "persist-store",
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(persistedReducer);

export const persistor = persistStore(store)

export default store;