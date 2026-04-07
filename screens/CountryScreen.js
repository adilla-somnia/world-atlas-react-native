import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from "../styles/main";
import { useEffect, useState } from "react";
import { Appbar, Text } from "react-native-paper";
import { Image, ScrollView, ScrollViewBase, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppBar from "../components/AppBar";

export default function CountryScreen({ route }) {
  const { country } = route.params;
  const [name, setName] = useState('')
  const [flag, setFlag] = useState('')
  const [capital, setCapital] = useState('')
  const [region, setRegion] = useState('')
  const [subregion, setSubregion] = useState('')
  const [area, setArea] = useState(0)
  const [population, setPopulation] = useState(0)
  const [firstCurrency, setFirstCurrency] = useState('')
  const [code, setCode] = useState('');
  const [languagesList, setLanguagesList] = useState([]);
const [isFavorite, setIsFavorite] = useState(false)
  const borders = country.borders;

  useEffect(() => {
    if (country.name.official != '') {
        setName(country.name.official)
    }
  if (country.flags.png) {
    setFlag(country.flags.png)
  }
  if (country.capital[0]) {
    setCapital(country.capital[0])
  }
  if (country.region) {
    setRegion(country.region)
  }
  if (country.subregion) {
    setSubregion(country.subregion)
  }
  if (country.population.valueOf() > 0) {
    setPopulation(country.population.valueOf())
  }
    if (country.area.valueOf()> 0) {
        setArea(country.area.valueOf())
    }
  if (Object.values(country.currencies)[0]) {
    setFirstCurrency(Object.values(country.currencies)[0])
  }
    if (Object.keys(country.currencies)[0]) {
        setCode(Object.keys(country.currencies)[0])
    } // "XOF"
  if (country.languages) {
    setLanguagesList(country.languages)
  };
  })

// handling favorites logic

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#120f27' }}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
        <StatusBar style="light" />
        <AppBar />
      {/* Top flag + name section */}
      <SafeAreaView
        style={{
          backgroundColor: "rgb(25, 22, 26)",
          width: "100%",
          padding: 30,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={{ uri: flag }} style={{ width: 200, height: 130 }} />
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color:'white' }}>
          {name}
        </Text>
        <Text style={{ fontSize: 17, textAlign: "center", color:'white' }}>
          {subregion} - {region}
        </Text>
      </SafeAreaView>

      {/* 2x2 grid section */}
      <SafeAreaView style={mainStyle.gridContainer}>
        <SafeAreaView style={mainStyle.gridCard}>
          <Text style={mainStyle.gridTitle}>Capital</Text>
          <Text style={mainStyle.gridValue}>{capital}</Text>
        </SafeAreaView>
        <SafeAreaView style={mainStyle.gridCard}>
          <Text style={mainStyle.gridTitle}>População</Text>
          <Text style={mainStyle.gridValue}>
            {population.toLocaleString("pt-BR")}
          </Text>
        </SafeAreaView>
        <SafeAreaView style={mainStyle.gridCard}>
          <Text style={mainStyle.gridTitle}>Área</Text>
          <Text style={mainStyle.gridValue}>
            {area.toLocaleString("pt-BR")} km²
          </Text>
        </SafeAreaView>
        <SafeAreaView style={mainStyle.gridCard}>
          <Text style={mainStyle.gridTitle}>Moeda</Text>
          <Text style={mainStyle.gridValue}>
            {firstCurrency.name} ({code})
          </Text>
        </SafeAreaView>
      </SafeAreaView>

      {/* Languages horizontal scroll */}
      <SafeAreaView
        style={[
          mainStyle.container,
          {
            width: "100%",
            paddingHorizontal: 20,
            paddingTop: 10,
            alignItems: "baseline",
          },
        ]}
      >
        <Text style={{ fontSize: 18, marginBottom: 8, alignSelf: "baseline", color:'white' }}>
          Idiomas oficiais
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            gap: 8,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {Object.values(languagesList).map((value, index) => (
            <SafeAreaView
              key={index}
              style={{
                backgroundColor: "#beb6b6",
                paddingHorizontal: 10,
                paddingBottom: 10,
                paddingTop: -10,
                borderRadius: 20,
                marginRight: 10,
                display: "flex",
                alignContent: "center",
                alignItems: "stretch",
                justifyContent: "center",
                alignSelf: "flex-start",
              }}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ alignSelf: "center" }}
              >
                {value}
              </Text>
            </SafeAreaView>
          ))}
        </ScrollView>
      </SafeAreaView>

      {/* Languages horizontal scroll */}
      <SafeAreaView
        style={[
          mainStyle.container,
          {
            width: "100%",
            paddingHorizontal: 20,
            paddingTop: 10,
            alignItems: "baseline",
          },
        ]}
      >
        <Text style={{ fontSize: 18, marginBottom: 8, alignSelf: "baseline", color:'white' }}>
          Paises Fronteiriços
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            gap: 8,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {Object.values(borders).length > 0 ? Object.values(borders).map((value, index) => (
            <SafeAreaView
              key={index}
              style={{
                backgroundColor: "#beb6b6",
                paddingHorizontal: 10,
                paddingBottom: 10,
                paddingTop: -10,
                borderRadius: 20,
                marginRight: 10,
                display: "flex",
                alignContent: "center",
                alignItems: "stretch",
                justifyContent: "center",
                alignSelf: "flex-start",
              }}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ alignSelf: "center" }}
              >
                {value}
              </Text>
            </SafeAreaView>
          )) : <SafeAreaView style={{ backgroundColor: "#beb6b6",
                paddingHorizontal: 10,
                paddingBottom: 10,
                paddingTop: -10,
                borderRadius: 20,
                marginRight: 10,
                display: "flex",
                alignContent: "center",
                alignItems: "stretch",
                justifyContent: "center",
                alignSelf: "flex-start"}}> <Text>Não há</Text></SafeAreaView>}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        
        style={{
          backgroundColor: isFavorite ? 'gold' : '#ccc',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text>{isFavorite ? '★ Favorite' : '☆ Add to Favorites'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
