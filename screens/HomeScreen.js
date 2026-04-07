import { Button, Icon, Surface, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { mainStyle } from "../styles/main"
import { useEffect, useState } from "react"
import { getCountries } from "../api/countries";
import BottomBar from "../components/BottomBar";

export default function HomeScreen({navigation}) {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getCountries();
            setCountries(data);
            console.log(data[0])
        }   
        fetchCountries()
    }, [])

    return (
        <SafeAreaView style={mainStyle.container}>
            <Text>Home screen here</Text>

            <BottomBar navigation={navigation} />

        </SafeAreaView>
    )
}