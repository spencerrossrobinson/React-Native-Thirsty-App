import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Flatlist,
  Touchable,
} from "react-native";
import {
  Switch,
  CheckBox,
  Button,
  ListItem,
  Card,
  Avatar,
  Icon,
} from "react-native-elements";
import { useState } from "react";
import { COCKTAIL } from "../shared/cocktail";
import * as Animatable from "react-native-animatable";
import FavoriteScreen from "./FavoriteScreen";

const SelectScreen = ({ navigation }) => {
  //gin
  const filterGin = COCKTAIL.filter((value) => value.type === "gin");
  const filterGinBalanced = COCKTAIL.filter(
    (value) => value.taste === "balanced" && value.type === "gin"
  );
  const filterGinBoozy = COCKTAIL.filter(
    (value) => value.taste === "boozy" && value.type === "gin"
  );
  //whiskey
  const filterWhiskey = COCKTAIL.filter((value) => value.type === "whiskey");
  const filterWhiskeyBalanced = COCKTAIL.filter(
    (value) => value.taste === "balanced" && value.type === "whiskey"
  );
  const filterWhiskeyBoozy = COCKTAIL.filter(
    (value) => value.taste === "boozy" && value.type === "whiskey"
  );
  //rum
  const filterRum = COCKTAIL.filter((value) => value.type === "rum");
  const filterRumBalanced = COCKTAIL.filter(
    (value) => value.taste === "balanced" && value.type === "rum"
  );
  const filterRumBoozy = COCKTAIL.filter(
    (value) => value.taste === "boozy" && value.type === "rum"
  );
  //tequila
  const filterTequila = COCKTAIL.filter((value) => value.type === "tequila");
  const filterTequilaBalanced = COCKTAIL.filter(
    (value) => value.taste === "balanced" && value.type === "tequila"
  );
  const filterTequilaBoozy = COCKTAIL.filter(
    (value) => value.taste === "boozy" && value.type === "tequila"
  );

  const [gin, setGin] = useState(false);
  const [whiskey, setWhiskey] = useState(false);
  const [rum, setRum] = useState(false);
  const [tequila, setTequila] = useState(false);
  const [balanced, setBalanced] = useState(false);
  const [boozy, setBoozy] = useState(false);
  const [FAVORITE, setFavorites] = useState([]);

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
  const Rum = () => {
    return (
      <Animatable.View animation="fadeInDownBig" duration={1000} delay={500}>
        <Card>
          <Card.Title style={styles.title}>Rum Cocktail Index</Card.Title>
          <Card.Divider />
          {filterRum.map((value) => {
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
  const Tequila = () => {
    return (
      <Animatable.View animation="fadeInDownBig" duration={1000} delay={500}>
        <Card>
          <Card.Title style={styles.title}>Tequila Cocktail Index</Card.Title>
          <Card.Divider />
          {filterTequila.map((value) => {
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
  const WhiskeySelector = ({ FAVORITE, setFavorites }) => {
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
  };

  const GinSelector = ({ FAVORITE, setFavorites }) => {
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
  };
  const RumSelector = ({ FAVORITE, setFavorites }) => {
    if (rum === true && balanced === true) {
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
            {filterRumBalanced.map((value) => {
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
    if (rum === true && boozy === true) {
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
            {filterRumBoozy.map((value) => {
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
  };
  const TequilaSelector = ({ FAVORITE, setFavorites }) => {
    if (tequila === true && balanced === true) {
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
            {filterTequilaBalanced.map((value) => {
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </Card>
        </Animatable.View>
      );
    }
    if (tequila === true && boozy === true) {
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
            {filterTequilaBoozy.map((value) => {
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setFavorites([...FAVORITE, value])}
                  >
                    <Text style={styles.text}>Add as a Favorite</Text>
                  </TouchableOpacity>
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
          <GinSelector FAVORITE={FAVORITE} setFavorites={setFavorites} />
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
          <WhiskeySelector FAVORITE={FAVORITE} setFavorites={setFavorites} />
          <Whiskey />
        </View>
      );
    }
  };
  const TestRum = () => {
    if (rum === true) {
      return (
        <View>
          <BalNBoozy />
          <RumSelector FAVORITE={FAVORITE} setFavorites={setFavorites} />
          <Rum />
        </View>
      );
    }
  };
  const TestTequila = () => {
    if (tequila === true) {
      return (
        <View>
          <BalNBoozy />
          <TequilaSelector FAVORITE={FAVORITE} setFavorites={setFavorites} />
          <Tequila />
        </View>
      );
    }
  };

  const resetForm = () => {
    setGin(false);
    setWhiskey(false);
    setRum(false);
    setTequila(false);
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
          setRum(!true);
          setTequila(!true);
        }}
      />
      <CheckBox
        center
        title="Whiskey"
        checked={whiskey}
        onPress={() => {
          setWhiskey(true);
          setGin(!true);
          setRum(!true);
          setTequila(!true);
        }}
      />
      <CheckBox
        center
        title="Rum"
        checked={rum}
        onPress={() => {
          setWhiskey(!true);
          setGin(!true);
          setRum(true);
          setTequila(!true);
        }}
      />
      <CheckBox
        center
        title="Tequila"
        checked={tequila}
        onPress={() => {
          setWhiskey(!true);
          setGin(!true);
          setRum(!true);
          setTequila(true);
        }}
      />
      <TestGin />
      <TestWhiskey />
      <TestTequila />
      <TestRum />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Bar Directory")}
      >
        <Text>Find Me a Bar that Serves This</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Saved Favorites</Text>
      <FavoriteScreen FAVORITE={FAVORITE} />
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
