import { Pressable } from "react-native";
import { Icon, Surface, Text } from "react-native-paper";

export default function AppBar({ title, subtitle }) {
  return (
    <Surface
      style={{
        position: "static",
        top: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingBottom: 15,
        borderColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 5,
        backgroundColor:'#090713'
      }}
    >
      <Text style={{fontSize: 30, fontWeight: 'bold', paddingTop: 30, paddingLeft: 15, color:'white'}}>{title}</Text>
      <Text style={{fontSize: 15, paddingLeft: 15, color:'white'}}>{subtitle}</Text>
    </Surface>
  );
}
