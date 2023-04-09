import React from 'react';
import { StatusBar, StyleSheet,SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import {GameScreen} from './src/GameScreen'
import  store  from './src/store';



export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainContainer}>
        <GameScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#000',
   marginTop: StatusBar.currentHeight
  }
});