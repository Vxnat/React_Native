import MovieItemDetails from "../../domain/models/movie_item_details/movie_item_details";

export function mapMovieItemDetails(apiData) {
  return new MovieItemDetails(
    apiData.tmdb,
    apiData.imdb,
    apiData.created,
    apiData.modified,
    apiData._id,
    apiData.name,
    apiData.origin_name,
    apiData.content,
    apiData.type,
    apiData.thumb_url,
    apiData.trailer_url,
    apiData.time,
    apiData.episode_current,
    apiData.episode_total,
    apiData.quality,
    apiData.lang,
    apiData.notify,
    apiData.showtimes,
    apiData.slug,
    apiData.year,
    apiData.view,
    apiData.actor,
    apiData.director,
    apiData.category,
    apiData.country,
    apiData.is_copyright,
    apiData.chieurap,
    apiData.poster_url,
    apiData.sub_docquyen,
    apiData.episodes
  );
}
