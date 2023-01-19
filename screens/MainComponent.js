import Constants from "expo-constants";
import { View, Platform, Image, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
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
import logoImg from "../assets/images/logo.webp";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#cc5803" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => (
            <Icon
              name="bars"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
        options={({ navigation }) => ({
          title: "About",
          headerLeft: () => (
            <Icon
              name="bars"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
        options={({ navigation }) => ({
          title: "Contact",
          headerLeft: () => (
            <Icon
              name="bars"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
        options={({ navigation }) => ({
          title: "Find Your City",
          headerLeft: () => (
            <Icon
              name="bars"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
        options={({ navigation }) => ({
          title: "Bartender's Choice",
          headerLeft: () => (
            <Icon
              name="bars"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
        options={({ navigation }) => ({
          title: "Bar Directory",
          headerLeft: () => (
            <Icon
              name="bars"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="BarInfo"
        component={BarInfoScreen}
        options={({ route }) => ({ title: route.params.bar.name })}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <View style={{ flex: 1 }}>
        <Image source={logoImg} style={styles.drawerImage} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.drawerHeaderText}>Thirsty.</Text>
      </View>
    </View>
    <DrawerItemList {...props} labelStyle={{ fontWeight: "bold" }} />
  </DrawerContentScrollView>
);

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
        drawerStyle={{ backgroundColor: "#ffc971" }}
        drawerContent={CustomDrawerContent}
        // Invisible Drawer Screen Props no longer needed but saving just in Case
        // drawerContent={(props) => {
        //   const filteredProps = {
        //     ...props,
        //     state: {
        //       ...props.state,
        //       routeNames: props.state.routeNames.filter((routeName) => {
        //         routeName !== "U.S.A" &&
        //           routeName !== "Spain" &&
        //           routeName !== "France";
        //       }),
        //       routes: props.state.routes.filter(
        //         (route) =>
        //           route.name !== "U.S.A" &&
        //           route.name !== "Spain" &&
        //           route.name !== "France"
        //       ),
        //     },
        //   };
        //   return (
        //     <DrawerContentScrollView {...filteredProps}>
        //       <DrawerItemList {...filteredProps} />
        //     </DrawerContentScrollView>
        //   );
        // }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <Icon
                name="home"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutNavigator}
          options={{
            title: "About",
            drawerIcon: ({ color }) => (
              <Icon
                name="info"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Bar Directory"
          component={DirectoryNavigator}
          options={{
            title: "Bar Directory",
            drawerIcon: ({ color }) => (
              <Icon
                name="globe"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Find Your City"
          component={CountryNavigator}
          options={{
            title: "Find Your City",
            drawerIcon: ({ color }) => (
              <Icon
                name="plane"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Bartender's Choice"
          component={RandomNavigator}
          options={{
            title: "Bartender's Choice",
            drawerIcon: ({ color }) => (
              <Icon
                name="glass"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{
            title: "Contact",
            drawerIcon: ({ color }) => (
              <Icon
                name="envelope-square"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        {/* Invisible Drawer Screen no longer needed but saving just in case */}
        {/* <Drawer.Screen name="U.S.A" component={UsaNavigator} />
        <Drawer.Screen name="Spain" component={SpainNavigator} />
        <Drawer.Screen name="France" component={FranceNavigator} /> */}
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
  drawerHeader: {
    backgroundColor: "#cc5803",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerImage: {
    margin: 30,
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Main;
