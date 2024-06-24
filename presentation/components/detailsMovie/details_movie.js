import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const DetailMovie = ({ id }) => {
  const movieDetailItem = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [movie, setMovie] = useState();
  const [episodes, setEpisodes] = useState([]);
  const [similarMovies, setSimilarMovies] = useState();
  const [currentEpisode, setCurrentEpisode] = useState({
    urlMovie: "",
    slug: "",
  });
  useEffect(() => {
    const getDataMovieItem = () => {
      const foundMovie = movieDetailItem.find((item) => item.movie._id == id);
      if (foundMovie) {
        setMovie(foundMovie);
        setEpisodes(foundMovie.episodes[0].server_data);
        let listSlug = foundMovie.movie.category_slugs;
        // Lọc ra các phim có category_slugs giống với danh sách slug của movie hiện tại
        let filteredMovies = movieDetailItem.filter((item) => {
          // Kiểm tra xem có ít nhất một category_slug nào giống nhau không
          return item.movie.category_slugs.some((slug) =>
            listSlug.includes(slug)
          );
        });
        // Lọc ra những phim khác với phim hiện tại (nếu cần)
        filteredMovies = filteredMovies.filter((item) => item.movie._id !== id);
        setSimilarMovies(filteredMovies);
      }
    };

    getDataMovieItem();
  }, [id, movieDetailItem]);

  if (!movie) {
    return null; // Or a loading indicator
  }

  const handleChooseEpisode = (item) => {
    const dataEpisode = {
      urlMovie: item.link_embed,
      slug: item.slug,
    };
    setCurrentEpisode(dataEpisode);
  };

  const renderEpisode = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.episodeContainer,
          {
            backgroundColor:
              currentEpisode.slug === item.slug ? "black" : "white",
          },
        ]}
        onPress={() => handleChooseEpisode(item)}
      >
        <Text
          style={[
            styles.episodeText,
            { color: currentEpisode.slug === item.slug ? "white" : "black" },
          ]}
        >
          {item.slug}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSimilarMovies = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          marginRight: 20,
          borderRadius: 15,
          overflow: "hidden",
        }}
        onPress={() => navigation.navigate("details", { id: item.movie._id })}
      >
        <Image
          source={{ uri: `${item.movie.thumb_url}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item_poster}>
        <Image
          source={{ uri: `${movie.movie.poster_url}` }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.action_header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon name="favorite" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.item_thumb}>
        <Image
          source={{ uri: `${movie.movie.thumb_url}` }}
          style={styles.thumb_image}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        style={styles.play}
        onPress={() =>
          navigation.navigate("videoPlayer", {
            videoUrl: currentEpisode.urlMovie,
          })
        }
      >
        <Icon name="play" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.body}>
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 23,
              width: 250,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {movie.movie.origin_name}
          </Text>
          <Text
            style={{ color: "white", fontSize: 15, marginVertical: 10 }}
            numberOfLines={5}
            ellipsizeMode="tail"
          >
            {movie.movie.content}
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
            Tập phim
          </Text>

          <View style={styles.episodeListContainer}>
            <FlatList
              data={episodes}
              renderItem={renderEpisode}
              keyExtractor={(item) => item.name}
              numColumns={6}
              columnWrapperStyle={styles.columnWrapper}
              contentContainerStyle={styles.episodeList}
              nestedScrollEnabled
            />
          </View>
          <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
            Phim cùng thể loại
          </Text>
          <View style={{ marginBottom: 20 }}>
            <FlatList
              data={similarMovies}
              renderItem={renderSimilarMovies}
              keyExtractor={(item) => item.name}
              horizontal
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailMovie;
