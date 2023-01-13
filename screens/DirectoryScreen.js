import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { BARS } from "../shared/bars";

const DirectoryScreen = ({ navigation }) => {
  const [bars, setBars] = useState(BARS);

  const renderDirectoryItem = ({ item: bar }) => {
    return (
      <ListItem onPress={() => navigation.navigate("BarInfo", { bar })}>
        <Avatar source={bar.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{bar.name}</ListItem.Title>
          <ListItem.Subtitle>{bar.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={bars}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
