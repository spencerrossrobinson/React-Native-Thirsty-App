import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderBar = ({ bar }) => {
  if (bar) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={bar.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {bar.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{bar.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderBar;
