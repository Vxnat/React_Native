import { createReducer } from "@reduxjs/toolkit"
import { setMovieItem,setMovieItemDetails } from "./actions"
const initState = []

const movieReducer = createReducer(initState,(builder) => {
    builder.addCase(setMovieItemDetails,(state,action) => {
        return action.payload;
    })
})

export default movieReducer;