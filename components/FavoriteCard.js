import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Icon, IconButton, Surface, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function FavoriteCard({country}) {
    const name = country.name;
    const capital = country.capital;
    const flag = country.flag;
    const [strName, setStrName] = useState(null);

    useEffect(()=> {
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
                <IconButton size={20} iconColor="red" icon='heart' />
            </SafeAreaView>
        </SafeAreaView>
    )
}