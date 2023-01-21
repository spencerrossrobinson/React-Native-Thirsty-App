import { Text, View } from "react-native";
import { Card, Rating } from "react-native-elements";
import { useState } from "react";

const RenderBar = ({ bar }) => {
  const [rating, setRating] = useState(5);
  if (bar) {
    return (
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 25,
          backgroundColor: "#f7fff7",
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
          {bar.name} - {bar.rating}
        </Card.Title>
        <Card.Image source={bar.image}></Card.Image>
        <Text style={{ margin: 10, textAlign: "center" }}>{bar.money}</Text>
        <Text style={{ marginTop: 5, marginBottom: 20, textAlign: "center" }}>
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
          startingValue={rating}
          imageSize={40}
          onFinishRating={(value) => setRating(value)}
          style={{ padding: 5, marginBottom: 25 }}
        />
      </Card>
    );
  }
  return <View />;
};

export default RenderBar;
