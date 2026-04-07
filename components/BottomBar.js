import { Pressable } from "react-native";
import { Icon, Surface, Text } from "react-native-paper";

export default function BottomBar({ navigation }) {
  return (
    <Surface
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Icon size={30} source="home" /> <Text>Home</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("Favorite")}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Icon size={30} source="heart" /> <Text>Favorites</Text>
      </Pressable>
    </Surface>
  );
}
