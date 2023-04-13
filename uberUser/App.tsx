import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation";

import { Amplify } from "aws-amplify";
import {} from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent backgroundColor="#ffffff20" />
      <RootNavigator />
    </NavigationContainer>
  );
}
