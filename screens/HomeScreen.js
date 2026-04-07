import {
  Button,
  Icon,
  Searchbar,
  Surface,
  Text,
  ToggleButton,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyle } from "../styles/main";
import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import BottomBar from "../components/BottomBar";
import AppBar from "../components/AppBar";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import CountryCard from "../components/CountryCard";
import { StatusBar } from "expo-status-bar";

// regions dict

const regions_regions = {
  América: "Americas",
  África: "Africa",
  Europa: "Europe",
  Ásia: "Asia",
  Oceania: "Oceania",
};

export default function HomeScreen({ navigation }) {
  const [countries, setCountries] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const filters = ["Todos", "América", "Europa", "Ásia", "África", "Oceania"];
  const [activeFilter, setActiveFilter] = useState("Todos");
  const sortingOptions = [
    "Most Population",
    "Less Population",
    "Most Area",
    "Less Area",
  ];
  const [activeSort, setActiveSort] = useState(null); // null = no sorting

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setCountries(data);
      console.log(data[0]);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    console.log(searchQuery);
  });

  const filteredCountries = countries
    ? Object.values(countries).filter((country) => {
        // Filter by region first
        const matchesRegion =
          activeFilter === "Todos" ||
          country.region === regions_regions[activeFilter];

        // Filter by search query (case-insensitive)
        const matchesSearch = country.name.official
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchesRegion && matchesSearch;
      })
    : [];

  const sortedCountries = [...filteredCountries];

  if (activeSort) {
    switch (activeSort) {
      case "Most Population":
        sortedCountries.sort((a, b) => b.population - a.population);
        break;
      case "Less Population":
        sortedCountries.sort((a, b) => a.population - b.population);
        break;
      case "Most Area":
        sortedCountries.sort((a, b) => b.area - a.area);
        break;
      case "Less Area":
        sortedCountries.sort((a, b) => a.area - b.area);
        break;
    }
  }

  const renderItem = ({ item }) => (
    <CountryCard navigation={navigation} country={item} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#120f27" }}>
      <StatusBar style="light" />

      {/* App Bar */}
      <AppBar title="Atlas Mundial" subtitle="250 países" />

      {/* FlatList for scrolling content */}
      <FlatList
        data={sortedCountries}
        keyExtractor={(item) => item.name.official}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            {/* Search + filters */}
            <SafeAreaView
              style={{
                padding: 10,
                marginTop: 0,
                paddingTop: 0,
                backgroundColor: "#120f27",
              }}
            >
              <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                mode="view"
                theme="light"
                inputStyle={{ color: "white" }}
                style={{ backgroundColor: "#090713", borderRadius: 10 }}
                placeholderTextColor="grey"
              />

              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filters}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                  const isActive = activeFilter === item;
                  return (
                    <TouchableOpacity
                      style={[
                        mainStyle.button,
                        isActive && mainStyle.activeButton,
                      ]}
                      onPress={() => setActiveFilter(item)}
                    >
                      <Text
                        style={[
                          mainStyle.text,
                          isActive && mainStyle.activeText,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                contentContainerStyle={{ paddingVertical: 10, gap: 6 }}
              />
              {/* Sorting filters */}
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={sortingOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                  const isActive = activeSort === item;
                  return (
                    <TouchableOpacity
                      style={[
                        mainStyle.button,
                        isActive && mainStyle.activeButton,
                        { marginRight: 8 },
                      ]}
                      onPress={() => setActiveSort(item)}
                    >
                      <Text
                        style={[
                          mainStyle.text,
                          isActive && mainStyle.activeText,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                contentContainerStyle={{ paddingVertical: 10 }}
              />
            </SafeAreaView>
          </>
        }
      />

      {/* Fixed BottomBar */}
      <BottomBar
        navigation={navigation}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      />
    </SafeAreaView>
  );
}
