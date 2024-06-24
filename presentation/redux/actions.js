import { createAction } from "@reduxjs/toolkit";
export const setMovieItem = createAction('movie/setMovieItem')
export const setMovieItemDetails = createAction('movie/setMovieItemDetails')
export const addFavoriteMovie = createAction('movie/addFavoriteMovie')