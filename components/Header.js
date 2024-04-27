import { StyleSheet, View, Text } from "react-native"

export default function Header() {
    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
          backgroundColor: "orange",
          paddingBottom: 20,
          borderBottomWidth: 1,
          borderColor: "rgb(100,50,200)"
        },
        container__title: {
            textAlign: "center",
            color: "rgb(100,50,200)",
            fontSize: 20,
            fontWeight: "bold",
        }
      })
    return (
        <View style={styles.container}>
            <Text style={styles.container__title}>To Do List</Text>
        </View>
    )
}