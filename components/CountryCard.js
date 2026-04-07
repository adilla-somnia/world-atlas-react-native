import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Icon, IconButton, Surface, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CountryCard({navigation, country}) {
    const name = country.name.official;
    const capital = country.capital[0];
    const population = country.population.valueOf();
    const flag = country.flags.png;
    const [strPopulation, setStrPopulation] = useState(null);
    const [strName, setStrName] = useState(null);

    useEffect(()=> {
        if (population / 1000000000 > 1 ) {
            setStrPopulation(`${(population/1000000000).toFixed(0)} bi`)
        }
        else if (population / 1000000 < 1 ) {
            setStrPopulation(`${(population/1000).toFixed(0)} mil`)
        }
        else {
            setStrPopulation(`${(population/1000000).toFixed(0)} mi`)
        }

        if (name.length > 18) {
            setStrName(`${name.slice(0,16)}...`)
        } else {
            setStrName(name)
        }
    })


    return (
        <SafeAreaView style={{alignItems: 'center', padding:10, gap:10, justifyContent:'space-between', paddingTop:-20, display:'flex', flexDirection:'row', borderRadius: 5, borderBottomWidth: 1, borderColor:'gray'}}>
            <SafeAreaView>
            <Image source={{ uri: flag}}
            style={{width:64, height:35}}></Image>
            </SafeAreaView>
            <SafeAreaView>
                <Text style={{fontSize: 17, fontWeight: 'bold', color:'white'}}>{strName}</Text>
                <Text style={{color:'white'}}>{capital}</Text>
            </SafeAreaView>
            <SafeAreaView style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{fontSize:16, color:'white'}}>{strPopulation}</Text>
                <IconButton size={20} iconColor="white" icon='arrow-right' onPress={(() => navigation.navigate('Country', {country: country}))} />
            </SafeAreaView>
        </SafeAreaView>
    )
}