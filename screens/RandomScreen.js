import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card, Rating } from "react-native-elements";
import { BARS } from "../shared/bars";
import { useState } from "react";

const selectRandomBar = () => {
  return BARS[Math.floor(BARS.length * Math.random())];
};
const random = selectRandomBar();

const RandomScreen = () => {
  const [bar, setBar] = useState(random);
  const changeBarValue = () => {
    return setBar(BARS[Math.floor(BARS.length * Math.random())]);
  };

  return (
    <View>
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
          fractions="{1}"
          startingValue="{3.3}"
          style={{ padding: 5, marginBottom: 25 }}
        />
      </Card>
      <TouchableOpacity style={styles.button} onPress={changeBarValue}>
        <Text
          style={{
            color: "white",
          }}
        >
          Random Bar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#f95738",
    padding: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    borderRadius: 25,
    marginBottom: 10,
  },
});
export default RandomScreen;
