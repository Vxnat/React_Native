import { configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'
import movieReducer from "./reducer";
const store = configureStore({
    reducer : {
        movie : movieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;