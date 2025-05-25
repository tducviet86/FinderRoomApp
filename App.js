import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabBar from "./src/components/tab-bar/tab-bar.component";
import Home from "./src/screens/Home/home.component";
import Map from "./src/screens/Maps/map.style";
import Profile from "./src/screens/Profile/profile.component";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
//

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
// SplashScreen.preventAutoHideAsync();
//

const MenuStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{ tabBarLabel: "Home", icon: "home-outline" }}
      />
      <BottomTab.Screen
        name="maps"
        component={Map}
        options={{ tabBarLabel: "Maps", icon: "map-outline" }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{ tabBarLabel: "Profile", icon: "settings-outline" }}
      />
    </BottomTab.Navigator>
  );
};
const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MenuStack" component={MenuStack} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
