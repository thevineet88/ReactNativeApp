import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
//import { Button } from 'material-bread'

import Todo from './Components/Todo'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.sample}>Welcome to the React Mobile App</Text> */}
      {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /> */}

        <Button type="contained" title="Click Me" color="#841584" value={'abc'}></Button>
        <Todo value="This is the value" />
    </View>
  );
}

const ButtonFunction = () => {
  console.log("Button was pressed")
  //<Text>Text</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sample : {
    width : '70%',
    color : 'green'
  }
});
