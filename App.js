
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import Header from './components/Header';
import uuid from 'uuid-random';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'HTML' },
    { id: uuid(), text: 'CSS' },
    { id: uuid(), text: 'JS' },
    { id: uuid(), text: 'PHP' },
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)

    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        "ERROR",
        " กรุณาป้อนข้อมูล",
        [           
          { text: "OK"}
        ]
      );
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      })
    }

  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (<ListItem item={item}
          deleteItem={deleteItem} />)} />
    </View>
  )
}


const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    paddingTop: 2
  },

})


export default App;
