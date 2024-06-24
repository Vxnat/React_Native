import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
const TypeMovie = ({ type }) => {
  const movieItems = useSelector((state) => state.movie);
  const navigation = useNavigation();
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  useEffect(() => {
    let data;
    switch (type) {
      case "hoathinh":
        data = movieItems.filter(
          (item) => item.movie.type === "hoathinh" && item.movie.year <= 2020
        );
        setTitle("Vương quốc tuổi thơ");
        break;
      case "trailer":
        data = movieItems.filter((item) => item.movie.status === "trailer");
        setTitle("Phim sắp ra mắt");
        break;
      case "haihuoc":
        data = movieItems.filter((item) =>
          item.movie.category_slugs.includes("hai-huoc")
        );
        setTitle("Giải trí nhẹ nhàng thôi");
        break;
      case "anime":
        data = movieItems.filter(
          (item) =>
            item.movie.country[0].slug === "nhat-ban" &&
            item.movie.type === "hoathinh"
        );
        setTitle("Anime đặc sắc");
        break;
      case "kinhdi":
        data = movieItems.filter((item) =>
          item.movie.category_slugs.includes("kinh-di")
        );
        setTitle("Bí kíp trừ tà");
        break;
      default:
        break;
    }
    data = data.slice(0, Math.min(data.length, 10));
    setMovies(data);
    setLoading(false);
  }, [movieItems]);

  if (loading) {
    return <ActivityIndicator color="grey" size={30}></ActivityIndicator>;
  }
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
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('allTypeMovie' , {type : type})}>
          <Icon name="arrow-forward-ios" size={15} color="grey" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TypeMovie;
