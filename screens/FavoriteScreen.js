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

const FavoriteScreen = ({ FAVORITE }) => {
  return (
    <ScrollView>
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
        {FAVORITE.map((value) => {
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
export default FavoriteScreen;
