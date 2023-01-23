import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import martiniImg from "../assets/images/martini.jpeg";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={1000} delay={500}>
        <Card
          containerStyle={{
            padding: 3,
            borderColor: "#ffb627",
            borderRadius: 20,
            backgroundColor: "#ffb627",
          }}
        >
          <Card.Image
            style={{
              height: 400,
              borderRadius: 15,
            }}
            source={martiniImg}
          ></Card.Image>
          <Card.Divider />
          <Card.Title
            style={{
              color: "white",
              fontSize: 26,
              margin: 5,
              padding: 10,
            }}
          >
            Welcome to Thirsty. Bar and Cocktail App
          </Card.Title>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              padding: 5,
              marginBottom: 10,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis excepturi dolorum reiciendis, ut quam totam earum. Amet
            possimus quo nihil consectetur consequuntur quas. Saepe commodi
            eligendi aperiam maiores dolor.
          </Text>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default HomeScreen;
