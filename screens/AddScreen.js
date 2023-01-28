import { ScrollView } from "react-native";
import { View, Text } from "react-native-animatable";
import { Card, Input } from "react-native-elements";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddScreen = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title>Send Us Info On Your Bar</Card.Title>
          <Input
            placeholder="Bar Name"
            leftIcon={{ type: "font-awesome", name: "user-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(value) => setName(value)}
            value={name}
          />
          <Input
            placeholder="Country"
            leftIcon={{ type: "font-awesome", name: "comment-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(value) => setCountry(value)}
            value={country}
          />
        </Card>
        <TouchableOpacity>
          <Text>Submit Your Bar Here</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddScreen;
