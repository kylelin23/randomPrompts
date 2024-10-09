import { Text, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {styles.screenContainer}>
      <Text>Random! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
