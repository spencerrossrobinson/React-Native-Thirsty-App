import { Text, View, ScrollView } from "react-native";
import {
  Switch,
  CheckBox,
  Button,
  ListItem,
  Card,
  Avatar,
} from "react-native-elements";
import { useState } from "react";
import { COCKTAIL } from "../shared/cocktail";

const SelectScreen = () => {
  const filterGin = COCKTAIL.filter((value) => value.type === "gin");
  const filterGinBalanced = COCKTAIL.filter(
    (value) => value.taste === "balanced" && value.type === "gin"
  );
  const filterGinBoozy = COCKTAIL.filter(
    (value) => value.taste === "boozy" && value.type === "gin"
  );
  const filterWhiskey = COCKTAIL.filter((value) => value.type === "whiskey");
  const filterWhiskeyBalanced = COCKTAIL.filter(
    (value) => value.taste === "balanced" && value.type === "whiskey"
  );
  const filterWhiskeyBoozy = COCKTAIL.filter(
    (value) => value.taste === "boozy" && value.type === "whiskey"
  );
  const [gin, setGin] = useState(false);
  const [whiskey, setWhiskey] = useState(false);
  const [balanced, setBalanced] = useState(false);
  const [boozy, setBoozy] = useState(false);

  const Gin = () => {
    return (
      <Card>
        <Card.Title>Gin</Card.Title>
        <Card.Divider />
        {filterGin.map((value) => {
          return (
            <ListItem key={value.id}>
              <Avatar rounded source={value.img} />
              <ListItem.Content>
                <ListItem.Title>{value.name}</ListItem.Title>
                <ListItem.Subtitle>{value.type}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    );
  };
  const Whiskey = () => {
    return (
      <Card>
        <Card.Title>Whiskey</Card.Title>
        <Card.Divider />
        {filterWhiskey.map((value) => {
          return (
            <ListItem key={value.id}>
              <Avatar rounded source={value.img} />
              <ListItem.Content>
                <ListItem.Title>{value.name}</ListItem.Title>
                <ListItem.Subtitle>{value.type}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </Card>
    );
  };
  const WhiskeySelector = () => {
    if (whiskey === true && balanced === true) {
      return (
        <Card
          containerStyle={{
            padding: 0,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "#e2711d",
          }}
        >
          {filterWhiskeyBalanced.map((value) => {
            return (
              <View
                key={value.id}
                style={{
                  margin: 20,
                  backgroundColor: "#ffc971",
                  borderRadius: 20,
                }}
              >
                <Card.Image
                  source={value.img}
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
                      {value.name}
                    </Text>
                  </View>
                </Card.Image>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.prep}
                </Text>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.style}
                </Text>
              </View>
            );
          })}
        </Card>
      );
    }
    if (whiskey === true && boozy === true) {
      return (
        <Card
          containerStyle={{
            padding: 0,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "#e2711d",
          }}
        >
          {filterWhiskeyBoozy.map((value) => {
            return (
              <View
                key={value.id}
                style={{
                  margin: 20,
                  backgroundColor: "#ffc971",
                  borderRadius: 20,
                }}
              >
                <Card.Image
                  source={value.img}
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
                      {value.name}
                    </Text>
                  </View>
                </Card.Image>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.prep}
                </Text>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.style}
                </Text>
              </View>
            );
          })}
        </Card>
      );
    }
  };

  const GinSelector = () => {
    if (gin === true && balanced === true) {
      return (
        <Card
          containerStyle={{
            padding: 0,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "#e2711d",
          }}
        >
          {filterGinBalanced.map((value) => {
            return (
              <View
                key={value.id}
                style={{
                  margin: 20,
                  backgroundColor: "#ffc971",
                  borderRadius: 20,
                }}
              >
                <Card.Image
                  source={value.img}
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
                      {value.name}
                    </Text>
                  </View>
                </Card.Image>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.prep}
                </Text>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.style}
                </Text>
              </View>
            );
          })}
        </Card>
      );
    }
    if (gin === true && boozy === true) {
      return (
        <Card
          containerStyle={{
            padding: 0,
            borderRadius: 20,
            margin: 10,
            backgroundColor: "#e2711d",
          }}
        >
          {filterGinBoozy.map((value) => {
            return (
              <View
                key={value.id}
                style={{
                  margin: 20,
                  backgroundColor: "#ffc971",
                  borderRadius: 20,
                }}
              >
                <Card.Image
                  source={value.img}
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
                      {value.name}
                    </Text>
                  </View>
                </Card.Image>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.prep}
                </Text>
                <Text style={{ margin: 20, textAlign: "center" }}>
                  {value.style}
                </Text>
              </View>
            );
          })}
        </Card>
      );
    }
  };

  const BalNBoozy = () => {
    return (
      <View>
        <Text>Balanced or Boozy?</Text>
        <CheckBox
          title="Balanced"
          checked={balanced}
          onPress={() => {
            setBoozy(!true);
            setBalanced(true);
          }}
        />
        <CheckBox
          title="Boozy"
          checked={boozy}
          onPress={() => {
            setBoozy(true);
            setBalanced(!true);
          }}
        />
      </View>
    );
  };

  const TestGin = () => {
    if (gin === true) {
      return (
        <View>
          <Gin />
          <BalNBoozy />
          <GinSelector />
        </View>
      );
    }
  };
  const TestWhiskey = () => {
    if (whiskey === true) {
      return (
        <View>
          <Whiskey />
          <BalNBoozy />
          <WhiskeySelector />
        </View>
      );
    }
  };

  const resetForm = () => {
    setGin(false);
    setWhiskey(false);
    setBalanced(false);
    setBoozy(false);
  };
  return (
    <ScrollView>
      <Text>Choose Your Base</Text>
      <CheckBox
        title="Gin"
        checked={gin}
        onPress={() => {
          setGin(true);
          setWhiskey(!true);
        }}
      />
      <CheckBox
        title="Whiskey"
        checked={whiskey}
        onPress={() => {
          setWhiskey(true);
          setGin(!true);
        }}
      />
      <TestGin />
      <TestWhiskey />
      <Button title="reset" onPress={() => resetForm()} />
    </ScrollView>
  );
};
export default SelectScreen;

// if statement with a set state source of truth, return true, slowly work through little by little for each switch boolean condition, filter for true
