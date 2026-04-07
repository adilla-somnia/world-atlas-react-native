import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from "../styles/main";
import { useEffect, useState } from "react";
import { Text } from "react-native-paper";



export default function CountryScreen({params}) {
    const [country, setCountry] = useState(null);

    useEffect(() => {

    })

    return (
        <SafeAreaView style={mainStyle.container}>
            <Text>Here you'll see a country</Text>
        </SafeAreaView>
    )
}