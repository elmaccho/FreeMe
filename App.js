import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartingLogo from './components/StartingLogo';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <StartingLogo/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
