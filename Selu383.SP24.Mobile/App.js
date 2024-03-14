import { React, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter location here"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8b4fe",
    alignItems: "center",
    justifyContent: "center",
  },
});
