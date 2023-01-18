import Constants from "expo-constants";
import { View, Platform } from "react-native";
import BarInfoScreen from "./BarInfoScreen";
import DirectoryScreen from "./DirectoryScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import HomeScreen from "./HomeScreen";
import CountryScreen from "./CountryScreen";
import UsaScreen from "./UsaScreen";
import SpainScreen from "./SpainScreen";
import FranceScreen from "./FranceScreen";
import RandomScreen from "./RandomScreen";

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
const UsaNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="U.S.A"
        component={UsaScreen}
        options={{ title: "U.S.A" }}
      />
    </Stack.Navigator>
  );
};
const SpainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Spain"
        component={SpainScreen}
        options={{ title: "Spain" }}
      />
    </Stack.Navigator>
  );
};
const FranceNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="France"
        component={FranceScreen}
        options={{ title: "France" }}
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
const CountryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Country"
        component={CountryScreen}
        options={{ title: "Country" }}
      />
      <Stack.Screen
        name="U.S.A"
        component={UsaScreen}
        options={{ title: "U.S.A" }}
      />
      <Stack.Screen
        name="Spain"
        component={SpainScreen}
        options={{ title: "Spain" }}
      />
      <Stack.Screen
        name="France"
        component={FranceScreen}
        options={{ title: "France" }}
      />
    </Stack.Navigator>
  );
};
const RandomNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Random"
        component={RandomScreen}
        options={{ title: "Random" }}
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
        drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter((routeName) => {
                routeName !== "U.S.A" &&
                  routeName !== "Spain" &&
                  routeName !== "France";
              }),
              routes: props.state.routes.filter(
                (route) =>
                  route.name !== "U.S.A" &&
                  route.name !== "Spain" &&
                  route.name !== "France"
              ),
            },
          };
          return (
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}
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
          name="Find Your City"
          component={CountryNavigator}
          options={{ title: "Find Your City" }}
        />
        <Drawer.Screen
          name="Bartender's Choice"
          component={RandomNavigator}
          options={{ title: "Bartender's Choice" }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{ title: "Contact" }}
        />
        <Drawer.Screen name="U.S.A" component={UsaNavigator} />
        <Drawer.Screen name="Spain" component={SpainNavigator} />
        <Drawer.Screen name="France" component={FranceNavigator} />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;
