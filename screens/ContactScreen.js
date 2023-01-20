import { View, Text } from "react-native";
import { Input, Card, Button } from "react-native-elements";

const ContactScreen = () => {
  return (
    <Card>
      <Card.Title>Contact Us!</Card.Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Button type="outline" title="Send Us Your Info" />
    </Card>
  );
};

export default ContactScreen;
