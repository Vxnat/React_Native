import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { FIRESTORE } from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { setMovieItem } from "../../presentation/redux/actions";
const dispatch = useDispatch();
const MOVIE_DETAILS_COLLECTION = collection(FIRESTORE,'movies_detail');
useEffect(() => {
  const unsubcribe = onSnapshot(MOVIE_DETAILS_COLLECTION,(snapshot) => {
    const data = [];
    snapshot.forEach((doc) => {
      data.push({id: doc.id, ...doc.data()})
    })
    dispatch(setMovieItem(data));
  });
  return () => unsubcribe();

}, [dispatch]);
