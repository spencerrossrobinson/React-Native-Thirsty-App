import { Text, View } from "react-native";
import { Switch, CheckBox, Button } from "react-native-elements";
import { useState } from "react";

const SelectScreen = () => {
  const [select, setSelect] = useState(false);
  const Test = () => {
    return <Text>asdfljkhas;dlofhiasdjkf fuck me</Text>;
  };
  const Test2 = () => {
    if (select === true) {
      return <Test />;
    }
  };
  const resetForm = () => {
    setSelect(false);
  };
  return (
    <View>
      <Text>asdfasdf</Text>
      <CheckBox
        title="Click Here"
        checked={select}
        onPress={() => setSelect(true)}
      />
      <Button title="reset" onPress={() => resetForm()} />
      <Test2 />
    </View>
  );
};
export default SelectScreen;

// if statement with a set state source of truth, return true, slowly work through little by little for each switch boolean condition, filter for true
