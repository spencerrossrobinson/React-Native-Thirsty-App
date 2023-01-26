import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { ABOUT } from "../shared/about";

const AboutScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.header}> Find Out About What Our App Offers</Text>
      {ABOUT.map((value) => {
        return (
          <Card
            containerStyle={{ padding: 0, borderRadius: 20 }}
            key={value.id}
          >
            <Card.Image
              source={value.image}
              style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            >
              <View style={{ justifyContent: "center", flex: 1 }}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 40,
                    fontWeight: "bold",
                  }}
                >
                  {value.name}
                </Text>
              </View>
            </Card.Image>
            <Text style={{ margin: 20, textAlign: "center" }}>
              {value.description}
            </Text>
          </Card>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 32,
    margin: 10,
    backgroundColor: "#ffb627",
    padding: 10,
    borderRadius: 20,
    color: "white",
    borderColor: "white",
    borderWidth: 5,
  },
});

export default AboutScreen;
