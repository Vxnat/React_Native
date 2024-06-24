import Tmdb from './tmdb';
import Imdb from './imdb';
import Modified from './modified'

export default class MovieItem {
  constructor(
    tmdb,
    imdb,
    modified,
    id,
    name,
    slug,
    originName,
    thumbUrl,
    posterUrl,
    year
  ) {
    this.tmdb = new Tmdb(tmdb.type, tmdb.id, tmdb.season, tmdb.vote_average, tmdb.vote_count);
    this.imdb = new Imdb(imdb.id);
    this.modified = new Modified(modified.time);
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.originName = originName;
    this.thumbUrl = thumbUrl;
    this.posterUrl = posterUrl;
    this.year = year;
  }
}
