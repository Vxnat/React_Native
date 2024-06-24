import MovieItem from "../../domain/models/movie_item/movie_item";

export function mapMovieItem(apiData) {
  return apiData.map(item => new MovieItem(
    item.tmdb,
    item.imdb,
    item.modified,
    item._id, // Assuming API uses _id
    item.name,
    item.slug,
    item.origin_name, // Assuming origin_name
    item.thumb_url, // Assuming thumb_url
    item.poster_url, // Assuming poster_url
    item.year
  ));
}
