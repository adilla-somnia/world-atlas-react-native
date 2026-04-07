import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from "../styles/main";
import { Text } from "react-native-paper";
import BottomBar from "../components/BottomBar";


export default function FavoriteScreen({navigation}) {
    const [favorites, setFavorites] = useState(null);


    return (
        <SafeAreaView style={mainStyle.container}>
            <Text>Here you'll see your favorite countries</Text>

            <BottomBar navigation={navigation} />
        </SafeAreaView>
    )

}