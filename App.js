import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Main from "./screens/MainComponent";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "#ffe6a7",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Main />
    </NavigationContainer>
  );
}
