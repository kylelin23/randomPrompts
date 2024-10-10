import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SquishButton } from 'react-native-squish-button';
import * as Svg from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const [text, setText] = React.useState("Press Button!")
  // const SKZevent = () => {
  //   const skz = [
  //     'Bang Chan',
  //     'Changbin',
  //     'Han',
  //     'Felix',
  //     'Hyunjin',
  //     'Lee Know',
  //     'Jeongin',
  //     'Seungmin',
  //   ]
  //   const num = Math.floor(Math.random() * skz.length)
  //   setText(skz[num])
  // }

  const magicEightBall = () => {
    const choices = [
      'Absolutely!',
      'Yes!!!',
      'I\'m not sure',
      'Maybe...',
      'Nah',
      'Uh oh',
    ]
    const num = Math.floor(Math.random() * choices.length)
    setText(choices[num])
  }



  return (
    <LinearGradient colors = {['rgb(39, 50, 92)', 'white']}
    style = {styles.screenContainer}>
      <Text style = {styles.generated}>{text}</Text>
      <TouchableOpacity onPress = {magicEightBall} style = {{height: 100}}>
        <SquishButton
          height = {100}
          width = {180}
          color="#4E5372"
          squish={50}
          radius={5}
          text="Shake!"
          textStyle={{
            color: 'white',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        />
      </TouchableOpacity>
    </LinearGradient>
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
    fontSize: 50,
    textAlign: 'center',
  },
});