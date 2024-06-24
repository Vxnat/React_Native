import TrendingMovie from "../../components/trendingMovie/trending_movie";
import { View, Text, ScrollView } from "react-native";
import { collection  , limit, onSnapshot, query } from "firebase/firestore";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5'
import TypeMovie from "../../components/typeMovie/typeMovie";
import { useDispatch } from "react-redux";
import { FIRESTORE } from '../../../firebaseConfig'
import { useEffect } from "react";
import { setMovieItemDetails } from "../../redux/actions";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const MOVIES_DETAIL_COLLECTION = collection(FIRESTORE, "movies_detail");
  useEffect(() => {
    const q = query(MOVIES_DETAIL_COLLECTION , limit(100));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch(setMovieItemDetails(data));
    });

    return () => unsubscribe();
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            MovieApp
          </Text>
        </View>
        <View>
          <Icon name="search" size={20} color='grey' />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} styles ={styles.body}>
        <TrendingMovie />
        <TypeMovie type={'hoathinh'}/>
        <TypeMovie type={'trailer'}/>
        <TypeMovie type={'haihuoc'}/>
        <TypeMovie type={'anime'}/>
        <TypeMovie type={'kinhdi'}/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
