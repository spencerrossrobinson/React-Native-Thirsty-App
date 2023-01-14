import Constants from "expo-constants";
import { View, Platform } from "react-native";
import BarInfoScreen from "./BarInfoScreen";
import DirectoryScreen from "./DirectoryScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#f95738" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Thirsty." }}
      />
    </Stack.Navigator>
  );
};
const AboutNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About" }}
      />
    </Stack.Navigator>
  );
};
const ContactNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: "Contact" }}
      />
    </Stack.Navigator>
  );
};

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Directory" screenOptions={screenOptions}>
      <Stack.Screen
        name="Bar Directory"
        component={DirectoryScreen}
        options={{ title: "Bar Directory" }}
      />
      <Stack.Screen
        name="BarInfo"
        component={BarInfoScreen}
        options={({ route }) => ({ title: route.params.bar.name })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: "#f4d35e" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="About"
          component={AboutNavigator}
          options={{ title: "About" }}
        />
        <Drawer.Screen
          name="Bar Directory"
          component={DirectoryNavigator}
          options={{ title: "Bar Directory" }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{ title: "Contact" }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;
