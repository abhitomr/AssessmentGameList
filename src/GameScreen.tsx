import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState, Game } from '../type';

export const GameScreen: React.FC = () => {

  const games = useSelector((state: AppState) => state.games);

  const onClick = (text: string) => {
    Alert.alert(text, `Game card with title name ${text} is clicked!`, [
      
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  }

  const bottomDesscription = (textHead: string, text: string) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.head}>
          {textHead} :
        </Text>
        <Text style={styles.description}>
          {text}
        </Text>
      </View>
    )
  }

  const renderGame = (game: Game) => (
    <TouchableOpacity activeOpacity={0.5} onPress={() => {
      onClick(game.title)
    }}>
      <View key={game.id} style={styles.card}>
        <Text style={styles.title}>{game.title}</Text>
        {bottomDesscription("Publisher", game.publisher)}
        {bottomDesscription("Genre", game.genre)}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.flatlistView}>
      <FlatList
        data={games?.games}
        scrollEnabled={true}
        renderItem={({ item }) => renderGame(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlistView: { flex: 1, paddingVertical: 15, paddingHorizontal: 5 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 10,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    flexWrap: 'wrap'
  },
  description: {
    flex: 1,
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 5,
    flexWrap: 'wrap',
  },
  head: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold'
  }
});