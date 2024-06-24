import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'black',
    paddingTop : 50,
    paddingBottom : 20
  },
  item: {
    width: 100,
    height: 150,
    margin : 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});


export default styles;