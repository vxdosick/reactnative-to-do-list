import { StyleSheet, View, FlatList, Text } from 'react-native';
import React from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App(props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "orange",
      height: "100%"
    },
    container__list: {
      height: 650
    },
  })

  const [listItem, setListItem] = React.useState([])
  const onPressAdd = (text) => {
    setListItem(item => [text, ...item])
    
  }
  const onDeleteHandler = (key) =>{
    setListItem(item => item.filter((_, i) => i !== key ))
  }
  
   return (
    <View style={styles.container}>
      <Header />
      <Form onPressAdd={onPressAdd} />
      <View>
        <FlatList style={styles.container__list} data={listItem} renderItem={({item, index}) => {
          return (
            <ListItem key={index} index={index} text={item} onDeleteHandler={onDeleteHandler} />
          )
        }} />
      </View>
    </View>
  );
}
