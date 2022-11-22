import { View, Text, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.temp}>
      <Text>AAAAA</Text>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  temp: {
    color: "red",
  },
});
