import { Text, View } from "react-native";
import { Card, Rating } from "react-native-elements";

const RenderBar = ({ bar }) => {
  if (bar) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Title
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {bar.name}
        </Card.Title>
        <Card.Image source={bar.image}></Card.Image>
        <Text style={{ margin: 20 }}>{bar.description}</Text>
        <Rating showRating fractions="{1}" startingValue="{3.3}" />
      </Card>
    );
  }
  return <View />;
};

export default RenderBar;
