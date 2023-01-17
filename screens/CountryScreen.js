import { Text, View, ScrollView } from "react-native";
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
      <Button
        title="Explore USA"
        onPress={() => navigation.navigate("U.S.A")}
      />
      <FeaturedItem item={featSpain} />
      <Button
        title="Explore Spain"
        onPress={() => navigation.navigate("Spain")}
      />
      <FeaturedItem item={featFrance} />
      <Button
        title="Explore France"
        onPress={() => navigation.navigate("France")}
      />
    </ScrollView>
  );
};

export default CountryScreen;
