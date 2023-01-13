import RenderBar from "../features/bars/RenderBar";

const BarInfoScreen = ({ route }) => {
  const { bar } = route.params;
  return <RenderBar bar={bar} />;
};

export default BarInfoScreen;
