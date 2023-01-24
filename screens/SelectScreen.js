import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Flatlist,
} from "react-native";
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
import * as Animatable from "react-native-animatable";

const SelectScreen = ({ navigation }) => {
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
      <Animatable.View animation="fadeInDownBig" duration={1000} delay={500}>
        <Card>
          <Card.Title style={styles.title}>Gin Cocktail Index</Card.Title>
          <Card.Divider />
          {filterGin.map((value) => {
            return (
              <ListItem key={value.id}>
                <Avatar size="xlarge" rounded source={value.img} />
                <ListItem.Content>
                  <ListItem.Title style={styles.text}>
                    {value.name}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </Card>
      </Animatable.View>
    );
  };
  const Whiskey = () => {
    return (
      <Animatable.View animation="fadeInDownBig" duration={1000} delay={500}>
        <Card>
          <Card.Title style={styles.title}>Whiskey Cocktail Index</Card.Title>
          <Card.Divider />
          {filterWhiskey.map((value) => {
            return (
              <ListItem key={value.id}>
                <Avatar size="xlarge" rounded source={value.img} />
                <ListItem.Content>
                  <ListItem.Title style={styles.text}>
                    {value.name}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </Card>
      </Animatable.View>
    );
  };
  const WhiskeySelector = () => {
    if (whiskey === true && balanced === true) {
      return (
        <Animatable.View animation="fadeInRightBig" duration={1000} delay={500}>
          <Card
            containerStyle={{
              padding: 0,
              borderRadius: 20,
              margin: 10,
              backgroundColor: "#e2711d",
              borderColor: "white",
              borderWidth: 5,
            }}
          >
            {filterWhiskeyBalanced.map((value) => {
              return (
                <View
                  key={value.id}
                  style={{
                    margin: 20,
                    backgroundColor: "#ffb627",
                    borderRadius: 20,
                    borderColor: "white",
                    borderWidth: 5,
                  }}
                >
                  <Card.Image
                    source={value.img}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: 50,
                        }}
                      >
                        {value.name}
                      </Text>
                    </View>
                  </Card.Image>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Preperation: {value.prep}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Served: {value.style}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 10,
                    }}
                  >
                    Recipe: {value.recipe}
                  </Text>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
    if (whiskey === true && boozy === true) {
      return (
        <Animatable.View animation="fadeInRightBig" duration={1000} delay={500}>
          <Card
            containerStyle={{
              padding: 0,
              borderRadius: 20,
              margin: 10,
              backgroundColor: "#e2711d",
              borderColor: "white",
              borderWidth: 5,
            }}
          >
            {filterWhiskeyBoozy.map((value) => {
              return (
                <View
                  key={value.id}
                  style={{
                    margin: 20,
                    backgroundColor: "#ffb627",
                    borderRadius: 20,
                    borderColor: "white",
                    borderWidth: 5,
                  }}
                >
                  <Card.Image
                    source={value.img}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: 50,
                        }}
                      >
                        {value.name}
                      </Text>
                    </View>
                  </Card.Image>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Preparation: {value.prep}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Served: {value.style}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 10,
                    }}
                  >
                    Recipe: {value.recipe}
                  </Text>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
  };

  const GinSelector = () => {
    if (gin === true && balanced === true) {
      return (
        <Animatable.View animation="fadeInRightBig" duration={1000} delay={500}>
          <Card
            containerStyle={{
              padding: 0,
              borderRadius: 20,
              margin: 10,
              backgroundColor: "#e2711d",
              borderColor: "white",
              borderWidth: 5,
            }}
          >
            {filterGinBalanced.map((value) => {
              return (
                <View
                  key={value.id}
                  style={{
                    margin: 20,
                    backgroundColor: "#ffb627",
                    borderRadius: 20,
                    borderColor: "white",
                    borderWidth: 5,
                  }}
                >
                  <Card.Image
                    source={value.img}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: 50,
                        }}
                      >
                        {value.name}
                      </Text>
                    </View>
                  </Card.Image>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Preparation: {value.prep}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Served: {value.style}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 10,
                    }}
                  >
                    Recipe: {value.recipe}
                  </Text>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
    if (gin === true && boozy === true) {
      return (
        <Animatable.View animation="fadeInRightBig" duration={1000} delay={500}>
          <Card
            containerStyle={{
              padding: 0,
              borderRadius: 20,
              margin: 10,
              backgroundColor: "#e2711d",
              borderColor: "white",
              borderWidth: 5,
            }}
          >
            {filterGinBoozy.map((value) => {
              return (
                <View
                  key={value.id}
                  style={{
                    margin: 20,
                    backgroundColor: "#ffb627",
                    borderRadius: 20,
                    borderColor: "white",
                    borderWidth: 5,
                  }}
                >
                  <Card.Image
                    source={value.img}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: 50,
                        }}
                      >
                        {value.name}
                      </Text>
                    </View>
                  </Card.Image>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Preparation: {value.prep}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    Served: {value.style}
                  </Text>
                  <Text
                    style={{
                      margin: 5,
                      textAlign: "center",
                      color: "white",
                      fontSize: 10,
                    }}
                  >
                    Recipe: {value.recipe}
                  </Text>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
  };

  const BalNBoozy = () => {
    return (
      <Animatable.View animation="fadeInRightBig" duration={1000} delay={500}>
        <Text style={styles.header}>Balanced or Boozy?</Text>
        <CheckBox
          center
          title="Balanced"
          checked={balanced}
          onPress={() => {
            setBoozy(!true);
            setBalanced(true);
          }}
        />
        <CheckBox
          center
          title="Boozy"
          checked={boozy}
          onPress={() => {
            setBoozy(true);
            setBalanced(!true);
          }}
        />
      </Animatable.View>
    );
  };

  const TestGin = () => {
    if (gin === true) {
      return (
        <View>
          <BalNBoozy />
          <GinSelector />
          <Gin />
        </View>
      );
    }
  };
  const TestWhiskey = () => {
    if (whiskey === true) {
      return (
        <View>
          <BalNBoozy />
          <WhiskeySelector />
          <Whiskey />
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
      <Text style={styles.header}>Choose Your Base</Text>
      <CheckBox
        center
        title="Gin"
        checked={gin}
        onPress={() => {
          setGin(true);
          setWhiskey(!true);
        }}
      />
      <CheckBox
        center
        title="Whiskey"
        checked={whiskey}
        onPress={() => {
          setWhiskey(true);
          setGin(!true);
        }}
      />
      <TestGin />
      <TestWhiskey />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Bar Directory")}
      >
        <Text>Find Me a Bar that Serves This</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => resetForm()} style={styles.header}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 26,
          }}
        >
          Reset Your Choices
        </Text>
      </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "#ff9505",
    padding: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    borderRadius: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default SelectScreen;

// if statement with a set state source of truth, return true, slowly work through little by little for each switch boolean condition, filter for true
