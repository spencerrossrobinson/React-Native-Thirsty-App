import { useState } from "react";
import { FlatList, View } from "react-native";
import { Avatar, ListItem, Badge } from "react-native-elements";
import { BARS } from "../shared/bars";

const DirectoryScreen = ({ navigation }) => {
  const [bars, setBars] = useState(BARS);

  const renderDirectoryItem = ({ item: bar }) => {
    return (
      <ListItem onPress={() => navigation.navigate("BarInfo", { bar })}>
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
