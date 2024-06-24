import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './presentation/pages/home/home_screen';
import { Provider } from 'react-redux';
import store from './presentation/redux/store'
import { AppNavigation } from './presentation/navigation/app_navigation';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
