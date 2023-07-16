import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const menuOption = ({ item }) => {
  return (
    <View style={styles.options}>
      <MaterialCommunityIcons name={item.iconName} size={32} color="gray" />
      <Text style={styles.optionText}>{item.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  optionText: {
    fontSize: 18,
    paddingLeft: 8,
    color: "#eee",
    fontWeight: "bold",
  },
});

export default menuOption;
