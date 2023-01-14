import { Text, View } from "react-native";
import { Card, Rating } from "react-native-elements";
import { color } from "react-native-reanimated";

const RenderBar = ({ bar }) => {
  if (bar) {
    return (
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 25,
          backgroundColor: "#ffe8d6",
        }}
      >
        <Card.Title
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
          }}
        >
          {bar.name}
        </Card.Title>
        <Card.Image source={bar.image}></Card.Image>
        <Text style={{ margin: 20, textAlign: "center" }}>
          {bar.description}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            borderBottomWidth: 2,
            borderRadius: 50,
            marginRight: 20,
            marginLeft: 20,
          }}
        >
          Rate Your Experience at {bar.name}
        </Text>
        <Rating
          showRating
          fractions="{1}"
          startingValue="{3.3}"
          style={{ padding: 5, marginBottom: 25 }}
        />
      </Card>
    );
  }
  return <View />;
};

export default RenderBar;
