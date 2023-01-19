import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Main from "./screens/MainComponent";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#cc5803",
    background: "#ffecd1",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Main />
    </NavigationContainer>
  );
}
