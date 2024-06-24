import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import DetailMovieScreen from "../pages/details/details_screen";
import HomeScreen from "../pages/home/home_screen";
import VideoScreen from "../pages/video/video_screen";
import TypeMovieScreen from "../pages/typeMovie/typeMovie_screen";

const Stack = createStackNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
      >
        <Stack.Screen name='inApp'component={InAppNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const InAppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={DetailMovieScreen} />
      <Stack.Screen name="allTypeMovie" component={TypeMovieScreen} />
      <Stack.Screen name="videoPlayer" component={VideoScreen} />
    </Stack.Navigator>
  );
};
