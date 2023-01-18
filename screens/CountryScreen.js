import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button, Card } from "react-native-elements";
import { useState } from "react";
import { FRANCE } from "../shared/franceCities";
import { USA } from "../shared/usaCities";
import { SPAIN } from "../shared/spainCities";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0, borderRadius: 20 }}>
        <Card.Image
          source={item.image}
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        >
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const CountryScreen = ({ navigation }) => {
  const [usa, setUSA] = useState(USA);
  const [spain, setSpain] = useState(SPAIN);
  const [france, setFRANCE] = useState(FRANCE);

  const featUsa = usa.find((item) => item.featured);
  const featSpain = spain.find((item) => item.featured);
  const featFrance = france.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featUsa} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("U.S.A")}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Explore U.S.A
        </Text>
      </TouchableOpacity>
      <FeaturedItem item={featSpain} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Spain")}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Explore Spain
        </Text>
      </TouchableOpacity>
      <FeaturedItem item={featFrance} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("France")}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Explore France
        </Text>
      </TouchableOpacity>
    </ScrollView>
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

export default CountryScreen;
