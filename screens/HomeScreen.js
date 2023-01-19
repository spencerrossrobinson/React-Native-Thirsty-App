import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import martiniImg from "../assets/images/martini.jpeg";

const HomeScreen = () => {
  return (
    <View>
      <Card
        containerStyle={{
          padding: 3,
          borderColor: "#ffb627",
          borderRadius: 20,
          backgroundColor: "#ffb627",
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
