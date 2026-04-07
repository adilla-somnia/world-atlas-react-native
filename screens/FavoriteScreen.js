import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from "../styles/main";
import { Icon, Text } from "react-native-paper";
import BottomBar from "../components/BottomBar";
import AppBar from "../components/AppBar";
import FavoriteCard from "../components/FavoriteCard";


export default function FavoriteScreen({ navigation }) {
  const [favorites, setFavorites] = useState(null);
  const [countCountry, setCountCountry] = useState(0)

  useEffect(() => {
    const mockFavorites = [
      {
        name: "Republic of Côte d'Ivoire",
        capital: 'Yamoussoukro',
        flag: 'https://flagcdn.com/w320/ci.png'
      }, 
      {
        name: 'Italian Republic',
        capital: 'Rome',
        flag: "https://flagcdn.com/w320/it.png"
      }
    ];

    setFavorites(mockFavorites);
    setCountCountry(mockFavorites.length)
  }, []);

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: "black", alignItems: "center"}}>
      <AppBar title='Favoritos' subtitle={`${countCountry} paises salvos`} />
      <Text style={{color:'white', alignSelf: 'baseline', marginLeft: 15, marginTop: 10, fontSize: 18}}>Salvos localmente</Text>
    <SafeAreaView>
      {favorites ? (
        favorites.map(e => (
          <FavoriteCard key={e.name} country={e} />
        ))
      ) : (
        <Text>Sem favoritos</Text>
      )}
    </SafeAreaView>

    <Text style={{color:'white', marginTop: 80}}>Favorite um pais na pagina de perfil dele</Text>
      <BottomBar navigation={navigation} />
    </SafeAreaView>
  );
}