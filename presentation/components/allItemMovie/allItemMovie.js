import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import styles from "./style";
import { useSelector } from "react-redux";
import { Image, TouchableOpacity } from "react-native";

const AllItemMovie = ({ type }) => {
  const movieItems = useSelector((state) => state.movie);
  const navigation = useNavigation();
  const [movies, setMovies] = useState();
  useEffect(() => {
    let data;
    switch (type) {
      case "hoathinh":
        data = movieItems.filter(
          (item) => item.movie.type === "hoathinh" && item.movie.year <= 2020
        );
        break;
      case "trailer":
        data = movieItems.filter((item) => item.movie.status === "trailer");
        break;
      case "haihuoc":
        data = movieItems.filter((item) =>
          item.movie.category_slugs.includes("hai-huoc")
        );
        break;
      case "anime":
        data = movieItems.filter(
          (item) =>
            item.movie.country[0].slug === "nhat-ban" &&
            item.movie.type === "hoathinh"
        );
        break;
      case "kinhdi":
        data = movieItems.filter((item) =>
          item.movie.category_slugs.includes("kinh-di")
        );
        break;
      default:
        break;
    }
    setMovies(data);
  }, [movieItems]);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("details", { id: item.movie._id })}
      >
        <Image
          source={{ uri: `${item.movie.thumb_url}` }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style = {styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  );
};


export default AllItemMovie;