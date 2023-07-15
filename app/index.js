import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Parked.</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>
      <Image style={styles.image} source={car} resizeMode="contain" />
      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.options}>
            <MaterialCommunityIcons
              name={item.iconName}
              size={32}
              color="gray"
            />
            <Text style={styles.optionText}>{item.name}</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 3,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#38434D",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
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
