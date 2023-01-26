import React, { useState } from "react";
import { View, TextInput, Text, ScrollView } from "react-native";
import { ListItem, SearchBar, Avatar, Badge } from "react-native-elements";
import { BARS } from "../shared/bars";
import { COCKTAIL } from "../shared/cocktail";

const SearchCocktailScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  //   const updateSearch = (search) => {
  //     setSearch(search);
  //     let filteredResults = BARS.filter((bar) =>
  //       bar.name.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setResults(filteredResults);
  //   };
  const updateSearch = (search) => {
    setSearch(search);
    let filteredResults = COCKTAIL.filter((bar) =>
      bar.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <ScrollView>
      <SearchBar
        placeholder="Search for a cocktail..."
        onChangeText={updateSearch}
        value={search}
      />
      {results.map((bar) => (
        <ListItem
          //   onPress={() => navigation.navigate("BarInfo", { bar })}
          //   onPress={() =>
          //     navigation.navigate("Bar Directory", {
          //       screen: "BarInfo",
          //       params: { bar },
          //     })
          //   }
          key={bar.id}
        >
          <View>
            <Avatar source={bar.img} size="xlarge" rounded />
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
              {bar.type} - {bar.prep}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default SearchCocktailScreen;
