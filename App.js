import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Main from "./screens/MainComponent";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f95738",
    background: "#faf0ca",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Main />
    </NavigationContainer>
  );
}
