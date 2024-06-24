import DetailMovie from "../../components/detailsMovie/details_movie";

const DetailMovieScreen = ({route}) => {
  const {id} = route.params;
  return <DetailMovie id={id} />;
};

export default DetailMovieScreen;
