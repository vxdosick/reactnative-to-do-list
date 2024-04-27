import { StyleSheet, View, TextInput, Button } from "react-native"
import React from "react"

export default function Form(props) {
    const styles = StyleSheet.create({
        input: {
         borderBottomWidth: 1,
         padding: 20,
        borderColor: "rgb(100,50,200)",
        },
      })
      
      const [text, setText] = React.useState('')
      const onChange = (event) => {
        setText(event)
      }
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Enter your task..."/>
            <Button title="Add" onPress={() => props.onPressAdd(text)} color="black" />
        </View>
    )
}