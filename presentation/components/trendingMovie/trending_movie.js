import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
const TrendingMovie = () => {
  const movieItems = useSelector((state) => state.movie);
  const navigation = useNavigation();
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    let data = movieItems.filter((item) => item.movie.year === 2024);
    setTrendingMovie(data);
  }, [movieItems]);

  const renderItemPlaceholder = () => (
    <View style={styles.item}>
      <View style={styles.image}>
        <View style={styles.placeholder}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      </View>
    </View>
  );

  const renderMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("details", { id: item.movie._id })}
    >
      <Image
        source={{ uri: `${item.movie.thumb_url}` }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          marginVertical: 20,
        }}
      >
        Trending
      </Text>
      {trendingMovie.length != 0 ? (
        <FlatList
          style={{ marginBottom: 20 }}
          data={trendingMovie}
          renderItem={renderMovie}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <FlatList
          style={{ marginBottom: 20 }}
          data={Array(3).fill({})}
          renderItem={renderItemPlaceholder}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default TrendingMovie;
