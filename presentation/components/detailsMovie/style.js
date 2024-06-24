import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#141714',
  },
  item_poster: {
    width: "100%",
    height: 300,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  item_thumb: {
    width: 170,
    height: 230,
    position: "absolute",
    top: 100,
    marginLeft: 20,
    marginTop: 70,
    backgroundColor: 'red', // Add background color
    shadowColor: "red", // Add shadow color
    shadowOffset: { width: 0, height: 2 }, // Add shadow offset
    shadowOpacity: 0.5, // Add shadow opacity
    elevation: 10, 
    borderRadius: 15, // Border radius for the container
  },

  thumb_image: {
    width: "100%",
    height: "100%",
    borderRadius: 15, // Border radius for the image
  },
  action_header: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  play : {
    position : "absolute",
    top : 270,
    left : 250,
    backgroundColor : 'red',
    padding : 20,
    borderRadius : 50,
  },

  body : {
    marginTop : 120,
    paddingHorizontal : 20,
  },

  episodeContainer: { 
    flex: 1, 
    width : 50,
    margin: 5, 
    alignItems: "center",
    justifyContent: 'center', 
    padding : 7,
    borderRadius : 50
  }, 

  episodeText: { 
    fontSize: 10, 
  },
  columnWrapper: { 
    flexWrap : "wrap",
    alignItems : "center",
    justifyContent : "center"
  },

  episodeList: {
    paddingBottom: 20, 
  },
  episodeListContainer: {
    maxHeight: 150, 
  },
  
  


});

export default styles;
