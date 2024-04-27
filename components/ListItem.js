import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default function ListItem(props) {
    const styles = StyleSheet.create({
        container: {
          paddingTop: 20,
          backgroundColor: "orange",
          paddingBottom: 20,
          paddingLeft: 20,
          borderBottomWidth: 1,
          borderColor: "rgb(100,50,200)",
        },
        container__title: {
            color: "rgb(100,50,200)",
            fontSize: 18,
            fontWeight: "bold",
        }
      })
    return (
        <TouchableOpacity onPress={() => props.onDeleteHandler(props.index)} activeOpacity={0.4} style={styles.container}>
            <Text style={styles.container__title}>
                - {props.text}
            </Text>
        </TouchableOpacity>
    )
}