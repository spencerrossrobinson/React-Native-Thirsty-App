import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { useState } from "react";
import { DRINK } from "../shared/drink";
import { CONTACT } from "../shared/contact";
import { RANDOM } from "../shared/random";

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

const AboutScreen = () => {
  const [drink, setDrink] = useState(DRINK);
  const [contact, setContact] = useState(CONTACT);
  const [random, setRandom] = useState(RANDOM);

  const featDrink = drink.find((item) => item.featured);
  const featRandom = random.find((item) => item.featured);
  const featContact = contact.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featDrink} />
      <FeaturedItem item={featRandom} />
      <FeaturedItem item={featContact} />
    </ScrollView>
  );
};

export default AboutScreen;
