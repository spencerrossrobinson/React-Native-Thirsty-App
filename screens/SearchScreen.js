import React, { useState } from "react";
import { View, TextInput, Text, ScrollView } from "react-native";
import { ListItem, SearchBar, Avatar, Badge } from "react-native-elements";
import { BARS } from "../shared/bars";
import { COCKTAIL } from "../shared/cocktail";

// const BARS = [
//   {
//     name: 'Bar 1',
//     image: 'https://example.com/bar1.jpg',
//     location: 'New York',
//     description: 'A cool bar in New York City'
//   },
//   {
//     name: 'Bar 2',
//     image: 'https://example.com/bar2.jpg',
//     location: 'Los Angeles',
//     description: 'A trendy bar in Los Angeles'
//   },
//   {
//     name: 'Bar 3',
//     image: 'https://example.com/bar3.jpg',
//     location: 'Chicago',
//     description: 'A cozy bar in Chicago'
//   }
// ];

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
    let filteredResults = BARS.filter((bar) =>
      bar.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filteredResults);
  };
  //   const updateSearchCocktail = (search) => {
  //     setSearch(search);
  //     let filteredResults = COCKTAIL.filter((bar) =>
  //       bar.name.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setResults(filteredResults);
  //   };

  return (
    <ScrollView>
      <SearchBar
        placeholder="Search for a bar..."
        onChangeText={updateSearch}
        value={search}
      />
      {results.map((bar) => (
        <ListItem
          onPress={() =>
            navigation.navigate("Bar Directory", {
              screen: "BarInfo",
              params: { bar },
            })
          }
          key={bar.id}
        >
          <View>
            <Avatar source={bar.image} size="xlarge" rounded />
            <Badge
              value={bar.rating}
              status="success"
              textStyle={{ fontSize: 16 }}
              containerStyle={{
                position: "absolute",
              }}
              badgeStyle={{ height: 30, width: 50 }}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>{bar.name}</ListItem.Title>
            <ListItem.Subtitle>
              {bar.location} - {bar.money}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default SearchScreen;
