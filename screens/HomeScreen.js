import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import martiniImg from "../assets/images/martini.jpeg";

const HomeScreen = () => {
  return (
    <View>
      <Card
        containerStyle={{
          padding: 3,
          borderColor: "#0d3b66",
          borderRadius: 20,
          backgroundColor: "#0d3b66",
        }}
      >
        <Card.Image
          style={{ height: 400, borderRadius: 20 }}
          source={martiniImg}
        ></Card.Image>
      </Card>
    </View>
  );
};

export default HomeScreen;
