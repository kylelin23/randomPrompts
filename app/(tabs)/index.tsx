import { Text, StyleSheet, View } from 'react-native';
import { SquishButton } from 'react-native-squish-button';
import * as Svg from 'react-native-svg';

export default function HomeScreen() {
  return (
    <View style = {styles.screenContainer}>
      <Text style = {styles.generated}>Jeongin</Text>
      <View style = {{height: 100}}>
        <SquishButton
          height = {100}
          width = {180}
          color="#4E5372"
          squish={7}
          radius={5}
          text="Generate!"
          textStyle={{
            color: 'white',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },

  generated: {
    fontSize: 70,
  },

  container2: {
    backgroundColor: 'green',
  },
});