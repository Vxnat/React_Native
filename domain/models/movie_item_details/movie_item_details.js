import Tmdb from '../movie_item/tmdb';
import Imdb from '../movie_item/imdb';
import Created from './created'
import Modified from '../movie_item/modified';
import Episode from './episode';

export default class MovieItemDetails {
  constructor(
    tmdb,
    imdb,
    created,
    modified,
    _id,
    name,
    originName,
    content,
    type,
    thumbUrl,
    trailerUrl,
    time,
    episodeCurrent,
    episodeTotal,
    quality,
    lang,
    notify,
    showtimes,
    slug,
    year,
    view,
    actors,
    directors,
    categories,
    countries,
    isCopyright,
    chieurap,
    posterUrl,
    subDocquyen,
    episodes
  ) {
    this.tmdb = new Tmdb(tmdb.type, tmdb.id, tmdb.season, tmdb.vote_average, tmdb.vote_count);
    this.imdb = new Imdb(imdb.id);
    this.created = new Created(created.time);
    this.modified = new Modified(modified.time);
    this._id = _id;
    this.name = name;
    this.originName = originName;
    this.content = content;
    this.type = type;
    this.thumbUrl = thumbUrl;
    this.trailerUrl = trailerUrl;
    this.time = time;
    this.episodeCurrent = episodeCurrent;
    this.episodeTotal = episodeTotal;
    this.quality = quality;
    this.lang = lang;
    this.notify = notify;
    this.showtimes = showtimes;
    this.slug = slug;
    this.year = year;
    this.view = view;
    this.actors = actors;
    this.directors = directors;
    this.categories = categories;
    this.countries = countries;
    this.isCopyright = isCopyright;
    this.chieurap = chieurap;
    this.posterUrl = posterUrl;
    this.subDocquyen = subDocquyen;
    this.episodes = episodes.map(ep => new Episode(ep.server_name, ep.server_data));
  }
}
